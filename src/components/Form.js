import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Panel from './common/Panel';

const apiKey = "62bef65d02f52935e9df6fdada9d59fe" //process.env.REACT_APP_API_KEY;

class Form extends Component {
    state = {
        header: {
            method: 'GET',
            headers: {
                'user-key': apiKey,
                'Content-Type': 'application/json',
            },
            credentials: 'same-origin'
        },
        showFeedback: false,
        categories: [],
        cityId: '',
        restaurants: [],
        redirect: false
    };

    getRestaurantData = async e => {
        e.preventDefault();
        const cityName = e.target.elements.cityName.value.toLowerCase();
        const categoryName = e.target.elements.categoryName.value;

        const cityUrl = `https://developers.zomato.com/api/v2.1/cities?q=${cityName}`;

        const cityInfo = await fetch(cityUrl, this.state.header);
        const cityJson = await cityInfo.json();
        const cityLocation = await cityJson.location_suggestions;

        if (cityLocation.length > 0) {
            this.setState({
                cityId: await cityLocation[0].id
            });
        };

        if (cityName === '' || this.state.cityId === '') {
            this.setState({
                showFeedback: true
            });
            setTimeout(() => {
                this.setState({
                    showFeedback: false
                })
            }, 3000);
            return;
        };

        const restaurantUrl = `https://developers.zomato.com/api/v2.1/search?entity_id=${this.state.cityId}&entity_type=city&category=${categoryName}&sort=rating`;
        const restaurantInfo = await fetch(restaurantUrl, this.state.header);
        const restaurantJson = await restaurantInfo.json();
        const restaurantsData = await restaurantJson.restaurants;

        const restaurants = [];

        restaurantsData.forEach(restaurant => {
            const exactRestaurant = restaurant.restaurant;
            restaurants.push(exactRestaurant);
        });

        this.setState({
            restaurants,
            redirect: true
        });
    };

    getCategoriesData = async () => {
        const categoryUrl = `https://developers.zomato.com/api/v2.1/categories`;
        const categoryInfo = await fetch(categoryUrl, this.state.header);
        const categoryJson = await categoryInfo.json();
        const categories = await categoryJson.categories;

        this.setState({
            categories
        });
    };

    componentDidMount = () => {
        this.getCategoriesData();
    };

    render() {
        const options = this.state.categories.map(category => {
            return <option
                key={category.categories.id}>
                {category.categories.name}
            </option>
        });

        const { redirect, restaurants, showFeedback } = this.state;

        if (redirect) {
            return <Redirect to={{
                pathname: '/resturants',
                state: restaurants
            }}
            />
        };

        return (
            <React.Fragment>
                <Panel>
                    <form
                        className="search-form"
                        onSubmit={this.getRestaurantData}>
                        <label htmlFor="category" className="search-form__label search-form__label--category">Choose the category.</label>
                        <select id="category" name="categoryName" className="search-form__item search-form__select">
                            {options}
                        </select>
                        <label htmlFor="location" className="search-form__label search-form__label--location">Enter your city.</label>
                        <input type="text" name="cityName" className="search-form__item search-form__input" />
                        <button type="submit" className="search-form__item search-form__btn">Discover</button>
                        {showFeedback && <h5 className="feedback">Please enter the location or valid location.</h5>}
                    </form>
                </Panel>
            </React.Fragment>

        )
    };
};

export default Form;