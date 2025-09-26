import { useState } from "react";
import "./Skills.css"; // you’ll make this next

export default function Skills() {
  const skills = [
    {
      title: "HTML5",
      description:
        "Strong understanding of semantic HTML5 elements, accessibility, and building clean, well-structured pages.",
    },
    {
      title: "CSS",
      description:
        "Modern layouts with Flexbox/Grid, responsive design, animations, and cross-browser compatibility.",
    },
    {
      title: "JavaScript",
      description:
        "ES6+ features, DOM manipulation, and creating dynamic, interactive web apps.",
    },
    {
      title: "React",
      description:
        "Hooks, state management, reusable components, and routing for single-page applications.",
    },
    {
      title: "Node.js",
      description:
        "Server-side development with Express, REST APIs, and connecting to databases.",
    },
    {
      title: "Responsive Web Design & Layout",
      description:
        "Designing sites that look great on phones, tablets, and desktops using fluid layouts and media queries.",
    },
    {
      title: "Git & GitHub",
      description:
        "Version control, branching, pull requests, and collaborating on open-source or team projects.",
    },
    {
      title: "Netlify Deployment",
      description:
        "Fast, reliable hosting and continuous deployment from Git repositories.",
    },
    {
      title: "Tailwind CSS",
      description:
        "Utility-first CSS framework for rapidly building custom, responsive UIs.",
    },
    {
      title: "Bootstrap",
      description:
        "Prebuilt responsive components and a mobile-first grid system for quick prototyping.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="skills-section">
      <h1 className="skills-title">My Skills</h1>
      <div className="skills-accordion">
        {skills.map((skill, index) => (
          <div key={index} className="accordion-item">
            <button
              className="accordion-header"
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              <span>{skill.title}</span>
              <span className="arrow">{activeIndex === index ? "▲" : "▼"}</span>
            </button>
            {activeIndex === index && (
              <div className="accordion-content">{skill.description}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
