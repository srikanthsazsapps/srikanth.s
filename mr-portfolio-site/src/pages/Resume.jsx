import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="resume section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>
          Driven and solutions-oriented developer with a focus on delivering high-quality,
           maintainable code. Adept at overcoming technical challenges and ensuring seamless 
           user experiences. Known for strong collaboration, problem-solving skills, and a 
           commitment to continuous learning and improvement.
        </p>
      </div>

      <div className="container" style={{ padding: '0 50px' }} >
        <div className="row" >
          {/* Left Column */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h5>Srikanth S</h5>
              <h5>
                <em>
                 Innovative and deadline-driven Full Stack Developer with 1+ year 
                 of experience building and maintaining responsive web applications.
                  Proficient in developing user-centered features using React on the front 
                  end and implementing robust backend functionality. Skilled in taking projects 
                  from concept through deployment with attention to performance and scalability.
                </em>
            </h5>
              {/* <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul> */}
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h5>PAAVAI COLLEGE OF ENGINEERING</h5>
              <h5>2020 - 2024</h5>
              <h5><em>Completed Bachelors in Computer Science and Engineering with 7.32 CGPA</em></h5>
              <p>
              </p>
            </div>

            
            <div className="resume-item">
              <h4></h4>
              <h5>CERTIFICATIONS</h5>
              <p><em></em></p>
              <ul>
                <li>Completed 3D PRINTING in FutureSkills Prime.</li>
                <li>Completed DIGITAL 101 JOURNEY in Future skills Prime.</li>
                <li>Completed LINUX in Red Hat through Naan Mudhalvan.</li>
                <li>Completed FRONT END DEVELOPMENT - HTML in Great Learning </li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">PROJECTS</h3>
            <div className="resume-item">
              <h5>ENCRYPTED HONEY PASSWORD AUTHENTICATION FOR ONLINE BANKING SYSTEM </h5>
              <h5>Built using pyCharm MySQL server, and python</h5>
              <p><em></em></p>
              <ul>
         The proposed system is based on the domain cyber security where the security framework
is designed to fortify the authentication and password protection mechanism with online
banking application. It introduces a multilayered approach to address the escalating
challenges of cyber security. The password storage mechanism incorporates honey words,
creating deceptive decoy passwords alongside real ones. The honey passwords are
safeguarded through AES encryption, a robust algorithm providing a formidable defense
against unauthorized access.
              </ul>
            </div>
          <h3 className="resume-title">WORK EXPERIENCE</h3>
           <div className="resume-item">
          
              
              <h5>Software Developer</h5>
              <h5>Sazs App Private Limited</h5>
              <h5>2024 – 2025 (1 year)</h5>
             <ul>
           <li>  Developed and maintained scalable web applications using React.js and Node.js.</li>

<li>Implemented RESTful APIs to support seamless integration between frontend and backend services.</li>

<li>Collaborated with UI/UX designers to create interactive and user-friendly interfaces.</li>

<li>Participated in daily Agile stand-ups and contributed to sprint planning, code reviews, and releases.</li>

<li>Integrated third-party services (e.g., Firebase, Stripe) to extend application functionality.</li>

<li>Improved app performance by optimizing code and reducing load times by 25%.</li>
</ul>
            </div>
          </div>
        </div>
      </div>
      {/* Download Resume Button */}
<div className="download-resume">
  <a href="../../public/Srikanth_Resume.pdf" download className="btn-download">
    Download Resume
  </a>
</div>

    </section>
  );
};

export default Resume;
