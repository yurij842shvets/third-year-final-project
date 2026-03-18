import alcohol from "./assets/alcohol.png";
import entertainment from "./assets/entertainment.png";
import everythingForHome from "./assets/everything-for-home.png";
import health from "./assets/health.png";
import hobby from "./assets/hobby.png";
import others from "./assets/others.png";
import products from "./assets/prodcts.png";
import studying from "./assets/studying.png";
import technic from "./assets/technic.png";
import transport from "./assets/transport.png";
import utilities from "./assets/utilities.png";
import salary from './assets/salary.png'
import additionalSalary from './assets/additional-salary.png'


interface Category {
  id: number;
  name: string;
  img: string
}
export const expenseCategories: Category[] = [
  { id: 1, name: "Транспорт", img: transport },
  { id: 2, name: "Продукти", img: products },
  { id: 3, name: "Здоров’я", img:  health},
  { id: 4, name: "Алкоголь", img: alcohol },
  { id: 5, name: "Розваги", img: entertainment},
  { id: 6, name: "Все для дому", img: everythingForHome },
  { id: 7, name: "Техніка", img: technic },
  { id: 8, name: "Комуналка, зв’язок", img: utilities },
  { id: 9, name: "Спорт, хобі", img: hobby },
  { id: 10, name: "Навчання", img: studying },
  { id: 11, name: "Інше", img: others },
];

export const incomeCategories: Category[] = [
  { id: 1, name: "Зарплата", img: salary},
  { id: 2, name: "Фріланс", img: additionalSalary },
];