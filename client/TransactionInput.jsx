import React from 'react';

class TransactionInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            description: '',
            cost: 0,
            selectedCategory: 'None'
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(e) {
        let selected = e.target.value;
        // console.log('TESTING SELECT:', selected);
        this.setState({
            selectedCategory: selected
        })
    }

    handleInput(e) {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    handleClick() {
        // console.log('TESTING SUBMIT BUTTON:', this.state);
        this.props.submitTransaction(this.state);
    }

    render() {
        // console.log('TESTING STATE CHANGE:', this.state)
        return (
            <div className="txn-entry">
                <form>
                    <input type="date"
                            name="date"
                            min="2019-01-01"
                            max="2020-12-31"
                            onChange={this.handleInput}></input>

                    <input type="text" 
                        placeholder="Description" 
                        name="description" 
                        onChange={this.handleInput}
                        value={this.state.description}></input>

                    <input type="number" 
                        placeholder="Cost" 
                        name="cost" 
                        onChange={this.handleInput}
                        value={this.state.cost}></input>
                    

                </form>

                <select onChange={this.handleSelect}>
                    <option value="" selected disabled hidden>Choose Category</option>
                    {this.props.categories.map(category => {
                        return (
                            <option key={category.id} value={category.name}>{category.name}</option>
                        )
                    })}
                </select>

                <button onClick={this.handleClick}>Enter Transaction</button>
            </div>
        )
    }
}

export default TransactionInput;