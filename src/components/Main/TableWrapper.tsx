import TableDatePicker from "./TableDatePicker";
import { FaCalculator } from "react-icons/fa";
import Table from "./Table";
import Summary from "./Summary";
import { useState, useEffect } from "react";
import Categories from "./Categories";
import { expenseCategories, incomeCategories } from "../../data";
import { useAppSelector } from "../../redux/hooks/hooks";

interface Row {
  id: number;
  date: string;
  description: string;
  category: string;
  amount: number;
  type: "expense" | "income";
}

export default function TableWrapper() {
  const { currentUser } = useAppSelector((state) => state.auth);
  const [tab, setTab] = useState<"expense" | "income">("expense");
  const [rows, setRows] = useState<Row[]>([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState<string>("");
  const [category, setCategory] = useState<number | null>(null);
  const [date, setDate] = useState<string>("");
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    console.log("currentUser", currentUser);
    console.log("rows", rows);
  }, [currentUser, rows]);

  useEffect(() => {
    if (!currentUser) return;

    const storageKey = `financeRows_${currentUser.email}`;
    const savedRows = localStorage.getItem(storageKey);

    if (savedRows) {
      try {
        setRows(JSON.parse(savedRows));
      } catch (error) {
        console.error("Помилка при читанні localStorage:", error);
        setRows([]);
      }
    } else {
      setRows([]);
    }
    setIsLoaded(true);
    console.log("KEY:", `financeRows_${currentUser?.email}`);
  }, [currentUser]);

  useEffect(() => {
    if (!currentUser || !isLoaded) return;
    const storageKey = `financeRows_${currentUser.email}`;
    localStorage.setItem(storageKey, JSON.stringify(rows));
    console.log("KEY:", `financeRows_${currentUser?.email}`);
  }, [rows, currentUser]);



  const enterRow = () => {
    if (!currentUser) {
      alert("Спочатку увійдіть в акаунт");
      return;
    }

    if (!description || !amount || category === null || !date) {
      alert("Заповніть всі поля");
      return;
    }

    const categoryName =
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

    const newRows = [...rows, newRow];
    setRows(newRows);

    const storageKey = `financeRows_${currentUser.email}`;
    localStorage.setItem(storageKey, JSON.stringify(newRows));

    setDescription("");
    setAmount("");
    setCategory(null);
    setDate("");
  };

  const deleteRow = (id: number) => {
    if (!currentUser) return;
    const filteredRows = rows.filter((r) => r.id !== id);
    setRows(filteredRows);
    localStorage.setItem(
      `financeRows_${currentUser.email}`,
      JSON.stringify(filteredRows),
    );
  };
  const clearRow = () => {
    setDescription("");
    setAmount("");
    setDate("");
    setCategory(null);
  };

  return (
    <div className="table-wrapper" style={{margin: '0 100px'}}>
      <button
        className="table-spending-button"
        onClick={() => setTab("expense")}
      >
        ВИТРАТИ
      </button>
      <button className="table-profit-button" onClick={() => setTab("income")}>
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
          <Table type={tab} rows={rows.filter((r) => r.type === tab)} onDeleteRow={deleteRow}/>
          <Summary rows={rows.filter((r) => r.type === tab)} />
        </div>
      </div>
    </div>
  );
}
