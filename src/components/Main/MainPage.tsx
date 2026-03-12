import logo from "../../assets/logo.png";
import userPic from "../../assets/user-pic.png";
import "../Main/MainPage.css";
import { IoStatsChartSharp } from "react-icons/io5";
import TableDatePicker from "./DatePicker/TableDatePicker";
import { FaCalculator } from "react-icons/fa";

export default function Main() {
  return (
    <>
      <header className="main-page-header">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h4>INVESTIQ</h4>
        </div>

        <div className="main-page-links-wrapper">
          <img src={userPic} alt="user" />
          <p className="main-page-link">User Name</p>
          <p className="main-page-link">Вийти</p>
        </div>
      </header>

      <main className="main-page-main">
        <div className="main-page-all-money-section">
          <p>Баланс:</p>
          <input type="number" placeholder="00.00 UAH" />
          <button>Підтвердити</button>
          <p>Перейти до розрахунків</p>
          <IoStatsChartSharp />
        </div>
        <div className="table-wrapper">
          <button className="table-spending-button">ВИТРАТИ</button>
          <button className="table-profit-button">ДОХІД</button>

          <div className="table">
            <div>
              <TableDatePicker />

              <div className="product-input">
                <input className="description" placeholder="Опис товару" />

                <select className="category">
                  <option>Категорія товару</option>
                </select>

                <div className="price">
                  <input type="text" placeholder="0,00" />
                  <FaCalculator />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
