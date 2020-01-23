import React from 'react';

class TransactionsTab extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="txn">
                <h3>Your Transactions</h3>     

                <div className="txn-table">

                    <div className="txn-header txn-row">
                        <div className="txn-data">Date</div>
                        <div className="txn-data">Description</div>
                        <div className="txn-data">Amount</div>
                        <div className="txn-data">Category</div>
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