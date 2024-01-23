import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

export default function ExpensesList({ filteredExpenses }) {
  if (filteredExpenses.length === 0) {
    return <h2 className="expenses-list___fallback">No expenses found.</h2>;
  }
  return (
    <ul className="expenses-list">
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}
