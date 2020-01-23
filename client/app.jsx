import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

import TransactionInput from './TransactionInput.jsx'
import TransactionsTab from './TransactionsTab.jsx'
import BudgetsTab from './BudgetsTab.jsx'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            transactions: [],
            categories: [],
            currentTab: "transations"
        }
      this.getAllTransactions = this.getAllTransactions.bind(this);
      this.getAllCategories = this.getAllCategories.bind(this);
      this.submitTransaction = this.submitTransaction.bind(this);
      this.changeTab = this.changeTab.bind(this);
    }

    getAllTransactions() {
      Axios.get('/server/transactions')
      .then(data => this.setState({ transactions: data.data}))
      .catch(err => console.log(err));
    }

    getAllCategories() {
      Axios.get('/server/categories')
      .then(data => this.setState({ categories: data.data}))
      .catch(err => console.log(err));
    }

    submitTransaction(transaction) {
        console.log('TESTING SUBMIT TRANS:', transaction);
        // Make Axios post request here // ******
    }

    changeTab(e) {
        // console.log('TESTING CHANGE TAB BUTT:', e.target.name)
        let button = e.target.name;
        if (button === "transactions") {
            this.setState({
                currentTab: "transactions"
            });
        }
        if (button === "budgets") {
            this.setState({
                currentTab: "budgets"
            });
        }

    }

    render() {
        return (
            <div>
                <header><h1>CASHUP</h1></header>

                <TransactionInput submitTransaction={this.submitTransaction}/>
                <br/>

                <button name="transactions" onClick={this.changeTab}>Transactions</button>
                <button name="budgets" onClick={this.changeTab}>Budgets</button>

                {this.state.currentTab === "transactions" ? 
                <TransactionsTab transactions={this.state.transactions} categories={this.state.categories}/> : null
                }
                
                {this.state.currentTab === "budgets" ? 
                <BudgetsTab categories={this.state.categories}/>: null
                }
                

            </div>
        )
    }
}
// this is a coment
// another comment


ReactDOM.render(<App/>, document.getElementById('app'))