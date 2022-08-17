import React, { useState } from 'react';
import { Button, InputGroup, Form } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function SpotTrade(props) {

    const headers = ['Price(USDT)', 'Amount(DOGE)', 'Time'];

    return (
        <div className="spot-order-container">
            <div className="spot-box-header-wrapper">
                <div className="title">
                    Recent Trades
                </div>
                <hr />
            </div>
            <div className="my-3">
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
            </div>
        </div>
    )
}
export default SpotTrade;