import React, {useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [userInputs,setUserUnputs] = useState({
        title:'',
        amount:'',
        date:''
    });
    const titleChange = (event) => {
        setUserUnputs({...userInputs,title:event.target.value});
    }
    const amountChange = (event) => {
        setUserUnputs({...userInputs,amount:event.target.value});
    }
    const dateChange = (event) => {
        setUserUnputs({...userInputs,date:event.target.value});
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        props.onSaveExpensedate({
            title:userInputs.title,
            amount:userInputs.amount,
            date:new Date(userInputs.date)
        })

        setUserUnputs({
            title:'',
            amount:'',
            date:''
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type='text'
                        value={userInputs.title}
                        onChange={titleChange}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number'
                        value={userInputs.amount}
                        onChange={amountChange}
                        min='0.01'
                        step='0.01'
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        value={userInputs.date}
                        onChange={dateChange}
                        min='2019-01-01'
                        max='2022-12-31'
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;