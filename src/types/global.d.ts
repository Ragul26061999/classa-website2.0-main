// Reference type definitions for Three.js and React Three Fiber
/// <reference types="three" />
/// <reference types="@types/three" />

// CSS Modules type declaration
declare module '*.module.css' {
  const styles: { [key: string]: string };
  export default styles;
}

// Extend the JSX namespace for Three.js elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      meshStandardMaterial: any;
      // Add other Three.js elements as needed
    }
  }
}
