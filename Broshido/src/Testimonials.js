import "./Styles/TestimonialsStyles.css";
import React, { Component } from "react";
import { fetchTestimonials } from "./DataSource";

class Testimonials extends Component {
  renderSamurai = () => {
    let children = [];
    children = fetchTestimonials().map(item => (
      <div className="testimonials">
        <div className="test_name">{item.name}</div>
        <div className="star_rating">
          {new Array(item.rating).fill().map(() => "*")}
        </div>
        <div className="review">{item.review}</div>
      </div>
    ));
    return children;
  };

  render() {
    return (
      <>
        <div className="testimonials_header">
          <h1>TESTIMONIALS</h1>
        </div>
        <div className="tesitmonials_wrapper">{this.renderSamurai()}</div>
      </>
    );
  }
}

export default Testimonials;
