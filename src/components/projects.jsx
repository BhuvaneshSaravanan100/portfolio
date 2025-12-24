import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const projects = [
  {
    title: 'Weather App',
    desc: 'A fully responsive weather application that displays real-time climate data using OpenWeather API. Built with modern React components and clean UI.',
    github: 'https://github.com/BhuvaneshSaravanan100/WeatherApp',
    live: 'https://bhuvi-weather-app.netlify.app/'
  },
  {
    title: 'Ghibli Art',
    desc: 'AI-based Studio Ghibli artwork generator using Stability API with React frontend and Spring Boot backend.',
    github: 'https://github.com/BhuvaneshSaravanan100/Ghibli_Art_Generator-Front-End',
    live: 'https://ghibli-front-end.netlify.app/'
  },
  {
    title: 'Expense Tracker-Ongoing',
    desc: 'Full-stack expense tracking app using Spring Boot REST API, React UI, and MySQL database.',
    github: 'https://github.com/BhuvaneshSaravanan100/portfolio',
    live: ''
  }
];

function Projects() {
  return (
    <section id="projects" className="py-5 bg-dark">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="text-white fw-bold">Featured Projects</h2>
            <p className="text-secondary">
              Hand-picked projects showcasing my skills
            </p>
          </Col>
        </Row>

        <Row>
          {projects.map((project, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <Card className="h-100 bg-dark text-white border-secondary shadow">
                <Card.Body>
                  <Card.Title className="fw-semibold">
                    {project.title}
                  </Card.Title>

                  <Card.Text className="text-light">
                    {project.desc}
                  </Card.Text>

                  <div className="d-flex gap-3 justify-content-center mt-4">
                    <a
                      href={project.github}
                      className="btn btn-outline-light"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faGithub} className="me-2" />
                      Code
                    </a>

                    <a
                      href={project.live}
                      className="btn btn-light"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} className="me-2" />
                      Live
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
