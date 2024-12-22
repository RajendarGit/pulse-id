'use client'
import React from 'react'
import Header from '../components/Header'
import Container from '../components/Container'
import DiscoverCitySlider from '../components/DiscoverCitySlider'
import TrendingOffer from '../components/TrendingOffer'
import SpecialOffer from '../components/SpecialOffer'

const Landing = () => {
  return (
    <div>
      <Header />
      <DiscoverCitySlider />
      <Container>
        <TrendingOffer />
        <SpecialOffer />
      </Container>
    </div>
  );
}

export default Landing