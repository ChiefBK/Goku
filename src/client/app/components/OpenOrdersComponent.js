import React from 'react';


class OpenOrdersComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {openOrders: []};

        this.props.store.subscribe(this.storeChanged.bind(this));
    }

    storeChanged() {
        console.log("STORE CHANGED");

        let orders = this.props.store.getState().orders;
        let user = 'user1';

        let user_orders = orders.filter((order) => {
            console.log("ORDER");
            console.log(order.user == user);

            return order.user == user;
        });

        this.setState({openOrders: user_orders});

        console.log(this.state);
    }

    render() {
        let open_orders = this.state.openOrders.map((order) => {
            return (
                <tr>
                    <td>
                        {order.user}
                    </td>
                    <td>
                        {order.ticket}
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