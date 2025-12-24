import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function NavbarComponent() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      bg="transparent"
      expand="lg"
      expanded={expanded}
      className="glass-navbar fixed-top py-3"
    >
      <Container>
        <Navbar.Brand
          href="#hero"
          className="fs-3 fw-bold text-white brand-glow"
        >
          Bhuvaneshwaran S
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(prev => !prev)}
          className="border-0 nav-toggle-custom"
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center gap-2">
            <Nav.Link
              href="#hero"
              className="nav-link-custom mx-1"
              onClick={() => setExpanded(false)}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className="nav-link-custom mx-1"
              onClick={() => setExpanded(false)}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className="nav-link-custom mx-1"
              onClick={() => setExpanded(false)}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className="nav-link-custom mx-1"
              onClick={() => setExpanded(false)}
            >
              Contact
            </Nav.Link>

            <div className="d-flex mt-3 mt-lg-0 ms-lg-3 gap-3 social-links">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
