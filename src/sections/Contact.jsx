import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

function Contact() {

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);


    const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_i2n8soo",
        "template_bh8s79j",
        formRef.current,
        "15SAPerP-vG6zwjES"
      )
      .then(
        () => {
          // console.log("SUCCESS:", result.text);
          setSuccess(true);
          setLoading(false);
          formRef.current.reset();
        },
        () => {
          // console.error("FAILED:", error.text);
          
          setLoading(false);
        }
      );
  };

  return (
    
    <section className="contact" id="contact">
      <h2 className="section-title">
        Let’s <span className="highlight">Connect</span>
      </h2>

      <div className="contact-container">
        {/* Left side */}
        <div className="contact-info">
          <h3>Let’s connect</h3>
          <p>
            I’m open to internships, junior developer roles, and freelance
            opportunities.
          </p>

          <div className="info-item">
            <span>📧</span>
            <p>varshakvas@gmail.com</p>
          </div>

          <div className="info-item">
            <span>📍</span>
            <p>India</p>
          </div>

          <div className="info-item">
            <span>💼</span>
            <p>Open to Work</p>
          </div>
        </div>

        {/* Right side */}
        <form ref={formRef} onSubmit={sendEmail} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
        ></textarea>

        {/* 👇 MUST BE submit */}
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
        {success && (
        <p className="success-msg">✅ Message sent successfully!</p>
         )}
      </form>
      </div>
    </section>
  );
}

export default Contact;
