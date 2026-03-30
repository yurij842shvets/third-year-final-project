import alcohol from "./assets/alcohol.png";
import entertainment from "./assets/entertaiment.png";
import everythingForHome from "./assets/everything-for-home.png";
import health from "./assets/health.png";
import hobby from "./assets/hobby.png";
import others from "./assets/others.png";
import products from "./assets/products.png";
import studying from "./assets/studying.png";
import technic from "./assets/technic.png";
import transport from "./assets/transport.png";
import utilities from "./assets/utilities.png";
import salary from './assets/salary.png'
import additionalSalary from './assets/additional-salary.png'
import type { Category, Months} from "./components/Types/types";


export const expenseCategories: Category[] = [
  { id: 1, name: "Транспорт", img: transport, type: "expense"},
  { id: 2, name: "Продукти", img: products, type: "expense"},
  { id: 3, name: "Здоров’я", img: health, type: "expense"},
  { id: 4, name: "Алкоголь", img: alcohol, type: "expense"},
  { id: 5, name: "Розваги", img: entertainment, type: "expense"},
  { id: 6, name: "Все для дому", img: everythingForHome, type: "expense"},
  { id: 7, name: "Техніка", img: technic, type: "expense"},
  { id: 8, name: "Комуналка, зв’язок", img: utilities, type: "expense"},
  { id: 9, name: "Спорт, хобі", img: hobby, type: "expense"},
  { id: 10, name: "Навчання", img: studying, type: "expense"},
  { id: 11, name: "Інше", img: others, type: "expense"},
];

export const incomeCategories: Category[] = [
  { id: 12, name: "Зарплата", img: salary, type:'income'},
  { id: 13, name: "Фріланс", img: additionalSalary , type:'income'},
];

export const months: Months[] = [
  { label: "Січень", value: "01" },
  { label: "Лютий", value: "02" },
  { label: "Березень", value: "03" },
  { label: "Квітень", value: "04" },
  { label: "Травень", value: "05" },
  { label: "Червень", value: "06" },
  { label: "Липень", value: "07" },
  { label: "Серпень", value: "08" },
  { label: "Вересень", value: "09" },
  { label: "Жовтень", value: "10" },
  { label: "Листопад", value: "11" },
  { label: "Грудень", value: "12" },
];
