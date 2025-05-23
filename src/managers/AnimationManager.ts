// managers/AnimationManager.tsx
import * as THREE from 'three';
import gsap from 'gsap';

type AnimationCallback = (delta: number, elapsedTime: number) => void;
export function playShipApproachSequence(
  ship: THREE.Group,
  birdOfPrey: THREE.Group,
  targetPosition: THREE.Vector3,
  options?: {
    approachSpeed?: number;
    cloakRevealDuration?: number;
    fullRevealOpacity?: number;
  }
) {
  const {
    approachSpeed = 1,
    cloakRevealDuration = 2,
    fullRevealOpacity = 1
  } = options || {};

  // Use those values in your animation logic, for example:
  const start = ship.position.clone();
  const distance = start.distanceTo(targetPosition);
  const duration = distance / approachSpeed;

  let elapsed = 0;
  const clock = new THREE.Clock();

  const animate = () => {
    const delta = clock.getDelta();
    elapsed += delta;

    const t = Math.min(elapsed / duration, 1);
    ship.position.lerpVectors(start, targetPosition, t);

    if (t < 1) {
      requestAnimationFrame(animate);
    } else {
      // Reveal the cloaked Bird of Prey gradually
      birdOfPrey.visible = true;
      const revealStart = performance.now();

      const reveal = (time: number) => {
        const progress = Math.min((time - revealStart) / (cloakRevealDuration * 1000), 1);
        birdOfPrey.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            (child.material as THREE.Material).opacity = progress * fullRevealOpacity;
          }
        });

        if (progress < 1) {
          requestAnimationFrame(reveal);
        }
      };
      requestAnimationFrame(reveal);
    }
  };

  requestAnimationFrame(animate);
}


  export const fadeInBirdOfPrey = (bird: THREE.Group) => {
    bird.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const material = child.material as THREE.MeshStandardMaterial;
        material.transparent = true;
        material.opacity = 0.0;

        // Fully fade in over 3s with easeInOutSine
        gsap.to(material, {
          opacity: 1.0,
          duration: 3,
          ease: 'sine.inOut',
          onComplete: () => {
            // Ensure full visibility
            material.transparent = false;
          }
        });
      }
    });
  };
export class AnimationManager {
  private clock: THREE.Clock;
  private animationFrameId: number | null = null;
  private callbacks: AnimationCallback[] = [];
  private ship: THREE.Group | null = null;
  private birdOfPrey: THREE.Group | null = null;
  private targetShipPosition = new THREE.Vector3(0, -0.5, -10);

  constructor() {
    this.clock = new THREE.Clock();
  }

  add(callback: AnimationCallback): void {
    this.callbacks.push(callback);
  }

  start(): void {
    const animate = () => {
      this.animationFrameId = requestAnimationFrame(animate);
      const delta = Math.min(this.clock.getDelta(), 0.1);
      const elapsedTime = this.clock.getElapsedTime();
      this.callbacks.forEach(cb => cb(delta, elapsedTime));
    };
    this.clock.start();
    animate();
  }

  stop(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  clear(): void {
    this.callbacks = [];
  }

  dispose(): void {
    this.stop();
    this.clear();
  }

  /**
   * Set references for animation.
   */
  setShip(ship: THREE.Group) {
    this.ship = ship;
  }

  setBirdOfPrey(bird: THREE.Group) {
    this.birdOfPrey = bird;
    this.birdOfPrey.visible = false;
  }

  /**
   * Triggers the cinematic: ship glides in, then Bird of Prey decloaks.
   */
  playCloakReveal() {
    if (!this.ship || !this.birdOfPrey) return;

    // Reset start position for the ship
    const startPosition = this.targetShipPosition.clone().add(new THREE.Vector3(0, 0, -20));
    this.ship.position.copy(startPosition);

    // Hide the bird initially
    this.birdOfPrey.visible = false;

    // Animate ship forward
    gsap.to(this.ship.position, {
      z: this.targetShipPosition.z,
      duration: 3,
      ease: 'sine.out',
      onComplete: () => {
        this.revealBirdOfPrey();
      }
    });
  }

  private revealBirdOfPrey() {
    if (!this.birdOfPrey) return;

    const mesh = this.birdOfPrey;
    mesh.visible = true;

    // Animate material opacity if transparent
    mesh.traverse((child) => {
      if (child instanceof THREE.Mesh && (child.material as THREE.Material).transparent) {
        const material = child.material as THREE.MeshStandardMaterial;
        material.opacity = 0;
        gsap.to(material, {
          opacity: 1,
          duration: 1.5,
          ease: 'sine.inOut',
        });
      }
    });
  }
}
