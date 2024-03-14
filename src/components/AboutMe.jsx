import React, { useEffect } from "react";
import { LinkButton } from "seb-components-library";
import sebImage2 from "../assets/PXL_20240226_132844396.NIGHT.jpg";

export const AboutMe = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
    document.title =
      "About me - Sebastian Meckovski | Full Stack Developer | Portfolio";
  }, []);

  return (
    <section id="about-me" style={{ marginTop: "1rem" }}>
      <div className="section-container">
        <article className="about-me-left">
          <h1>About me</h1>
          <p>
            Hello! I’m Seb, a dedicated and passionate software developer with a
            rich 3-year journey through the tech landscapes of e-commerce,
            healthcare, and finance. My forte lies in engineering highly
            interactive and responsive web applications that stand out in the
            digital realm.
          </p>
          <h2>My Technical Canvas</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
            quod facere nam quos quam iure animi delectus, eligendi placeat
            itaque rem consectetur vel deserunt voluptates corporis debitis a
            dignissimos et, laboriosam alias nostrum numquam. Voluptate nemo, et
            quas dolores, eveniet optio minima exercitationem, porro ut
            doloribus ad deserunt error aut! Repellendus sapiente id optio
            obcaecati voluptatum laudantium totam expedita culpa animi, tempora
            atque? Veritatis, magni eum rerum possimus laborum tempore ex quae,
            voluptatibus necessitatibus omnis saepe provident libero? Tempore
            placeat repudiandae, perferendis molestiae tenetur veniam quod nemo
            nulla et. Reprehenderit similique sapiente a ad voluptas iusto
            commodi? Placeat temporibus ducimus quaerat mollitia? Et
            repellendus, minima molestias magnam obcaecati placeat incidunt
            consequuntur expedita saepe quos hic cumque dolorum iste sed
            ducimus!
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <LinkButton>Expertise section</LinkButton>
            <LinkButton>Download CV</LinkButton>
          </div>
        </article>
      </div>
      <div style={{ alignSelf: "center" }}>
        <img className="about-me-image" src={sebImage2} alt="Sebastian" />
      </div>
    </section>
  );
};
