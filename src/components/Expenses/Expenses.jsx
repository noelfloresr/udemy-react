import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList/ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const expenseHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.items.filter((item) => item.date.getFullYear().toString() === filteredYear);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onFilterChange={expenseHandler} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
