import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// DO NOT TOUCH THIS FILE.
// This is the shared PDF viewer used by every project write-up.
// It works exactly like the Resume page, just reused for project write-ups.
// You never edit this file directly — instead, each file inside the
// Writeups folder imports its own PDF and passes it into this component.

function WriteupPDF({ pdf }) {
  const [numPages, setNumPages] = useState(null);
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "32px" }}>
        <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "250px" }}>
          <AiOutlineDownload />
          &nbsp;Download Write-Up
        </Button>
      </div>

      <Document
        file={pdf}
        className="d-flex flex-column align-items-center"
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      >
        {Array.from(new Array(numPages || 0), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            scale={width > 786 ? 1.3 : 0.55}
            style={{ marginBottom: "20px" }}
          />
        ))}
      </Document>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "32px" }}>
        <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "250px" }}>
          <AiOutlineDownload />
          &nbsp;Download Write-Up
        </Button>
      </div>
    </div>
  );
}

export default WriteupPDF;
