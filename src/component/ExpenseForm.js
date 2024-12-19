import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import '../style/ExpenseForm.css';

const ExpenseForm = ({ onSave, onCancel, expense }) => {
  const [amount, setAmount] = useState(expense?.amount || "");
  const [category, setCategory] = useState(expense?.category || "");
  const [description, setDescription] = useState(expense?.description || "");
  const amountRef = useRef();

  useEffect(() => {
    amountRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id: expense?.id || Date.now(), amount, category, description });
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <label>
          Amount:
          <input
            ref={amountRef}
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </label>
        {/* <br></br> */}
        <label>
          Category:
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </label>
        {/* <br></br> */}
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        {/* <br></br> */}
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
