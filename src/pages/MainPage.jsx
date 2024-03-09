import React, { useState } from "react";
import sebImage from "../assets/PXL_20240226_132844396.NIGHT.jpg";
import { Links } from "../components/Links";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faRotate,
  faServer,
  faSpinner,
  faVial,
} from "@fortawesome/free-solid-svg-icons";
import { Button, ContentCard, Textarea, Textbox } from "seb-components-library";
import { HashLink } from "react-router-hash-link";
import axios from "axios";

const initialData = {
  name: "",
  subject: "",
  email: "",
  message: "",
};

export const MainPage = () => {
  const [formData, setFormData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [emailFail, setEmailFail] = useState(false);

  const handleHandleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://sebastian-meckovski-email-serice.onrender.com/send-mail",
      // url: "http://192.168.0.253:8000/send-mail",
      headers: {
        "Content-Type": "application/json",
      },
      data: formData,
    };

    axios
      .request(config)
      .then((res) => {
        if (res.request.status === 200) {
          setEmailSuccess(true);
          setEmailFail(false);
          setFormData(initialData);
        }
      })
      .catch((error) => {
        console.log(error);
        setEmailFail(true);
        setEmailSuccess(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

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
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deleniti impedit reprehenderit illum officiis ad libero omnis
                odit.
              </p>
              <HashLink
                className="link-button"
                to="/portfolio#greenspark-product-cards"
              >
                Read more
              </HashLink>
            </ContentCard>
            <ContentCard>
              <h1>Shape Lamp</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores ipsa unde doloremque cumque hic quae.
              </p>
              <HashLink className="link-button" to="/portfolio#shape-lamp">
                Read more
              </HashLink>
            </ContentCard>
            <ContentCard>
              <h1>CNC File Editor</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorum, eos. Officiis repellat, nam iste commodi eaque.
              </p>
              <HashLink className="link-button" to="/portfolio#cnc-file-editor">
                Read more
              </HashLink>
            </ContentCard>
            <ContentCard>
              <h1>Canvas Snow</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis sunt porro recusandae eum sapiente delectus illo?
              </p>
              <HashLink className="link-button" to="/portfolio#canvas-snow">
                Read more
              </HashLink>
            </ContentCard>
          </div>
        </div>
      </section>
      <section id="contact">
        <h1>Contact me</h1>
        <p>
          Upon submitting your message, you’ll receive a confirmation email.
          Rest assured, I’ll do my best to reply within 24 hours. Thank you for
          reaching out!
        </p>
        <Link to="contact" className="link-button">
          More contact options
        </Link>
        <div className="section-container-left-align">
          <form onSubmit={handleHandleSubmit} className="contact-me-form">
            <Textbox
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
            />
            <Textbox
              required
              name="email"
              type="email"
              onChange={handleChange}
              value={formData.email}
              placeholder="Your email"
            />
            <Textbox
              required
              name="subject"
              onChange={handleChange}
              value={formData.subject}
              placeholder="Subject"
            />
            <Textarea
              required
              name="message"
              onChange={handleChange}
              value={formData.message}
              placeholder="Your message"
            />
            {(emailSuccess || emailFail) && (
              <div style={{ alignSelf: "center" }}>
                {emailFail && !emailSuccess && (
                  <p>
                    Something went wrong. Please try again later or go to{" "}
                    <Link to="contact">More contact options</Link>
                  </p>
                )}
                {emailSuccess && !emailFail && (
                  <p>
                    Your message has been received. I will try to respond within
                    24 hours!
                  </p>
                )}
              </div>
            )}
            <Button type="submit" className="button submit-button">
              {isLoading ? (
                <>
                  Loading...
                  <FontAwesomeIcon icon={faSpinner} />
                </>
              ) : (
                "Send a message"
              )}{" "}
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};
