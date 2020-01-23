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
            budgets: [],
            currentTab: "transactions"
        }
      this.getAllTransactions = this.getAllTransactions.bind(this);
      this.getAllCategories = this.getAllCategories.bind(this);
      this.getAllBudgets = this.getAllBudgets.bind(this);
    }

    getAllTransactions() {
      Axios.get('/server/transactions')
      .then(data => this.setState({ transactions: data.data}))
      .then(() => console.log(this.state.transactions))
      .catch(err => console.log(err));
    }

    getAllCategories() {
      Axios.get('/server/categories')
      .then(data => this.setState({ categories: data.data}))
      .then(() => console.log(this.state.categories))
      .catch(err => console.log(err));
    }

    submitTransaction(transaction) {
        console.log('TESTING SUBMIT TRANS:', transaction);
        // Make Axios post request here // ******
    }

<<<<<<< HEAD
    componentDidMount() {
      this.getAllTransactions();
      this.getAllCategories();
=======
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

>>>>>>> ec6ef12ee63512a4d83f35afb86df9fa1981106f
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
                <BudgetsTab categories={this.state.categories}/> : null
                }
                

            </div>
        )
    }
}
// this is a coment
// another comment


ReactDOM.render(<App/>, document.getElementById('app'))