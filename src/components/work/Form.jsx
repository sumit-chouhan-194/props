import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Nav from "../common/Nav";
import arrow from "../../assets/images/down_arrow.png"
const Form = () => {
  const [inputData, setData] = useState({
    Name: "",
    Age: "",
    Email: "",
    Passward: "",
  });
  const inputcontrol = (e) => {
    const { name, value } = e.target;
    setData({ ...inputData, [name]: value });
  };
  const Submit = (e) => {
    e.preventDefault();
    console.log(inputData);
    setData({ Name: "", Age: "", Email: "", Passward: "" ,});
  };
  const [show, setShow] = useState(false);
  const toggleField = () => {
    setShow(!show);
  };
  return (
    <>
    <header className="d-flex flex-column vh-100 bg-dark">
        <Nav
        nav_bg="bg_red"
        allpages="All pages"
        work="work"
        aroall={arrow}
        arowork={arrow}
       
        allbtn="txt_green"/>
      <section className="bg-dark f-grow-1 d-flex justify-content-center align-items-center h-100">
        <Container className="h-100 d-flex justify-content-center align-items-center">
          <div className="form_div rounded-3">
            <h2 className="text-white fw-bold">Register today</h2>
            <p className="text-white fw-medium">Fill in the data below.</p>
            <form className="d-flex flex-column gap-3 w-100" onSubmit={Submit}>
              <input
                onChange={inputcontrol}
                type="Text"
                placeholder="Name"
                name="Name"
              />
              <input
                onChange={inputcontrol}
                type="Email"
                placeholder="Email"
                name="Email"
              />
              <input
                onChange={inputcontrol}
                type="number"
                placeholder="Age"
                name="Age"
              />
              <div>
                <span>
                  <input
                    onChange={inputcontrol}
                    type={show === false ? "password" : "text"}
                    placeholder="Passward"
                    name="Passward"
                    className="w-75"
                  />
                </span>
                <button onClick={toggleField} className="bg-white w-25 border-0">
                  show
                </button>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </Container>
      </section>
      </header>
    </>
  );
};

export default Form;
