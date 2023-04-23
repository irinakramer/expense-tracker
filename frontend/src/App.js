import {useEffect, useState} from 'react'
import axios from "axios"
import './App.css';
import ExpensesTable from './components/ExpensesTable';

function App() {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  const [expensesList, setExpensesList] = useState([])

  const handleDescription = e => {
    setDescription(e.target.value)
  }

  const handleAmount = e => {
    setAmount(e.target.value)
  }

  const handleCategory = e => {
    setCategory(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    axios.post("http://localhost:5000/expenses", {
      description: description, 
      amount: amount, 
      category: category
    }).then(res => {
      setExpensesList([...expensesList, res.data])
      setDescription('')
      setAmount(0.0)
      setCategory('')
    }).catch(err => console.error(err.message))
  }

  const fetchExpenses = () => {
    axios.get("http://localhost:5000/expenses").then((res) => {
      setExpensesList(res.data)
    })
  }

  useEffect(() => {
    fetchExpenses()
  }, [])

  return (
    <div className="App">
      <section>
        <form onSubmit={handleSubmit}>
          <label htmlFor="description">Description</label>
          <input 
            onChange={handleDescription}
            type="text"
            name="description"
            id="description"
            value={description}
          />
          <label htmlFor="amount">Amount</label>
          <input 
            onChange={handleAmount}
            type="number"
            name="amount"
            id="amount"
            value={amount}
          />
          <label htmlFor="category">Category</label>
          <input 
            onChange={handleCategory}
            type="text"
            name="category"
            id="category"
            value={category}
          />
          <button type="submit">Submit</button>
        </form>
      </section>
      <section>
        <h3>Expenses</h3>
        <ExpensesTable expenses={expensesList} />
      </section>
    </div>
  );
}

export default App;
