"use client";

import React from "react";

export default function LifeSystemsVisual() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: "500px",
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
          maxWidth: "520px",
          height: "auto",
          overflow: "visible",
        }}
      >
        <defs>
          <linearGradient id="blueprint-glow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(139, 94, 60, 0.15)" />
            <stop offset="60%" stopColor="rgba(139, 94, 60, 0.02)" />
            <stop offset="100%" stopColor="rgba(17, 24, 39, 0)" />
          </linearGradient>
        </defs>

        {/* Outer Frame Grid Ticks */}
        <g stroke="rgba(139, 94, 60, 0.2)" strokeWidth="0.8">
          <line x1="20" y1="20" x2="30" y2="20" />
          <line x1="20" y1="20" x2="20" y2="30" />
          
          <line x1="480" y1="20" x2="470" y2="20" />
          <line x1="480" y1="20" x2="480" y2="30" />

          <line x1="20" y1="480" x2="30" y2="480" />
          <line x1="20" y1="480" x2="20" y2="470" />

          <line x1="480" y1="480" x2="470" y2="480" />
          <line x1="480" y1="480" x2="480" y2="470" />
        </g>

        {/* Blueprint Grid Lines */}
        <g stroke="rgba(139, 94, 60, 0.03)" strokeWidth="0.6">
          {/* Horizontal lines */}
          <line x1="20" y1="70" x2="480" y2="70" />
          <line x1="20" y1="120" x2="480" y2="120" />
          <line x1="20" y1="170" x2="480" y2="170" />
          <line x1="20" y1="220" x2="480" y2="220" />
          <line x1="20" y1="270" x2="480" y2="270" />
          <line x1="20" y1="320" x2="480" y2="320" />
          <line x1="20" y1="370" x2="480" y2="370" />
          <line x1="20" y1="420" x2="480" y2="420" />

          {/* Vertical lines */}
          <line x1="70" y1="20" x2="70" y2="480" />
          <line x1="120" y1="20" x2="120" y2="480" />
          <line x1="170" y1="20" x2="170" y2="480" />
          <line x1="220" y1="20" x2="220" y2="480" />
          <line x1="270" y1="20" x2="270" y2="480" />
          <line x1="320" y1="20" x2="320" y2="480" />
          <line x1="370" y1="20" x2="370" y2="480" />
          <line x1="420" y1="20" x2="420" y2="480" />
        </g>

        {/* Central Core Dial Structure */}
        <g style={{ transformOrigin: "250px 250px", animation: "spin-dial 40s linear infinite" }}>
          {/* Compass Outer Dash Ring */}
          <circle cx="250" cy="250" r="100" fill="none" stroke="rgba(139, 94, 60, 0.08)" strokeWidth="0.8" strokeDasharray="3,4" />
          {/* Compass Middle Continuous Ring */}
          <circle cx="250" cy="250" r="85" fill="none" stroke="rgba(139, 94, 60, 0.12)" strokeWidth="0.6" />
          {/* Accent Ring Ticks */}
          <circle cx="250" cy="250" r="75" fill="none" stroke="rgba(139, 94, 60, 0.04)" strokeWidth="2.5" strokeDasharray="1,12" />

          {/* Radial Crosshairs */}
          <line x1="250" y1="140" x2="250" y2="360" stroke="rgba(139, 94, 60, 0.06)" strokeWidth="0.8" />
          <line x1="140" y1="250" x2="360" y2="250" stroke="rgba(139, 94, 60, 0.06)" strokeWidth="0.8" />
        </g>

        {/* Core Pulsing Center */}
        <circle cx="250" cy="250" r="5" fill="var(--accent)" />
        <circle cx="250" cy="250" r="11" fill="none" stroke="var(--accent)" strokeWidth="0.8" style={{ animation: "pulse-ring 2.5s infinite" }} />
        
        {/* Floating Blueprint Modules (Top-Right: Timeline Schedule) */}
        <g transform="translate(290, 50)" strokeWidth="0.8" stroke="rgba(139, 94, 60, 0.1)">
          {/* Outer framing box */}
          <rect x="0" y="0" width="160" height="110" fill="rgba(250, 248, 245, 0.7)" />
          
          {/* Tech tags */}
          <text x="8" y="14" fill="var(--accent)" fontSize="6" fontWeight="700" fontFamily="monospace" letterSpacing="0.05em">MOD.01 // DAILY SCHEDULE</text>
          <line x1="0" y1="20" x2="160" y2="20" stroke="rgba(139, 94, 60, 0.08)" />

          {/* Schedule bars */}
          <g transform="translate(10, 30)" stroke="none">
            {/* Row 1 */}
            <text x="0" y="8" fill="var(--text-primary)" fontSize="7" fontWeight="600" fontFamily="monospace">06:00</text>
            <rect x="35" y="2" width="65" height="7" fill="rgba(139, 94, 60, 0.12)" />
            <text x="105" y="8" fill="var(--text-secondary)" fontSize="6" fontFamily="var(--font-sans)">DEEP WORK</text>
            
            {/* Row 2 */}
            <text x="0" y="22" fill="var(--text-primary)" fontSize="7" fontWeight="600" fontFamily="monospace">10:00</text>
            <rect x="35" y="16" width="90" height="7" fill="rgba(139, 94, 60, 0.08)" />
            <text x="130" y="22" fill="var(--text-secondary)" fontSize="6" fontFamily="var(--font-sans)">ROUTINES</text>

            {/* Row 3 */}
            <text x="0" y="36" fill="var(--text-primary)" fontSize="7" fontWeight="600" fontFamily="monospace">14:00</text>
            <rect x="35" y="30" width="45" height="7" fill="rgba(139, 94, 60, 0.06)" />
            <text x="85" y="36" fill="var(--text-secondary)" fontSize="6" fontFamily="var(--font-sans)">HEALTH</text>

            {/* Row 4 */}
            <text x="0" y="50" fill="var(--text-primary)" fontSize="7" fontWeight="600" fontFamily="monospace">19:00</text>
            <rect x="35" y="44" width="75" height="7" fill="rgba(139, 94, 60, 0.1)" />
            <text x="115" y="50" fill="var(--text-secondary)" fontSize="6" fontFamily="var(--font-sans)">REFLECT</text>
          </g>
        </g>

        {/* Floating Blueprint Modules (Top-Left: Mind Mapping Nodes) */}
        <g transform="translate(40, 50)" strokeWidth="0.8" stroke="rgba(139, 94, 60, 0.1)">
          <rect x="0" y="0" width="160" height="110" fill="rgba(250, 248, 245, 0.7)" />
          <text x="8" y="14" fill="var(--accent)" fontSize="6" fontWeight="700" fontFamily="monospace" letterSpacing="0.05em">MOD.02 // COGNITIVE ORBIT</text>
          <line x1="0" y1="20" x2="160" y2="20" stroke="rgba(139, 94, 60, 0.08)" />

          {/* Connected Network Nodes */}
          <g transform="translate(10, 25)" stroke="none">
            {/* Center Nucleus */}
            <circle cx="70" cy="45" r="4" fill="var(--accent)" />
            <text x="70" y="37" fill="var(--accent)" fontSize="6" fontWeight="700" textAnchor="middle" fontFamily="monospace">TAZORA</text>

            {/* Orbit paths */}
            <path d="M 70 45 L 30 20 M 70 45 L 110 25 M 70 45 L 35 70 M 70 45 L 115 70" stroke="rgba(139, 94, 60, 0.15)" strokeWidth="0.6" strokeDasharray="2,2" />

            {/* Orbit node 1 */}
            <circle cx="30" cy="20" r="3" fill="#111827" />
            <text x="25" y="13" fill="var(--text-secondary)" fontSize="6" textAnchor="middle" fontFamily="var(--font-sans)">GROWTH</text>

            {/* Orbit node 2 */}
            <circle cx="110" cy="25" r="3" fill="#111827" />
            <text x="110" y="19" fill="var(--text-secondary)" fontSize="6" textAnchor="middle" fontFamily="var(--font-sans)">HEALTH</text>

            {/* Orbit node 3 */}
            <circle cx="35" cy="70" r="3" fill="#111827" />
            <text x="35" y="79" fill="var(--text-secondary)" fontSize="6" textAnchor="middle" fontFamily="var(--font-sans)">MEMORIES</text>

            {/* Orbit node 4 */}
            <circle cx="115" cy="70" r="3" fill="#111827" />
            <text x="115" y="79" fill="var(--text-secondary)" fontSize="6" textAnchor="middle" fontFamily="var(--font-sans)">FINANCE</text>
          </g>
        </g>

        {/* Floating Blueprint Modules (Bottom-Left: Finance Chart / Progress Graph) */}
        <g transform="translate(40, 340)" strokeWidth="0.8" stroke="rgba(139, 94, 60, 0.1)">
          <rect x="0" y="0" width="160" height="110" fill="rgba(250, 248, 245, 0.7)" />
          <text x="8" y="14" fill="var(--accent)" fontSize="6" fontWeight="700" fontFamily="monospace" letterSpacing="0.05em">MOD.03 // SYSTEM TRAJECTORY</text>
          <line x1="0" y1="20" x2="160" y2="20" stroke="rgba(139, 94, 60, 0.08)" />

          {/* Small Line Chart */}
          <g transform="translate(15, 30)">
            {/* Grid lines inside chart */}
            <line x1="0" y1="0" x2="130" y2="0" stroke="rgba(139, 94, 60, 0.03)" strokeWidth="0.5" />
            <line x1="0" y1="15" x2="130" y2="15" stroke="rgba(139, 94, 60, 0.03)" strokeWidth="0.5" />
            <line x1="0" y1="30" x2="130" y2="30" stroke="rgba(139, 94, 60, 0.03)" strokeWidth="0.5" />
            <line x1="0" y1="45" x2="130" y2="45" stroke="rgba(139, 94, 60, 0.08)" strokeWidth="0.8" />
            
            {/* Chart line path */}
            <path d="M 0 40 Q 30 10 60 30 T 120 5" fill="none" stroke="var(--accent)" strokeWidth="1.2" />

            {/* Pulsing indicator on chart */}
            <circle cx="120" cy="5" r="2.5" fill="var(--accent)" />
            
            {/* Chart text coordinate data */}
            <text x="0" y="58" fill="var(--text-secondary)" fontSize="6" fontFamily="monospace" stroke="none">INDEX.01 // ACCUMULATING</text>
            <text x="130" y="58" fill="var(--accent)" fontSize="6" fontWeight="700" fontFamily="monospace" textAnchor="end" stroke="none">94.8% STABLE</text>
          </g>
        </g>

        {/* Floating Blueprint Modules (Bottom-Right: Balance Pentagon/Radar) */}
        <g transform="translate(290, 340)" strokeWidth="0.8" stroke="rgba(139, 94, 60, 0.1)">
          <rect x="0" y="0" width="160" height="110" fill="rgba(250, 248, 245, 0.7)" />
          <text x="8" y="14" fill="var(--accent)" fontSize="6" fontWeight="700" fontFamily="monospace" letterSpacing="0.05em">MOD.04 // HABITS RADAR</text>
          <line x1="0" y1="20" x2="160" y2="20" stroke="rgba(139, 94, 60, 0.08)" />

          {/* Target polygon metrics */}
          <g transform="translate(80, 65)" stroke="rgba(139, 94, 60, 0.06)" strokeWidth="0.6" fill="none">
            {/* Radar concentric rings */}
            <circle cx="0" cy="0" r="15" />
            <circle cx="0" cy="0" r="28" />
            <circle cx="0" cy="0" r="40" />

            {/* Radar diagonal lines */}
            <line x1="0" y1="-40" x2="0" y2="40" />
            <line x1="-40" y1="0" x2="40" y2="0" />

            {/* Actual shape */}
            <polygon points="0,-35 25,-10 12,25 -20,15 -18,-15" stroke="var(--accent)" strokeWidth="1.2" fill="rgba(139, 94, 60, 0.04)" />

            {/* Radar markers */}
            <circle cx="0" cy="-35" r="2" fill="var(--accent)" stroke="none" />
            <circle cx="25" cy="-10" r="2" fill="var(--accent)" stroke="none" />
            <circle cx="12" cy="25" r="2" fill="var(--accent)" stroke="none" />
            <circle cx="-20" cy="15" r="2" fill="var(--accent)" stroke="none" />
            <circle cx="-18" cy="-15" r="2" fill="var(--accent)" stroke="none" />
          </g>
        </g>

        {/* Global coordinate details on the grid */}
        <text x="25" y="32" fill="var(--text-muted)" fontSize="7" fontFamily="monospace">SYS.COORD // LAT.52.23 // LON.11.08</text>
        <text x="475" y="32" fill="var(--text-muted)" fontSize="7" fontFamily="monospace" textAnchor="end">BUILD // 2026.05</text>
        <text x="25" y="472" fill="var(--text-muted)" fontSize="7" fontFamily="monospace">SCHEMA // L.O.S. FRAMEWORK</text>
        <text x="475" y="472" fill="var(--text-muted)" fontSize="7" fontFamily="monospace" textAnchor="end">TAZORA v1.0.0</text>
      </svg>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-dial {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(0.9);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.4);
            opacity: 0.1;
          }
          100% {
            transform: scale(0.9);
            opacity: 0.8;
          }
        }
      `}} />
    </div>
  );
}
