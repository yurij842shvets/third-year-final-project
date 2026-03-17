import { expenseCategories, incomeCategories } from "./data";
import "./MainPage.css";

interface CategoriesProps {
  value: number | null;
  onChange: (id: number) => void;
  type: "expense" | "income";
}

export default function Categories({ value, onChange, type }: CategoriesProps) {
  const currentCategories =
    type === "expense" ? expenseCategories : incomeCategories;

  return (
    <select
      name=""
      id=""
      className={"category"}
      value={value ?? ""}
      onChange={(e) => onChange(Number(e.target.value))}
    >
      <option value="" disabled hidden>
        Категорія товару
      </option>
      {currentCategories.map((c) => (
        <option value={c.id} key={c.id}>
          {c.name}
        </option>
      ))}
    </select>
  );
}
