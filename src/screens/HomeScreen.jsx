import React, { Fragment, useState } from "react";
import Categories from "../components/Categories";

import GridCards from "../components/GridCards";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { Redirect } from "react-router";
import TrackOrder from "../components/TrackOrder";

export default function HomeScreen() {
  const [pickUp, setPickUp] = useState("Select Pickup");
  const [delivery, setDelivery] = useState("Select Delivery");
  const handlePickUpSelect = (e) => {
    console.log(e);
    setPickUp(e);
  };

  const handleDeliverySelect = (e) => {
    console.log(e);
    setDelivery(e);
  };

  return (
    <Fragment>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1617909517054-64d4958be1c9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y291cmllciUyMGRlbGl2ZXJ5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)",
          height: "450px",
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mt-5">
                <b>We make delivering easy</b>
              </h1>
              <p>Instantly ontime, Secure and Safe...</p>
              <div className="bg-light">
                <div className="card text-center">
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <div className="card-title">
                          <h4 className="text-dark">FROM (PICKUP)</h4>
                        </div>
                        <div className="card-body">
                          <DropdownButton
                            alignRight
                            title={pickUp}
                            id="dropdown-menu-align-right"
                            onSelect={handlePickUpSelect}
                          >
                            <Dropdown.Item eventKey="option-1">
                              option-1
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="option-2">
                              option-2
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="option-3">
                              option 3
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="some link">
                              some link
                            </Dropdown.Item>
                          </DropdownButton>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card-title">
                          <h4 className="text-dark">TO (DELIVERY)</h4>
                        </div>
                        <div className="card-body">
                          <DropdownButton
                            alignRight
                            title={delivery}
                            id="dropdown-menu-align-right"
                            onSelect={handleDeliverySelect}
                          >
                            <Dropdown.Item eventKey="option-1">
                              option-1
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="option-2">
                              option-2
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="option-3">
                              option 3
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="some link">
                              some link
                            </Dropdown.Item>
                          </DropdownButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> <hr style={{maxWidth:'300px', color:'#33B5E5',}}/>
      </div>

      <Categories />

      <TrackOrder/>

    
      <GridCards />
      <logx />

      <footer className="text-center text-lg-start bg-info text-dark">
        <section
          className="
          d-flex
          justify-content-center justify-content-lg-between
          p-4
          border-bottom
        "
        >
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Safe Courier
                </h6>
                <p>Safe Courier is a company focused on delivery of luggage</p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Solutions For</h6>
                <p>
                  <a href="/" className="text-reset">
                    Companies
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Individuals
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Students
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Expatriates
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="/" className="text-reset">
                    Home
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    About
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Help
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Contact US
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Contact Us Today
                </h6>
                <p>
                  <i className="fas fa-home me-3"></i>SOLIZ HOUSE, KAMPALA-UG
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  mukisabahati@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> +256 784233762
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> +256 784233762
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </Fragment>
  );
}
