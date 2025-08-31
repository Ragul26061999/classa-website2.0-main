"use client";

import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
} from "react";
import gsap from "gsap";

// Generic Card for use inside CardSwap
export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  customClass?: string;
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ customClass, ...rest }, ref) => (
    <div
      ref={ref}
      {...rest}
      className={
        (
          `absolute top-1/2 left-1/2 rounded-xl border border-white bg-black ` +
          `[transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] ` +
          `${customClass ?? ""} ${rest.className ?? ""}`
        ).trim()
      }
    />
  )
);
Card.displayName = "Card";

type Slot = {
  x: number;
  y: number;
  z: number;
  zIndex: number;
};

const makeSlot = (
  i: number,
  distX: number,
  distY: number,
  total: number
) : Slot => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});

const placeNow = (
  el: HTMLDivElement | null,
  slot: Slot,
  skew: number
) =>
  gsap.set(el as HTMLDivElement, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true,
  });

export type CardSwapProps = {
  width?: number;
  height?: number;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  onCardClick?: (index: number) => void;
  skewAmount?: number;
  easing?: "elastic" | "power";
  children: React.ReactNode;
};

const CardSwap: React.FC<CardSwapProps> = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = "elastic",
  children,
}) => {
  type AnimConfig = {
    ease: string;
    durDrop: number;
    durMove: number;
    durReturn: number;
    promoteOverlap: number;
    returnDelay: number;
  };

  const config: AnimConfig =
    easing === "elastic"
      ? {
          ease: "elastic.out(0.6,0.9)",
          durDrop: 2,
          durMove: 2,
          durReturn: 2,
          promoteOverlap: 0.9,
          returnDelay: 0.05,
        }
      : {
          ease: "power1.inOut",
          durDrop: 0.8,
          durMove: 0.8,
          durReturn: 0.8,
          promoteOverlap: 0.45,
          returnDelay: 0.2,
        };

  const childArr = useMemo(() => Children.toArray(children), [children]);
  const nodesRef = useRef<HTMLDivElement[]>([]);

  const order = useRef<number[]>(
    Array.from({ length: childArr.length }, (_, i) => i)
  );

  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const intervalRef = useRef<number | undefined>(undefined);
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Gather direct child nodes once rendered
    const nodes = Array.from(
      (container.current?.children ?? []) as unknown as HTMLCollectionOf<HTMLDivElement>
    );
    nodesRef.current = nodes as HTMLDivElement[];

    const total = nodesRef.current.length;
    nodesRef.current.forEach((el, i) =>
      placeNow(el, makeSlot(i, cardDistance, verticalDistance, total), skewAmount)
    );

    const swap = () => {
      if (order.current.length < 2) return;

      const [front, ...rest] = order.current;
      const elFront = nodesRef.current[front]!;
      const tl: gsap.core.Timeline = gsap.timeline();
      tlRef.current = tl;

      tl.to(elFront, {
        y: "+=500",
        duration: config.durDrop,
        ease: config.ease,
      });

      tl.addLabel(
        "promote",
        `-=${config.durDrop * config.promoteOverlap}`
      );
      rest.forEach((idx, i) => {
        const el = nodesRef.current[idx]!;
        const slot = makeSlot(i, cardDistance, verticalDistance, nodesRef.current.length);
        tl.set(el, { zIndex: slot.zIndex }, "promote");
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease,
          },
          `promote+=${i * 0.15}`
        );
      });

      const backSlot = makeSlot(
        nodesRef.current.length - 1,
        cardDistance,
        verticalDistance,
        nodesRef.current.length
      );
      tl.addLabel(
        "return",
        `promote+=${config.durMove * config.returnDelay}`
      );
      tl.call(
        () => {
          gsap.set(elFront, { zIndex: backSlot.zIndex });
        },
        undefined,
        "return"
      );
      tl.set(elFront, { x: backSlot.x, z: backSlot.z }, "return");
      tl.to(
        elFront,
        {
          y: backSlot.y,
          duration: config.durReturn,
          ease: config.ease,
        },
        "return"
      );

      tl.call(() => {
        order.current = [...rest, front];
      });
    };

    swap();
    intervalRef.current = window.setInterval(swap, delay);

    if (pauseOnHover) {
      const node = container.current!;
      const pause = () => {
        tlRef.current?.pause();
        if (intervalRef.current) window.clearInterval(intervalRef.current);
      };
      const resume = () => {
        tlRef.current?.play();
        intervalRef.current = window.setInterval(swap, delay);
      };
      node.addEventListener("mouseenter", pause);
      node.addEventListener("mouseleave", resume);
      return () => {
        node.removeEventListener("mouseenter", pause);
        node.removeEventListener("mouseleave", resume);
        if (intervalRef.current) window.clearInterval(intervalRef.current);
      };
    }
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, easing]);

  const rendered = childArr.map((child, i) => {
    if (!isValidElement(child)) return child;
    type ChildProps = {
      style?: React.CSSProperties;
      onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
      className?: string;
    };
    const c = child as React.ReactElement<ChildProps>;
    const mergedStyle: React.CSSProperties = { width, height, ...(c.props?.style ?? {}) };
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      c.props?.onClick?.(e);
      onCardClick?.(i);
    };
    return cloneElement<ChildProps>(c, {
      key: i,
      style: mergedStyle,
      onClick: handleClick,
    });
  });

  return (
    <div
      ref={container}
      className="relative mx-auto md:ml-auto perspective-[900px] overflow-visible max-[768px]:scale-[0.85] max-[480px]:scale-[0.70]"
      style={{ width, height }}
    >
      {rendered}
    </div>
  );
};

export default CardSwap;
