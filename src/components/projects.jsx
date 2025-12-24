import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';


const projects = [
 
  {
    title: 'Weather App',
    desc: 'Full-stack Todo app with React, Spring Boot, MySQL & JWT auth',
    github: 'https://bhuvi-weather-app.netlify.app/',  // Change YOUR_USERNAME
    live: 'https://bhuvi-weather-app.netlify.app/'     // Same for now
  },
  {
    title: 'Weather Dashboard', 
    desc: 'Real-time weather app with forecasts & API integration',
    github: 'https://github.com/YOUR_USERNAME/weather-app',
    live: 'https://github.com/YOUR_USERNAME/weather-app'
  },
  {
    title: 'Portfolio Website',
    desc: 'This responsive React + Bootstrap portfolio',
    github: 'https://github.com/YOUR_USERNAME/portfolio', 
    live: window.location.href  // Current page
  }
];



function Projects() {
  return (
    <section id="projects" className="py-20">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <h2 className="display-4 fw-bold mb-4">Featured Projects</h2>
            <p className="lead text-slate-300">Hand-picked projects showcasing my skills</p>
          </Col>
        </Row>
        <Row>
          {projects.map((project, index) => (
            <Col lg={4} md={6} key={index} className="mb-5">
              <Card className="glass-card h-100 p-4 text-center">
                <Card.Body>
                  <Card.Title className="h4 mb-3">{project.title}</Card.Title>
                  <Card.Text className="text-slate-300 mb-4">{project.desc}</Card.Text>
                  <div className="d-flex gap-3 justify-content-center">
                    <a href={project.github} className="btn btn-outline-light">
                      <FontAwesomeIcon icon={faGithub} className="me-2" /> Code
                    </a>
                    <a href={project.live} className="btn btn-light">
                      <FontAwesomeIcon icon={faExternalLinkAlt} className="me-2" /> Live Demo
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
