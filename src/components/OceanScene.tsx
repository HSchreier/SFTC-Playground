import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';
import { ThreeOceanManager } from '../lib/ThreeOceanManager';

// Font loading as before
const MINECRAFT_FONT_URL = 'fonts/minecraft.ttf';

const CONFIG = {
  cameraPosition: new THREE.Vector3(-24.00, 1.26, 34.29),
  waterSize: 100,
  shipScale: 15,
  islandScale: 30,
  islandPosition: new THREE.Vector3(0, 3, -40),
  waterColor: 0x001e0f,
  sunPositionSpherical: [1, 88, 180] as [number, number, number],
  shipSpeed: 0.05,
  shipRockingSpeed: 0.002,
  shipRockingAmount: 0.2,
  shipStopDistance: 15,
  shipMinSpeed: 0.001,
  textFadeInDuration: 3000,
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

// Detect localhost for conditional debug overlay
const isLocalhost =
  typeof window !== 'undefined' &&
  (window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1' ||
    window.location.hostname === '[::1]');

export default function OceanScene() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [textOpacity, setTextOpacity] = useState(0);
  const [shipPosition, setShipPosition] = useState({ x: 0, y: 0, z: 0 });
  const [shipSpeed, setShipSpeed] = useState(0);
  // Only initialize cameraInfo state if not on localhost
  const [cameraInfo, setCameraInfo] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    // Font load just as before
    const fontFace = new FontFace('Minecraft', `url(${MINECRAFT_FONT_URL})`);
    document.fonts.add(fontFace);
    fontFace.load().then(() => {
      const startTime = Date.now();
      const fadeIn = () => {
        const elapsed = Date.now() - startTime;
        const opacity = Math.min(elapsed / CONFIG.textFadeInDuration, 1);
        setTextOpacity(opacity);
        if (opacity < 1) requestAnimationFrame(fadeIn);
      };
      fadeIn();
    }).catch(() => setTextOpacity(1));

    // Singleton manager
    const manager = ThreeOceanManager.getInstance(CONFIG, assetPaths);
    if (mountRef.current) {
      manager.attachToDOM(mountRef.current);
    }
    manager.setShipMoveListener((pos, speed) => {
      setShipPosition(pos);
      setShipSpeed(speed);
    });
    if (!isLocalhost) {
      manager.setCameraMoveListener((pos) => {
        setCameraInfo(pos);
      });
    }

    // Cleanup
    return () => {
      manager.detachFromDOM();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={mountRef} style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
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

      {/* Camera position debug info (hidden on localhost) */}
      {!isLocalhost && (
        <div style={{
          position: 'absolute',
          bottom: '50px',
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
      )}
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
        ship.position: z={shipPosition.z.toFixed(2)}, speed={shipSpeed.toFixed(4)}
      </div>
    </div>
  );
}