import React from "react";

function ProductRow(props) {
  return (
    <tr>
      <td>{props.product.name}</td>
      <td>{props.product.hours}</td>
      <td>{props.product.price} €</td>
      <td>
        <form>
          <input
            id={props.index}
            name="isSelected"
            type="checkbox"
            checked={props.valuesSelect[props.index]}
            onChange={e => props.handleSelectChange(e)}
          />
        </form>
      </td>
    </tr>
  );
}

export default ProductRow;
