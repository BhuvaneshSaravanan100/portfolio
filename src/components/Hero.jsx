import { Container, Row, Col, Button } from 'react-bootstrap';

function Hero() {
  return (
    <section id="hero" className="hero-section text-center text-white pt-20">
      
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={8} className="mx-auto hero-content-animate">
            <h1 className="display-3 fw-bold mb-4" style={{marginTop: '60px'}}>
              Full-Stack Java Developer
            </h1>

            <p className="lead mb-4">
              Building modern web applications with{' '}
              <span className="text-warning">React</span>,{' '}
              <span className="text-warning">Spring Boot</span> &{' '}
              <span className="text-warning">MySQL</span>
            </p>
             <br/>
              <br/>
               <br/>
            <div className="mb-5 d-flex justify-content-center">
              <a
                href="/resume.pdf"
                download
                className="btn btn-light btn-lg px-5 py-3 fw-bold glass-card shadow-lg hover:shadow-xl transition-all"
              >
                📄 Download Resume
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
