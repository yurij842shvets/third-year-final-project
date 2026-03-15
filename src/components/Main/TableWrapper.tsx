import TableDatePicker from "./DatePicker/TableDatePicker";
import { FaCalculator } from "react-icons/fa";
import Table from "./Table";
import Categories from "./Categories";
import Summary from "./Summary";

export default function TableWrapper() {
  return (
    <>
      <div className="table-wrapper">
        <button className="table-spending-button">ВИТРАТИ</button>
        <button className="table-profit-button">ДОХІД</button>

        <div className="table">
          <div className="table-data-enter-part">
            <TableDatePicker />

            <div className="product-input">
              <input className="description" placeholder="Опис товару" />

              <Categories/>

              <div className="price">
                <input type="text" placeholder="0,00" />
                <FaCalculator />
              </div>
            </div>

            <button className="table-enter-button">ВВЕСТИ</button>
            <button className="table-clear-button">ОЧИСТИТИ</button>
          </div>
          <div className="table-summary-wrapper">
          <Table />

          <Summary/>
          </div>

        </div>
      </div>
    </>
  );
}
