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
import { LinkButton } from "seb-components-library";

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
        <div>
          <img className="about-me-image" src={sebImage} alt="Sebastian" />
        </div>
      </section>
      <section id="expertise">
        <div className="section-container">
          <div className="contentCards-container">
            <ContentCard buttonText={"Read more"}>
              <FontAwesomeIcon icon={faCode} />
              <h1>Web Development</h1>
              <p>
                Crafting interactive web experiences using React, HTML5, and
                CSS3. Integrating RESTful APIs for seamless functionality.
              </p>
              <br />
              <LinkButton href={"web-development"}> Read more </LinkButton>
            </ContentCard>
            <ContentCard buttonText={"Read more"}>
              <FontAwesomeIcon icon={faServer} />
              <h1>Back-end Development</h1>
              <p>
                Building robust APIs with ASP.NET Core and Entity Framework
                Core. Manipulating data efficiently for web applications.
              </p>
              <br />
              <LinkButton href={"back-end-development"}> Read more </LinkButton>
            </ContentCard>
            <ContentCard buttonText={"Read more"}>
              <FontAwesomeIcon icon={faVial} />
              <h1>Testing</h1>
              <p>
                Ensuring code quality with Cypress and Jest. Rigorous unit,
                integration, and end-to-end testing for reliable software.
              </p>
              <br />
              <LinkButton href={"Testing"}> Read more </LinkButton>
            </ContentCard>
            <ContentCard buttonText={"Read more"}>
              <FontAwesomeIcon icon={faRotate} />
              <h1>CI/CD</h1>
              <p>
                Automating deployment pipelines using GitLab CI/CD. Streamlining
                development-to-production workflows.
              </p>
              <br />
              <LinkButton href={"ci-cd"}> Read more </LinkButton>
            </ContentCard>
          </div>
        </div>
      </section>
      <section id="portfolio">
        <div className="section-container">Portfolio</div>
      </section>
      <section id="contact">
        <div className="section-container">Contact</div>
      </section>
    </>
  );
};
