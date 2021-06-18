import React, { Fragment, useState } from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import GridCards from "../components/GridCards";

export default function HomeScreen() {
  const [pickup, setPickUp] = useState("Select Pickup location");
  const [delivery, setDelivery] = useState('Select Delivery location')
  const handlePickUpSelect = (e) => {
    console.log(e);
    setPickUp(e);
  };
  const handleDeliverySelect = (e) => {
    console.log(e);
     setDelivery(e);
  };

  if(handleDeliverySelect && handlePickUpSelect){
    console.log('ready to to go next step')
  }else{
    console.log('got an error')
  }
  return (
    <Fragment>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1617909517054-64d4958be1c9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y291cmllciUyMGRlbGl2ZXJ5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)",
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
                          <select
                            className="form-select form-select-lg mb-3"
                            aria-label=".form-select-lg example"
                          >
                            <option  onClick={handlePickUpSelect} defaultValue>{pickup}</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card-title">
                          <h4 className="text-dark">TO (DELIVERY)</h4>
                        </div>
                        <div className="card-body">
                          <select
                            className="form-select form-select-lg mb-3"
                            aria-label=".form-select-lg example"
                          >
                            <option onC={handleDeliverySelect} defaultValue>{delivery}</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Categories />

      <GridCards />
      <Footer/>
    </Fragment>
  );
}
