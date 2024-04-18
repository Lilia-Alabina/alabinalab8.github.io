import React from 'react';
import Item from './ExpenseItem'

class App extends React.Component {
    
    render() {
        return (
            <div className="card expenses">
                <Item />
            </div>
        );
    }
}

export default App;
