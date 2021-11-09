import React,{useState} from 'react'
import ExpenseItem from './ExpenseItem';
import Card from '../Wrapper/Card';
import ExpensesFilter from './ExpensesFilter';
import ChartBar from '../Chart/ChartBar';
import Chart from '../Chart/Chart';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

export default function Expenses(props) {
    const [filterYear,setFilteredYear]=useState(new Date().getFullYear());
    const filterChangeHandler =(selectedYear)=>{
             setFilteredYear(selectedYear);
    }
    const filterExpensesByYear=props.expenses.filter((expense)=>{
        return(expense.date.getFullYear().toString() === filterYear);
    });
   console.log(filterExpensesByYear);
    return (
        <Card className="expenses">
        <h1 style={{color:'white'}}>Hi</h1>
        <ExpensesFilter selected={filterYear} onFilterChange={filterChangeHandler}/>
          
         <ExpensesChart expenses={filterExpensesByYear} />
        <ExpenseList expenses={filterExpensesByYear} />
        
        
       
        
        </Card>
    )
}