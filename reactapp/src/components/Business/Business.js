import React from "react";
import "./Business.css";

class Business extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.business.image,
      name: this.props.business.name,
      address: this.props.business.address,
      city: this.props.business.city,
      zipCode: this.props.business.zipCode,
      category: this.props.business.category,
      rating: this.props.business.rating,
      reviewCount: this.props.business.reviewCount
    };
  }

  render() {
    return (
      <div className="Business">
        <div className="image-container">
          <img src={this.state.image} alt="" />
        </div>
        <h2>{this.state.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{this.state.address}</p>
            <p>{this.state.city}</p>
            <p>{this.state.zipCode}</p>
          </div>
          <div className="Business-reviews">
            <h3>{this.state.category}</h3>
            <h3 className="rating">{this.state.rating} stars</h3>
            <p>{this.state.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
