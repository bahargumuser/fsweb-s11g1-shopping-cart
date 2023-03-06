import React from "react";
import { NavLink } from "react-router-dom";
import { ScNav } from "./scParts";
import { CardContext } from "../contexts/CartContext";
import { useContext } from "react";
import Product from "./Product";
import { ProductContext } from "../contexts/ProductContext";

const Navigation = () => {
  const { cart } = useContext(CardContext);

  return (
    <ScNav>
      <nav className="content">
        <NavLink to="/">Products</NavLink>
        <NavLink to="/cart">
          Cart <span>{cart.length}</span>
        </NavLink>
      </nav>
    </ScNav>
  );
};

export default Navigation;
