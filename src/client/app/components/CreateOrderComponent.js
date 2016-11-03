import React from 'react';

import {openOrder} from '../actions/actions';

class CreateOrderComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {user: '', ticket: '', type: '', price: ''};
    }

    handleSubmit(event) {
        // console.log("EVENT");
        // console.log(event.target.value);

        console.log(this.state);

        this.props.store.dispatch(openOrder(this.state.user, this.state.ticket, null));
    }


    handleChange(property, event) {
        // console.log(property);
        // console.log(event.target.value);

        let change = {};
        change[property] = event.target.value;

        this.setState(change);

        // console.log(this.state);

    }

    render() {
        return (
            <div id="create-order">
                <h2>CREATE ORDER</h2>
                <table>
                    <tbody>
                    <tr>
                        <td>Price:</td>
                        <td><input type="number" onChange={this.handleChange.bind(this, 'price')}/></td>
                    </tr>
                    <tr>
                        <td>Ticket:</td>
                        <td><input type="text" onChange={this.handleChange.bind(this, 'ticket')}/></td>
                    </tr>
                    <tr>
                        <td>User:</td>
                        <td><input type="text" onChange={this.handleChange.bind(this, 'user')}/></td>
                    </tr>
                    <tr>
                        <td>
                            <input type="radio" name="order-type" value="buy-order" onChange={this.handleChange.bind(this, 'type')}/><label htmlFor="buy-order">Buy</label>
                            <input type="radio" name="order-type" value="sell-order" onChange={this.handleChange.bind(this, 'type')}/><label htmlFor="sell-order">Sell</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={this.handleSubmit.bind(this)}>Submit</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CreateOrderComponent;