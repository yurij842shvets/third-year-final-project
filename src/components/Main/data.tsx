interface Category {
  id: number;
  name: string;
}
export const expenseCategories: Category[] = [
  { id: 1, name: "Транспорт" },
  { id: 2, name: "Продукти" },
  { id: 3, name: "Здоров’я" },
  { id: 4, name: "Алкоголь" },
  { id: 5, name: "Розваги" },
  { id: 6, name: "Все для дому" },
  { id: 7, name: "Техніка" },
  { id: 8, name: "Комуналка, зв’язок" },
  { id: 9, name: "Спорт, хобі" },
  { id: 10, name: "Навчання" },
  { id: 11, name: "Інше" },
];

export const incomeCategories: Category[] = [
  { id: 1, name: "Зарплата" },
  { id: 2, name: "Фріланс" },
];