import React from "react";
import { Col, Row } from "react-bootstrap";
import victor1 from "../assets/images/vector1.png";
import victor2 from "../assets/images/vactor2.png";
const Nutration = ({ mainimg, mainpara, children, data }) => {
  return (
    <>
      <section className="bg-black section_radish py-5 position-relative">
        <img
          src={victor1}
          className="position-absolute vactor_1 d-none d-sm-block"
          alt="vactor"
        />
        <img
          src={victor2}
          className="position-absolute vactor_2 d-none d-sm-block"
          alt="vactor"
        />
        <div className="container">
          <div className="text-center">
            <img src={mainimg} alt="img" className="mw_295 w-100" />
          </div>
          <p className="mw_1025 mx-auto text-center pt-3 mt-2 mb-0 ff_poppins text-white fw-normal fs_sm opacity_69 lh_160">
            {mainpara}
          </p>
          <div className="text-center pt-4">{children}</div>
          <Row className="justify-content-center justify-content-lg-start py-5 position-relative z-4">
            {data.map((val, ad) => {
              return (
                <Col key={ad} lg={6} xs={12} sm={11} className="mt-3">
                  <div className="box h-100 d-flex justify-content-between flex-column">
                    <div>
                      <img src={val.img} className="ps-4 pt-4" alt="img" />
                    </div>
                    <h3 className="ps-4 fs_md text-white ff_poppins fw-medium pt-3 mt-1 pb-3 mb-1">
                      {val.heading}
                    </h3>
                    <p className="px-4 ff_poppins text-white fs_sm  opacity_69 lh_120 fw-normal box_p pt-1 pb-4 mb-0">
                      {val.para}
                    </p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </section>
    </>
  );
};

export default Nutration;
