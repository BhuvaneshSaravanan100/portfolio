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
       
      </Container>
    </section>
  );
}

export default About;
