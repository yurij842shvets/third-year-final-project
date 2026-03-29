import { expenseCategories, incomeCategories } from "../../data";

interface Props {
  type: "expense" | "income";
}

export default function TransactionsImages({ type }: Props) {
  const currentCategories =
    type === "expense" ? expenseCategories : incomeCategories;

  return (
    <>
      <div className="transaction-images-categories-wrapper">
        {currentCategories.map((c) => (
          <div key={c.id} className="transaction-image-card">
            <img src={c.img} alt={c.name} />
            <p>{c.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}
