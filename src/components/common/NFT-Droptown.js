import React, { useState } from 'react';
import { Button, InputGroup, Form } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function NFTDroptown(props) {

    const [toggle, setToggle] = useState(false);


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
    ];

    return (

        <div>
            <div className="custom-droptown-toggle" onClick={() => setToggle(!toggle)}>
                {props.value ? props.value : props.placeholder}
                {toggle && <div className="custom-droptown-popup tableFixHead my-3">
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
                                <tr onClick={() => props.change(res)}>
                                    <td>{res.price}</td>
                                    <td>{res.price}</td>
                                    <td>{res.price}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>}
            </div>



        </div >


    )
}
export default NFTDroptown;