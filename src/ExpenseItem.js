import React from 'react';
import Date from './ExpenseDate';
import expenses from './expenses';

class App extends React.Component {
    render() {
        return (
            <div className="card expenses">
                {expenses.map(expense => (
                    <div  className="card expense-item">
                        <Date  date={expense.date} />
                        <div className="expense-item__description">
                            <h2>{expense.title}</h2>
                            <div className="expense-item__price">{expense.amount}</div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default App;
