import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="container-fluid text-center container-welcome">
      <div class="row h-100">
        <div class="col-sm-12 my-auto">
          <h1>Welcome to our course program </h1>
          <Link to="/selection" className="btn btn-primary button-selection">
            Select your courses
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
