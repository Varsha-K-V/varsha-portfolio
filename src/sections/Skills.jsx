import "../styles/Skills.css";

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills-container">
        <div className="skill-card">
          <h3>Frontend</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Responsive Design</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Backend</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>REST APIs</li>
            <li>Authentication</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Database</h3>
          <ul>
            <li>MongoDB</li>
            <li>Mongoose</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Tools</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>Postman</li>
            <li>VS Code</li>
            <li>Figma</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
