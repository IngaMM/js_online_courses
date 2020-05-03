import React from "react";
import { Link } from "react-router-dom";

function Confirmation() {
  return (
    <div className="container-fluid text-center container-confirmation">
      <div class="row h-100">
        <div class="col-sm-12 my-auto">
          <h1>Thank you for chosing our courses!</h1>
          <p> We will send you an email with payment instructions.</p>
          <Link to="/selection" className="btn btn-primary button-selection">
            Select more courses
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
