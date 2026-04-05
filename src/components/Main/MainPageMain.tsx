import { IoStatsChartSharp } from "react-icons/io5";
import TableWrapper from "./TableWrapper";
import { useNavigate } from "react-router-dom";
import {useState, useEffect} from 'react'
import { useAppSelector } from "../../redux/hooks/hooks";


export default function MainPageMain() {

    const [balance, setBalance] = useState<number>(0)
    const { currentUser } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleNavigateToStatistics = () => {
    navigate("/statistics");
  };

  useEffect(() => {
    if (!currentUser) return;

    const balanceKey = `balance_${currentUser.email}`;
    const savedBalance = localStorage.getItem(balanceKey);
    if (savedBalance) {
      setBalance(Number(savedBalance));
    }
  }, [currentUser]);

  const saveBalance = (value: number) => {
    if (!currentUser) return;
    const balanceKey = `balance_${currentUser.email}`;
    localStorage.setItem(balanceKey, value.toString());
    setBalance(value);
  };
  return (
    <>
      <main className="main-page-main">
        <div className="main-page-all-money-section">
          <p>Баланс:</p>
          <input type="text" placeholder="00.00 UAH" onChange={(e) => setBalance(Number(e.target.value.replace(/[^\d.]/g, "")))} value={balance === 0 ? "" : balance}/>
          <button onClick={() => saveBalance(balance)}>Підтвердити</button>
          <p onClick={handleNavigateToStatistics}>Перейти до розрахунків</p>
          <IoStatsChartSharp />
        </div>
        <TableWrapper />
      </main>
    </>
  );
}
