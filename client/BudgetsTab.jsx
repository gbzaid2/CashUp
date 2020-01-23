import React from 'react';

class BudgetsTab extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="budget">

                <h3>Your Budgets</h3>     

                <div className="budget-table">

                    <div className="budget-header budget-row">
                        <div className="budget-data">Date</div>
                        <div className="budget-data">Category</div>
                        <div className="budget-data">Limit</div>
                        <div className="budget-data">Spent</div>
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