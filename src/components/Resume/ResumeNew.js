import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import WriteupPDF from "../Projects/Writeups/WriteupPDF";
import pdf from "../../Assets/Placeholder_CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";

// EDIT THIS PART:
// The import above on line 5 where it says Placeholder_CV.pdf, change it to your resume file name.
// Do not change anything else on that line.


function ResumeNew() {

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <WriteupPDF pdf={pdf} />
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
