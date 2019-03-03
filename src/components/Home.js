import React, { Component } from 'react';
import Footer from './common/Footer';
import Header from './common/Header';
import Panel from './common/Panel';
import zomato_Home from './images/zomato_Home.png'
import { Select, InputLabel, MenuItem, Button } from '@material-ui/core';


const imgStyle = {
    display: 'flex', height: '480px', width: '100%'
};

const selectStyle = {
    display: 'flex',
    flexGrow: 1
}

const divStyle = {
    display: 'flex',
    justifyContent: 'space-around'
}

class Home extends Component {
    constructor(props) {
        super()
        this.state = {
            city: 0
        }
    }

    handleChange = event => {
        this.setState({ city: event.target.value });
        console.log(this.state)
    };

    renderCities = () => {
        return (
            <div style={divStyle}>
                {this.state.city > 0 &&
                    <h1 >You have selected : </h1>
                }
                <Select
                    value={this.state.city}
                    onChange={this.handleChange}
                    inputProps={{
                        name: 'city',
                        id: 'city-simple',
                    }}
                    style={selectStyle}
                >
                    <MenuItem value={0}>
                        <em>Please Select Your City from the Drop Down Below.</em>
                    </MenuItem>
                    <MenuItem value={1}>Delhi</MenuItem>
                    <MenuItem value={2}>Kolkata</MenuItem>
                    <MenuItem value={3}>Mumbai </MenuItem>
                    <MenuItem value={4}>Bangalore</MenuItem>
                    <MenuItem value={5}>Pune</MenuItem>
                    <MenuItem value={6}>Hyderabad</MenuItem>
                </Select>
                {this.state.city > 0 &&
                    <Button variant="raised" color="secondary">Clik to Search..</Button>
                }
            </div>
        )
    }

    onSubmit = () => {

        // call resturants from the city and set it in localstorage.
    }

    render() {
        return (
            <>
                <Header />
                <Panel>
                    {this.renderCities()}
                    <img style={imgStyle} src={zomato_Home} alt="Home Page Logo" />
                </Panel>
                <Footer />
            </>
        )
    }
}

export default Home;