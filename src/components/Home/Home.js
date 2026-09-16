import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/laptop-icon.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}

                {/* EDIT THIS PART:
                    Select the skin tone that works best for you and replace the emoji on line 24.
                    Only keep ONE & replace it in the span code: 👋 👋🏻 👋🏼 👋🏽 👋🏾 👋🏿 */}

                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M

                {/* EDIT THIS PART:
                    Directly under this replace [YOUR NAME] with your preferred name */}

                <strong className="main-name"> [YOUR NAME] </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "950px", width: "100%" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
