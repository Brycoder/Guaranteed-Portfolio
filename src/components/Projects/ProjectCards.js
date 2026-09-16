import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function ProjectCards(props) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <Card className="project-card-view">
      <div style={{
        width: "100%",
        height: "220px",
        overflow: "hidden",
      }}>
        <img
          src={props.imgPath}
          alt="card-img"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => navigate(props.writeupLink)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              display: "inline-block",
              padding: "8px 20px",
              borderRadius: "5px",
              border: "2px solid #c770f0",
              backgroundColor: hovered ? "white" : "#c770f0",
              color: hovered ? "#c770f0" : "white",
              fontWeight: "bold",
              textDecoration: "none",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
          >
            View Project
          </button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
