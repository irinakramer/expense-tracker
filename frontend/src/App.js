import {useEffect, useState} from 'react'
import axios from "axios";
import Container from '@mui/material/Container';
import './App.css';
import ExpensesTable from './components/ExpensesTable';
import ExpensesForm from './components/ExpensesForm';

function App() {
  const [expensesList, setExpensesList] = useState([])

  const fetchExpenses = () => {
    axios.get("http://localhost:5000/expenses").then((res) => {
      setExpensesList(res.data)
    })
  }

  useEffect(() => {
    fetchExpenses()
  }, [])

  return (
      <Container className="App" maxWidth="md">
        <ExpensesForm 
          expensesList={expensesList} 
          setExpensesList={setExpensesList}
        />
        <ExpensesTable expenses={expensesList} />
      </Container>
  );
}

export default App;
