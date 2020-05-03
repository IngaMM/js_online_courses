import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import Summary from "./Summary";

function ProductTable(props) {
  let filteredData = filter(props.products, props.filterText, props.freeOnly);
  let sortedData = sortInCategories(filteredData).map(data => {
    return (
      <tbody key={data.category}>
        <ProductCategoryRow category={data.category} />
        {data.products.map(product => {
          return (
            <ProductRow
              key={product.name}
              product={product}
              handleSelectChange={props.handleSelectChange}
              index={product.index}
              valuesSelect={props.valuesSelect}
            />
          );
        })}
      </tbody>
    );
  });

  return (
    <table class="table text-left table-selection">
      <thead>
        <tr className="table-header">
          <th>Name</th>
          <th>Hours</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      {sortedData}
      <Summary valuesSelect={props.valuesSelect} products={props.products} />
    </table>
  );
}

function sortInCategories(products) {
  // Get an array of the categories
  let categories = [];
  products.forEach(product => {
    if (!categories.includes(product.category)) {
      categories.push(product.category);
    }
  });

  // Compose the array of objects [{category: ...., products: [{}, {}]}]
  let sorted = [];
  categories.forEach(category => {
    let productsInCat = products.filter(
      product => product.category === category
    );
    sorted.push({ category: category, products: productsInCat });
  });

  return sorted;
}

function filter(products, filterText, freeOnly) {
  let filteredProducts = products;
  if (filterText) {
    filteredProducts = products.filter(product => {
      return product.name.toLowerCase().includes(filterText.toLowerCase());
    });
  }

  return freeOnly
    ? filteredProducts.filter(product => product.free)
    : filteredProducts;
}

export default ProductTable;
