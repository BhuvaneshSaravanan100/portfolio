import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <section id="about" className="py-20">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <h2 className="display-4 fw-bold mb-4">About Me</h2>
            <p className="lead text-slate-300">
           Motivated Junior Full Stack Developer with hands-on experience in Java, Spring Boot, and React.js. Proven ability to build dynamic web applications from concept to deployment, utilizing REST APIs and MySQL. Committed to writing efficient, maintainable code and eager to apply problem-solving skills in a fast-paced development environment.
            </p>
          </Col>
        </Row>
       
      </Container>
    </section>
  );
}

export default About;
