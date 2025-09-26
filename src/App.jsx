import './index.css'
import Typing from './assets/components/Typing.jsx';
import ContactForm from './assets/components/ContactForm.jsx';
import userevealonscroll from './assets/components/userevealonscroll.jsx';
import { useState,useEffect,useRef } from 'react';
import Skills from './assets/components/Skills.jsx';



function App() {
 
  const [navOpen, setNavOpen] = useState(false);
  userevealonscroll();
  return (
    <>
    <div className="body">
      
  <header>
    <nav className="navbar">
      <h2 className="logo"> Adebisi  Mudashiru</h2>
      {/* <input type="checkbox" id="menu-toggle" classname="menu-toggle"/>
        <label htmlFor="menu-toggle" className="hamburger"> */}
    <div className="hamburger"
      onClick={() => setNavOpen(!navOpen)}>☰</div>


      <ul className={`nav-links ${navOpen ? 'active' : ''}`}>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
      
    </nav>
  </header>

  <section className="hero">
    <div className="img"><img src="/PFPP.png" alt=""/></div>
    <div className="words">
    <h1>Hello, I'm <span className="highlight">Adebisi</span></h1>
    <p> I'm a very skilled and resourcefull Frontend developer</p>
    <p>
          I am <span className="highlight">Adebisi Mudashiru</span>, a passionate and resourceful
          frontend developer. I love crafting sleek, responsive, and user-friendly websites
          with modern designs. My mission is to turn ideas into beautiful digital experiences.
        </p>
        <p>
          I’m constantly learning new tools and improving my craft, aiming to combine creativity
          with clean code. When I’m not coding, you’ll probably find me exploring design trends,
          reading tech blogs, or experimenting with new projects.
        </p>
    <a href="projects.html" className="btn">See My Work</a></div>
  </section>
   <section className="about">
  <div className="about-container">
    <div className="about-img reveal">
      <img src="/IMG_9196.jpg" alt="Profile Picture" />
    </div>
    <div className="about-text reveal">
      <h1>About Me</h1>

      <p className="typing"></p>

      <p>
        Hello 👋 I’m <span className="highlight">Adebisi Mudashiru</span>, a frontend developer
        with a love for building modern, interactive, and accessible web applications.
        I enjoy transforming ideas into smooth digital products that feel intuitive and engaging.
      </p>
      <p>
        Beyond writing code, I’m always exploring new technologies, improving my design skills,
        and learning how to make the web faster and more user-friendly. I’m excited about
        solving problems and bringing creativity into tech.
      </p>
      <a href="projects.html" className="btn">See My Projects</a>
    </div>
  </div>
</section>

  <Skills />


  <section className="projects">
    <h1>My Projects</h1>
    <p className="projects-subtitle">Here are some of my works showcasing creativity & functionality.</p>

    <div className="projects-grid">
      <div className="project-card reveal">
        <img src="/Screenshot 2025-09-24 224927.png" alt="Project 1"/>
        <div className="project-info">
          <h2>ML Autos</h2>
          <p>An e-commerce website for both brand new and fairly used cars built with HTML, CSS, and JavaScript.</p>
          <a href="https://mlautos.netlify.app/" target="_blank" className="btn">View Project</a>
        </div>
      </div>

      <div className="project-card reveal">
        <img src="/ptflo.png" alt="Project 1"/>
        <div className="project-info">
          <h2>Portfolio Website</h2>
          <p>A personal portfolio website built with HTML, CSS, and JavaScript.</p>
          <a href="https://adebisi2025.netlify.app/" target="_blank" className="btn">View Project</a>
        </div>
      </div>

      
      <div className="project-card reveal">
        <img src="/bkery.png" alt="Project 2"/>
        <div className="project-info">
          <h2>Bakery Webpage</h2>
          <p>A modern webpage design for a bakery made using html and css.</p>
          <a href="https://bkery.netlify.app/" target="_blank" className="btn">View Project</a>
        </div>
      </div>

      <div className="project-card reveal">
        <img src="/prime.png" alt="Project 3"/>
        <div className="project-info">
          <h2>Prime</h2>
          <p>A contact page made using html and css.</p>
          <a href="https://pr1me.netlify.app/" target="_blank" className="btn">View Project</a>
        </div>
      </div>

      <div className="project-card reveal">
        <img src="/icon.png" alt="project 4"/>
        <div className="project-info">
          <h2>Icon</h2>
          <p>a single page website built with html and css</p>
          <a href="https://projectkidsapp.netlify.app/" target="_blank" className="btn">View Project</a>
        </div>
      </div>

      <div className="project-card reveal">
        <img src="/ballett.png" alt="project 5"/>
        <div className="project-info">
          <h2>Ballet</h2>
          <p>a single page ballet website built with html and css</p>
          <a href="https://ballett.netlify.app/" target="_blank" className="btn">View Project</a>
        </div>
      </div>

    </div>
  </section>   

  <section className="contact">
    <h1>Contact Me</h1>
    <p className="contact-subtitle">Got a project idea or just want to say hi? Fill out the form below 👇</p>
     <div className="contact-info">
    <p><strong>Email:</strong> adebisimudashiru1@gmail.com</p>
    <p><strong>Phone:</strong> +234 903 771 6168</p>
    <p>
      <strong>LinkedIn:</strong>{''}
      <a 
        href="https://www.linkedin.com/in/adebisi-mudashiru-677986380/">
        linkedin.com/in/adebisi-mudashiru
      </a>
    </p>
  </div>
    <form className="contact-form" id="contactForm">
      <div className="form-group">
        <input type="text" id="name" placeholder="Your Name" required/>
      </div>
      <div className="form-group">
        <input type="email" id="email" placeholder="Your Email" required/>
      </div>
      <div className="form-group">
        <textarea id="message" placeholder="Your Message" rows="5" required></textarea>
      </div>
      <button type="submit" className="btn">Send Message</button>
      <p id="formMessage" className="form-message"></p>
    </form>
  </section>
  </div>
    </>
  )
}
export default App
