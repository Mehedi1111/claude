"use client";

import { motion } from "framer-motion";

const anchorPoints = [
  { cx: 240, cy: 80 },
  { cx: 380, cy: 160 },
  { cx: 400, cy: 240 },
  { cx: 380, cy: 320 },
  { cx: 240, cy: 400 },
  { cx: 100, cy: 320 },
  { cx: 80, cy: 240 },
  { cx: 100, cy: 160 },
  { cx: 240, cy: 160 },
  { cx: 320, cy: 240 },
  { cx: 240, cy: 320 },
  { cx: 160, cy: 240 },
  { cx: 240, cy: 240 },
];

const controlHandles = [
  { x1: 240, y1: 80, x2: 290, y2: 80 },
  { x1: 400, y1: 240, x2: 400, y2: 190 },
  { x1: 240, y1: 400, x2: 190, y2: 400 },
  { x1: 80, y1: 240, x2: 80, y2: 290 },
  { x1: 240, y1: 160, x2: 300, y2: 140 },
  { x1: 320, y1: 240, x2: 340, y2: 200 },
  { x1: 160, y1: 240, x2: 140, y2: 280 },
];

export default function HeroVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      {/* Artboard grid */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="0" cy="0" r="1" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Main SVG */}
      <motion.svg
        viewBox="0 0 480 480"
        className="w-full max-w-[480px] h-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Outer bounding circle */}
        <motion.circle
          cx="240" cy="240" r="160"
          fill="none"
          stroke="white"
          strokeWidth="0.5"
          strokeOpacity="0.12"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, delay: 0.3, ease: "easeInOut" }}
        />

        {/* Compass cross lines */}
        <motion.line
          x1="240" y1="80" x2="240" y2="400"
          stroke="white" strokeWidth="0.5" strokeOpacity="0.08"
          initial={{ scaleY: 0, originY: "50%" }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ transformOrigin: "240px 240px" }}
        />
        <motion.line
          x1="80" y1="240" x2="400" y2="240"
          stroke="white" strokeWidth="0.5" strokeOpacity="0.08"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={{ transformOrigin: "240px 240px" }}
        />
        <motion.line
          x1="127" y1="127" x2="353" y2="353"
          stroke="white" strokeWidth="0.5" strokeOpacity="0.05"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        />
        <motion.line
          x1="353" y1="127" x2="127" y2="353"
          stroke="white" strokeWidth="0.5" strokeOpacity="0.05"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        />

        {/* Main geometric form — outer octagon */}
        <motion.path
          d="M240,80 L380,160 L400,240 L380,320 L240,400 L100,320 L80,240 L100,160 Z"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeOpacity="0.6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 2.0, delay: 0.8, ease: [0.33, 1, 0.68, 1] }}
        />

        {/* Inner hexagon */}
        <motion.path
          d="M240,160 L320,200 L320,280 L240,320 L160,280 L160,200 Z"
          fill="none"
          stroke="white"
          strokeWidth="1"
          strokeOpacity="0.3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 1.5, delay: 1.6, ease: [0.33, 1, 0.68, 1] }}
        />

        {/* Connecting structure lines */}
        {[
          ["240,80", "240,160"],
          ["380,160", "320,200"],
          ["400,240", "320,240"],
          ["380,320", "320,280"],
          ["240,400", "240,320"],
          ["100,320", "160,280"],
          ["80,240", "160,240"],
          ["100,160", "160,200"],
        ].map(([from, to], i) => {
          const [x1, y1] = from.split(",").map(Number);
          const [x2, y2] = to.split(",").map(Number);
          return (
            <motion.line
              key={i}
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="white"
              strokeWidth="0.75"
              strokeOpacity="0.15"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 2.4 + i * 0.06 }}
            />
          );
        })}

        {/* Center cross inner */}
        <motion.path
          d="M240,160 L320,240 L240,320 L160,240 Z"
          fill="none"
          stroke="white"
          strokeWidth="0.75"
          strokeOpacity="0.2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 }}
          transition={{ duration: 1.0, delay: 2.8, ease: "easeInOut" }}
        />

        {/* Bezier control handle lines */}
        {controlHandles.map((h, i) => (
          <motion.line
            key={i}
            x1={h.x1} y1={h.y1} x2={h.x2} y2={h.y2}
            stroke="white"
            strokeWidth="0.6"
            strokeOpacity="0.25"
            strokeDasharray="2 3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.2 + i * 0.08, duration: 0.3 }}
          />
        ))}

        {/* Bezier control point diamonds */}
        {controlHandles.map((h, i) => (
          <motion.rect
            key={i}
            x={h.x2 - 3} y={h.y2 - 3}
            width={6} height={6}
            transform={`rotate(45, ${h.x2}, ${h.y2})`}
            fill="none"
            stroke="white"
            strokeWidth="0.8"
            strokeOpacity="0.4"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 3.4 + i * 0.08 }}
            style={{ transformOrigin: `${h.x2}px ${h.y2}px` }}
          />
        ))}

        {/* Anchor points */}
        {anchorPoints.map((pt, i) => (
          <motion.g key={i}>
            <motion.circle
              cx={pt.cx} cy={pt.cy} r={3.5}
              fill="#0a0a0a"
              stroke="white"
              strokeWidth="1.2"
              strokeOpacity="0.9"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 2.0 + i * 0.1,
                duration: 0.35,
                type: "spring",
                stiffness: 300,
              }}
              style={{ transformOrigin: `${pt.cx}px ${pt.cy}px` }}
            />
          </motion.g>
        ))}

        {/* Coordinate labels */}
        {[
          { x: 244, y: 74, label: "0,0" },
          { x: 384, y: 154, label: "1,0" },
          { x: 244, y: 406, label: "0,1" },
        ].map((lbl, i) => (
          <motion.text
            key={i}
            x={lbl.x} y={lbl.y}
            fill="white"
            fillOpacity={0.2}
            fontSize="10"
            fontFamily="monospace"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.6 + i * 0.1 }}
          >
            {lbl.label}
          </motion.text>
        ))}

        {/* "Illustrator-style" UI label */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.8, duration: 0.6 }}
        >
          <rect x="6" y="8" width="84" height="16" rx="2" fill="white" fillOpacity="0.06" />
          <text x="12" y="19" fill="white" fillOpacity="0.3" fontSize="9" fontFamily="monospace">
            ARTBOARD 01
          </text>
        </motion.g>

        {/* Floating continuous animation wrapper */}
        <motion.g
          animate={{ y: [0, -6, 0, 4, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        >
          {/* Pulsing center dot */}
          <motion.circle
            cx="240" cy="240" r="4"
            fill="white"
            fillOpacity="0.7"
            animate={{ scale: [1, 1.6, 1], fillOpacity: [0.7, 0.2, 0.7] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            style={{ transformOrigin: "240px 240px" }}
          />
        </motion.g>
      </motion.svg>

      {/* "Before" pixel ghost overlay — top-left corner detail */}
      <motion.div
        className="absolute top-4 left-4 opacity-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.06 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div
          className="w-20 h-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(255,255,255,0.3) 3px,rgba(255,255,255,0.3) 4px),repeating-linear-gradient(90deg,transparent,transparent 3px,rgba(255,255,255,0.3) 3px,rgba(255,255,255,0.3) 4px)",
          }}
        />
      </motion.div>
    </div>
  );
}
