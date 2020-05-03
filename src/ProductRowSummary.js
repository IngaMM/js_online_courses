import React from "react";

function ProductRowSummary(props) {
  return (
    <tr>
      <td>{props.product.name}</td>
      <td>{props.product.hours}</td>
      <td>{props.product.price}</td>
    </tr>
  );
}

export default ProductRowSummary;
