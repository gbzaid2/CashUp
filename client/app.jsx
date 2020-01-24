import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

import TransactionInput from './TransactionInput.jsx'
import TransactionsTab from './TransactionsTab.jsx'
import BudgetsTab from './BudgetsTab.jsx'
import BudgetInput from './BudgetInput.jsx';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            transactions: [],
            categories: [],
            currentTab: "transactions"
        }
      this.getAllTransactions = this.getAllTransactions.bind(this);
      this.getAllCategories = this.getAllCategories.bind(this);
      this.changeTab = this.changeTab.bind(this);
      this.submitTransaction = this.submitTransaction.bind(this);
      this.submitBudget = this.submitBudget.bind(this);
      this.updateCategory = this.updateCategory.bind(this);
    }

    getAllTransactions() {
      Axios.get('/server/transactions')
      .then(data => this.setState({ transactions: data.data}))
      .then(() => console.log('TESTING ALL TRANSACTIONS:', this.state.transactions))
      .catch(err => console.log(err));
    }

    getAllCategories() {
      Axios.get('/server/categories')
      .then(data => this.setState({ categories: data.data}))
      .then(() => console.log('TESTING ALL CATEGORIES:', this.state.categories))
      .catch(err => console.log(err));
    }

    submitTransaction(transaction) {
        Axios.post('/server/transactions', transaction)
        .then(() => console.log('submitted transaction to DB'))
        .then(() => this.getAllTransactions())
        .catch(err => console.log(err));
        
    }

    submitBudget(budget) {
        // console.log('TESTING CLIENT BUDGET:', budget);
      Axios.post('/server/categories', budget)
      .then(() => console.log('submitted budget to DB'))
      .then(() => this.getAllCategories())
      .catch(err => console.log(err));
    }

    componentDidMount() {
      this.getAllTransactions();
      this.getAllCategories();
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

    updateCategory(update) {
        // console.log('TESTING UPDATE CAT:', update);
        Axios.put("/server/transactions", update)
    }

    

    render() {
        return (
            <div>
                <header><h1>CASHUP</h1></header>

                {this.state.currentTab === "transactions" ? 
                <TransactionInput submitTransaction={this.submitTransaction} categories={this.state.categories}/> : null
                }

                {this.state.currentTab === "budgets" ? 
                <BudgetInput submitBudget={this.submitBudget}/> : null
                }

                <br/>

                <button name="transactions" onClick={this.changeTab}>Transactions</button>
                <button name="budgets" onClick={this.changeTab}>Budgets</button>

                {this.state.currentTab === "transactions" ? 
                <TransactionsTab transactions={this.state.transactions} categories={this.state.categories} updateCategory={this.updateCategory}/> : null
                }
                
                {this.state.currentTab === "budgets" ? 
                <BudgetsTab categories={this.state.categories}/> : null
                }
                

            </div>
        )
    }
}
// this is a coment
// another comment


ReactDOM.render(<App/>, document.getElementById('app'))