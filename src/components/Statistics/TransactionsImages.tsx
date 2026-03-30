import { expenseCategories, incomeCategories } from "../../data";
import type { Row } from "../Types/types";

interface Props {
  type: "expense" | "income";
  rows: Row[];
  selectedPeriod: string;
}

export default function TransactionsImages({
  type,
  rows,
  selectedPeriod,
}: Props) {
  const currentCategories =
    type === "expense" ? expenseCategories : incomeCategories;

  const categoriesSum = currentCategories.map((c) => {
    const total = rows
      .filter(
        (r) =>
          r.categoryId === c.id &&
          r.type === type &&
          r.date.startsWith(`2026-${selectedPeriod}`),
      )
      .reduce((sum, r) => sum + r.amount, 0);
    return { ...c, total };
  });

  return (
    <div className="transaction-images-categories-wrapper">
      {categoriesSum.map((c) => (
        <div key={c.id} className="transaction-image-card">
          <img src={c.img} alt={c.name} />
          <p>{c.name}</p>
          <p>{c.total.toFixed(2)} UAH</p>
        </div>
      ))}
    </div>
  );
}
