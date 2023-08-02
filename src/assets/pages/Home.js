import React from "react";
import Nav from "../../components/Nav";
import arrow from "../images/down_arrow.png";
import {red_s } from "../../components/common/Help";
import Nutration from "../../components/Nutration";
import red_img from "../images/fitfive_orange.png";
const Home = () => {
  return (
    <>
      <Nav
        nav_bg="bg_black"
        allbtn="txt_black"
        allpages="All pages"
        aroall={arrow}
      />
      <Nutration
        mainimg={red_img}
        mainpara="The body is a fascinatingly complex machine composed of different cells, each with its particular set of functions mediated by a centralized system, which is the brain. All cells interact to maintain a controlled and stable environment within the body. Any deviation from that balanced state will trigger bodily reactions to restore equilibrium in the short term otherwise the body will find a way to compensate for its ineffective restoration, leading ultimately to dysfunction, disease and undue tensions."
        data={red_s}
      >
        <button className="main_btn">Get in touch</button>
      </Nutration>
    </>
  );
};

export default Home;
