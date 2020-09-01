import React, { Component } from "react";
import "./Ourbrands.scss";
import data from "../../JSON/data.json";
export default class Ourbrands extends Component {
  getBrand = (id) => {
    console.log(id)
  }
  renderBrand = () => {
    return data.brands.map((item, index) => {
      return (
        <div
          className="content"
          key={index} onClick={() => this.getBrand(item.id)}>
          <h3 className="brand">
            {item.name.toUpperCase()}
          </h3>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="ourbrands">
        <h2 className="title">OUR BRANDS</h2>
        <div className="ourbrands-content">{this.renderBrand()}</div>
      </div>
    );
  }
}
