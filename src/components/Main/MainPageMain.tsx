import { IoStatsChartSharp } from "react-icons/io5";
import TableWrapper from "./TableWrapper";

export default function MainPageMain() {
  return (
    <>
      <main className="main-page-main">
        <div className="main-page-all-money-section">
          <p>Баланс:</p>
          <input type="number" placeholder="00.00 UAH" />
          <button>Підтвердити</button>
          <p>Перейти до розрахунків</p>
          <IoStatsChartSharp />
        </div>
        <TableWrapper />
      </main>
    </>
  );
}
