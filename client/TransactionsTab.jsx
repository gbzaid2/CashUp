import React from 'react';

class TransactionsTab extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="txn">
                <h2>Your Transactions</h2>     

                <div className="txn-table">

                    <div className="txn-header txn-row">
                        <div className="txn-data"><h4>Date</h4></div>
                        <div className="txn-data"><h4>Description</h4></div>
                        <div className="txn-data"><h4>Amount</h4></div>
                        <div className="txn-data"><h4>Category</h4></div>
                    </div>

                    {this.props.transactions.map((transaction) => {
                        return (
                            <div className="txn-row" key={transaction.id}>
                                <div className="txn-data">{transaction.date}</div>
                                <div className="txn-data">{transaction.description}</div>
                                <div className="txn-data">{transaction.amount}</div>
                            </div>

                        )
                    })}

                </div>

            </div>
        )
    }
}

export default TransactionsTab;