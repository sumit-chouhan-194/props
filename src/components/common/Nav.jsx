import React, { useState } from "react";
import arrow from "../../assets/images/down_arrow.png";
import logo from "../../assets/images/logo.png";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
const Nav = ({ allpages, children, allbtn, nav_bg, aroall }) => {
  const [show, setshow] = useState(true);
  function showNav() {
    setshow(!show);
  }
  if (!show) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <div className={nav_bg}>
        <div className="container d-flex justify-content-between align-items-center py-3 navbar">
          <div className="logo c_pointer">
            <img
              src={logo}
              alt="logo"
              className="w-100 pe-4 pe-sm-0 ps-2 ps-sm-0"
            />
          </div>
          <ul className="d-xl-flex gap-4 mb-0 ps-0 d-none d-xl-inline-block">
            <li>
              <Link to="/">
                Home <img src={arrow} alt="arrow" />
              </Link>
            </li>
            <li>
              <Link to="/about">
                About <img src={arrow} alt="arrow" />
              </Link>
            </li>
            <li>
            <Link to="/work">
                Work <img src={arrow} alt="arrow" />
              </Link>
            </li>
            <li>
              <a href="youtube.com">
                {allpages}
                <img src={aroall} alt="arrow" />
              </a>
            </li>
            {children}
          </ul>
          <div className="d-xl-flex align-items-center gap-3 d-none d-xl-inline-block wr">
            <button>Cart</button>
            <button className={`bg-white ${allbtn}`}>All Pages</button>
          </div>
          <div
            className="d-flex justify-content-between flex-column d-xl-none menu_box z_index_100"
            onClick={showNav}
          >
            <h2 className="fs-1 position-relative text-white pe-2">
              {show ? <HiMenuAlt1 /> : <AiOutlineClose />}
            </h2>
          </div>
          <div
            className={`d-flex gap-4 mb-0 sm_nav mb-0 ps-0 d-lg-none ${
              show ? "" : "start-0"
            }`}
          >
            <ul className="d-flex gap-4 mb-0 flex-column ps-0 align-items-center z_index_100">
              <li>
                <a href="youtube.com">
                  Home <img src={arrow} alt="arrow" />
                </a>
              </li>
              <li>
                <a href="youtube.com">
                  About <img src={arrow} alt="arrow" />
                </a>
              </li>
              <li>
                <a href="youtube.com">
                  Work <img src={arrow} alt="arrow" />
                </a>
              </li>
              <li>
                <a href="youtube.com">
                  All pages <img src={arrow} alt="arrow" />
                </a>
              </li>
              {children}
            </ul>
            <button>Cart</button>
            <button className={`bg-white ${allbtn}`}>All Pages</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
