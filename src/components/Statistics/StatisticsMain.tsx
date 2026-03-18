import { FaArrowLeftLong } from "react-icons/fa6";
import './Statistics.css'
import ExpensesIncomeSlider from "./ExpensesIncomeSlider";

export default function StatisticsMain() {
  return (
    <>
      <main className="main-page-main">
        <div className="main-page-all-money-section">
          <div className="back-arrow">
            <FaArrowLeftLong style={{color: '#ff9d00'}} />
            Повернутись на головну
          </div>
          <p>Баланс:</p>
          <input type="number" placeholder="00.00 UAH" />
          <button>Підтвердити</button>
        </div>

        <div className="expense-income-wrapper">
          <h3>Витрати: <p className="expense-number">- 18 000.00 грн</p></h3>
          <h3>Доходи: <p className="income-number">+ 45 000.00 грн</p></h3>
        </div>

        <ExpensesIncomeSlider/>
      </main>
    </>
  );
}
