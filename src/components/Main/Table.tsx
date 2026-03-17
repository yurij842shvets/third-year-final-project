import * as React from "react";
import Paper from "@mui/material/Paper";
import MuiTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { TableVirtuoso, type TableComponents } from "react-virtuoso";
import { expenseCategories, incomeCategories } from "./data";

type Props = {
  type: "expense" | "income";
  rows: Expense[];
};

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
  { dataKey: "id", label: "", width: 50 },
];

const VirtuosoTableComponents: TableComponents<Expense> = {
  Scroller: React.forwardRef<HTMLDivElement, any>((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props: any) => (
    <MuiTable
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

function rowContent(
  _index: number,
  row: Expense,
  type: "expense" | "income",
  currentCategories: typeof expenseCategories | typeof incomeCategories,
) {
  const categoryName =
    currentCategories.find((c) => c.name === row.category)?.name ||
    row.category;
  return (
    <React.Fragment>
      <TableCell>{row.date}</TableCell>
      <TableCell>{row.description}</TableCell>
      <TableCell>{categoryName}</TableCell>
      <TableCell
        align="right"
        sx={{ color: type === "expense" ? "red" : "green" }}
      >
        {type === "expense" ? "-" : "+"}
        {Math.abs(row.amount).toFixed(2)} грн.
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

export default function Table({ type, rows }: Props) {
  const currentCategories =
    type === "expense" ? expenseCategories : incomeCategories;

  return (
    <Paper
      style={{
        height: 400,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        gap: "20px",
      }}
    >
      <TableVirtuoso
        data={rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={(index, row) =>
          rowContent(index, row, type, currentCategories)
        }
      />
    </Paper>
  );
}
