import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

import TransactionInput from './TransactionInput.jsx'
import TransactionList from './TransactionList.jsx'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            transactions: [],
            categories: [],
            budgets: []
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

    getAllBudgets() {
      Axios.get('/server/budgets')
      .then(data => this.setState({ budgets: data.data}))
      .catch(err => console.log(err));
    }

    componentDidMount() {
      this.getAllTransactions();
      this.getAllCategories();
    }

    render() {
        return (
            <div>
                Hello World
                <TransactionInput/>
                <br/>

                <TransactionList transactions={this.state.transactions}/>

            </div>
        )
    }
}
// this is a coment
// another comment


ReactDOM.render(<App/>, document.getElementById('app'))