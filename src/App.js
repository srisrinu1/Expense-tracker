
// import './App.css';
import ExpenseItem from './components/ExpenseItem/ExpenseItem'

function App() {
  const expenses=[{expenseDate:new Date(),expenseTitle:"MobileCharge",price:"Rs.48"}]
  return (
    <div className="App">
      <ExpenseItem title={expenses[0].expenseTitle} price={expenses[0].price} date={expenses[0].expenseDate}/>
    </div>
  );
}

export default App;
