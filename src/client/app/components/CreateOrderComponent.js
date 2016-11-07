import React from 'react';

import {openOrder} from '../actions/actions';

const initialState = {user: '', ticket: '', payment: '', price: ''};

class CreateOrderComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    handleSubmit(event) {
        this.props.store.dispatch(openOrder(this.state.user, this.state.ticket, this.state.payment, this.state.price));

        this.price_input.value = "";
        this.user_input.value = "";
        this.ticket_input.value = "";
        this.payment_input.value = "";

        this.ticket_input.disabled = false;
        this.payment_input.disabled = false;

        this.setState(initialState);
    }


    handleChange(property, event) {
        let change = {};
        let value = event.target.value;

        if(property == 'ticket'){
            if (value.length > 0){
                document.getElementById('input-payment').disabled = true;
            }
            else {
                document.getElementById('input-payment').disabled = false;
            }
        }
        else if (property == 'payment'){
            if(value.length > 0){
                document.getElementById('input-ticket').disabled = true;
            }
            else{
                document.getElementById('input-ticket').disabled = false;
            }
        }

        change[property] = value;

        this.setState(change);
    }

    render() {
        return (
            <div id="create-order">
                <h2>CREATE ORDER</h2>
                <table>
                    <tbody>
                    <tr>
                        <td>Price:</td>
                        <td><input id="input-price" type="number" onChange={this.handleChange.bind(this, 'price')} ref={(input) => this.price_input = input}/></td>
                    </tr>
                    <tr>
                        <td>Ticket:</td>
                        <td><input id="input-ticket" type="text" onChange={this.handleChange.bind(this, 'ticket')} ref={(input) => this.ticket_input = input}/></td>
                    </tr>
                    <tr>
                        <td>Payment:</td>
                        <td><input id="input-payment" type="text" onChange={this.handleChange.bind(this, 'payment')} ref={(input) => this.payment_input = input}/></td>
                    </tr>
                    <tr>
                        <td>User:</td>
                        <td><input id="input-user" type="text" onChange={this.handleChange.bind(this, 'user')} ref={(input) => this.user_input = input}/></td>
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