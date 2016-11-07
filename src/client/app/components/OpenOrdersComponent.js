import React from 'react';

import {getOrderType} from '../util';

class OpenOrdersComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {openOrders: []};

        this.props.store.subscribe(this.storeChanged.bind(this));
    }

    storeChanged() {
        let orders = this.props.store.getState().orders;
        let user = 'user1';

        let user_orders = orders.filter((order) => {
            return order.user_id == user;
        });

        this.setState({openOrders: user_orders});
    }

    render() {
        let open_orders = this.state.openOrders.map((order) => {
            return (
                <tr>
                    <td>
                        {order.user_id}
                    </td>
                    <td>
                        {order.price}
                    </td>
                    <td>
                        {getOrderType(order)}
                    </td>
                </tr>
            )

        });

        return (
            <div id="open-orders">
                <h2>OPEN ORDERS</h2>
                <table>
                    <tbody>
                        {open_orders}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default OpenOrdersComponent;