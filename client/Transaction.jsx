import React from 'react';
import Axios from 'axios';

class Transaction extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
        this.handleSelect = this.handleSelect.bind(this);
        this.getCategoryName = this.getCategoryName.bind(this);
    }

    handleSelect(e) {
        // console.log('TESTING TRANS CATEGORY SELECT:', e.target.value);
        let category = e.target.value;
        // this.setState({
        //     selectedCategory: category
        // })

    }

    getCategoryName(id) {
        // Axios.get('/')
    }

    render() {
        return (
        <div className="txn-row">

            <div className="txn-row" key={this.props.transaction.id}>

                <div className="txn-data">{this.props.transaction.date}</div>
                <div className="txn-data">{this.props.transaction.description}</div>
                <div className="txn-data">{this.props.transaction.amount}</div>
                
                <select onChange={this.handleSelect} value={this.state.selectedCategory}>
                    
                    {this.props.categories.map((category, index) => {
                        return (
                            <option key={index} value={category.id}>{category.name}</option>
                        )
                    })}
                </select>

            </div>

        </div>
        )
    }
}

export default Transaction;