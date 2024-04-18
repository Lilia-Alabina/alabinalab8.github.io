import React from 'react';

class Date extends React.Component {
    render() {
        return (
            <div className="expense-date">
                <div className="expense-date__month">{this.props.date.getFullYear()}</div>
                <div className="expense-date__year">{this.props.date.getMonth() + 1}</div>
                <div className="expense-date__day">{this.props.date.getDate()}</div>
            </div>
        );
    }
}

export default Date;
