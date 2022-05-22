import React, { FC, MouseEventHandler } from "react";
import "./Cell.scss";

interface CellProps {
  content: number;
  handleCellClick: MouseEventHandler;
}

const Cell: FC<CellProps> = ({ content, handleCellClick }) => {
  const handleClick = (e) => handleCellClick(e.target.textContent);

  return (
    <div className="cell" onClick={handleClick}>
      {content}
    </div>
  );
};

export default Cell;
