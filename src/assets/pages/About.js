import React from 'react'
import Nav from "../../components/Nav";
import arrow from "../images/down_arrow.png";
import Nutration from '../../components/Nutration';
import green from "../images/fitfivegreen.png";
// import { green } from "../../components/common/Help";
const About = () => {
  return (
    <>
    <Nav nav_bg="bg_green"
        allpages="All pages"
        work="work"
        aroall={arrow}
        arowork={arrow}
        mainimg={green}
        allbtn="txt_green">
      <li><a href='you'>Work <img src={arrow} alt="img"/></a></li>
      </Nav>
      <Nutration mainimg={green} mainpara="What we eat impacts our health and well-being on a fundamental level."></Nutration>
    </>

  )
}

export default About