import React from "react";
import bmicalc from "../assets/bmicalc.png";
import password from "../assets/pwgen.png";
import notes from "../assets/notetaker.png";
import profgen from "../assets/ProfileGenerator.png";
import topchef from "../assets/topchef.png";
import dayplan from "../assets/dayplan.png";


function Portfolio() {
  return (
    <div className="test-p bordlength has-background-success">
      <h1 className="has-text-centered has-text-weight-bold is-size-1">
        Portfolio
      </h1>
      <div className="columns">
        {/* BMI calculator */}
        <div className="column">
          <a href="https://dwaynelaughlin.github.io/bmiproject/" target="blank">
            <img src={bmicalc} alt="BMI Calculator"></img>
          </a>
          <h1 className="has-text-centered">BMI Calculator</h1>
          <div className="has-text-centered">
            <a
              href="https://github.com/DwayneLaughlin/bmiproject"
              target="blank"
            >
              GitHub Repository
            </a>
          </div>
        </div>

        {/* PW GENERATOR */}
        <div className="column">
          <a
            href="https://dwaynelaughlin.github.io/pw_generator/"
            target="blank"
          >
            <img src={password} alt="Password Generator"></img>
          </a>
          <h1 className="has-text-centered">Password Generator</h1>
          <div className="has-text-centered">
            <a
              href="https://github.com/DwayneLaughlin/pw_generator"
              target="blank"
            >
              GitHub Repository
            </a>
          </div>
        </div>

        {/* Note Taker */}
        <div className="column">
          <a href="https://rocky-stream-46867.herokuapp.com/" target="blank">
            <img src={notes} alt="Note Taker"></img>
          </a>
          <h1 className="has-text-centered">Note Taker</h1>
          <div className="has-text-centered">
            <a
              href="https://github.com/DwayneLaughlin/note_taker"
              target="blank"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </div>

      <div className="columns">
        {/* Profile Generator */}
        <div className="column">
          <a
            href="https://drive.google.com/file/d/1M92mnwpmKBEKtnELk8g49062Fli68UqV/view"
            target="blank"
          >
            <img src={profgen} alt="Proflie Generator"></img>
          </a>
          <h1 className="has-text-centered">Profile Generator</h1>
          <div className="has-text-centered">
            <a
              href="https://github.com/DwayneLaughlin/profile_generator"
              target="blank"
            >
              GitHub Repository
            </a>
          </div>
        </div>

        {/* Recipal */}
        <div className="column">
          <a
            href="https://dwaynelaughlin.github.io/fantasyTopChef/"
            target="blank"
          >
            <img src={topchef} alt="Fantasy Top Chef"></img>
          </a>
          <h1 className="has-text-centered">ReciPal</h1>
          <div className="has-text-centered">
            <a
              href="https://github.com/DwayneLaughlin/fantasyTopChef"
              target="blank"
            >
              GitHub Repository
            </a>
          </div>
        </div>

        {/* Day Planner*/}
        <div className="column">
          <a
            href="https://dwaynelaughlin.github.io/day_planner/"
            target="blank"
          >
            <img src={dayplan} alt="Day Planner"></img>
          </a>
          <h1 className="has-text-centered">Day Planner</h1>
          <div className="has-text-centered">
            <a
              href="https://github.com/DwayneLaughlin/day_planner"
              target="blank"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
