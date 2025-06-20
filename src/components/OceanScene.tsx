// components/OceanScene.tsx
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Water } from 'three/examples/jsm/objects/Water.js';
import { Sky } from 'three/examples/jsm/objects/Sky.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';

// Import Minecraft font (you'll need to add this to your project)
// You can download Minecraft PE font from: https://www.dafont.com/minecraft.font
// Then add it to your public/fonts folder
const MINECRAFT_FONT_URL = 'fonts/minecraft.ttf';

export default function OceanScene() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [cameraInfo, setCameraInfo] = useState({ x: 0, y: 0, z: 0 });
  const [textOpacity, setTextOpacity] = useState(0);
  const shipRef = useRef<THREE.Group | null>(null);
  const animationRef = useRef<{
    frameId: number;
    startTime: number | null;
  }>({ frameId: 0, startTime: null });

  const CONFIG = {
    cameraPosition: new THREE.Vector3(-13.81, 1.33, 26.67),
    waterSize: 100,
    shipScale: 15,
    islandScale: 30,
    islandPosition: new THREE.Vector3(0, 3, -40),
    waterColor: 0x001e0f,
    sunPositionSpherical: [1, 88, 180],
    shipSpeed: 0.05, // Speed of the ship movement
    shipRockingSpeed: 0.002, // Speed of rocking animation
    shipRockingAmount: 0.2, // Amount of rocking motion
    shipStopDistance: 15, // Distance from camera where ship starts slowing
    shipMinSpeed: 0.001, // Minimum speed when slowing down
    textFadeInDuration: 3000, // 3 seconds fade in
  };

  const assetPaths = {
    waterNormal: new URL('../assets/textures/waternormals.jpg', import.meta.url).href,
    shipModel: new URL('../assets/objects/ship-model.obj', import.meta.url).href,
    shipTexture: new URL('../assets/textures/solar_punk_pirate_shi_0617201936_texture.png', import.meta.url).href,
    islandModel: new URL('../assets/objects/medas.obj', import.meta.url).href,
    islandTexture: new URL('../assets/textures/medas_texture.png', import.meta.url).href
  };

  const TEXT_CONTENT = [
    "Els pirates electrònics",
    "desembarquen",
    "SALA mariscal",
    "28/08/2025"
  ];

  const [shipPosition, setShipPosition] = useState({ x: 0, y: 0, z: 0 });
  const shipSpeedRef = useRef(CONFIG.shipSpeed); // Mutable speed reference

  useEffect(() => {
    // Load Minecraft font for the overlay
    const fontFace = new FontFace('Minecraft', `url(${MINECRAFT_FONT_URL})`);
    document.fonts.add(fontFace);
    fontFace.load().then(() => {
      // Font loaded, we can start fading in the text
      const startTime = Date.now();

      const fadeIn = () => {
        const elapsed = Date.now() - startTime;
        const opacity = Math.min(elapsed / CONFIG.textFadeInDuration, 1);
        setTextOpacity(opacity);

        if (opacity < 1) {
          requestAnimationFrame(fadeIn);
        }
      };

      fadeIn();
    }).catch(err => {
      console.error('Failed to load Minecraft font:', err);
      // Fallback: show text immediately
      setTextOpacity(1);
    });

    let water: Water;
    let renderer: THREE.WebGLRenderer;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let controls: OrbitControls;

    if (!mountRef.current) return;
    const container = mountRef.current;

    // THREE: Scene setup
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.copy(CONFIG.cameraPosition);
    camera.lookAt(0, 0, 0);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    (renderer as any).outputEncoding = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(0, 50, 100);
    dirLight.castShadow = true;
    scene.add(dirLight);

    // OrbitControls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0.5, 0);
    controls.update();

    // Stats
    const stats = new Stats();
    container.appendChild(stats.dom);

    // Sky
    const sky = new Sky();
    sky.scale.setScalar(100);
    scene.add(sky);

    const sun = new THREE.Vector3();
    sun.setFromSphericalCoords(
      CONFIG.sunPositionSpherical[0],
      THREE.MathUtils.degToRad(CONFIG.sunPositionSpherical[1]),
      THREE.MathUtils.degToRad(CONFIG.sunPositionSpherical[2])
    );
    (sky.material.uniforms as any).sunPosition.value.copy(sun);

    // Water
    const waterGeometry = new THREE.PlaneGeometry(CONFIG.waterSize, CONFIG.waterSize);
    water = new Water(waterGeometry, {
      textureWidth: 256,
      textureHeight: 256,
      waterNormals: new THREE.TextureLoader().load(assetPaths.waterNormal, t => {
        t.wrapS = t.wrapT = THREE.RepeatWrapping;
      }),
      sunDirection: sun.clone().normalize(),
      sunColor: 0xffffff,
      waterColor: CONFIG.waterColor,
      distortionScale: 2.5,
      fog: scene.fog !== undefined
    });
    water.rotation.x = -Math.PI / 2;
    scene.add(water);

    // Loaders
    const textureLoader = new THREE.TextureLoader();
    const loadingManager = new THREE.LoadingManager(
      () => setLoading(false),
      (_, loaded, total) => setProgress((loaded / total) * 100)
    );
    const objLoader = new OBJLoader(loadingManager);

    // Load Island
    textureLoader.load(assetPaths.islandTexture, (islandTexture) => {
      islandTexture.colorSpace = THREE.SRGBColorSpace;
      islandTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
      const islandMaterial = new THREE.MeshStandardMaterial({
        map: islandTexture,
        metalness: 0.1,
        roughness: 0.8,
      });

      objLoader.load(assetPaths.islandModel, (obj) => {
        const box = new THREE.Box3().setFromObject(obj);
        const center = box.getCenter(new THREE.Vector3());
        obj.position.sub(center);
        obj.scale.setScalar(CONFIG.islandScale);
        obj.position.copy(CONFIG.islandPosition);

        obj.traverse(child => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.material = islandMaterial;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
          }
        });

        scene.add(obj);
      });
    });

    // Load Ship
    textureLoader.load(assetPaths.shipTexture, (shipTexture) => {
      shipTexture.colorSpace = THREE.SRGBColorSpace;
      shipTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
      const shipMaterial = new THREE.MeshStandardMaterial({
        map: shipTexture,
        metalness: 0.3,
        roughness: 0.7,
      });

      objLoader.load(assetPaths.shipModel, (obj) => {
        const box = new THREE.Box3().setFromObject(obj);
        const center = box.getCenter(new THREE.Vector3());
        obj.position.sub(center);
        const scale = CONFIG.shipScale / Math.max(box.getSize(new THREE.Vector3()).length(), 1);
        obj.scale.setScalar(scale);

        const bottomY = box.min.y * scale;
        obj.position.set(0, -bottomY, 0);
        obj.rotation.y = THREE.MathUtils.degToRad(-290); // Rotate 85° clockwise

        obj.traverse(child => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.material = shipMaterial;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
          }
        });

        scene.add(obj);
        shipRef.current = obj; // Store ship reference for animation

        setShipPosition({
          x: obj.position.x,
          y: obj.position.y,
          z: obj.position.z
        });
      });
    });

    // Animation
    const animate = (timestamp: number) => {
      if (!animationRef.current.startTime) {
        animationRef.current.startTime = timestamp;
      }

      stats.update();
      controls.update();

      // Animate water
      if (water) {
        (water.material.uniforms as any).time.value += 1.0 / 60.0;
      }

      // Move ship forward
      if (shipRef.current) {
        // Calculate distance to camera's initial Z position
        const distanceToCamera = CONFIG.cameraPosition.z - shipRef.current.position.z;

        // If ship is approaching the camera's view, slow down
        if (distanceToCamera < CONFIG.shipStopDistance) {
          // Gradually reduce speed (smooth deceleration)
          shipSpeedRef.current = Math.max(
            CONFIG.shipMinSpeed,
            shipSpeedRef.current * 0.98
          );

          // Stop completely when very close
          if (distanceToCamera < 5) {
            shipSpeedRef.current = 0;
          }
        }

        // Apply movement with current speed
        shipRef.current.position.z += shipSpeedRef.current;

        // Rocking motion (reduced when slowing down)
        const rockingIntensity = shipSpeedRef.current > 0.01 ? 1 :
                               (shipSpeedRef.current / 0.01);

        const rocking = Math.sin(timestamp * CONFIG.shipRockingSpeed) * rockingIntensity;
        shipRef.current.rotation.z = rocking * 0.08;
        shipRef.current.rotation.x = Math.sin(timestamp * CONFIG.shipRockingSpeed * 0.7) * 0.03 * rockingIntensity;
        shipRef.current.position.y = -0.5 + rocking * CONFIG.shipRockingAmount;
        shipRef.current.position.y += Math.sin(timestamp * 0.0015) * 0.15 * rockingIntensity;

        // Update ship position state
        setShipPosition({
          x: shipRef.current.position.x,
          y: shipRef.current.position.y,
          z: shipRef.current.position.z
        });
      }

      renderer.render(scene, camera);

      const pos = camera.position;
      setCameraInfo({ x: pos.x, y: pos.y, z: pos.z });

      animationRef.current.frameId = requestAnimationFrame(animate);
    };

    animationRef.current.frameId = requestAnimationFrame(animate);

    // Resize handling
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationRef.current.frameId);
      renderer.dispose();
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div ref={mountRef} style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {loading && (
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'rgba(0,0,0,0.7)', padding: 20, color: 'white',
          borderRadius: 8
        }}>
          Loading... {Math.round(progress)}%
        </div>
      )}

      {/* Minecraft-style text overlay */}
      <div style={{
        position: 'absolute',
        top: '60px',
        left: '20px',
        fontFamily: 'Minecraft, monospace',
        color: '#FFFFFF',
        textShadow: '2px 2px 0 #3F3F3F',
        fontSize: '24px',
        lineHeight: '1.5',
        opacity: textOpacity,
        transition: 'opacity 0.5s ease',
        pointerEvents: 'none',
        background: 'none'
      }}>
        {TEXT_CONTENT.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>

      {/* Camera position debug info */}
      <div style={{
             position: 'absolute',
             bottom: '50px', // Moved up to make room for ship position
             left: '10px',
             backgroundColor: 'rgba(0, 0, 0, 0.6)',
             color: 'lime',
             fontFamily: 'monospace',
             padding: '8px',
             borderRadius: '4px',
             fontSize: '12px',
             zIndex: 1
           }}>
             camera.position.set(
               {cameraInfo.x.toFixed(2)},
               {cameraInfo.y.toFixed(2)},
               {cameraInfo.z.toFixed(2)}
             )
           </div>

           <div style={{
             position: 'absolute',
             bottom: '10px',
             left: '10px',
             backgroundColor: 'rgba(0, 0, 0, 0.6)',
             color: 'cyan',
             fontFamily: 'monospace',
             padding: '8px',
             borderRadius: '4px',
             fontSize: '12px',
             zIndex: 1
           }}>
             ship.position: z={shipPosition.z.toFixed(2)}, speed={shipSpeedRef.current.toFixed(4)}
           </div>
    </div>
  );
}