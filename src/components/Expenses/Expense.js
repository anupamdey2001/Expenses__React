import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expense.css'
const Expense = (props) => {
    const [filterYear, setFilterYear] = useState('2021');
    const filterChangeHandler  = (selectData) => {
        setFilterYear(selectData);
    };
    const filterExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear;
    });
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter select={filterYear} onSelectOption={filterChangeHandler } />
                <ExpensesChart expenses={filterExpenses}/>
                <ExpensesList items = {filterExpenses}/>
            </Card>
        </div>
    )
}

export default Expense;
