import React from 'react';
import Axios from 'axios';

class Transaction extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(e) {
        // console.log('TESTING TRANS CATEGORY SELECT:', e.target.value);
     
        let categoryId = e.target.value;

        this.setState({
            category: categoryId
        })

        let update = {
            categoryId: Number(categoryId),
            transactionId: this.props.transaction.id
        }
        this.props.updateCategory(update)
    }

    componentDidMount() {
        if (this.props.transaction.category_id === null) {
            this.setState({
                category: 0
            })
        } else {
            this.setState({
                category: this.props.transaction.category_id
            })
        }
    }


    render() {
        //console.log('TRANS ID:', this.props.transaction.id, 'CATEGORY:', this.state);
        return (
       

            <div className="txn-row">

                <div className="txn-data">{this.props.transaction.date}</div>
                <div className="txn-data">{this.props.transaction.description}</div>
                <div className="txn-data">{this.props.transaction.amount}</div>
                
                <select onChange={this.handleSelect} value={this.state.category}>

                    <option value="0">None</option>
                    
                    {this.props.categories.map((category, index) => {
                        return (
                            <option key={index} value={category.id}>{category.name}</option>
                        )
                    })}
                </select>

            </div>

        )
    }
}

export default Transaction;