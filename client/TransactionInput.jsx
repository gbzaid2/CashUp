import React from 'react';

class TransactionInput extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="txn-entry">
                <form>
                    <input type="text" placeholder="Enter Transaction Here"></input>
                    <input type="text" placeholder="Cost"></input>
                </form>
            </div>
        )
    }
}

export default TransactionInput;