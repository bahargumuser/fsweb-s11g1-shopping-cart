import React, { useState } from "react";
import { Route } from "react-router-dom";
import { data } from "./data";

// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import { ProductContext } from "./contexts/ProductContext";
import { CardContext } from "./contexts/CartContext";

function App() {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([...cart, item]); // <3
    // verilen itemi sepete ekleyin
  };
  const delItem = (item) => {
    setCart([...cart.filter((bahar) => item.id !== bahar.id)]);
  };

  return (
    <div className="App">
      <CardContext.Provider value={{ cart, setCart }}>
        <Navigation cart={cart} />

        {/* Routelar */}

        <main className="content">
          <ProductContext.Provider value={{ products, addItem, delItem }}>
            <Route exact path="/">
              <Products products={products} addItem={addItem} />
            </Route>

            <Route path="/cart">
              <ShoppingCart cart={cart} />
            </Route>
          </ProductContext.Provider>
        </main>
      </CardContext.Provider>
    </div>
  );
}

export default App;
