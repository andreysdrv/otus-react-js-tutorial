import React, { ChangeEvent, Component, FormEvent } from "react";
import "./AddForm.scss";

interface AddFromProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export class AddForm extends Component<AddFromProps> {
  render() {
    return (
      <form
        className={"form"}
        onSubmit={(e: FormEvent<HTMLFormElement>) => this.props.onSubmit(e)}
      >
        <input
          className={"form__input"}
          value={this.props.value}
          onChange={this.props.onChange}
          type="text"
        />
        <button
          className={"form__submit-button"}
          type={"submit"}
          disabled={!this.props.value}
        >
          ADD
        </button>
      </form>
    );
  }
}
