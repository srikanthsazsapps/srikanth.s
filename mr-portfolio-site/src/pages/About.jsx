import React from 'react';
import './About.css';
import profileImg from '../assets/street.jpg';

function About() {
  return (
    <section id="about" className="about section">
      {/* Section Title */}
      
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <div className="underline"></div>
        <p>
          Proven ability to learn new technologies quickly and apply them to real-world problems.
          Seeking an entry-level position where I can use my skills and knowledge to contribute to a
          team and make a positive impact on the company.
        </p>
      </div>
     


      {/* About Content */}
      
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <section className="about-content">
                <div className="row gy-4 justify-content-center align-items-center">
          
          {/* Profile Image */}
          <div className="col-lg-4 text-center">
            <img src={profileImg} className="about-img img-fluid rounded shadow" alt="Profile" />
          </div>
          </div>

          {/* Info Content */}
<div className="col-lg-8 content" style={{ paddingLeft: '100px' }}>
              <h2 className="fw-bold"> Software  Developer.</h2>
            <p className="fst-italic">
             Enthusiastic recent graduate with a degree in Computer Science and a passion for software  development 
            </p>

            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday  :</strong> <span>05-03-2003</span></li>
                  {/* <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.srikanth.com</span></li> */}
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone :</strong> <span>+91 9629795601</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City     :</strong> <span>Salem, Tamil Nadu</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Email   :</strong> <span>srikanthssk2003@gmail.com</span></li>

                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age   :</strong> <span>22</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree  :</strong> <span>B.E. Computer Science</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance   :</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>

          
          </div>
          
        </section>
          <p className="mt-3" style={{ padding: ' 0 100px' }}>
            We are committed to providing exceptional service through dedication, integrity, and attention to detail.
Our team works diligently to ensure that each project is delivered with precision and excellence.
We believe in building strong, lasting relationships with our clients by consistently exceeding expectations.
Innovation, professionalism, and collaboration are at the heart of everything we do.
            </p>
        </div>
       
    
      
    </section>
  );
}

export default About;
