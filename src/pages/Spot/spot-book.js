import React, { useState } from 'react';
import { Button, InputGroup, Form } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function SpotBook(props) {

    const headers = ['Price(USDT)', 'Amount(DOGE)', 'Time'];
    const data = [
        {
            price: 10,
            amount: 0.0993,
            time: new Date().getTime()
        },
        {
            price: 10,
            amount: 0.0993,
            time: new Date().getTime()
        },
        {
            price: 10,
            amount: 0.0993,
            time: new Date().getTime()
        }, {
            price: 10,
            amount: 0.0993,
            time: new Date().getTime()
        }, {
            price: 10,
            amount: 0.0993,
            time: new Date().getTime()
        }, {
            price: 10,
            amount: 0.0993,
            time: new Date().getTime()
        }, {
            price: 10,
            amount: 0.0993,
            time: new Date().getTime()
        }, {
            price: 10,
            amount: 0.0993,
            time: new Date().getTime()
        }, {
            price: 10,
            amount: 0.0993,
            time: new Date().getTime()
        }, {
            price: 10,
            amount: 0.0993,
            time: new Date().getTime()
        }, {
            price: 10,
            amount: 0.0993,
            time: new Date().getTime()
        }, {
            price: 10,
            amount: 0.0993,
            time: new Date().getTime()
        }, {
            price: 10,
            amount: 0.0993,
            time: new Date().getTime()
        }, {
            price: 10,
            amount: 0.0993,
            time: new Date().getTime()
        }, {
            price: 10,
            amount: 0.0993,
            time: new Date().getTime()
        }, {
            price: 10,
            amount: 0.0993,
            time: new Date().getTime()
        }, {
            price: 10,
            amount: 0.0993,
            time: new Date().getTime()
        }, {
            price: 10,
            amount: 0.0993,
            time: new Date().getTime()
        }, {
            price: 10,
            amount: 0.0993,
            time: new Date().getTime()
        }, {
            price: 10,
            amount: 0.0993,
            time: new Date().getTime()
        }, {
            price: 10,
            amount: 0.0993,
            time: new Date().getTime()
        }, {
            price: 10,
            amount: 0.0993,
            time: new Date().getTime()
        }, {
            price: 10,
            amount: 0.0993,
            time: new Date().getTime()
        },
    ]

    return (
        <div className="spot-box-container my-2">
            <div className="spot-box-header-wrapper">
                <div className="title">
                    Order Book
                </div>
                <hr />
            </div>
            <div className="tableFixHead my-3">
                <table className="spot-table" width="100%">
                    <thead>
                        {headers.map(head =>
                            <th>{head}</th>
                        )}
                    </thead>
                    <tbody>
                        {/* <tr>
                            <td colSpan="9">
                                No data found
                            </td>
                        </tr> */}
                        {data.map(res =>
                            <tr>
                                <td>{res.price}</td>
                                <td>{res.price}</td>
                                <td>{res.price}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default SpotBook;