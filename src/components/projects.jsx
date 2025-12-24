import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';


const projects = [
  {
    title: 'Weather App',
    desc: 'A fully responsive weather application that displays real-time climate data using OpenWeather API. Built with modern React components and clean UI for fast and accurate weather updates.',
    github: 'https://github.com/BhuvaneshSaravanan100/WeatherApp',
    live: 'https://bhuvi-weather-app.netlify.app/'
  },
  {
    title: 'Ghibli Art',
    desc: 'An engaging web app that generates Studio-Ghibli-style AI artwork using Stability API. Features a smooth React UI with a Spring Boot backend handling secure API communication.',
    github: 'https://github.com/BhuvaneshSaravanan100/Ghibli_Art_Generator-Front-End',
    live: 'https://ghibli-front-end.netlify.app/'
  },
  {
    title: 'Expense Tracker (Ongoing)',
    desc: 'A full-stack expense management tool for tracking daily spending and category-wise analytics. Developed with Spring Boot REST APIs, React UI, and MySQL for structured data storage.',
    github: 'https://github.com/BhuvaneshSaravanan100/portfolio',
    live: '#'
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
