import React, { useState } from 'react';
import { Button, InputGroup, Form } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function SpotHistory(props) {

    const [key, setKey] = useState('open');

    const headers = ['Date', 'Pair', 'Type', 'Side', 'Price', 'Amount', 'Filled', 'Total', 'Trigger'];


    return (
        <div className="spot-order-container">
            <div className="spot-box-header-wrapper">
                <div className="title">
                    History
                </div>
                <hr />
            </div>
            <div className="my-3">
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                >
                    <Tab eventKey="open" title="Open Orders(0)">
                        <table className="spot-table" width="100%">
                            <thead>
                                {headers.map(head =>
                                    <th>{head}</th>
                                )}
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan="9">
                                        No data found
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Tab>
                    <Tab eventKey="order" title="Order History">
                        <table className="spot-table" width="100%">
                            <thead>
                                {headers.map(head =>
                                    <th>{head}</th>
                                )}
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan="9">
                                        No data found
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Tab>
                    <Tab eventKey="trade" title="Trade History">
                        <table className="spot-table" width="100%">
                            <thead>
                                {headers.map(head =>
                                    <th>{head}</th>
                                )}
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan="9">
                                        No data found
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}
export default SpotHistory;