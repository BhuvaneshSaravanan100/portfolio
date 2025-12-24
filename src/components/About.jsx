import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <section id="about" className="py-20">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <h2 className="display-4 fw-bold mb-4">About Me</h2>
            <p className="lead text-slate-300">
              Junior Full-Stack Developer from Narnaund, Haryana passionate about creating scalable web applications.
            </p>
          </Col>
        </Row>
        <Row className="glass-card p-5 mx-auto" style={{maxWidth: '800px'}}>
          <Col md={4} className="text-center mb-4">
            <div className="display-1 text-purple-400 mb-3">100+</div>
            <h5>Projects Completed</h5>
          </Col>
          <Col md={4} className="text-center mb-4">
            <div className="display-1 text-purple-400 mb-3">2+</div>
            <h5>Years Experience</h5>
          </Col>
          <Col md={4} className="text-center mb-4">
            <div className="display-1 text-purple-400 mb-3">24/7</div>
            <h5>Available</h5>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
