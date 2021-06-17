import React from "react";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-white bg-white">
  <div class="container">
    <a class="navbar-brand text-dark" href="/">Safe Courier</a>
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarTogglerDemo02"
      aria-controls="navbarTogglerDemo02"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse " id="navbarTogglerDemo02">
      <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-info" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-info" href="/">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-info" href="/">Help</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-info" href="/">About</a>
        </li>
      </ul>
      <form class="input-group d-flex justify-content-end">
       
        <button
          class="btn btn-outline-info btn-sm text-info"
          type="button"
          data-mdb-ripple-color="dark" 
        >
          Search
        </button>
      </form>
    </div>
  </div>
</nav>
  );
}
