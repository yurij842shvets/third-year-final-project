import { useState } from "react";
import "./Statistics.css";

export default function ExpensesIncomeSlider() {
  const [current, setCurrent] = useState<number>(0);

  const categories: string[] = ["ВИТРАТИ", "ДОХІД"];

  function previousCategory() {
    setCurrent((prev) => (prev - 1 + categories.length) % categories.length);
  }

  function nextCategory() {
    setCurrent((prev) => (prev + 1) % categories.length);
  }

  return (
    <>
      <div className="flex">
        <div className="arrow-container">
          <div className="arrow upper-right" onClick={previousCategory}></div>
          <div className="arrow lower-right" onClick={previousCategory}></div>
        </div>
        <div>
          <p className="current-slider-category">{categories[current]}</p>
        </div>
        <div className="arrow-container">
          <div className="arrow upper-left" onClick={nextCategory}></div>
          <div className="arrow lower-left" onClick={nextCategory}></div>
        </div>
      </div>
    </>
  );
}
