import { Container, Row, Col } from 'react-bootstrap';

const skills = [
  { name: 'Html', level: 85 },
  { name: 'JavaScript', level: 70 },
  { name: 'Spring Boot', level: 80 },
  { name: 'Java', level: 88 },
  { name: 'MySQL', level: 75 },
  { name: 'Bootstrap', level: 80 },
  { name: 'Tailwind CSS', level: 70 },
  { name: 'JWT Auth', level: 72 },
  { name: 'REST APIs', level: 85 },
  { name: 'Git', level: 78 }
];

function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <h2 className="display-4 fw-bold mb-4">Tech Stack</h2>
            <p className="lead text-slate-300">
              Modern technologies I work with
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={8}>
            {skills.map((skill, index) => (
              <div
                key={index}
                className="mb-3 text-start skill-bar-wrapper animate__animated animate__fadeInUp"
                style={{ animationDelay: `${index * 0.07}s` }}
              >
                <div className="d-flex justify-content-between mb-1">
                  <span className="fw-semibold text-white">
                    {skill.name}
                  </span>
                  <span className="text-slate-300">{skill.level}%</span>
                </div>

                <div className="skill-bar bg-slate-800 rounded-pill overflow-hidden">
                  <div
                    className="skill-bar-fill"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
