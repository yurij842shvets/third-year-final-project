export interface Row {
  id: number;
  date: string;
  description: string;
  categoryId: number;
  amount: number;
  type: "expense" | "income";
}
export interface Category {
  id: number;
  name: string;
  img: string;
  type: 'expense'| 'income'
}
export interface Months {
    label: string;
    value: string;
}