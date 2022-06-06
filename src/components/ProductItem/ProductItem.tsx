import React, { Component } from "react";
import "./ProductItem.scss";
import { IProduct } from "../../types/types";

interface ProductItemProps {
  product: IProduct;
}

export class ProductItem extends Component<
  ProductItemProps,
  { completed: boolean }
> {
  constructor(props: ProductItemProps) {
    super(props);
    this.state = {
      completed: props.product.completed,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({ completed: !this.state.completed });
  }

  render() {
    return (
      <li className={"list__item"}>
        <label
          className={`list__item-title ${
            this.state.completed ? "list__item-title_completed" : ""
          }`}
        >
          <input
            type="checkbox"
            checked={this.state.completed}
            onChange={this.handleChange}
          />
          {this.props.product.title}
        </label>
      </li>
    );
  }
}
