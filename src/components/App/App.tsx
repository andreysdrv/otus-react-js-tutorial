import React, { ChangeEvent, Component, FormEvent } from "react";
import "./App.css";
import { Main } from "../../Layouts/Main";
import { List } from "../List";
import { ProductItem } from "../ProductItem";
import MOCK_PRODUCTS_LIST from "../../utils/_ProductsList.json";
import { IProduct, IProducts } from "../../types/types";
import { AddForm } from "../AddForm";

export default class App extends Component<
  Record<string, never>,
  { products: IProduct[]; inputVal: string }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      products: [],
      inputVal: "",
    };

    this.getProducts = this.getProducts.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getProducts().then((response: IProducts) => {
      this.setState({ products: response.products });
    });

    document.querySelector("form")?.addEventListener("submit", () => {
      alert("success");
    });
  }

  componentDidUpdate(
    prevProps: Readonly<Record<string, never>>,
    prevState: Readonly<{ products: IProduct[]; inputVal: string }>
  ) {
    if (prevState.inputVal === "secret") {
      this.setState({
        products: [
          { id: Math.random(), completed: false, title: "secret" },
          { id: Math.random(), completed: false, title: "secret" },
          { id: Math.random(), completed: false, title: "secret" },
        ],
      });
    }
  }

  componentWillUnmount() {
    return () => {
      document.querySelector("form")?.removeEventListener("submit", () => {
        alert("success");
      });
    };
  }

  getProducts(): Promise<IProducts> {
    return new Promise<IProducts>((resolve) => {
      setTimeout(() => {
        resolve(MOCK_PRODUCTS_LIST);
      });
    });
  }

  handleChange(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ inputVal: e.target.value });
  }

  handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    this.setState((prev) => ({
      products: [
        { id: Math.random(), completed: false, title: this.state.inputVal },
        ...prev.products,
      ],
      inputVal: "",
    }));
  }

  render() {
    return (
      <Main>
        <AddForm
          value={this.state.inputVal}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <List
          className={"products-list"}
          items={this.state.products}
          renderItem={(product: IProduct) => (
            <ProductItem product={product} key={product.id} />
          )}
        />
      </Main>
    );
  }
}
