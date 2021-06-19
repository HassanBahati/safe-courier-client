import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Footer() {
  
  return (
    <footer className="text-center text-lg-start bg-info text-dark">
          
          <section>
          <div
            className="text-center p-4 text-lg-start bg-info text-dark"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.98)"  }}
          >
            © 2021 Copyright:
            <a className="text-reset fw-bold" href="/">
              Hassan Bahati Mukisa @ OutBox Hub Uganda
            </a>
          </div>

          </section>

         
        </footer>

  ); 
}

export default Footer;
