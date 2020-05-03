import React from "react";
import { Link } from "react-router-dom";
import ProductRowSummary from "./ProductRowSummary";
import Summary from "./Summary";

function Checkout(props) {
  let data = props.products
    .filter(product => props.valuesSelect[product.index])
    .map(product => {
      return (
        <ProductRowSummary
          key={product.name}
          product={product}
          valuesSelect={props.valuesSelect}
        />
      );
    });

  return (
    <div className="container-fluid text-center container-checkout">
      <div class="row">
        <div class="col-sm-12 my-auto">
          <h1>Your selected courses</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4 table-row">
          <table class="table text-left table-selection">
            <thead>
              <tr className="table-header">
                <th>Name</th>
                <th>Hours</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>{data}</tbody>
            <Summary
              valuesSelect={props.valuesSelect}
              products={props.products}
            />
          </table>
        </div>
        <div class="col-sm-4"></div>
      </div>

      <div class="row">
        <div class="col-sm-4"></div>
        <label for="email_input" class="col-sm-1 col-form-label">
          Email
        </label>
        <div class="col-sm-3">
          <input type="email" class="form-control" id="email_input" />
        </div>
        <div class="col-sm-4"></div>
      </div>

      <div class="row">
        <div class="col-sm-12">
          <Link
            to="/confirmation"
            className="btn btn-primary button-confirmation"
          >
            Confirm your selection
          </Link>
          <Link to="/selection" className="btn btn-warning button-mod">
            Modify your selection
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
