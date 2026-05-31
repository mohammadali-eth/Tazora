"use client";

import React, { useState } from "react";

interface NodeItem {
  id: string;
  name: string;
  desc: string;
  x: number;
  y: number;
}

interface EdgeItem {
  from: string;
  to: string;
}

// Organic coordinates for constellation
const nodes: NodeItem[] = [
  { id: "health", name: "Health", desc: "Your physical vitality, sleep patterns, and daily fitness routines.", x: 120, y: 100 },
  { id: "growth", name: "Growth", desc: "Your emotional alignment, mindfulness, and personal development goals.", x: 430, y: 110 },
  { id: "finance", name: "Finance", desc: "Your budgeting, saving plans, and long-term investment portfolios.", x: 110, y: 390 },
  { id: "family", name: "Family", desc: "Your household duties, core relationships, and family schedules.", x: 280, y: 70 },
  { id: "career", name: "Career", desc: "Your daily focus, skill progression, and professional projects.", x: 440, y: 370 },
  { id: "learning", name: "Learning", desc: "Your reading list, notes database, and educational courses.", x: 290, y: 440 },
  { id: "faith", name: "Faith", desc: "Your spiritual habits, personal values, and moral alignment.", x: 190, y: 230 },
  { id: "memories", name: "Memories", desc: "Your journal entries, scrapbooks, and historical life log.", x: 360, y: 250 },
];

const relationships: EdgeItem[] = [
  { from: "health", to: "growth" },
  { from: "health", to: "family" },
  { from: "health", to: "faith" },
  { from: "growth", to: "learning" },
  { from: "growth", to: "career" },
  { from: "finance", to: "career" },
  { from: "finance", to: "family" },
  { from: "family", to: "memories" },
  { from: "career", to: "learning" },
  { from: "learning", to: "memories" },
  { from: "faith", to: "memories" },
];

export default function LifeMap() {
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  const sizeX = 560;
  const sizeY = 500;

  const isConnected = (id1: string, id2: string) => {
    return relationships.some(
      (rel) =>
        (rel.from === id1 && rel.to === id2) ||
        (rel.from === id2 && rel.to === id1)
    );
  };

  const getActiveState = (nodeId: string) => {
    if (!hoveredNodeId) return "default";
    if (hoveredNodeId === nodeId) return "active";
    if (isConnected(hoveredNodeId, nodeId)) return "sibling";
    return "dimmed";
  };

  const getRelationshipDescription = () => {
    if (!hoveredNodeId) return "Hover over any domain to visualize how your life systems connect.";
    
    const activeNode = nodes.find((n) => n.id === hoveredNodeId);
    if (!activeNode) return "";

    const connectedSiblings = nodes.filter((n) => isConnected(hoveredNodeId, n.id));
    const siblingNames = connectedSiblings.map((n) => n.name).join(", ");

    return (
      <span>
        <strong>{activeNode.name}</strong> connects with and influences your{" "}
        <strong>{siblingNames}</strong>.
      </span>
    );
  };

  const hoveredNode = nodes.find((n) => n.id === hoveredNodeId);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px 0",
        position: "relative",
      }}
    >
      {/* Description Explainer */}
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          textAlign: "center",
          minHeight: "80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginBottom: "40px",
          padding: "0 20px",
        }}
      >
        <p
          style={{
            fontSize: "15px",
            color: "var(--text-secondary)",
            lineHeight: "1.6",
            letterSpacing: "-0.01em",
          }}
        >
          {getRelationshipDescription()}
        </p>
        {hoveredNode && (
          <p
            style={{
              fontSize: "12px",
              color: "var(--text-muted)",
              marginTop: "8px",
            }}
          >
            {hoveredNode.desc}
          </p>
        )}
      </div>

      {/* Constellation Container with Aspect Ratio scaling */}
      <div
        style={{
          width: "100%",
          maxWidth: `${sizeX}px`,
          position: "relative",
          aspectRatio: `${sizeX}/${sizeY}`,
        }}
      >
        {/* SVG Drawing & Typography Layer */}
        <svg
          viewBox={`0 0 ${sizeX} ${sizeY}`}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            overflow: "visible",
          }}
        >
          {/* Constellation lines */}
          {relationships.map((rel, idx) => {
            const p1 = nodes.find((n) => n.id === rel.from);
            const p2 = nodes.find((n) => n.id === rel.to);
            if (!p1 || !p2) return null;

            const isHighlighted =
              hoveredNodeId === rel.from || hoveredNodeId === rel.to;

            const isSomeHovered = hoveredNodeId !== null;

            // Draw a slightly bent line to look organic
            const midX = (p1.x + p2.x) / 2;
            const midY = (p1.y + p2.y) / 2;
            const cpX = midX + (p2.y - p1.y) * 0.05;
            const cpY = midY - (p2.x - p1.x) * 0.05;

            let strokeColor = "rgba(139, 94, 60, 0.04)";
            let strokeWidth = 0.8;
            let opacity = 1;

            if (isSomeHovered) {
              if (isHighlighted) {
                strokeColor = "var(--accent)";
                strokeWidth = 1.0;
                opacity = 0.5;
              } else {
                opacity = 0.02;
              }
            }

            return (
              <path
                key={`rel-${idx}`}
                d={`M ${p1.x} ${p1.y} Q ${cpX} ${cpY} ${p2.x} ${p2.y}`}
                fill="none"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                style={{
                  opacity,
                  transition: "all 0.4s ease",
                }}
              />
            );
          })}

          {/* Interactive Constellation Nodes */}
          {nodes.map((node) => {
            const activeState = getActiveState(node.id);

            let opacity = 1;
            let scale = 1;
            let fontWeight = 500;
            let textColor = "var(--text-secondary)";

            if (activeState === "active") {
              scale = 1.06;
              fontWeight = 700;
              textColor = "var(--accent)";
            } else if (activeState === "sibling") {
              fontWeight = 600;
              textColor = "var(--text-primary)";
            } else if (activeState === "dimmed") {
              opacity = 0.25;
            }

            return (
              <g
                key={node.id}
                onMouseEnter={() => setHoveredNodeId(node.id)}
                onMouseLeave={() => setHoveredNodeId(null)}
                style={{
                  cursor: "pointer",
                  opacity,
                  transition: "opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  transform: `scale(${scale})`,
                  transformOrigin: `${node.x}px ${node.y}px`,
                }}
              >
                {/* Invisible hover area buffer */}
                <rect
                  x={node.x - 70}
                  y={node.y - 20}
                  width={140}
                  height={40}
                  fill="transparent"
                />

                {/* Node Name Text */}
                <text
                  x={node.x}
                  y={node.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={textColor}
                  fontSize="12"
                  fontWeight={fontWeight}
                  letterSpacing="0.05em"
                  fontFamily="var(--font-sans)"
                  style={{
                    userSelect: "none",
                    textTransform: "uppercase",
                    transition: "fill 0.4s ease",
                  }}
                >
                  {node.name}
                </text>

                {/* Highlight Dot Indicator */}
                {(activeState === "active" || activeState === "sibling") && (
                  <circle
                    cx={node.x}
                    cy={node.y - 14}
                    r="2"
                    fill={activeState === "active" ? "var(--accent)" : "rgba(139, 94, 60, 0.4)"}
                  />
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
