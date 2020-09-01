import React, { Component } from "react";
import data from '../../JSON/data.json';
export default class BrandItem extends Component {
  renderBrandItem = () => {
    console.log(data)
  }
  render() {
    return (
      <div className="brandItem">
        <div className="container">
          <div className="branditem-content">
          </div>
        </div>
      </div>
    );
  }
}
