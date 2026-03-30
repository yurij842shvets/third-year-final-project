import './MainPage.css'
import type { Row } from '../Types/types';
interface SummaryProps {
  rows: Row[];
}


export default function Summary({rows}: SummaryProps) {
   const monthlyTotal = rows.reduce((acc, row) => {
    const date = new Date(row.date)
    const month = date.toLocaleString("uk-UA", { month: "long" })
    if (!acc[month]) {
      acc[month] = 0
    }
    acc[month] += row.amount

    return acc
   },  {} as Record<string, number>)
    return (
        <>
        <div className="summary-wrapper">
            <h3 className="summary">Зведення</h3>
            {Object.entries(monthlyTotal).map(([month, total]) => (
            <p key={month}>{month}: {total.toFixed(2)} грн.</p>
            ))}

        </div>
        </>
    )
}