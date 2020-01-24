import React from 'react';
import Axios from 'axios';

class Transaction extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: ''
        }
        this.handleSelect = this.handleSelect.bind(this);
        this.getCategoryName = this.getCategoryName.bind(this);
    }

    handleSelect(e) {
        console.log('TESTING TRANS CATEGORY SELECT:', e.target.value);
        let categoryId = e.target.value;
        this.getCategoryName(categoryId);

        let update = {
            categoryId: categoryId,
            transactionId: this.props.transaction.id
        }

        this.props.updateCategory(update)

    }

    componentDidMount() {
        if (this.props.transaction.category_id === null) {
            this.setState({
                category: "None"
            })
        } else {
            this.getCategoryName(this.props.transaction.category_id)
        }
    }

    getCategoryName(id) {
    
        Axios.get("/server/categoryId", {
        params: {
          ID: id
        }
      })
        .then(data => {
          this.setState({
            category: data.data[0].name
          })
 
        })
        .catch(() => {
          return;
        });
    }

    render() {
        console.log('WHAT IS THE CATEGORY STATE OF EACH TRANS:', this.state);
        return (
       

            <div className="txn-row">

                <div className="txn-data">{this.props.transaction.date}</div>
                <div className="txn-data">{this.props.transaction.description}</div>
                <div className="txn-data">{this.props.transaction.amount}</div>
                
                <select onChange={this.handleSelect} value={this.state.category}>
                    
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