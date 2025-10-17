import React from "react";

export default function Card({ children, style }) {
  const base = {
    border: "1px solid #ddd",
    borderRadius: 8,
    padding: 16,
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    background: "#fff",
    transition: "transform 0.2s, box-shadow 0.2s",
  };

  return (
    <div
      style={{
        ...base,
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = base.boxShadow;
      }}
    >
      {children}
    </div>
  );
}
