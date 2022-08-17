import React, { useEffect, useState } from "react";
import Footer from '../components/layouts/Footer';
import Header from '../components/layouts/Header';
import { Accordion, Col, Container, Row, InputGroup, Dropdown, DropdownButton, FormControl } from 'react-bootstrap';
import transfer from "../assets/p2p/transfer.png";

function Faq(props) {

    var faqList = [
        {
            title: 'What is Cryptocurrency?',
            description: 'Refers to a digital currency, secured with cryptography to enable trusted transactions. Blockchain is the underlying technology, functioning as a ‘ledger’ or record of transactions made. Hundreds of currencies are in circulation, such as Bitcoin, Ether, Monero, etc. Each is designed by one or more brilliant individuals, usually meant to run as a decentralised system so that no single entity can control it. Cryptocurrency units are usually generated on the basis of an algorithm announced to everyone in advance, by ‘miners’ using powerful computers. Having expended a lot of time and electricity on ‘mining’, these miners can hold on to the units or sell to others.'
        },
        {
            title: 'What is Cryptocurrency?',
            description: 'Refers to a digital currency, secured with cryptography to enable trusted transactions. Blockchain is the underlying technology, functioning as a ‘ledger’ or record of transactions made. Hundreds of currencies are in circulation, such as Bitcoin, Ether, Monero, etc. Each is designed by one or more brilliant individuals, usually meant to run as a decentralised system so that no single entity can control it. Cryptocurrency units are usually generated on the basis of an algorithm announced to everyone in advance, by ‘miners’ using powerful computers. Having expended a lot of time and electricity on ‘mining’, these miners can hold on to the units or sell to others.'
        },
        {
            title: 'What is Cryptocurrency?',
            description: 'Refers to a digital currency, secured with cryptography to enable trusted transactions. Blockchain is the underlying technology, functioning as a ‘ledger’ or record of transactions made. Hundreds of currencies are in circulation, such as Bitcoin, Ether, Monero, etc. Each is designed by one or more brilliant individuals, usually meant to run as a decentralised system so that no single entity can control it. Cryptocurrency units are usually generated on the basis of an algorithm announced to everyone in advance, by ‘miners’ using powerful computers. Having expended a lot of time and electricity on ‘mining’, these miners can hold on to the units or sell to others.'
        },
        {
            title: 'What is Cryptocurrency?',
            description: 'Refers to a digital currency, secured with cryptography to enable trusted transactions. Blockchain is the underlying technology, functioning as a ‘ledger’ or record of transactions made. Hundreds of currencies are in circulation, such as Bitcoin, Ether, Monero, etc. Each is designed by one or more brilliant individuals, usually meant to run as a decentralised system so that no single entity can control it. Cryptocurrency units are usually generated on the basis of an algorithm announced to everyone in advance, by ‘miners’ using powerful computers. Having expended a lot of time and electricity on ‘mining’, these miners can hold on to the units or sell to others.'
        },
        {
            title: 'What is Cryptocurrency?',
            description: 'Refers to a digital currency, secured with cryptography to enable trusted transactions. Blockchain is the underlying technology, functioning as a ‘ledger’ or record of transactions made. Hundreds of currencies are in circulation, such as Bitcoin, Ether, Monero, etc. Each is designed by one or more brilliant individuals, usually meant to run as a decentralised system so that no single entity can control it. Cryptocurrency units are usually generated on the basis of an algorithm announced to everyone in advance, by ‘miners’ using powerful computers. Having expended a lot of time and electricity on ‘mining’, these miners can hold on to the units or sell to others.'
        },
        {
            title: 'What is Cryptocurrency?',
            description: 'Refers to a digital currency, secured with cryptography to enable trusted transactions. Blockchain is the underlying technology, functioning as a ‘ledger’ or record of transactions made. Hundreds of currencies are in circulation, such as Bitcoin, Ether, Monero, etc. Each is designed by one or more brilliant individuals, usually meant to run as a decentralised system so that no single entity can control it. Cryptocurrency units are usually generated on the basis of an algorithm announced to everyone in advance, by ‘miners’ using powerful computers. Having expended a lot of time and electricity on ‘mining’, these miners can hold on to the units or sell to others.'
        }

    ];

    // const [selectedPeer, selectPeerType] = useState(peerTypes[0]);

    return (
        <div>
            <Header></Header>
            <section className="faq-container mb-3">
                <Container>
                    <h1 className="faq-title">Faq</h1>
                    <h3>Genaral</h3>
                    <Accordion>
                        {
                            faqList.map((faq, i) => {
                                return (
                                    <Accordion.Item className="faq-card" eventKey={i}>
                                        <Accordion.Header><span className="me-2">{i + 1}.</span>{faq.title}</Accordion.Header>
                                        <Accordion.Body>
                                            {faq.description}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                )
                            })
                        }
                    </Accordion>
                </Container>
            </section>
            <Footer></Footer>
        </div>
    )
}

export default Faq;