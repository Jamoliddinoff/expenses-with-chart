import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'TV set',
        amount: '45.6',
        date: new Date(2020, 5, 21)
    },
    {
        id: 'e2',
        title: 'Car insurance',
        amount: '145.32',
        date: new Date(2021, 6, 11)
    },
    {
        id: 'e3',
        title: 'News paper',
        amount: '59.16',
        date: new Date(2021, 8, 15)
    },
    {
        id: 'e5',
        title: 'A Shampoo',
        amount: '205.6',
        date: new Date(2019, 4, 20)
    },
    {
        id: 'e6',
        title: 'A phone',
        amount: '603.16',
        date: new Date(2019, 6, 24)
    },
    {
        id: 'e7',
        title: 'Game set',
        amount: '325.26',
        date: new Date(2020, 6, 21)
    },
    {
        id: 'e8',
        title: 'Vegetables',
        amount: '105',
        date: new Date(2020, 11, 27)
    },
]
const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
    const onExpenseHandle = expenseDate => {
        setExpenses(prevExpenses =>[expenseDate, ...prevExpenses])
    }

    return (
        <div>
            <NewExpense onSaveExpense={onExpenseHandle}/>
            <Expenses expense={expenses}/>
        </div>
    );
}

export default App;
