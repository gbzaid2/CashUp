import React from 'react';
import ReactDOM from 'react-dom';

import TransactionInput from './TransactionInput.jsx'
import TransactionList from './TransactionList.jsx'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            transactions: []
        }
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