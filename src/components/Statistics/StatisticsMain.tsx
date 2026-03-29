import { FaArrowLeftLong } from "react-icons/fa6";
import "./Statistics.css";
import ExpensesIncomeSlider from "./ExpensesIncomeSlider";
import TransactionsImages from "./TransactionsImages";
import { useState, useEffect } from "react";
import Chart from "./Chart";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks/hooks";

export default function StatisticsMain() {
  const [current, setCurrent] = useState<number>(0);
  const [balance, setBalance] = useState(0);
  const navigate = useNavigate()
  const { currentUser } = useAppSelector((state) => state.auth);

  const handleNavigateToMain = () => {
    navigate('/main')
  }

  useEffect(() => {
    if (!currentUser)return;
    const balanceKey = `balance_${currentUser.email}`;
    const savedBalance = localStorage.getItem(balanceKey);

    if(savedBalance) {
      setBalance(Number(savedBalance))
    }
  }, [currentUser])

  return (
    <>
      <main className="main-page-main">
        <div className="main-page-all-money-section">
          <div className="back-arrow" onClick={handleNavigateToMain}>
            <FaArrowLeftLong style={{ color: "#ff9d00" }} />
            Повернутись на головну
          </div>
          <p>Баланс:</p>
             <input type="text" placeholder="00.00 UAH" value={balance.toFixed(2) + " UAH"}/>
          <button>Підтвердити</button>
        </div>

        <div className="expense-income-wrapper">
          <h3>
            Витрати: <p className="expense-number">- 18 000.00 грн</p>
          </h3>
          <h3>
            Доходи: <p className="income-number">+ 45 000.00 грн</p>
          </h3>
        </div>

        <div className="transactions-images-wrapper">
          <ExpensesIncomeSlider current={current} setCurrent={setCurrent} />
          <TransactionsImages type={current === 0 ? "expense" : "income"} />
          <Chart current={current}/>
        </div>
      </main>
    </>
  );
}
