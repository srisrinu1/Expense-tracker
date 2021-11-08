// import './App.css';
import React,{useState} from 'react';

import Expenses from './components/ExpenseItem/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
    const expensesData = [{
        id: 'exp1',
        title: 'Mobile recharge',
        amount: 48,
        date: new Date(2020,8,11),
      },
    
      {
        id: 'exp2',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2020,8,11),
      }
     
    ];
    const [expenses,setExpenses]=useState(expensesData);

    const addExpenseHandler =(expense) => {
      setExpenses((prevExpense)=>{
          return [expense,...prevExpense];
      })
    }
    console.log(expensesData);
    return ( <div className = "App">
            <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses expenses = {expenses}/> 
        </div>
    );
}

export default App;