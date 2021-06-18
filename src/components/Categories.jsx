import React from 'react'

export default function Categories() {
    return (
        <div className="text-center container">
        <div className="card-body">
          <div className="container">
            <div className="row">
              <div className="col-md">Envelope</div>
              <div className="col-md border-bottom border-info">package</div>
              <div className="col-md">Express Package</div>
              <div className="col-md">Pallet</div>
              <div className="col-md">Van Delivery</div>
              <div className="col-md">Additional Services</div>
            </div>
          </div>
          <button type="button" className="btn btn-info">Get Started</button>
        </div>
      </div>
    )
}
