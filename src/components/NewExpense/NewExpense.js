import React from 'react';
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) =>{
    const saveExpenseDataHandler = (enteredExpenseDate) => {
        const expenseDate = {
            ...enteredExpenseDate,
            id: "e"+Math.random()
        }
        props.onSaveExpense(expenseDate)
    }
    return(
        <div className={'new-expense'}>
            <ExpenseForm onSaveExpensedate={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;