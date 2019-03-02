import React from 'react';
import NotFound from './NotFound';

const ResturantDetails = props => {
  if (props.location.state === undefined) {
    return (
      <NotFound />
    )
  };

  const { thumb, name, user_rating: { aggregate_rating: rate }, location: { address }, average_cost_for_two: cost, currency, url, menu_url } = props.location.state.restaurant;

  return (
    <React.Fragment>
      <div className="detail-container">
        <div className="detail-image" style={thumb === '' ? { backgroundImage: `url("http://lorempixel.com/640/480/food/")` } : { backgroundImage: `url('${thumb}')` }}>
          <h1 className="restaurant-name">{name}</h1>
          <h4 className="restaurant-rated">{rate}</h4>
        </div>
        <div className="detail-content">
          <p className="detail-item"><span className="bold">Location: </span>{address}</p>
          <p className="detail-item"><span className="bold">Cost for pair: </span>{cost} {currency}</p>
          <button className="detail-btn"><a className="link" href={url} rel="noopener noreferrer" target="_blank">Go to website</a></button>
          <button className="detail-btn"><a className="link" href={menu_url} rel="noopener noreferrer" target="_blank">Go to menu</a></button>
          <button className="btn-transparent btn-transparent--back">
              Back to the list.
          </button>
        </div>
      </div>
    </React.Fragment>
  )
};

export default ResturantDetails;

