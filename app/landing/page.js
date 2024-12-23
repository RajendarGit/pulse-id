"use client";
import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import DiscoverCitySlider from "../components/DiscoverCitySlider";
import TrendingOffer from "../components/TrendingOffer";
import SpecialOfferCard from "../components/SpecialOfferCard";
import Title from "../components/Title";

const Landing = () => {
  return (
    <div>
      <Header />
      <DiscoverCitySlider />
      <Container>
        <TrendingOffer />
        <Title title="Add card for special offers" />
        <SpecialOfferCard
          title="Get Special Offers"
          description="Many offers waiting for you, get it now"
          btnText="Add a card"
        />
      </Container>
    </div>
  );
};

export default Landing;
