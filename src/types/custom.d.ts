// Custom type declarations to resolve TypeScript errors

// Fix for react-icons JSX namespace
declare namespace JSX {
  interface Element extends React.ReactElement {}
  interface ElementClass extends React.Component<any> {}
  interface ElementAttributesProperty {
    props: {};
  }
  interface ElementChildrenAttribute {
    children: {};
  }
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

// Fix for duplicate identifier in global.d.ts
declare module '*.module.css' {
  const styles: { [key: string]: string };
  export default styles;
}

// Fix for Three.js types
declare module 'three' {
  export * from 'three/src/Three';
}

// Fix for @react-three/fiber types
declare module '@react-three/fiber' {
  import * as THREE from 'three';
  import { ReactNode } from 'react';

  export interface ThreeElements {
    [key: string]: any;
  }

  export interface CanvasProps {
    children?: ReactNode;
    [key: string]: any;
  }

  export const Canvas: React.FC<CanvasProps>;
  export function useFrame(callback: (state: any, delta: number) => void): void;
  export function useThree(): any;
}
