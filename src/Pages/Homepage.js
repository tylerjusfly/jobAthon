import React from "react";
import Heroimg from "../assets/images/oppo-unsplash.jpg";
import amplify from "../assets/images/amplify.jpg";
import hashnode from "../assets/images/hashnode.jpg";
import "../assets/css/hero.css";
import { Jobs } from "../components/Jobs";

export const Homepage = () => {
  return (
    <section className="Hero">
      <div className="Hero-text">
        Connecting dots between Developers , tech enthusiasts with Tech
        companies
      </div>
      <div className="Hero-image">
        <img src={Heroimg} alt="woman with Dog" />
      </div>
      <div className="Hero-sponsor">
        <img src={amplify} alt="amplify logo" />
        <img src={hashnode} alt="hashnode logo" />
      </div>
      {/* Job Components */}
      <Jobs />
    </section>
  );
};
