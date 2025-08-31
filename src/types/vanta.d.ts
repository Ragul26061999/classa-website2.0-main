declare module 'vanta/dist/vanta.fog.min.js' {
  import * as THREE from 'three';
  
  interface VantaFogSettings {
    el: HTMLElement | string;
    THREE: typeof THREE;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    highlightColor?: number;
    midtoneColor?: number;
    lowlightColor?: number;
    baseColor?: number;
    blurFactor?: number;
    speed?: number;
    zoom?: number;
  }

  interface VantaEffect {
    destroy: () => void;
    setOptions: (options: Partial<VantaFogSettings>) => void;
    resize: () => void;
  }

  function FOG(settings: VantaFogSettings): VantaEffect;
  
  export default FOG;
}

declare module 'vanta/dist/vanta.birds.min.js' {
  import * as THREE from 'three';

  interface VantaBirdsSettings {
    el: HTMLElement | string;
    THREE: typeof THREE;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    backgroundColor?: number;
    color1?: number;
    color2?: number;
    colorMode?: 'variance' | 'lerp' | 'lerpGradient';
    birdSize?: number;
    wingSpan?: number;
    speedLimit?: number;
    separation?: number;
    alignment?: number;
    cohesion?: number;
    quantity?: number;
  }

  interface VantaEffect {
    destroy: () => void;
    setOptions: (options: Partial<VantaBirdsSettings>) => void;
    resize: () => void;
  }

  function BIRDS(settings: VantaBirdsSettings): VantaEffect;

  export default BIRDS;
}
