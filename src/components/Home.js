import React from "react";
import me from "../assets/me.jpg";
import "../Style.css"


function Home() {
  return (
    <div className="test-p bordlength columns has-background-warning">
      <div className="column is-three-fifths">
        <h1 className="has-text-centered has-text-weight-bold is-size-1">
          About Me
        </h1>
        <p className="has-text-centered">
          I'm Dwayne Laughlin. I'm a lifelong Chicagoan currently living in the
          neighborhood where I grew up on the Westside. I attended Loyola
          University Chicago, graduating in summer of 2011 with a BA in Music.
          Since graduation I have spent time working as a music teacher,
          performing pianist, composer and producer. For the last 4 years I have
          also been the current lead for the account management/collections team
          for zZounds.com, a leading company in the instrument retail business.
          Part of my day to day job is overlooking some of the coding of our
          internal wiki page and doing some light coding in HTML as well as
          using Ecometry for managing our payment sytsem and doing data entry.
          <br />
          <br />
          I completed the Northwestern Coding Bootcamp in March 2020 and have
          experience with HTML, CSS, Bootstrap, Bulma, Node, Javascript, SQL,
          Mongo, and React. Since that time I have worked on smaller
          applications like a BMI calculator, random color generator, and an app
          that keeps score while users play Fantasy Top Chef. I am always
          looking for opportunities to expand my skills and learn about new
          technologies and languages.
          <br />
          <br />
          This site was built with React and Bulma.
        </p>
      </div>

      <div className="column is-half has-text-centered ">
        <img src={me} alt="Dwayne"></img>
        <br></br>
        <a href="https://github.com/DwayneLaughlin" target="blank">
          Github
        </a>
        <br />
        <a
          href="https://docs.google.com/document/d/1lrJNs4jrj6RFp2I3n28F7-UAJbDtG4shW9GCGHkP-M8/edit?usp=sharing"
          target="blank"
        >
          Resume
        </a>
        <br />
        <a
          href="https://www.linkedin.com/in/dwayne-laughlin-74982118b/"
          target="blank"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Home;
