import React from "react";
import '../style/ExpenseList.css';
const ExpenseList = ({ expenses, onEdit, onDelete }) => {
  if (expenses.length === 0) return <p>No expenses added yet.</p>;

  return (
    <ul>
      {expenses.map((expense) => (
        <li key={expense.id}>
          <p>
            <strong>Amount:</strong> ₹{expense.amount}
          </p>
          <p>
            <strong>Category:</strong> {expense.category}
          </p>
          <p>
            <strong>Description:</strong> {expense.description}
          </p>
          <button onClick={() => onEdit(expense.id)}>Edit</button>
          <button onClick={() => onDelete(expense.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
