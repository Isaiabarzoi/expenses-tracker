import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense({ onAddExpense }) {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingExpense = () => {
    setIsEditing(true);
  };

  const stopEditingExpense = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing ? (
        <button onClick={startEditingExpense}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingExpense}
        />
      )}
    </div>
  );
}
