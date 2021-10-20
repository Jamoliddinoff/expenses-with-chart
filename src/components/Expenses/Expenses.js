import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import {useEffect, useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (prop) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHendler = selectedYear => {
        setFilteredYear(selectedYear)
    }
    const filteredExpenses = prop.expense.filter(expense =>
        expense.date.getFullYear().toString() === filteredYear);

    return (
        <div className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHendler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList item={filteredExpenses}/>


        </div>
    );
}
export default Expenses;