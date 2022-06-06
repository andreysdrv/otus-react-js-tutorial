import React, { Component } from "react";
import "./Main.scss";

type MainProps = {
  children: React.ReactNode;
};

export class Main extends Component<MainProps> {
  render() {
    return <main className={"main"}>{this.props.children}</main>;
  }
}
