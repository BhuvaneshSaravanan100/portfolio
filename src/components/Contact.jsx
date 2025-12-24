import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
      .then(
        (result) => {
          alert('Message sent successfully ✅');
          form.current.reset();
        },
        (error) => {
          alert('Something went wrong ❌');
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-20">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <h2 className="display-4 fw-bold mb-4">Get In Touch</h2>
            <p className="lead text-slate-300">Ready to discuss your next project?</p>
          </Col>
        </Row>

        <Row>
          <Col lg={6} className="mb-4">
            <div className="glass-card p-5 h-100">
              <h4 className="mb-4">Contact Information</h4>

              <div className="d-flex align-items-center mb-4">
                <FontAwesomeIcon icon={faEnvelope} className="text-2xl me-3 text-purple-400" />
                <div>
                  <h6>your.email@gmail.com</h6>
                  <p className="text-slate-400 mb-0">Send me a message</p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <FontAwesomeIcon icon={faPhone} className="text-2xl me-3 text-purple-400" />
                <div>
                  <h6>+91-XXXXXXXXXX</h6>
                  <p className="text-slate-400 mb-0">Call anytime</p>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-2xl me-3 text-purple-400" />
                <div>
                  <h6>Narnaund, Haryana</h6>
                  <p className="text-slate-400 mb-0">India</p>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={6} className="mb-4">
            <div className="glass-card p-5">
              <Form ref={form} onSubmit={sendEmail}>
                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold">Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    required
                    className="glass-card p-3"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold">Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    required
                    className="glass-card p-3"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold">Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    required
                    className="glass-card p-3"
                  />
                </Form.Group>

                <Button type="submit" variant="light" size="lg" className="w-100 fw-bold py-3">
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
