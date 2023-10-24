import React from "react";
import "./ReleatedProducts.css";
import data_product from "../Assets/data";
import Item from '../Iteam/Iteam';
const ReleatedProducts = () => {
  return (
    <div className="releadtedproducts">
      <h1> Related Products </h1>
      <hr />
      <div className="releadtedproducts-item">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              old_price={item.old_price}
              new_price={item.new_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ReleatedProducts;
