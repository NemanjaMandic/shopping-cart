import React, { useState } from "react";

import { getProductsAPI } from "./services/api";
import logo from "./logo.svg";
import "./App.css";
import Products from "./components/Products/Products";
import Filter from "./components/Products/Filter";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      sort: [],
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
    const listProducts = () => {
      this.setState((state) => {
        if (state.sort !== "") {
          this.state.products.sort((a, b) =>
            state.sort === "lowest"
              ? a.price > b.price
                ? 1
                : -1
              : a.price < b.price
              ? 1
              : -1
          );
        } else {
          this.state.products.sort((a, b) => (a.id < b.id ? 1 : -1));
        }
        if (state.size !== "") {
          return {
            filteredProducts: state.products.filter(
              (a) => a.availableSizes.indexOf(state.size.toUpperCase()) >= 0
            ),
          };
        }
        return { filteredProducts: state.products };
      });
    };
    const handleChangeSize = (e) => {
      this.setState({
        size: e.target.value,
      });
      console.log(e.target.value);
    };
    const handleChangeSort = (e) => {
      this.setState({ sort: e.target.value });
      listProducts();
      console.log(e.target.value);
    };
    return (
      <div className="container">
        <h1>Ecommerce Shopping Cart App</h1>
        <hr />
        <div className="row">
          <div className="col-md-8">
            <Filter
              size={this.state.size}
              sort={this.state.sort}
              changeSize={handleChangeSize}
              changeSort={handleChangeSort}
              count={this.state.filteredProducts.length}
            />
            <hr />
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
