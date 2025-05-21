import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Water } from 'three/examples/jsm/objects/Water.js';
import { Sky } from 'three/examples/jsm/objects/Sky.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

export default function OceanScene() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Refs for persistent objects
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const shipRef = useRef<THREE.Group | null>(null);
  const birdOfPreyRef = useRef<THREE.Group | null>(null);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Initialize scene
    const container = mountRef.current;
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.set(8, 5, 8);

    // Renderer with performance optimizations
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
      logarithmicDepthBuffer: true
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Cap pixel ratio
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;

    // Type-safe alternative to removed properties
    if ('outputColorSpace' in renderer) {
      (renderer as any).outputColorSpace = THREE.SRGBColorSpace;
    }

    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.maxPolarAngle = Math.PI * 0.495;
    controls.target.set(0, 2, 0);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controlsRef.current = controls;

    // Optimized Water
    const waterGeometry = new THREE.PlaneGeometry(100, 100, 32, 32); // Reduced segments
    const water = new Water(waterGeometry, {
      textureWidth: 256,  // Reduced resolution
      textureHeight: 256,
      waterNormals: new THREE.TextureLoader().load('/src/assets/waternormals.jpg', (texture) => {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      }),
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 2.5,  // Reduced distortion
      fog: false,  // Disabled fog for performance
    });
    water.rotation.x = -Math.PI / 2;
    scene.add(water);

    // Optimized Sky
    const sky = new Sky();
    sky.scale.setScalar(100);
    scene.add(sky);

    const skyUniforms = sky.material.uniforms;
    skyUniforms['turbidity'].value = 8;  // Reduced
    skyUniforms['rayleigh'].value = 1.5; // Reduced
    skyUniforms['mieCoefficient'].value = 0.003;
    skyUniforms['mieDirectionalG'].value = 0.7;

    // Sun setup
    const sun = new THREE.Vector3();
    const updateSun = () => {
      const phi = THREE.MathUtils.degToRad(90 - 2);
      const theta = THREE.MathUtils.degToRad(180);
      sun.setFromSphericalCoords(1, phi, theta);
      skyUniforms['sunPosition'].value.copy(sun);
      water.material.uniforms['sunDirection'].value.copy(sun).normalize();
    };
    updateSun();

    // Optimized Lighting
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.copy(sun);
    directionalLight.castShadow = false; // Shadows disabled for performance
    scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    // Shared material for ships
    const klingonMaterial = new THREE.MeshStandardMaterial({
      color: 0x448844,
      metalness: 0.6,
      roughness: 0.4,
      emissive: 0x113311,
      emissiveIntensity: 0.3
    });

    const shipMaterial = new THREE.MeshStandardMaterial({
      color: 0x888888,
      metalness: 0.3,
      roughness: 0.7
    });

    // Combined loading manager
    const loadingManager = new THREE.LoadingManager(
      () => setLoading(false),
      (_, loaded, total) => setProgress((loaded / total) * 100)
    );

    const objLoader = new OBJLoader(loadingManager);

    // Load Bird of Prey
    objLoader.load('/src/assets/objects/BirdOfPrey_ENT.obj', (object) => {
      object.position.y = 3.5;
      object.rotation.y = Math.PI / 35;

      const box = new THREE.Box3().setFromObject(object);
      const size = box.getSize(new THREE.Vector3()).length();
      const scale = 8.0 / size;
      object.scale.set(scale, scale, scale);

      object.traverse(child => {
        if (child instanceof THREE.Mesh) {
          child.material = klingonMaterial;
          child.frustumCulled = true; // Enable frustum culling
        }
      });

      birdOfPreyRef.current = object;
      scene.add(object);
    });

    // Load Secondary Ship
    objLoader.load('/src/assets/objects/untitled1.obj', (ship) => {
      const shipBox = new THREE.Box3().setFromObject(ship);
      const shipSize = shipBox.getSize(new THREE.Vector3());

      // Proper water positioning - half submerged
      ship.position.set(0, -shipSize.y * 0.3, -10);
      ship.rotation.y = Math.PI / 10;

      const targetLength = 4;
      const scale = targetLength / shipSize.z;
      ship.scale.set(scale, scale, scale);

      ship.traverse(child => {
        if (child instanceof THREE.Mesh) {
          child.material = shipMaterial;
          child.frustumCulled = true;
        }
      });

      shipRef.current = ship;
      scene.add(ship);
    });

    // Optimized Animation Loop
    const clock = new THREE.Clock();
    const animate = () => {
      animationFrameId.current = requestAnimationFrame(animate);

      const delta = Math.min(clock.getDelta(), 0.1);
      const elapsedTime = clock.getElapsedTime();

      // Only update water if time has progressed
      water.material.uniforms.time.value += delta * 0.5; // Slower water animation

      // Subtle ship bobbing
      if (shipRef.current) {
        shipRef.current.position.y = -shipRef.current.scale.y * 0.3 + Math.sin(elapsedTime) * 0.1;
        shipRef.current.rotation.z = Math.sin(elapsedTime * 0.7) * 0.03;
      }

      // Always render (removed controls.needsUpdate check)
      controls.update();
      renderer.render(scene, camera);
    };

    // Start animation
    animate();

    // Responsive handling
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('resize', handleResize);

      // Proper disposal
      renderer.dispose();
      scene.traverse(obj => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry?.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach(m => m.dispose());
          } else {
            obj.material?.dispose();
          }
        }
      });

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div ref={mountRef} style={{ width: '100%', height: '100%' }}>
      {loading && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          backgroundColor: 'rgba(0,0,0,0.7)',
          padding: '20px',
          borderRadius: '5px'
        }}>
          <div>Loading model... {Math.round(progress)}%</div>
        </div>
      )}
    </div>
  );
}