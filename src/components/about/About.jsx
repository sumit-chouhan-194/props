import React from "react";
import Nav from "../common/Nav";
import arrow from "../../assets/images/down_arrow.png";
import Nutration from "../common/Nutration";
import { green_s } from "../common/Help";
import green from "../../assets/images/fitfive_orange.png";
const About = () => {
  return (
    <>
      <Nav
        nav_bg="bg_green"
        allpages="All pages"
        work="work"
        aroall={arrow}
        arowork={arrow}
        mainimg={green}
        allbtn="txt_green"
      >
        <li>
          <a href="you">
            Work <img src={arrow} alt="img" />
          </a>
        </li>
      </Nav>
      <Nutration
        mainimg={green}
        mainpara="What we eat impacts our health and well-being on a fundamental level."
        data={green_s}
      />
    </>
  );
};

export default About;
