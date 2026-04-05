import { expenseCategories, incomeCategories } from "../../data";
import type { Row } from "../Types/types";

interface Props {
  type: "expense" | "income";
  rows: Row[];
}

export default function TransactionsImages({ type, rows }: Props) {
  const currentCategories =
    type === "expense" ? expenseCategories : incomeCategories;

  const categoriesSum = currentCategories.map((c) => {
    const total = rows
      .filter((r) => r.categoryId === c.id)
      .reduce((sum, r) => sum + r.amount, 0);
    return { ...c, total };
  });

  return (
    <div className="transaction-images-categories-wrapper">
      {categoriesSum.map((c) => (
        <div key={c.id} className="transaction-image-card">
          <p>{c.total.toFixed(2)} UAH</p>
          <img src={c.img} alt={c.name} />
          <p>{c.name}</p>
        </div>
      ))}
    </div>
  );
}
