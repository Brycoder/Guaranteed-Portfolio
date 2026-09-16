import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Particle from "../../Particle";

// DO NOT TOUCH THIS FILE, IT IS NOT AN ACTUAL TEMPLATE IT HELPS STRUCTURE YOUR WRITE-UPS DESIGN.

function WriteupTemplate({ children }) {
  const [hoveredTop, setHoveredTop] = useState(false);
  const [hoveredBottom, setHoveredBottom] = useState(false);

  const buttonStyle = (hovered) => ({
    display: "inline-block",
    padding: "8px 20px",
    borderRadius: "5px",
    border: "2px solid #c770f0",
    backgroundColor: hovered ? "white" : "#c770f0",
    color: hovered ? "#c770f0" : "white",
    fontWeight: "bold",
    transition: "all 0.3s ease",
    cursor: "pointer",
    position: "relative",
    zIndex: 1,
  });

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Container style={{ paddingTop: "20px", paddingBottom: "80px", maxWidth: "860px", position: "relative", zIndex: 1 }}>

          <button
            onClick={() => window.location.href = "https://the-playground-portfolio1.vercel.app/project"}
            onMouseEnter={() => setHoveredTop(true)}
            onMouseLeave={() => setHoveredTop(false)}
            style={{ ...buttonStyle(hoveredTop), marginBottom: "40px" }}
          >
            ← Back to Projects
          </button>

          <div style={{
            color: "white",
            fontSize: "1.1em",
            lineHeight: "1.8",
            textAlign: "left",
            position: "relative",
            zIndex: 1,
          }}>
            {children}
          </div>

          <div style={{ marginTop: "60px" }}>
            <button
              onClick={() => window.location.href = "https://the-playground-portfolio1.vercel.app/project"}
              onMouseEnter={() => setHoveredBottom(true)}
              onMouseLeave={() => setHoveredBottom(false)}
              style={buttonStyle(hoveredBottom)}
            >
              ← Back to Projects
            </button>
          </div>

        </Container>
      </Container>
    </div>
  );
}

export default WriteupTemplate;
