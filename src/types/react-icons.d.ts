import { IconType } from 'react-icons';

declare module 'react-icons' {
  export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
    title?: string;
    size?: string | number;
    color?: string;
    className?: string;
  }

  export declare const IconContext: React.Context<IconContext>;
  
  export interface IconContext {
    color?: string;
    size?: string;
    className?: string;
    style?: React.CSSProperties;
    attr?: React.SVGAttributes<SVGElement>;
    title?: string;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // Add any additional Three.js elements here if needed
      [elemName: string]: any;
    }
  }
}
