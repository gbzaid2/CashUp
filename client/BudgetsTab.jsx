import React from 'react';

class BudgetsTab extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="budget">

                <h2>Your Budgets</h2>     

                <div className="budget-table">

                    <div className="budget-header budget-row">
                        
                        <div className="budget-data"><h4>Category</h4></div>
                        <div className="budget-data"><h4>Limit</h4></div>
                        <div className="budget-data"><h4>Spent</h4></div>
                    </div>

                    {this.props.categories.map((category) => {
                        return (
                            <div className="budget-row" key={category.id}>
                                <div className="budget-data">{category.name}</div>
                                <div className="budget-data">{category.target}</div>
                                <div className="budget-data">{category.total}</div>
                            </div>

                        )
                    })}

                </div>

            </div>
        )
    }
}

export default BudgetsTab;