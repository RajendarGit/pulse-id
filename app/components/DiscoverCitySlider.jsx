"use client";
import styled from "styled-components";
import Link from "next/link";
import Container from "./Container";
import Title from "./Title";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const StyledImage = styled(Image)`
  width: 62px;
  height: 62px;
  border-radius: 100rem;
  object-fit: cover;
  border: 3px solid var(--primary);
  padding: 0.2rem;
`;

const SliderContainer = styled.div`
  padding: 1rem;
  text-align: center;
  display: grid;
  align-items: center;
  justify-content: center;
  p {
    font-size: 0.75rem;
    font-weight: 500;
    color: #343434;
    text-align: center;
    margin-top: 0.5rem;
  }
`;

const SliderSection = styled.div`
  @media (min-width: 768px) {
    width: 768px;
    margin: 0 auto;
  }
`;

const DiscoverCitySlider = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data/offerData.json");
        const result = await response.data.offers;
        setItems(result);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.35,
    slidesToScroll: 1,
  };

  return (
    <>
      <Container>
        <Title title="Discover Your City" link="/discover" />
      </Container>
      <SliderSection>
        <Slider {...settings}>
          {items.map((item) => (
            <Link key={item.id} href={"city-offer-landing"} passHref>
              <SliderContainer>
                <StyledImage
                  src={item.merchant.image}
                  alt={item.merchant.name}
                  width={100}
                  height={100}
                />
                <p>{item.merchant.name.slice(0, 5)}...</p>
              </SliderContainer>
            </Link>
          ))}
        </Slider>
      </SliderSection>
    </>
  );
};

export default DiscoverCitySlider;
