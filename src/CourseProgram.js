import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from "./Welcome";
import Selection from "./Selection";
import Checkout from "./Checkout";
import Confirmation from "./Confirmation";
import { useSelection } from "./useSelection";

const products = [
  {
    index: 0,
    category: "Languages",
    price: 0,
    free: true,
    name: "English I",
    hours: 30
  },
  {
    index: 1,
    category: "Languages",
    price: 30,
    free: false,
    name: "English II",
    hours: 40
  },
  {
    index: 2,
    category: "Languages",
    price: 30,
    free: false,
    name: "Spanish I",
    hours: 30
  },
  {
    index: 3,
    category: "Languages",
    price: 40,
    free: false,
    name: "Spanish II",
    hours: 40
  },
  {
    index: 4,
    category: "Languages",
    price: 40,
    free: false,
    name: "Chinese I",
    hours: 40
  },
  {
    index: 5,
    category: "Languages",
    price: 50,
    free: false,
    name: "Chinese II",
    hours: 50
  },
  {
    index: 6,
    category: "Languages",
    price: 40,
    free: false,
    name: "Arabic I",
    hours: 40
  },
  {
    index: 7,
    category: "Languages",
    price: 50,
    free: false,
    name: "Arabic II",
    hours: 50
  },
  {
    index: 8,
    category: "IT",
    price: 0,
    free: true,
    name: "Introduction to Coding",
    hours: 10
  },
  {
    index: 9,
    category: "IT",
    price: 50,
    free: false,
    name: "Learn the Basics of HTML & CSS",
    hours: 40
  },
  {
    index: 10,
    category: "IT",
    price: 60,
    free: false,
    name: "More HTML & CSS",
    hours: 50
  },
  {
    index: 11,
    category: "IT",
    price: 0,
    free: true,
    name: "Javascript for Beginners",
    hours: 20
  },
  {
    index: 12,
    category: "IT",
    price: 50,
    free: false,
    name: "Advanced Javascript",
    hours: 60
  },
  {
    index: 13,
    category: "IT",
    price: 90,
    free: false,
    name: "All about ReactJS",
    hours: 90
  },
  {
    index: 14,
    category: "Home & Garden",
    price: 20,
    free: false,
    name: "Vegan Cooking",
    hours: 20
  },
  {
    index: 15,
    category: "Home & Garden",
    price: 20,
    free: false,
    name: "Christmas Bakery",
    hours: 20
  },
  {
    index: 16,
    category: "Home & Garden",
    price: 10,
    free: false,
    name: "Home Decoration in Spring",
    hours: 5
  }
];

function CourseProgram() {
  const [valuesSelect, handleSelectChange] = useSelection(
    new Array(products.length).fill(false)
  );
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route exact path="/selection">
          <Selection
            products={products}
            handleSelectChange={handleSelectChange}
            valuesSelect={valuesSelect}
          />
        </Route>
        <Route exact path="/checkout">
          <Checkout products={products} valuesSelect={valuesSelect} />
        </Route>
        <Route exact path="/confirmation">
          <Confirmation />
        </Route>
      </Switch>
    </Router>
  );
}

export default CourseProgram;
