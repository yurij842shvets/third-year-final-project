import { BarChart, Bar, XAxis, YAxis, Tooltip, LabelList } from "recharts";

type Props = {
  current: number;
};

export default function Chart({ current }: Props) {
  const expenseData = [
    { name: "Свинина", value: 5000 },
    { name: "Гов’ядина", value: 4500 },
    { name: "Курятина", value: 3200 },
    { name: "Риба", value: 2100 },
    { name: "Паніні", value: 1800 },
    { name: "Кава", value: 1700 },
    { name: "Спагетті", value: 1500 },
    { name: "Шоколад", value: 800 },
    { name: "Маслини", value: 500 },
    { name: "Зелень", value: 300 },
  ];

  const incomeData = [
    { name: "Моя", value: 25000 },
    { name: "Дружини", value: 20000 },
  ];

  const data = current === 0 ? expenseData : incomeData;

  return (
    <BarChart width={800} height={600} data={data}>
      <XAxis dataKey="name" />
      <YAxis hide />
      <Tooltip formatter={(v) => `${v} грн`} />
      <Bar
        dataKey="value"
        fill={"#ff6b00"}
        radius={[12, 12, 0, 0]}
      >
        <LabelList
          dataKey="value"
          position="top"
          formatter={(v) => `${Number(v).toLocaleString()} грн`}
        />
      </Bar>
    </BarChart>
  );
}
