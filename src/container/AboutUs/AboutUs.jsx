import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    id="about"
  >

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant" style={{color: "#7D0202"}}>About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans" style={{color: "black", width: "80%"}}>
        Curry Resort stands for happiness and light, contemporary designed and influenced by ancient Indian traditions, We offers a sophisticated dining and takeaway experience. This Famous restaurant  offers Delicious, traditional and home style dishes from various North Indian regions.
        </p>
        <button type="button" className="custom__button" style={{backgroundColor: "#7D0202", color: "white"}}>
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant" style={{color: "#7D0202"}}>Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans" style={{color: "black", width: "80%"}}>
        For those with pure food indulgence in mind, come next door and sate your desires with our ever changing internationally and seasonally inspired small plates.  We love food, lots of different food, just like you.
        </p>
        <button type="button" className="custom__button" style={{backgroundColor: "#7D0202", color: "white"}}>
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
