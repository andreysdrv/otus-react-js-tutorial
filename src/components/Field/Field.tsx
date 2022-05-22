import React, { FC } from "react";
import "./Field.scss";
import Cell from "../Cell";

interface FieldProps {
  size: number;
  values: number[];
}

const Field: FC<FieldProps> = ({ size, values }) => {
  const handleCellClick = (cell) => console.log(cell);

  return (
    <div
      className="field"
      style={{ width: `${size * 100}px`, height: `${size * 100}px` }}
    >
      {values.map((cell) => (
        <Cell key={cell} content={cell} handleCellClick={handleCellClick} />
      ))}
    </div>
  );
};

export default Field;
