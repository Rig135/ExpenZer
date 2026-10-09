import Navbar from './Navbar';
import Total from './Total';
import ExpenseLogs from './ExpenseLogs';
import CssBaseline from '@mui/material/CssBaseline';
import BottomBar from './bottomBar';

import { useState, useEffect } from 'react';
import AddExpenseModal from './AddExpenseModal';

const expenseItems = [
  {
    id: 1,
    title: "Grocery Shopping",
    amount: 1450,
    category: "Food",
    date: "2026-10-01"
  },
  {
    id: 2,
    title: "Metro Card Recharge",
    amount: 500,
    category: "Transport",
    date: "2026-10-02"
  },
  {
    id: 3,
    title: "Electricity Bill",
    amount: 2200,
    category: "Utilities",
    date: "2026-10-03"
  },
  {
    id: 4,
    title: "Movie Tickets",
    amount: 750,
    category: "Entertainment",
    date: "2026-10-04"
  },
  {
    id: 5,
    title: "Coffee & Snacks",
    amount: 280,
    category: "Food",
    date: "2026-10-05"
  },
  {
    id: 6,
    title: "Hot Wheels",
    amount: 180,
    category: "Toys",
    date: "2026-10-05"
  }
]


function App() {
  const [expenses, setExpenses] = useState(expenseItems);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  }
  const handleCloseModal = () => setIsModalOpen(false);

  const handleAddExpense = (newexpense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, newexpense];
    });
    handleCloseModal();
  }

  return (
    <>
      <CssBaseline />
      <Navbar />
      <Total expenseItems={expenses} />
      <ExpenseLogs expenseItems={expenses} />
      {isModalOpen && (
        <AddExpenseModal
          onClose={handleCloseModal}
          onAddExpense={handleAddExpense}
        />
      )}
      <BottomBar onOpenModal={handleOpenModal} />
    </>
  )
}

export default App;
