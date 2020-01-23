import React from 'react';

class TransactionInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            description: '',
            cost: 0
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
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
        return (
            <div className="txn-entry">
                <form>
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

                <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
}

export default TransactionInput;