import TableDatePicker from "./TableDatePicker";
import { FaCalculator } from "react-icons/fa";
import Table from "./Table";
import Summary from "./Summary";
import { useState, useEffect } from "react";
import Categories from "./Categories";
import { expenseCategories, incomeCategories } from "../../data";

interface Row {
  id: number;
  date: string;
  description: string;
  category: string;
  amount: number;
  type: "expense" | "income";
}

export default function TableWrapper() {
  const [tab, setTab] = useState<"expense" | "income">("expense");
  const [rows, setRows] = useState<any[]>([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState<string>("");
  const [category, setCategory] = useState<number | null>(null);
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    const savedRows = localStorage.getItem("financeRows");
    if (savedRows) {
      try {
        setRows(JSON.parse(savedRows));
      } catch (error) {
        console.error("Помилка при читанні localStorage:", error);
        setRows([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("financeRows", JSON.stringify(rows));
  }, [rows]);

  const enterRow = () => {
    if (!description || !amount || !category || !date)
      return <p>fill all of the fields</p>;

    const categoryName: string =
      (tab === "expense"
        ? expenseCategories.find((c) => c.id === category)
        : incomeCategories.find((c) => c.id === category)
      )?.name ?? "";
    const newRow: Row = {
      id: Date.now(),
      date,
      description,
      category: categoryName,
      amount: Number(amount),
      type: tab,
    };

    setRows([...rows, newRow]);
    setDescription("");
    setAmount("");
    setCategory(null);
    setDate("");
  };

  const clearRow = () => {
    setDescription("");
    setAmount("");
    setDate("");
    setCategory(null);
  };

  return (
    <>
      <div className="table-wrapper">
        <button
          className="table-spending-button"
          onClick={() => setTab("expense")}
        >
          ВИТРАТИ
        </button>
        <button
          className="table-profit-button"
          onClick={() => setTab("income")}
        >
          ДОХІД
        </button>

        <div className="table">
          <div className="table-data-enter-part">
            <TableDatePicker value={date} onChange={setDate} />

            <div className="product-input">
              <input
                className="description"
                placeholder="Опис товару"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              <Categories value={category} onChange={setCategory} type={tab} />

              <div className="price">
                <input
                  type="number"
                  placeholder="0,00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <FaCalculator />
              </div>
            </div>

            <button className="table-enter-button" onClick={enterRow}>
              ВВЕСТИ
            </button>
            <button className="table-clear-button" onClick={clearRow}>
              ОЧИСТИТИ
            </button>
          </div>
          <div className="table-summary-wrapper">
            <Table type={tab} rows={rows.filter((r) => r.type === tab)} />
            <Summary rows={rows.filter((r) => r.type === tab)} />
          </div>
        </div>
      </div>
    </>
  );
}
