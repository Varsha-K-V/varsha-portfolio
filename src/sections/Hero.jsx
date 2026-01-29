import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-overlay">
        <div className="hero-container">
        <div className="hero-content">
          <h1>
            Hi, I’m <span>Varsha K V</span>
          </h1>

          <h2>MERN Stack Developer</h2>

          <p>
            I build full-stack web applications using React, Node.js, Express,
            and MongoDB with clean UI and scalable backend architecture.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="/resume.pdf" className="btn secondary" download>
              Download Resume
            </a>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Hero;
