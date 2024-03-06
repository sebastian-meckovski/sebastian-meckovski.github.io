import React from "react";
import sebImage from "../assets/PXL_20240226_132844396.NIGHT.jpg";
import { Links } from "../components/Links";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faRotate,
  faServer,
  faVial,
} from "@fortawesome/free-solid-svg-icons";
import { ContentCard } from "seb-components-library";
import { HashLink } from "react-router-hash-link";

export const MainPage = () => {
  return (
    <>
      <section id="/">
        <div className="section-container">
          <img className="about-me-image" src={sebImage} alt="Sebastian" />
          <h1>Hi, Seb here</h1>
          <h2 className="placeholder">
            I am a&nbsp;
            <span className="typewriter"></span>
          </h2>
          <p>
            A versatile software developer with 3 years of experience in
            frontend, backend, testing, and web technologies. Passionate about
            learning and implementing new technologies.
          </p>
          <Links />
          <div>
            <a className="link-button" href="#contact">
              Hire Me
            </a>
          </div>
        </div>
      </section>
      <section id="about-me">
        <div className="section-container">
          <article className="about-me-left">
            <div className="About-me-header">
              <h1>About</h1>
              <h1>Me</h1>
            </div>
            <span className="typewriter"></span>
            <p>
              With a passion for crafting seamless digital experiences, I’ve
              explored diverse industries — e-commerce, private healthcare, and
              finance. My expertise spans both frontend and backend development.
              On the frontend, I specialize in React (Typescript and
              JavaScript), creating highly interactive web applications.
            </p>
            <p>
              Meanwhile, on the backend, I wield C# and ASP.NET Core Web API,
              building robust APIs and ensuring data access and manipulation. I
              thrive in collaborative environments and am always eager to learn
              and implement new technologies.
            </p>
            <div style={{ margin: "0.75rem 0" }}>
              <Link to="about-me" className="link-button">
                Read More
              </Link>
            </div>
          </article>
        </div>
        <img className="about-me-image" src={sebImage} alt="Sebastian" />
      </section>
      <section id="expertise">
        <div className="section-container-left-align">
          <h1>Expertise</h1>
          <div className="contentCards-container">
            <ContentCard>
              <FontAwesomeIcon icon={faCode} />
              <h1>Web Development</h1>
              <p>
                Crafting interactive web experiences using JS, HTML5, and CSS3.
                Integrating RESTful APIs for seamless functionality.
              </p>
              <HashLink className="link-button" to="/expertise#">
                Read more
              </HashLink>
            </ContentCard>
            <ContentCard>
              <FontAwesomeIcon icon={faServer} />
              <h1>Back-end Development</h1>
              <p>
                Building robust APIs with ASP.NET Core and Entity Framework
                Core. Manipulating data efficiently for web applications.
              </p>
              <HashLink
                className="link-button"
                to="/expertise#back-end-development"
              >
                Read more
              </HashLink>
            </ContentCard>
            <ContentCard>
              <FontAwesomeIcon icon={faVial} />
              <h1>Testing</h1>
              <p>
                Ensuring code quality with Cypress and Jest. Rigorous unit,
                integration, and end-to-end testing for reliable software.
              </p>
              <HashLink className="link-button" to="/expertise#testing">
                Read more
              </HashLink>
            </ContentCard>
            <ContentCard>
              <FontAwesomeIcon icon={faRotate} />
              <h1>CI/CD</h1>
              <p>
                Automating deployment pipelines using GitLab CI/CD. Streamlining
                development-to-production workflows.
              </p>
              <HashLink className="link-button" to="/expertise#ci-cd">
                Read more
              </HashLink>
            </ContentCard>
          </div>
        </div>
      </section>
      <section id="portfolio">
        <div className="section-container-left-align">
          <h1>Portfolio</h1>
          <div className="contentCards-container">
            <ContentCard>
              <h1>Currency Converter</h1>
              <p>
                A ReactJS currency converter app that fetches real-time exchange
                rates, allowing users to convert between different currencies.
              </p>
              <HashLink className="link-button" to="/portfolio#">
                Read more
              </HashLink>
            </ContentCard>
            <ContentCard>
              <h1>Greenspark Product Cards</h1>
              <HashLink
                className="link-button"
                to="/portfolio#greenspark-product-cards"
              >
                Read more
              </HashLink>
            </ContentCard>
            <ContentCard>
              <h1>Shape Lamp</h1>
              <HashLink className="link-button" to="/portfolio#shape-lamp">
                Read more
              </HashLink>
            </ContentCard>
            <ContentCard>
              <h1>CNC File Editor</h1>
              <HashLink className="link-button" to="/portfolio#cnc-file-editor">
                Read more
              </HashLink>
            </ContentCard>
            <ContentCard>
              <h1>Canvas Snow</h1>
              <HashLink className="link-button" to="/portfolio#canvas-snow">
                Read more
              </HashLink>
            </ContentCard>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="section-container">Contact</div>
      </section>
    </>
  );
};
