import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Water } from 'three/examples/jsm/objects/Water.js';
import { Sky } from 'three/examples/jsm/objects/Sky.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

// Type-safe initialization return type
type SceneInitResult = {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
} | undefined;

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

  // Asset paths with proper typing
  const assetPaths = {
    waterNormal: new URL('../assets/textures/waternormals.jpg', import.meta.url).href,
    birdOfPrey: new URL('../assets/objects/BirdOfPrey_ENT.obj', import.meta.url).href,
    shipModel: new URL('../assets/objects/untitled1.obj', import.meta.url).href
  };

  // Materials with type annotations
  const materials = {
    klingon: new THREE.MeshStandardMaterial({
      color: 0x448844,
      metalness: 0.6,
      roughness: 0.4,
      emissive: 0x113311,
      emissiveIntensity: 0.3
    }),
    ship: new THREE.MeshStandardMaterial({
      color: 0x888888,
      metalness: 0.3,
      roughness: 0.7
    })
  };

  const initScene = (): SceneInitResult => {
    if (!mountRef.current) return undefined;

    const container = mountRef.current;
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.set(8, 5, 8);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
      logarithmicDepthBuffer: true
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;

    // Type-safe color space handling
    if ('outputColorSpace' in renderer) {
      (renderer as any).outputColorSpace = 'srgb';
    }

    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    return { scene, camera, renderer };
  };

  const initWater = (scene: THREE.Scene): Water => {
    const waterGeometry = new THREE.PlaneGeometry(100, 100, 32, 32);
    const water = new Water(waterGeometry, {
      textureWidth: 256,
      textureHeight: 256,
      waterNormals: new THREE.TextureLoader().load(assetPaths.waterNormal, (texture) => {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      }),
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 2.5,
      fog: false,
    });
    water.rotation.x = -Math.PI / 2;
    scene.add(water);
    return water;
  };

  const initSky = (scene: THREE.Scene): Sky => {
    const sky = new Sky();
    sky.scale.setScalar(100);
    scene.add(sky);
    return sky;
  };

  const initLights = (scene: THREE.Scene, sun: THREE.Vector3): void => {
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.copy(sun);
    scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);
  };

  const loadModel = (
    loader: OBJLoader,
    url: string,
    material: THREE.Material,
    position: THREE.Vector3,
    rotation: number,
    scaleFactor: number,
    onLoaded?: (object: THREE.Group) => void
  ): void => {
    loader.load(url, (object) => {
      object.position.copy(position);
      object.rotation.y = rotation;

      const box = new THREE.Box3().setFromObject(object);
      const size = box.getSize(new THREE.Vector3());
      const scale = scaleFactor / size.z;
      object.scale.set(scale, scale, scale);

      object.traverse((child: THREE.Object3D) => {
        if (child instanceof THREE.Mesh) {
          child.material = material;
          child.frustumCulled = true;
        }
      });

      onLoaded?.(object);
    });
  };

  useEffect(() => {
    const initResult = initScene();
    if (!initResult) return;

    const { scene, camera, renderer } = initResult;
    const water = initWater(scene);
    const sky = initSky(scene);

    // Sun setup
    const sun = new THREE.Vector3();
    const updateSun = () => {
      const phi = THREE.MathUtils.degToRad(90 - 2);
      const theta = THREE.MathUtils.degToRad(180);
      sun.setFromSphericalCoords(1, phi, theta);
      (sky.material.uniforms as any)['sunPosition'].value.copy(sun);
      (water.material.uniforms as any)['sunDirection'].value.copy(sun).normalize();
    };
    updateSun();

    initLights(scene, sun);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.maxPolarAngle = Math.PI * 0.495;
    controls.target.set(0, 2, 0);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controlsRef.current = controls;

    // Loading manager
    const loadingManager = new THREE.LoadingManager(
      () => setLoading(false),
      (_, loaded, total) => setProgress((loaded / total) * 100)
    );

    const objLoader = new OBJLoader(loadingManager);

    // Load models
    loadModel(
      objLoader,
      assetPaths.birdOfPrey,
      materials.klingon,
      new THREE.Vector3(0, 3.5, 0),
      Math.PI / 35,
      8,
      (object) => {
        birdOfPreyRef.current = object;
        scene.add(object);
      }
    );

    loadModel(
      objLoader,
      assetPaths.shipModel,
      materials.ship,
      new THREE.Vector3(0, -0.5, -10),
      Math.PI / 10,
      4,
      (object) => {
        shipRef.current = object;
        scene.add(object);
      }
    );

    // Animation loop
    const clock = new THREE.Clock();
    const animate = () => {
      animationFrameId.current = requestAnimationFrame(animate);
      const delta = Math.min(clock.getDelta(), 0.1);
      const elapsedTime = clock.getElapsedTime();

      water.material.uniforms.time.value += delta * 0.5;

      if (shipRef.current) {
        shipRef.current.position.y = -0.5 + Math.sin(elapsedTime) * 0.1;
        shipRef.current.rotation.z = Math.sin(elapsedTime * 0.7) * 0.03;
      }

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.removeEventListener('resize', handleResize);

      renderer.dispose();
      scene.traverse((obj: THREE.Object3D) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry?.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach(m => m.dispose());
          } else {
            obj.material?.dispose();
          }
        }
      });

      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
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