
// import './App.css';
import ExpenseItem from './components/ExpenseItem/ExpenseItem';
import Expenses from './components/ExpenseItem/Expenses';

function App() {
  const expenses=[{id:"exp1",expenseDate:new Date(),expenseTitle:"MobileCharge",price:"Rs.48"},{id:"exp2",expenseDate:new Date(),expenseTitle:"ElectricBill",price:"Rs.602"}]
  return (
    <div className="App">
    <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
