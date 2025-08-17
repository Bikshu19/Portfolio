import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function CardExample() {
  return (
    <div 
      className="card mx-auto" 
      style={{ 
        maxWidth: "800px", 
        backgroundColor: "transparent", 
        border: "none" 
      }}
    >
      <div className="card-body text-center">
        <h5 
          className="card-title" 
          style={{ 
            fontWeight: "bold", 
            color: "#1f2937", 
            whiteSpace: "nowrap", 
            fontSize: "clamp(1.5rem, 3vw, 2.2rem)" 
          }}
        >
          💼Professional Journey
        </h5>
        <p className="card-text" style={{ textAlign: "justify", color: "#eaeaea",fontWeight:'bold' }}>
          I’m a Computer Science student currently pursuing a Bachelor of Technology 
          at NRI Institute of Technology. I have a strong interest in full-stack web 
          development and problem-solving, with hands-on experience in building 
          responsive web applications using modern technologies.
          <br /><br />
          </p>
        <p className="card-text" style={{ textAlign: "justify", color: "#eaeaea",fontWeight:'bold' }}>
          I’m proficient in Python, JavaScript, React.js, Node.js, and MongoDB, and 
          I enjoy turning ideas into real-world applications. Beyond coding, I value 
          teamwork, effective communication, and critical thinking.
          <br /><br />
          </p>
          <p className="card-text" style={{ textAlign: "justify", color: "#eaeaea",fontWeight:'bold' }}>
          I’m actively seeking opportunities such as internships or collaborative 
          projects where I can apply my skills, gain industry experience, and 
          continue growing as a developer.
          <br /><br />
          </p>

      </div>
    </div>
  );
}
