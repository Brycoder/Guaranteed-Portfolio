import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AiOutlineDownload } from "react-icons/ai";
import Particle from "../../Particle";

// DO NOT TOUCH THIS FILE, IT IS NOT AN ACTUAL TEMPLATE IT HELPS STRUCTURE YOUR WRITE-UPS DESIGN.

function WriteupTemplate({ children, pdf }) {
  const navigate = useNavigate();
  const [hoveredBackTop, setHoveredBackTop] = useState(false);
  const [hoveredBackBottom, setHoveredBackBottom] = useState(false);
  const [hoveredDownloadTop, setHoveredDownloadTop] = useState(false);
  const [hoveredDownloadBottom, setHoveredDownloadBottom] = useState(false);

  const buttonStyle = (hovered) => ({
    display: "inline-flex",
    alignItems: "center",
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
    textDecoration: "none",
  });

  const rowStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "16px",
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Container style={{ paddingTop: "20px", paddingBottom: "80px", maxWidth: "860px", position: "relative", zIndex: 1 }}>

          <div style={{ ...rowStyle, marginBottom: "40px" }}>
            <button
              onClick={() => navigate("/project")}
              onMouseEnter={() => setHoveredBackTop(true)}
              onMouseLeave={() => setHoveredBackTop(false)}
              style={buttonStyle(hoveredBackTop)}
            >
              ← Back to Projects
            </button>

            {pdf && (
              <a
                href={pdf}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setHoveredDownloadTop(true)}
                onMouseLeave={() => setHoveredDownloadTop(false)}
                style={buttonStyle(hoveredDownloadTop)}
              >
                <AiOutlineDownload />
                &nbsp;Download Write-Up
              </a>
            )}
          </div>

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

          <div style={{ ...rowStyle, marginTop: "60px" }}>
            <button
              onClick={() => navigate("/project")}
              onMouseEnter={() => setHoveredBackBottom(true)}
              onMouseLeave={() => setHoveredBackBottom(false)}
              style={buttonStyle(hoveredBackBottom)}
            >
              ← Back to Projects
            </button>

            {pdf && (
              <a
                href={pdf}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setHoveredDownloadBottom(true)}
                onMouseLeave={() => setHoveredDownloadBottom(false)}
                style={buttonStyle(hoveredDownloadBottom)}
              >
                <AiOutlineDownload />
                &nbsp;Download Write-Up
              </a>
            )}
          </div>

        </Container>
      </Container>
    </div>
  );
}

export default WriteupTemplate;
