import React, {useState} from 'react'
import axios from "axios"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function ExpensesForm({expensesList, setExpensesList}) {
    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')

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

  return (
    <Box>
         <h3>Expenses</h3>
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                '& > :not(style)': { m: 2, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
      <TextField 
        label="Description" 
        name="description"
        id="description"
        variant="outlined" 
        type="text"
        onChange={handleDescription}
        value={description}
      />
      <TextField 
        label="Amount" 
        name="amount"
        id="amount"
        variant="outlined" 
        type="number"
        onChange={handleAmount}
        value={amount}
      />
      <TextField 
        label="Category" 
        name="category"
        id="category"
        variant="outlined" 
        type="text"
        onChange={handleCategory}
        value={category}
      />
      <Button 
        variant="contained" 
        type="submit" 
      >Submit</Button>
    </Box>

    </Box>

  );
}