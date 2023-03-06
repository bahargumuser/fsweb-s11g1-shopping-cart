import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { ScCartItem, ScCartItemDetails } from "./scParts";

const Item = (props) => {
  const { delItem } = useContext(ProductContext);

  return (
    <ScCartItem>
      <img src={props.image} alt={`${props.title} book`} />

      <ScCartItemDetails>
        <h2>{props.title}</h2>
        <p>$ {props.price}</p>
        <button onClick={() => delItem(props)}>Remove from cart</button>
      </ScCartItemDetails>
    </ScCartItem>
  );
};

export default Item;
