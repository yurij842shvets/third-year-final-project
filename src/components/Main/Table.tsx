import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { TableVirtuoso, type TableComponents } from "react-virtuoso";
// import Summary from "./Summary";

interface Expense {
  id: number;
  date: string;
  description: string;
  category: string;
  amount: number;
}

interface ColumnData {
  dataKey: keyof Expense;
  label: string;
  numeric?: boolean;
  width?: number;
}

const columns: ColumnData[] = [
  { dataKey: "date", label: "Дата", width: 100 },
  { dataKey: "description", label: "Опис", width: 150 },
  { dataKey: "category", label: "Категорія", width: 120 },
  { dataKey: "amount", label: "Сума", width: 80, numeric: true },
  { dataKey: "id", label: "", width: 50 }, // для кнопки видалення
];

const rows: Expense[] = [
  {
    id: 1,
    date: "05.09.2019",
    description: "Метро",
    category: "Транспорт",
    amount: -30,
  },
  {
    id: 2,
    date: "05.09.2019",
    description: "Банани",
    category: "Продукти",
    amount: -50,
  },
];

const VirtuosoTableComponents: TableComponents<Expense> = {
  Scroller: React.forwardRef<HTMLDivElement, any>((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props: any) => (
    <Table
      {...props}
      sx={{ borderCollapse: "separate", tableLayout: "fixed" }}
    />
  ),
  TableHead: React.forwardRef<HTMLTableSectionElement, any>((props, ref) => (
    <TableHead {...props} ref={ref} />
  )),
  TableRow: TableRow as React.FC<any>,
  TableBody: React.forwardRef<HTMLTableSectionElement, any>((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric ? "right" : "left"}
          style={{ width: column.width }}
          sx={{ backgroundColor: "background.paper" }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index: number, row: Expense) {
  return (
    <React.Fragment>
      <TableCell>{row.date}</TableCell>
      <TableCell>{row.description}</TableCell>
      <TableCell>{row.category}</TableCell>
      <TableCell align="right" sx={{ color: row.amount < 0 ? "red" : "green" }}>
        {row.amount.toFixed(2)} грн.
      </TableCell>
      <TableCell>
        <IconButton
          size="small"
          onClick={() => alert(`Видалити ${row.description}`)}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </TableCell>
    </React.Fragment>
  );
}

export default function ExpenseTable() {
  return (
    <Paper style={{ height: 400, width: "100%", display: 'flex', justifyContent: 'space-between', gap: '20px'}}>
      <TableVirtuoso
        data={rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
{/* 
      <Summary /> */}
    </Paper>
  );
}
