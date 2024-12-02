import React from "react";
import db from "../assets/img/AboutDashboard.png";
import medal from "../assets/logo/medal.svg";
import t from "../assets/logo/thought.png";
import tr from "../assets/logo/training.png";
import "../../src/App.css";

function Section2() {
  return (
    <section>
      <div className="flx4">
        <p className="aq">Open Source Theme and UI Components</p>
        <p className="p2">
          Geaux Astro helps you craft beautiful websites efficiently
        </p>
      </div>
      <div className="flx5">
        <div className="awardflx">
          <div>
            <img src={medal} alt=""  className="flt"/>
            <div className="center">

            <p className="list">Certificate Distribution</p>
            <p>
              We offer certificates to validate and recognize your achievement.
            </p>
            </div>
          </div>
          <div>
          <img src={tr} alt="" className="flt" />
          <div className="center">

            <p  className="list">Certificate Distribution</p>
            <p>
              We offer certificates to validate and recognize your achievement.
            </p>
          </div>

          </div>
          <div>
          <img src={t} alt="" className="flt"/>
          <div className="center">

            <p  className="list">Certificate Distribution</p>
            <p>
              We offer certificates to validate and recognize your achievement.
            </p>
          </div>

          </div>
        </div>
        <div>
          <img src={db} alt="" className="db"/>
        </div>
      </div>
    </section>
  );
}

export default Section2;
