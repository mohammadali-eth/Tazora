"use client";

import React from "react";

export default function LifeSystemsVisual() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: "480px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "visible",
      }}
    >
      <svg
        viewBox="0 0 500 500"
        style={{
          width: "100%",
          maxWidth: "480px",
          height: "auto",
          overflow: "visible",
        }}
      >
        <defs>
          {/* Subtle line gradients */}
          <linearGradient id="grid-fade" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(139, 94, 60, 0.12)" />
            <stop offset="50%" stopColor="rgba(139, 94, 60, 0.03)" />
            <stop offset="100%" stopColor="rgba(17, 24, 39, 0.01)" />
          </linearGradient>
        </defs>

        {/* Blueprint fine grid lines */}
        <g stroke="rgba(139, 94, 60, 0.03)" strokeWidth="0.8">
          <line x1="50" y1="50" x2="450" y2="50" />
          <line x1="50" y1="150" x2="450" y2="150" />
          <line x1="50" y1="250" x2="450" y2="250" strokeWidth="1" stroke="rgba(139, 94, 60, 0.08)" />
          <line x1="50" y1="350" x2="450" y2="350" />
          <line x1="50" y1="450" x2="450" y2="450" />

          <line x1="50" y1="50" x2="50" y2="450" />
          <line x1="150" y1="50" x2="150" y2="450" />
          <line x1="250" y1="50" x2="250" y2="450" strokeWidth="1" stroke="rgba(139, 94, 60, 0.08)" />
          <line x1="350" y1="50" x2="350" y2="450" />
          <line x1="450" y1="50" x2="450" y2="450" />
        </g>

        {/* Diagonal architectural drafting lines */}
        <line x1="50" y1="50" x2="450" y2="450" stroke="rgba(139, 94, 60, 0.015)" strokeWidth="0.8" />
        <line x1="50" y1="450" x2="450" y2="50" stroke="rgba(139, 94, 60, 0.015)" strokeWidth="0.8" />

        {/* Concentric blueprint rings */}
        <circle cx="250" cy="250" r="140" fill="none" stroke="rgba(139, 94, 60, 0.04)" strokeWidth="0.8" />
        <circle cx="250" cy="250" r="200" fill="none" stroke="rgba(139, 94, 60, 0.02)" strokeWidth="0.8" strokeDasharray="3,6" />

        {/* System Overlapping Blueprint Rectangles */}
        <g style={{ transformOrigin: "250px 250px", animation: "drift 12s ease-in-out infinite alternate" }}>
          {/* Inner System Frame */}
          <rect
            x="130"
            y="130"
            width="240"
            height="240"
            fill="none"
            stroke="rgba(139, 94, 60, 0.08)"
            strokeWidth="0.8"
          />
          {/* Offset Frame */}
          <rect
            x="110"
            y="170"
            width="280"
            height="160"
            fill="none"
            stroke="rgba(17, 24, 39, 0.04)"
            strokeWidth="0.8"
            strokeDasharray="4,4"
          />
        </g>

        {/* Coordinates labels and details */}
        <text x="60" y="45" fill="var(--text-muted)" fontSize="8" fontFamily="monospace">SYS.LOC // 50.50</text>
        <text x="375" y="445" fill="var(--text-muted)" fontSize="8" fontFamily="monospace">REF.UNIT // TazoraOS</text>

        {/* Core Intersection Point */}
        <circle cx="250" cy="250" r="4" fill="var(--accent)" />
        <circle cx="250" cy="250" r="9" fill="none" stroke="var(--accent)" strokeWidth="0.8" />

        {/* Fine-line pointers pointing to coordinates */}
        <g stroke="var(--accent)" strokeWidth="0.8">
          {/* Goal Coordinate */}
          <line x1="250" y1="250" x2="350" y2="150" stroke="url(#grid-fade)" />
          <circle cx="350" cy="150" r="2.5" fill="var(--accent)" />
          <text x="360" y="153" fill="var(--text-secondary)" fontSize="9" fontWeight="600" letterSpacing="0.05em" fontFamily="var(--font-sans)">PLANNING</text>

          {/* Health Coordinate */}
          <line x1="250" y1="250" x2="150" y2="150" stroke="url(#grid-fade)" />
          <circle cx="150" cy="150" r="2.5" fill="var(--accent)" />
          <text x="88" y="153" fill="var(--text-secondary)" fontSize="9" fontWeight="600" letterSpacing="0.05em" fontFamily="var(--font-sans)">HEALTH</text>

          {/* Growth Coordinate */}
          <line x1="250" y1="250" x2="350" y2="350" stroke="url(#grid-fade)" />
          <circle cx="350" cy="350" r="2.5" fill="var(--accent)" />
          <text x="360" y="353" fill="var(--text-secondary)" fontSize="9" fontWeight="600" letterSpacing="0.05em" fontFamily="var(--font-sans)">GROWTH</text>

          {/* Finance Coordinate */}
          <line x1="250" y1="250" x2="150" y2="350" stroke="url(#grid-fade)" />
          <circle cx="150" cy="350" r="2.5" fill="var(--accent)" />
          <text x="92" y="353" fill="var(--text-secondary)" fontSize="9" fontWeight="600" letterSpacing="0.05em" fontFamily="var(--font-sans)">FINANCE</text>
        </g>
      </svg>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes drift {
          0% { transform: rotate(0deg) scale(0.98); }
          100% { transform: rotate(2deg) scale(1.02); }
        }
      `}} />
    </div>
  );
}
