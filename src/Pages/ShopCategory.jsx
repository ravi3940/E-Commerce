import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/Context";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Iteam/Iteam";
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  
  return (
    <div className="shop-category">
      <img className="shopcategory-banner"  src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> Out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            console.log("hii" + props.id);
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
          }else {
            return null ;
          }
        })}
      </div>
      <div className="shopecategory-loadmore">
        Explore More
      </div>
    </div>
  );
};
export default ShopCategory;
