import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour"/>
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0", color:"black" }}>
      Curry Resort stands for happiness and light, contemporary designed and influenced by ancient Indian traditions, We offers a sophisticated dining and takeaway experience. This Famous restaurant  offers Delicious, traditional and home style dishes from various North Indian regions.{" "}
      </p>
      <button type="button" className="custom__button" style={{backgroundColor: "#7D0202", color: "white"}}>
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
