import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating, desc }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        desc: desc,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p><strong>{title}</strong></p>
        <p><strong>Desc.</strong> {desc}</p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        <p className="product__price">
          <small>Rs. </small>
          <strong>{price}</strong>
        </p>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
