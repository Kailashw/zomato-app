import React, { Component } from 'react';
import Footer from './common/Footer';
import Form from './Form';
import Header from './common/Header';
import Panel from './common/Panel';

class Home extends Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <>
                <Header />
                <Panel>
                    <Form />
                </Panel>
                <Footer />
            </>
        )
    }
}

export default Home;