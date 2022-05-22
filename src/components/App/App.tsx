import * as React from "react";
import "./App.scss";
import Field from "../Field";
import { CELLS, FIELD_SIZE } from "../utils/config";

const App = () => {
  return (
    <div className="main">
      <Field size={FIELD_SIZE} values={CELLS} />
    </div>
  );
};

export default App;
