import React from 'react';

class BudgetInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            limit: 0
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
        this.props.submitBudget(this.state);
    }

    render() {
        console.log('IS STATE CHANGING BUDGET:', this.state);
        return (
            <div className="budget-entry">
                <form>
                    <input type="text" 
                        placeholder="Budget Category" 
                        name="title" 
                        onChange={this.handleInput}
                        value={this.state.title}></input>

                    <input type="number" 
                        placeholder="Limit" 
                        name="limit" 
                        onChange={this.handleInput}
                        value={this.state.limit}></input>
                </form>

                <button onClick={this.handleClick}>Submit New Budget</button>
            </div>
        )
    }
}

export default BudgetInput;