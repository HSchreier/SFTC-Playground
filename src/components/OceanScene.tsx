// components/OceanScene.tsx
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Water } from 'three/examples/jsm/objects/Water.js';
import { Sky } from 'three/examples/jsm/objects/Sky.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { AnimationManager } from '../managers/AnimationManager';

export default function OceanScene() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const shipRef = useRef<THREE.Group | null>(null);
  const birdOfPreyRef = useRef<THREE.Group | null>(null);
  const animationManagerRef = useRef<AnimationManager | null>(null);

  const assetPaths = {
    waterNormal: new URL('../assets/textures/waternormals.jpg', import.meta.url).href,
    birdOfPrey: new URL('../assets/objects/BirdOfPrey_ENT.obj', import.meta.url).href,
    shipModel: new URL('../assets/objects/untitled1.obj', import.meta.url).href
  };

  const materials = {
    klingon: new THREE.MeshStandardMaterial({
      color: 0x448844,
      metalness: 0.6,
      roughness: 0.4,
      emissive: 0x113311,
      emissiveIntensity: 0.3,
      transparent: true,
      opacity: 0,
    }),
    ship: new THREE.MeshStandardMaterial({
      color: 0x888888,
      metalness: 0.3,
      roughness: 0.7
    })
  };

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.set(-7.43, 1.24, 4.61);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const stats = new Stats();
    container.appendChild(stats.dom);

    const water = new Water(new THREE.PlaneGeometry(100, 100), {
      textureWidth: 256,
      textureHeight: 256,
      waterNormals: new THREE.TextureLoader().load(assetPaths.waterNormal, t => {
        t.wrapS = t.wrapT = THREE.RepeatWrapping;
      }),
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 2.5,
    });
    water.rotation.x = -Math.PI / 2;
    scene.add(water);

    const sky = new Sky();
    sky.scale.setScalar(100);
    scene.add(sky);

    const sun = new THREE.Vector3();
    const sunHelper = new THREE.Mesh(
      new THREE.SphereGeometry(0.1, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0xffff00 })
    );
    sunHelper.position.copy(sun);
    scene.add(sunHelper);

    sun.setFromSphericalCoords(1, THREE.MathUtils.degToRad(88), THREE.MathUtils.degToRad(180));
    (sky.material.uniforms as any).sunPosition.value.copy(sun);
    (water.material.uniforms as any).sunDirection.value.copy(sun).normalize();
    scene.add(new THREE.AmbientLight(0x404040, 0.5));

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 2.5, 0);
    controls.enableDamping = true;
    controlsRef.current = controls;

    const manager = new AnimationManager();
    animationManagerRef.current = manager;

    const objLoader = new OBJLoader(new THREE.LoadingManager(
      () => {
        setLoading(false);
        // All models loaded, start cinematic
        if (shipRef.current) manager.setShip(shipRef.current);
        if (birdOfPreyRef.current) manager.setBirdOfPrey(birdOfPreyRef.current);
        manager.playCloakReveal();
      },
      (_, loaded, total) => setProgress((loaded / total) * 100)
    ));

    const loadModel = (
      url: string, material: THREE.Material, position: THREE.Vector3,
      rotation: number, scaleFactor: number, ref: React.MutableRefObject<THREE.Group | null>
    ) => {
      objLoader.load(url, (obj) => {
        obj.position.copy(position);
        obj.rotation.y = rotation;
        const box = new THREE.Box3().setFromObject(obj);
        const size = box.getSize(new THREE.Vector3());
        const scale = scaleFactor / size.z;
        obj.scale.set(scale, scale, scale);
        obj.traverse((child: THREE.Object3D) => {
          if (child instanceof THREE.Mesh) {
            child.material = material;
          }
        });
        ref.current = obj;
        scene.add(obj);
      });
    };

    const targetPosition = new THREE.Vector3(0, -0.5, -10);
    const startPosition = targetPosition.clone().add(new THREE.Vector3(0, 0, -20));

    loadModel(assetPaths.shipModel, materials.ship, startPosition, Math.PI / 10, 4, shipRef);
    loadModel(assetPaths.birdOfPrey, materials.klingon, new THREE.Vector3(0, 3.5, 0), Math.PI / 35, 8, birdOfPreyRef);

    manager.add((delta, elapsed) => {
      stats.begin();
      (water.material.uniforms as any).time.value += delta * 0.25;
      if (shipRef.current) {
        shipRef.current.position.y = -0.5 + Math.sin(elapsed) * 0.1;
        shipRef.current.rotation.z = Math.sin(elapsed * 0.7) * 0.03;
      }
      controls.update();
      renderer.render(scene, camera);
      stats.end();
    });
    manager.start();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      manager.dispose();
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
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
