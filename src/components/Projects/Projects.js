import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* EDIT THIS PART: ALL THIS APPLYS TO THE CODE BELOW THIS INSTRUCTIONS
            1. To edit the words shown on the project cards, change the text inside the title and description sections.
            2. To change the main image on a project card, upload your image to:
            
                        src/Assets/ProjectImages
            
                - You will then see a line of code similar to this:
            
                        imgPath={require("../../Assets/ProjectImages/placeholder1.jpeg")}
            
                - Only change the image file name at the end.
            
                        Example:
                        placeholder1.jpeg → networkscanner.png
            
                - Do NOT change:
            
                        imgPath={require("../../Assets/ProjectImages/
            
            3. To link a project card to its correct write-up page, you will see a line of code similar to this:
                    
                        writeupLink="/writeup/ThinkingLikeAHacker"
            
                - Only change the write-up name at the end.
            
                        Example:
                        ThinkingLikeAHacker → PromptInjection
            
                - Do NOT change:
            
                        writeupLink="/writeup/
            
            4. If you want to add more projects to your portfolio, copy and paste all code between one individual:
            
                        <Col md={4} className="project-card"> Your New Project </Col>
            
                - Then replace the project information with your own.
          
          */}



          {/* PROJECT 1 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/ProjectImages/placeholder1.jpeg")}
              title="Thinking Like A Hacker"
              description="Learn to use theHarvester for Open Source Intelligence to gather data on targets."
            />
          </Col>

          {/* PROJECT 2 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/ProjectImages/placeholder2.jpeg")}
              title="Phishing Simulation"
              description="Learn how phishing emails are crafted, why awareness matters, and how to protect yourself and others."
              writeupLink="/writeup/PhishingSimulation"
            />
          </Col>

          {/* PROJECT 3 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/ProjectImages/placeholder3.jpeg")}
              title="Password Cracking 101"
              description="You'll learn password cracking with John the Ripper, plus how to build safe passwords."
              writeupLink="/writeup/PasswordCracking101"
            />
          </Col>

          {/* PROJECT 4 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/ProjectImages/placeholder4.jpeg")}
              title="Hijacking Browsers with Sneaky Code"
              description="Learn how attackers sneak harmful code into websites, and how to stop it from happening."
              writeupLink="/writeup/BuildingDigitalAlarmSystem"
            />
          </Col>

          {/* PROJECT 5 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/ProjectImages/placeholder5.jpeg")}
              title="Locking Down Your Environment"
              description="Attacking anything outside a lab is a crime. First set up your isolated environment to keep you legal."
              writeupLink="/writeup/IncidentResponseWalkthrough"
            />
          </Col>

          {/* PROJECT 6 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/ProjectImages/placeholder6.jpeg")}
              title="Peeking Into a Network"
              description="Learn Nmap scanning to find active devices and see exactly what's open to attack."
              writeupLink="/writeup/ThreatHuntingOnABudget"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
