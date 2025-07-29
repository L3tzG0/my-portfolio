import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Youtube, Mail, Phone, Linkedin, Instagram} from 'lucide-react';
import './App.css';

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">Dhruv Menghani</div>
          <ul className="nav-links">
            <li>
              <a className="nav-link" onClick={() => scrollToSection('home')}>
                Home
              </a>
            </li>
            <li>
              <a className="nav-link" onClick={() => scrollToSection('about')}>
                About
              </a>
            </li>
            <li>
              <a className="nav-link" onClick={() => scrollToSection('skills')}>
                Skills
              </a>
            </li>
            <li>
              <a className="nav-link" onClick={() => scrollToSection('portfolio')}>
                Portfolio
              </a>
            </li>
            <li>
              <a className="nav-link" onClick={() => scrollToSection('contact')}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <h1 className="hero-title">Hello, I'm Dhruv Menghani</h1>
          <p className="hero-subtitle">Learning. Building. Innovating with AI.</p>
          <button 
            className="scroll-button"
            onClick={() => scrollToSection('about')}
          >
            <ChevronDown size={24} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section section-alt">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <br />
              <p>Highly motivated Bachelor of Informatics student with a strong passion for Artificial Intelligence and cutting-edge technologies. Proficient in Python, Java, and web development, with hands-on experience in building diverse AI/ML projects. Eager to apply robust technical expertise and a proactive learning approach to impactful roles in the tech industry.</p>
              <br />
              <p>Outside of tech, I enjoy video editing as a creative outlet, often working on personal edits that sharpen both my storytelling and visual design skills.</p>
            </div>
            <div className="about-image">
              <div className="profile-pic">
                <img src="src\assets\img.jpg" alt="Your Photo" className="profile-image"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-card-accent"></div>
              <h3>Programming Languages</h3>
              <p>Proficient in Python, Java, JavaScript, HTML, CSS, SQL, PHP</p>
            </div>
            <div className="skill-card">
              <div className="skill-card-accent"></div>
              <h3>AI & ML</h3>
              <p>Computer Vision (CV), Natural Language Processing (NLP), TensorFlow, Keras, scikit-learn</p>
            </div>
            <div className="skill-card">
              <div className="skill-card-accent"></div>
              <h3>Web & App Development</h3>
              <p>React, Node.js, Flask, Firebase, MySQL, MongoDB, Android Studio</p>
            </div>
            <div className="skill-card">
              <div className="skill-card-accent"></div>
              <h3>Tools & Platforms</h3>
              <p>Google Colab, VS Code, XAMPP, Git, Docker (basic), Linux CLI (basic), AWS EC2 (introductory)</p>
            </div>
            <div className="skill-card">
              <div className="skill-card-accent"></div>
              <h3>Creative Skills</h3>
              <p>Video Editing, Photo Editing, Public Speaking, Documentation</p>
            </div>
            <div className="skill-card">
              <div className="skill-card-accent"></div>
              <h3>Languages</h3>
              <p>Indonesian (Native), English (Intermediate), Mandarin (Beginner)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section section-alt">
        <div className="container">
          <h2 className="section-title">My Portfolio</h2>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <div className="portfolio-image">
                <img src="src\assets\project1.png" alt="Your Photo" className="portofolio-image"/>
              </div>
              <div className="portfolio-content">
                <h3>Calorie Estimation App</h3>
                <p>This app predicts the type of food in an uploaded image using a YOLO object detection model, then estimates its calorie content using Gemini (Google Generative AI). Madu, the pixel-perfect cat mascot, brings nutritional insights with cuteness and charm 🐱✨</p>
                <div className="portfolio-links">
                  <a href="https://github.com/L3tzG0/food_classification_app" className="portfolio-link">
                    <Github size={16} />
                    GitHub
                  </a>
                  <a href="#" className="portfolio-link">
                    <Youtube size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image">Project Screenshot</div>
              <div className="portfolio-content">
                <h3>Mobile App Design</h3>
                <p>UI/UX design for a fitness tracking mobile application, including user research, wireframing, and high-fidelity prototypes.</p>
                <div className="portfolio-links">
                  <a href="#" className="portfolio-link">
                    <Github size={16} />
                    GitHub
                  </a>
                  <a href="#" className="portfolio-link">
                    <Youtube size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image">Project Screenshot</div>
              <div className="portfolio-content">
                <h3>Dashboard Analytics</h3>
                <p>Interactive data visualization dashboard for business analytics, built with D3.js and featuring real-time data updates.</p>
                <div className="portfolio-links">
                  <a href="#" className="portfolio-link">
                    <Github size={16} />
                    GitHub
                  </a>
                  <a href="#" className="portfolio-link">
                    <Youtube size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Let's Work Together</h2>
          <div className="contact-content">
            <p>I'm always excited to work on new projects and collaborate with amazing people. Whether you have a project in mind or just want to chat, feel free to reach out!</p>
            <div className="contact-info space-y-4">
              <div className="contact-item flex items-center space-x-4">
                <a href="https://instagram.com/drup.m_" target="_blank" rel="noopener noreferrer"><Instagram size={24} className="contact-icon" /></a>
                <h4>Instagram</h4>
                <p>@drup.m_</p>
              </div>
              <div className="contact-item flex items-center space-x-4">
                <a href="https://www.linkedin.com/in/dhruvmenghani" target="_blank" rel="noopener noreferrer"><Linkedin size={24} className="contact-icon" /></a>
                <h4>LinkedIn</h4>
                <p>dhruvmenghani</p>
              </div>
              <div className="contact-item flex items-center space-x-4">
                <a href="https://github.com/L3tzG0" target="_blank" rel="noopener noreferrer"><Github size={24} className="contact-icon" /></a>
                <h4>Github</h4>
                <p>L3tzG0</p>
              </div>
              <div className="contact-item flex items-center space-x-4">
                <Mail size={24} className="contact-icon" />
                <h4>Email</h4>
                <p className="text-sm text-gray-600 break-all">callmedrup@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Dhruv Menghani. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;