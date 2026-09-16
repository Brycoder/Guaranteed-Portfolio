import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";

 
// EDIT THIS PART:
// The import above on line 3 where it says avatar.png, change it to your preferred image name.
// Do not change anything else on that line.


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">

                
              {/* EDIT THIS PART:
               For you to write a good section please read the placeholder on the portfolio and follow this formats.
               1. Type whatever you want to add, but maintain the same indentation.
               2. If you want to create a space between 2 paragraphs, use two <br /><br /> back-to-back they're examples below.
               3. If you want to put more emphasis on a word and make it purple use <b className="purple"> Word your emphasizing </b>. 
               4. If you want to put italics on a word use <i> Word you want to italics </i>. 
               */}


              In this section, please give a brief explanation of who you are. 
              We want to get to know the real you, your background, and what drives your passion. 
              Tell the reader what your proficient in for example.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, C++, Rust, Node.js, and Java{" "}
                </b>
              </i>
             then tell us what your main areas of interest are for example.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Web Applications, Blockchain Solutions,{" "}
                </b>
              </i>
              Don't be shy, boost about what your good at, no matter how small you think it is. It's called selling yourself.
              <br />
              <br />
              I am undeniably good with
              <b className="purple"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Next.js</b>.
              </i>



              {/* EDIT THIS PART:
                Don't change any code underneath this line. */}
                
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
