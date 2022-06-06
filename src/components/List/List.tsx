import React, { Component, ReactNode } from "react";
import "./List.scss";

type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => ReactNode;
  className: string;
};

export class List<T> extends Component<ListProps<T>> {
  shouldComponentUpdate(
    nextProps: Readonly<ListProps<T>>,
    nextState: Readonly<Record<string, never>>,
    nextContext: never
  ): boolean {
    return this.props.items.length !== nextProps.items.length;
  }

  render() {
    return (
      <ul className={`list ${this.props.className}`}>
        {this.props.items.map(this.props.renderItem)}
      </ul>
    );
  }
}
