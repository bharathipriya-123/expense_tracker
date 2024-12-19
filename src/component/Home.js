
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseForm from "./ExpenseForm";
import '../style/Home.css'

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExpenseId, setSelectedExpenseId] = useState();

  
  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpenses(storedExpenses);
  }, []);


  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleAddExpense = () => {
    setSelectedExpenseId(null); 
    setIsModalOpen(true);
  };

  const handleEditExpense = (id) => {
    setSelectedExpenseId(id);
    setIsModalOpen(true);
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const handleSaveExpense = (expense) => {
    if (selectedExpenseId) {
    
      setExpenses(
        expenses.map((item) => (item.id === selectedExpenseId ? expense : item))
      );
    } else {
      
      setExpenses([...expenses, { ...expense, id: Date.now() }]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <button onClick={handleAddExpense}>Add Expense</button>
      <ExpenseList
        expenses={expenses}
        onEdit={handleEditExpense}
        onDelete={handleDeleteExpense}
      />
      {isModalOpen && (
        <ExpenseForm
          onSave={handleSaveExpense}
          onCancel={() => setIsModalOpen(false)}
          expense={expenses.find((item) => item.id === selectedExpenseId)}
        />
      )}
    </div>
  );
};

export default App;
