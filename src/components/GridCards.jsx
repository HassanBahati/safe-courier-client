import React from 'react'

export default function GridCards() {
    return (
        
    <div className="container">
    <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
      <div className="col"><strong style={{fontWeight:''}}>
      <h1>What Our<br/> Customers Say</h1></strong>
      <hr style={{maxWidth:'300px', color:'#33B5E5',}}/>
      </div>
      <div className="col">
        <div className="card">
          <img
            src="https://mdbootstrap.com/img/new/standard/city/041.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Hassan</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img
            src="https://mdbootstrap.com/img/new/standard/city/041.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Bahati</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}
