import React from "react";

function Summary(props) {
  let sumHours = 0;
  let sumPrice = 0;
  for (let i = 0; i < props.products.length; i++) {
    sumHours = sumHours + +props.valuesSelect[i] * props.products[i].hours;
    sumPrice = sumPrice + +props.valuesSelect[i] * props.products[i].price;
  }

  return (
    <tbody>
      <tr className="summaryRow">
        <td>Selected</td>
        <td>{sumHours}</td>
        <td colSpan="2">{sumPrice} €</td>
      </tr>
    </tbody>
  );
}

export default Summary;
