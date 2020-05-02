import React, { useState } from "react";

import { getProductsAPI } from "./services/api";
import logo from "./logo.svg";
import "./App.css";
import Products from "./components/Products/Products";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filteredProducts: [],
    };
  }

  async componentDidMount() {
    const { data } = await getProductsAPI();
    this.setState({
      products: data,
      filteredProducts: data,
    });
    console.log(data);
  }
  render() {
    const handleAddToCart = () => {
      console.log("dsds");
    };
    return (
      <div className="container">
        <h1>Ecommerce Shopping Cart App</h1>
        <hr />
        <div className="row">
          <div className="col-md-8">
            <Products
              products={this.state.products}
              addtoCart={handleAddToCart}
            />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}
export default App;
