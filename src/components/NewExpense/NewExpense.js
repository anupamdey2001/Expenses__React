import React,{useState} from 'react'
import ExpenseForm from './ExpenseForm'
import "./NewExpense.css"
const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
         const expenseData = {
             ...enteredExpenseData,
             id: Math.random().toString()
         };
         props.onAddExpence(expenseData);
         setIsEditing(false);
    };
    const stopEditingHandler = () => {
        setIsEditing(false);
    }
const startEditingHandler = () => {
    setIsEditing(true);
}
    return (
        <div className="new-expense">
           {!isEditing && <button type="submit" onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onStop={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler}/>}
        </div>
    );
}

export default NewExpense
