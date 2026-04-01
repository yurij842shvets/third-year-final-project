import { BarChart, Bar, XAxis, YAxis, Tooltip, LabelList } from "recharts";
import type { Row } from "../Types/types";

type Props = {
  current: number;
  rows: Row[];
};

export default function Chart({ current, rows }: Props) {
  const data = Object.values(
    rows.reduce(
      (acc, row) => {
        const typeFilter = current === 0 ? "expense" : "income";
        if (row.type !== typeFilter) return acc;
        const key = row.description;

        if (!acc[key]) {
          acc[key] = {
            name: key,
            value: 0,
          };
        }

        acc[key].value += row.amount;
        return acc;
      },
      {} as Record<string, { name: string; value: number }>,
    ),
  );

  return (
    <BarChart width={600} height={400} data={data}>
      <XAxis dataKey="name" />
      <YAxis hide />
      <Tooltip formatter={(v) => `${v} грн`} />
      <Bar dataKey="value" fill={"#ff6b00"} radius={[12, 12, 0, 0]}>
        <LabelList
          dataKey="value"
          position="top"
          formatter={(v) => `${Number(v).toLocaleString()} грн`}
        />
      </Bar>
    </BarChart>
  );
}
