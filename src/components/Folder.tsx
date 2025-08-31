"use client";

import React, { useState } from "react";

// Darken a hex color by a percentage (0..1)
const darkenColor = (hex: string, percent: number) => {
  let color = hex.startsWith("#") ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color
      .split("")
      .map((c) => c + c)
      .join("");
  }
  const num = parseInt(color, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
  return (
    "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
  );
};

// Lighten a hex color by a percentage (0..1)
const lightenColor = (hex: string, percent: number) => {
  let color = hex.startsWith("#") ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color
      .split("")
      .map((c) => c + c)
      .join("");
  }
  const num = parseInt(color, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  r = Math.max(0, Math.min(255, Math.floor(r + (255 - r) * percent)));
  g = Math.max(0, Math.min(255, Math.floor(g + (255 - g) * percent)));
  b = Math.max(0, Math.min(255, Math.floor(b + (255 - b) * percent)));
  return (
    "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
  );
};

export type FolderProps = {
  color?: string;
  size?: number;
  items?: React.ReactNode[];
  className?: string;
  openOnHover?: boolean;
  centerBadge?: React.ReactNode;
};

const Folder: React.FC<FolderProps> = ({
  color = "#5227FF",
  size = 1,
  items = [],
  className = "",
  openOnHover = true,
  centerBadge,
}) => {
  const maxItems = 3;
  const papers: (React.ReactNode | null)[] = items.slice(0, maxItems);
  while (papers.length < maxItems) {
    papers.push(null);
  }

  const [open, setOpen] = useState(false);
  const [paperOffsets, setPaperOffsets] = useState(
    Array.from({ length: maxItems }, () => ({ x: 0, y: 0 }))
  );

  const folderBackColor = darkenColor(color, 0.08);
  const folderBackTop = lightenColor(folderBackColor, 0.06);
  const lidTop = lightenColor(color, 0.08);
  const lidBottom = darkenColor(color, 0.08);
  const paper1 = darkenColor("#ffffff", 0.1);
  const paper2 = darkenColor("#ffffff", 0.05);
  const paper3 = "#ffffff";

  const resetOffsets = () =>
    setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));

  const handleClick = () => {
    if (openOnHover) return; // hover controls open/close
    setOpen((prev) => !prev);
    if (open) {
      resetOffsets();
    }
  };

  const handlePaperMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    if (!open) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (e.clientX - centerX) * 0.15;
    const offsetY = (e.clientY - centerY) * 0.15;
    setPaperOffsets((prev) => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: offsetX, y: offsetY };
      return newOffsets;
    });
  };

  const handlePaperMouseLeave = (
    _e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    setPaperOffsets((prev) => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: 0, y: 0 };
      return newOffsets;
    });
  };

  const folderStyle = {
    // CSS vars if needed later
    "--folder-color": color,
    "--folder-back-color": folderBackColor,
    "--paper-1": paper1,
    "--paper-2": paper2,
    "--paper-3": paper3,
  } as React.CSSProperties;

  const scaleStyle: React.CSSProperties = { transform: `scale(${size})` };

  const getOpenTransform = (index: number) => {
    if (index === 0) return "translate(-120%, -70%) rotate(-15deg)";
    if (index === 1) return "translate(10%, -70%) rotate(15deg)";
    if (index === 2) return "translate(-50%, -100%) rotate(5deg)";
    return "";
  };

  return (
    <div style={scaleStyle} className={className}>
      <div
        className={`group relative transition-all duration-200 ease-in cursor-pointer ${
          !open ? "hover:-translate-y-2" : ""
        }`}
        style={{
          ...folderStyle,
          transform: open ? "translateY(-8px)" : undefined,
        }}
        onClick={handleClick}
        onMouseEnter={openOnHover ? () => setOpen(true) : undefined}
        onMouseLeave={
          openOnHover
            ? () => {
                setOpen(false);
                resetOffsets();
              }
            : undefined
        }
      >
        {/* soft base shadow */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[115px] h-[22px] rounded-full bg-black/15 blur-md opacity-70" />
        <div
          className="relative w-[100px] h-[80px] rounded-tl-0 rounded-tr-[12px] rounded-br-[12px] rounded-bl-[12px]"
          style={{
            background: `linear-gradient(180deg, ${folderBackTop}, ${folderBackColor})`,
            boxShadow:
              "inset 0 0 0 1px rgba(255,255,255,0.6), 0 10px 25px rgba(0,0,0,0.08)",
          }}
        >
          {/* centered badge/icon over the folder */}
          {centerBadge && (
            <div className="absolute inset-0 z-40 pointer-events-none flex items-center justify-center">
              <div className="w-7 h-7 rounded-md bg-white/80 backdrop-blur flex items-center justify-center shadow-sm">
                {centerBadge}
              </div>
            </div>
          )}
          <span
            className="absolute z-0 bottom-[98%] left-0 w-[30px] h-[10px] rounded-tl-[5px] rounded-tr-[5px] rounded-bl-0 rounded-br-0"
            style={{
              background: `linear-gradient(180deg, ${folderBackTop}, ${folderBackColor})`,
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.6)",
            }}
          ></span>
          {papers.map((item, i) => {
            let sizeClasses = "";
            if (i === 0) sizeClasses = open ? "w-[70%] h-[80%]" : "w-[70%] h-[80%]";
            if (i === 1) sizeClasses = open ? "w-[80%] h-[80%]" : "w-[80%] h-[70%]";
            if (i === 2) sizeClasses = open ? "w-[90%] h-[80%]" : "w-[90%] h-[60%]";

            const transformStyle = open
              ? `${getOpenTransform(i)} translate(${paperOffsets[i].x}px, ${paperOffsets[i].y}px)`
              : undefined;

            return (
              <div
                key={i}
                onMouseMove={(e) => handlePaperMouseMove(e, i)}
                onMouseLeave={(e) => handlePaperMouseLeave(e, i)}
                className={`absolute z-20 bottom-[10%] left-1/2 transition-all duration-300 ease-in-out ${
                  !open
                    ? "transform -translate-x-1/2 translate-y-[10%] group-hover:translate-y-0"
                    : "hover:scale-110"
                } ${sizeClasses}`}
                style={{
                  ...(!open ? {} : { transform: transformStyle }),
                  backgroundColor: i === 0 ? paper1 : i === 1 ? paper2 : paper3,
                  borderRadius: "10px",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                  border: "1px solid rgba(0,0,0,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item ?? (
                  <div className="w-4/5">
                    <div className="h-1.5 w-5/6 rounded bg-black/10 mb-1.5" />
                    <div className="h-1.5 w-2/3 rounded bg-black/10 mb-1.5" />
                    <div className="h-1.5 w-3/4 rounded bg-black/10" />
                  </div>
                )}
              </div>
            );
          })}
          <div
            className={`absolute z-30 w-full h-full origin-bottom transition-all duration-300 ease-in-out ${
              !open ? "group-hover:[transform:skew(12deg)_scaleY(0.62)]" : ""
            }`}
            style={{
              background: `linear-gradient(180deg, ${lidTop}, ${lidBottom})`,
              borderRadius: "5px 12px 12px 12px",
              boxShadow:
                "inset 0 0 0 1px rgba(255,255,255,0.6), 0 10px 18px rgba(0,0,0,0.08)",
              ...(open && { transform: "skew(12deg) scaleY(0.62)" }),
            }}
          ></div>
          <div
            className={`absolute z-30 w-full h-full origin-bottom transition-all duration-300 ease-in-out ${
              !open ? "group-hover:[transform:skew(-12deg)_scaleY(0.62)]" : ""
            }`}
            style={{
              background: `linear-gradient(180deg, ${lidTop}, ${lidBottom})`,
              borderRadius: "5px 12px 12px 12px",
              boxShadow:
                "inset 0 0 0 1px rgba(255,255,255,0.6), 0 10px 18px rgba(0,0,0,0.08)",
              ...(open && { transform: "skew(-12deg) scaleY(0.62)" }),
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Folder;
