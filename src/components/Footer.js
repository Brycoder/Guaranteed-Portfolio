import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { FaLinkedinIn, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="12" className="footer-body" style={{ textAlign: "center" }}>
          <ul className="footer-icons" style={{ justifyContent: "center" }}>


            {/* EDIT THIS PART:
              Below are the list of social media platforms vistors can find and contact you, you can delete what doesn't apply.
              For you to link your social media handles all you have to do is change the link to your specific URL including the https:// */}

            {/* GITHUB */}
            <li className="social-icons">
              <a href="https://github.com/aScriptKiddie" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                <AiFillGithub />
              </a>
            </li>

            {/* TWITTER */}
            <li className="social-icons">
              <a href="https://twitter.com" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                <AiOutlineTwitter />
              </a>
            </li>

            {/* LINKEDIN */}
            <li className="social-icons">
              <a href="https://www.linkedin.com/in/bree-kagwe" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </li>

            {/* INSTAGRAM */}
            <li className="social-icons">
              <a href="https://instagram.com" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                <AiFillInstagram />
              </a>
            </li>

            {/* TIKTOK */}
            <li className="social-icons">
              <a href="https://tiktok.com" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                <FaTiktok />
              </a>
            </li>

            {/* YOUTUBE */}
            <li className="social-icons">
              <a href="https://www.youtube.com/@aScriptKiddie" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                <AiFillYoutube />
              </a>
            </li>
  
          </ul>


          {/* EDIT THIS PART:
              Change the [Your Location] directly under this to the country or city you're based in. */}

          <h3 style={{ color: "white", paddingTop: "10px" }}>Based In [Your Location]</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
