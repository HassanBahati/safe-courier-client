import React, { Fragment } from 'react'
import Navbar from '../components/Navbar.js'

export default function HomeScreen() {
    return (
        <Fragment>
            <Navbar/>

            <div
      className="p-5 text-center bg-image"
      style={{
        backgroundImage:"url('./images/img3.jpg');",
        height: "450px;"
      }}
    >
      <div className="mask" style={{backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
           
            <h1 className="mt-5"><b>We make delivering easy</b></h1>
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
                          <option selected>Select Pickup location</option>
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
                          <option selected>Select Delivery location</option>
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
   
        </Fragment>
      
    )
}
