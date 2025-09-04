// Type definitions for Next.js modules
// Project: https://nextjs.org/

import { ComponentType, CSSProperties, ReactNode } from 'react';

declare module 'next/image' {
  interface ImageProps {
    src: string;
    width: number;
    height: number;
    alt: string;
    className?: string;
    style?: CSSProperties;
    priority?: boolean;
    loading?: 'lazy' | 'eager';
    quality?: number | string;
    placeholder?: 'blur' | 'empty';
    blurDataURL?: string;
    unoptimized?: boolean;
    onLoadingComplete?: () => void;
    onLoad?: (e: any) => void;
    onError?: (e: any) => void;
  }

  const Image: ComponentType<ImageProps>;
  export default Image;
}

declare module 'next/link' {
  import { LinkProps as NextLinkProps } from 'next/dist/client/link';
  import { PropsWithChildren } from 'react';
  
  export interface LinkProps extends Omit<NextLinkProps, 'passHref' | 'as'> {
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
    target?: string;
    rel?: string;
    locale?: string | false;
    prefetch?: boolean;
    replace?: boolean;
    scroll?: boolean;
    shallow?: boolean;
    legacyBehavior?: boolean;
    passHref?: boolean;
  }
  
  const Link: React.FC<LinkProps>;
  export default Link;
}
