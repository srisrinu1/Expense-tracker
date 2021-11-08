import React,{useState} from 'react'
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
export default function NewExpense(props) {
    const [editingStatus,setEditingStatus]=useState(false);
    const saveDataHandler=(expensesData)=>{
        const expenses={...expensesData};
        console.log(expenses);
        props.onAddExpense(expenses);
    }
   const editingHandler=()=>{
       setEditingStatus(true);
   }
   const stopEditingHandler=()=>{
       setEditingStatus(false);
   }
    return (
        <div className="new-expense">
        {!editingStatus && <button onClick={editingHandler}>Add New Expense</button>} 
         {editingStatus && <ExpenseForm onSaveData={saveDataHandler} editingStatus={stopEditingHandler}/> }
       
        </div>
    )
}
