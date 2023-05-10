import React from "react";
function Cell(props) {
  const { id, cell, setCells, go, setGo, cells,winMessage } = props;

  function handleClick(e) {
    const taken =
      e.target.firstChild.classList.contains("circle") ||
      e.target.firstChild.classList.contains("cross");
    if (!taken) {
      if (go === "circle") {
        e.target.firstChild.classList.add("circle");
        setGo("cross");
        handleCell("circle");
      }
      if (go === "cross") {
        e.target.firstChild.classList.add("cross");
        setGo("circle");
        handleCell("cross");
      }
    }
  }
  function handleCell(className) {
    const nextCells = cells.map((cell, index) => {
      if (id === index) {
        return className;
      } else {
        return cell;
      }
    });
    setCells(nextCells); 
  }
  return (
    <div className="square" id={id} onClick={!winMessage && handleClick}>
      <div className={cell}></div>
    </div>
  );
}
export default Cell;
