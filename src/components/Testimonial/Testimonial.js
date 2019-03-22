import React, { Component } from "react";
import img1 from "../../images/cuza1.jpg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Slide from "./Slide";
import axios from "axios";

class Testimonial extends Component {
  state = {
    persons: []
  };

  galleryItems = () => {
    const list = [];
    this.state.persons.forEach((item, i) =>
      list.push(
        <Slide
          name="dda"
          description="dasdasdasdasdasfsdffdsfdsdsffdsfdsfddfsfsdsdfdsffdssdd"
          image={item.picture.large}
        />
      )
    );
    return list;
  };

  getUsers = async () => {
    const { data: posts } = await axios.get(
      "https://randomuser.me/api/?results=30&nat=de,fr,gb&inc=name,picture&noinfo"
    );
    this.setState({ persons: posts.results });
  };

  componentDidMount() {
    this.getUsers();
  }

  render() {
    const responsive = { 0: { items: 1 }, 1024: { items: 3 } };
    const galleryItems = this.galleryItems();
    return (
      <AliceCarousel
        items={galleryItems}
        responsive={responsive}
        buttonsDisabled
        fadeOutAnimation
        autoPlay
        autoPlayInterval={5000}
      />
    );
  }
}

export default Testimonial;
