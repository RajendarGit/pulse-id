"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SpecialOfferCard from "../components/SpecialOfferCard";
import styled from "styled-components";

const StyledSlider = styled(Slider)`
  .slick-dots {
    li {
      button {
        &:before {
          color: var(--secondary);
          font-size: 0.5rem;
        }
      }

      &.slick-active button:before {
        color: var(--primary);
      }
    }
  }
`;

const specialOfferData = [
  {
    id: 1,
    images: "/assets/images/offer.svg",
    title: "Get Special Offers",
    description: "Up to 9% discount",
    btnText: "View More",
    spanText: "SK-11",
  },
  {
    id: 2,
    images: "/assets/images/offer.svg",
    title: "Exclusive Deals",
    description: "Save up to 15%",
    btnText: "Shop Now",
    spanText: "SK-12",
  },
  {
    id: 3,
    images: "/assets/images/offer.svg",
    title: "Limited Time Offer",
    description: "Flat 20% off",
    btnText: "Discover",
    spanText: "SK-13",
  },
];

const SpecialOffersList = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <StyledSlider {...settings}>
      {specialOfferData.map((item) => (
        <SpecialOfferCard
          key={item.id}
          type={2}
          title={item.title}
          description={item.description}
          btnText={item.btnText}
          spanText={item.spanText}
        />
      ))}
    </StyledSlider>
  );
};

export default SpecialOffersList;
