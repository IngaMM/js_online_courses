import React from "react";

function ProductCategoryRow(props) {
  return (
    <tr>
      <td colSpan="4" className="categoryRow">
        {props.category}
      </td>
    </tr>
  );
}

export default ProductCategoryRow;
