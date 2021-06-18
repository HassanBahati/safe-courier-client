import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
      <Fragment>
    <div className="wrapper" style={{maxWidth:'500px', margin: '70px', alignItems:'center'}}>
                <form className=''>
                    <h2>Sign In</h2>
                    <div className="">
                    <div className="form-group ">
                        <label>User Name</label>
                        <input type="text" placeholder= "Your User Name here" className="form-control" />
                    </div>
                    
                    <div className="form-group">
                        <label>Password</label>
                        <input type="text" placeholder="Your Password here"  className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit"  value="Login" className="btn btn-dark btn-block" />
                    </div>
                    </div>
                    <p>New to Safe Courier? <Link to='/register'>SignUp</Link></p>

                    
                   
                </form>
                
            </div>
            <div
            className="text-center p-4 fixed-bottom text-lg-start bg-info text-dark"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.98)"  }}
          >
            © 2021 Copyright:
            <a className="text-reset fw-bold" href="/">
              Safe Courier @ OutBox Hub Uganda
            </a>
          </div>
            </Fragment>
  );
}
