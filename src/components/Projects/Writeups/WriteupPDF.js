import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// DO NOT TOUCH THIS FILE.
// This is the shared PDF viewer used by every project write-up.
// It works exactly like the Resume page, just reused for project write-ups.
// You never edit this file directly — instead, each file inside the
// Writeups folder imports its own PDF and passes it into this component.
// The Download button lives in WriteupTemplate.js, next to the Back button.

function WriteupPDF({ pdf }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [width, setWidth] = useState(1200);
  const [hoveredPrevTop, setHoveredPrevTop] = useState(false);
  const [hoveredNextTop, setHoveredNextTop] = useState(false);
  const [hoveredPrevBottom, setHoveredPrevBottom] = useState(false);
  const [hoveredNextBottom, setHoveredNextBottom] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const navButtonStyle = (hovered, disabled) => ({
    display: "inline-flex",
    alignItems: "center",
    padding: "8px 18px",
    borderRadius: "5px",
    border: "2px solid #c770f0",
    backgroundColor: disabled ? "transparent" : hovered ? "white" : "#c770f0",
    color: disabled ? "#555" : hovered ? "#c770f0" : "white",
    fontWeight: "bold",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    transition: "all 0.3s ease",
  });

  const PageNav = ({ hoveredPrev, setHoveredPrev, hoveredNext, setHoveredNext }) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <button
        onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
        onMouseEnter={() => setHoveredPrev(true)}
        onMouseLeave={() => setHoveredPrev(false)}
        disabled={pageNumber <= 1}
        style={navButtonStyle(hoveredPrev, pageNumber <= 1)}
      >
        ← Prev
      </button>

      <span style={{ color: "white", fontWeight: "bold", minWidth: "110px", textAlign: "center" }}>
        Page {pageNumber} of {numPages}
      </span>

      <button
        onClick={() => setPageNumber((p) => Math.min(numPages, p + 1))}
        onMouseEnter={() => setHoveredNext(true)}
        onMouseLeave={() => setHoveredNext(false)}
        disabled={pageNumber >= numPages}
        style={navButtonStyle(hoveredNext, pageNumber >= numPages)}
      >
        Next →
      </button>
    </div>
  );

  return (
    <div>
      {numPages && (
        <div style={{ marginBottom: "20px" }}>
          <PageNav
            hoveredPrev={hoveredPrevTop}
            setHoveredPrev={setHoveredPrevTop}
            hoveredNext={hoveredNextTop}
            setHoveredNext={setHoveredNextTop}
          />
        </div>
      )}

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Document
          file={pdf}
          onLoadSuccess={({ numPages }) => {
            setNumPages(numPages);
            setPageNumber(1);
          }}
        >
          <Page
            key={`page_${pageNumber}`}
            pageNumber={pageNumber}
            scale={width > 786 ? 1.3 : 0.55}
          />
        </Document>
      </div>

      {numPages && (
        <div style={{ marginTop: "20px" }}>
          <PageNav
            hoveredPrev={hoveredPrevBottom}
            setHoveredPrev={setHoveredPrevBottom}
            hoveredNext={hoveredNextBottom}
            setHoveredNext={setHoveredNextBottom}
          />
        </div>
      )}
    </div>
  );
}

export default WriteupPDF;
