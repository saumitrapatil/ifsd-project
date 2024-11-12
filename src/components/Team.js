import React from "react";
import { Container, Row, Col, Card, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import aryanPhoto from "../assets/aryanPhoto.jpeg";
import saumitraPhoto from "../assets/saumitraPhoto.jpg";
import devanshuPhoto from "../assets/devanshuPhoto.jpeg";
import pawanPhoto from "../assets/pawanPhoto.jpeg";
import prathamPhoto from "../assets/prathamPhoto.jpeg";
import devanshPhoto from "../assets/devanshPhoto.jpg";

const Team = () => {
  // Sample team data - replace with your actual team data
  const teamMembers = [
    {
      id: 1,
      name: "Saumitra Patil",

      image: saumitraPhoto,
    },
    {
      id: 2,
      name: "Aryan Paratakke",

      image: aryanPhoto,
    },
    {
      id: 3,
      name: "Devanshu Sawarkar",

      image: devanshuPhoto,
    },
    {
      id: 4,
      name: "Pratham Agrawal",

      image: prathamPhoto,
    },
    {
      id: 5,
      name: "Pawan Hete",

      image: pawanPhoto,
    },
    {
      id: 6,
      name: "Devansh Motghare",

      image: devanshPhoto,
    },
  ];

  return (
    <div className="min-h-screen bg-light">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">ExpenseTracker</a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/app">Go to app</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/team">Team</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Container className="py-5">
        <h1 className="text-center mb-5">Our Team</h1>
        <Row className="g-4">
          {teamMembers.map((member) => (
            <Col key={member.id} xs={12} sm={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm hover-shadow transition-shadow">
                <div className="text-center pt-4">
                  <div
                    className="rounded-circle mx-auto mb-3 overflow-hidden"
                    style={{ width: "150px", height: "150px" }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div>
                </div>
                <Card.Body className="text-center">
                  <Card.Title className="mb-1">{member.name}</Card.Title>
                  <Card.Text className="text-muted">{member.role}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Team;
