import React from 'react';
import Transaction from './Transaction.jsx'

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
                            <Transaction key={transaction.id}
                                transaction={transaction} 
                                categories={this.props.categories}
                                updateCategory={this.props.updateCategory}
                                />
                        )
                    })}

                </div>

            </div>
        )
    }
}









export default TransactionsTab;