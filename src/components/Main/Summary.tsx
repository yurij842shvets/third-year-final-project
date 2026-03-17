import './MainPage.css'

interface Row {
  id: number;
  date: string; // формат YYYY/MM/DD
  description: string;
  category: string;
  amount: number;
  type: "expense" | "income";
}

interface SummaryProps {
  rows: Row[];
}


export default function Summary({rows}: SummaryProps) {
    const total = rows.reduce((acc, row) => acc + row.amount, 0)
    return (
        <>
        <div className="summary-wrapper">
            <h3 className="summary">Зведення</h3>
            <p>Сума: {total.toFixed(2)} грн.</p>
        </div>
        </>
    )
}