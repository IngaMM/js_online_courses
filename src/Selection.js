import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import ProductTable from "./ProductTable";
import { useForm } from "./useForm";

function Selection(props) {
  const [values, handleChange] = useForm({
    filterText: "",
    freeOnly: false
  });

  return (
    <div className="container-fluid text-center container-selection">
      <div class="row">
        <div class="col-sm-12 my-auto">
          <h1>Select your online courses</h1>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4">
          <Searchbar
            filterText={values.filterText}
            freeOnly={values.freeOnly}
            onChange={handleChange}
          />
        </div>
        <div class="col-sm-4"></div>
      </div>
      <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4 table-row">
          <ProductTable
            products={props.products}
            filterText={values.filterText}
            freeOnly={values.freeOnly}
            onChange={handleChange}
            handleSelectChange={props.handleSelectChange}
            valuesSelect={props.valuesSelect}
          />
        </div>
        <div class="col-sm-4"></div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <button
            id="clearSelect"
            onClick={props.handleSelectChange}
            className="btn btn-warning button-reset"
          >
            Reset selection
          </button>
          <Link to="/checkout" className="btn btn-primary button-checkout">
            Go to checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Selection;
