import { FaArrowLeftLong } from "react-icons/fa6";
import "./Statistics.css";
import ExpensesIncomeSlider from "./ExpensesIncomeSlider";
import TransactionsImages from "./TransactionsImages";
import PeriodSlider from "./PeriodSlider";
import { useState, useEffect } from "react";
import Chart from "./Chart";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks/hooks";
import type { Row } from "../Types/types";

export default function StatisticsMain() {
  const [rows, setRows] = useState<Row[]>([]);
  const [current, setCurrent] = useState<number>(0);
  const [balance, setBalance] = useState(0);
  const navigate = useNavigate();
  const [selectedPeriod, setSelectedPeriod] = useState("03");
  const { currentUser } = useAppSelector((state) => state.auth);

  const handleNavigateToMain = () => {
    navigate("/main");
  };

  useEffect(() => {
    if (!currentUser) return;
    const balanceKey = `balance_${currentUser.email}`;
    const savedBalance = localStorage.getItem(balanceKey);

    if (savedBalance) {
      setBalance(Number(savedBalance));
    }
  }, [currentUser]);

  useEffect(() => {
    if (!currentUser) return;

    const storageKey = `financeRows_${currentUser.email}`;
    const savedRows = localStorage.getItem(storageKey);

    if (savedRows) {
      try {
        setRows(JSON.parse(savedRows));
      } catch {
        setRows([]);
      }
    }
  }, [currentUser]);

  const filteredRows = rows.filter((row) => {
    const rowMonth = String(new Date(row.date).getMonth() + 1).padStart(2, "0");
    return (
      rowMonth === selectedPeriod &&
      row.type === (current === 0 ? "expense" : "income")
    );
  });

  const totalExpenses = rows
    .filter((r) => r.type === "expense")
    .reduce((acc, r) => acc + r.amount, 0);

  const totalIncome = rows
    .filter((r) => r.type === "income")
    .reduce((acc, r) => acc + r.amount, 0);

  return (
    <>
      <main className="main-page-main">
        <div className="main-page-all-money-section">
          <div className="back-arrow" onClick={handleNavigateToMain}>
            <FaArrowLeftLong style={{ color: "#ff9d00" }} />
            Повернутись на головну
          </div>
          <p>Баланс:</p>
          <input
            type="text"
            placeholder="00.00 UAH"
            value={balance.toFixed(2) + " UAH"}
          />
          <button>Підтвердити</button>
          <PeriodSlider
            selectedPeriod={selectedPeriod}
            setSelectedPeriod={setSelectedPeriod}
          />
        </div>

        <div className="expense-income-wrapper">
          <h3>
            Витрати:{" "}
            <p className="expense-number">- {totalExpenses.toFixed(2)} грн</p>
          </h3>
          <h3>
            Доходи:{" "}
            <p className="income-number">+ {totalIncome.toFixed(2)} грн</p>
          </h3>
        </div>

        <div className="transactions-images-wrapper">
          <ExpensesIncomeSlider current={current} setCurrent={setCurrent} />

          <TransactionsImages
            type={current === 0 ? "expense" : "income"}
            rows={filteredRows}
          />
          <Chart current={current} rows={filteredRows} />
        </div>
      </main>
    </>
  );
}
