import React from 'react';

class BudgetsTab extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="budget">

                <h2>Your Budgets</h2>     

                <div className="budget-table">

                    <div className="budget-header budget-row">
                        
                        <div className="budget-data"><h4>Category</h4></div>
                        <div className="budget-data"><h4>Limit</h4></div>
                        <div className="budget-data"><h4>Spent</h4></div>
                    </div>

                    {/* {this.props.transactions.map((transaction) => {
                        return (
                            <div className="budget-row" key={transaction.id}>
                                <div className="budget-data">{transaction.date}</div>
                                <div className="budget-data">{transaction.description}</div>
                                <div className="budget-data">{transaction.amount}</div>
                            </div>

                        )
                    })} */}

                </div>

            </div>
        )
    }
}

export default BudgetsTab;