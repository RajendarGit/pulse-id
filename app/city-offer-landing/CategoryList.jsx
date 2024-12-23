import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Container from "../components/Container";
import { FiCheckCircle } from "react-icons/fi";
import { FiCodepen } from "react-icons/fi";
import { FiCommand } from "react-icons/fi";
import { FiGift } from "react-icons/fi";
import styled from "styled-components";
import Title from "../components/Title";

const categoryItems = [
  {
    id: 1,
    name: "All",
    icon: <FiCheckCircle />,
  },
  {
    id: 2,
    name: "Desert",
    icon: <FiCodepen />,
  },
  {
    id: 3,
    name: "Beauty",
    icon: <FiCommand />,
  },
  {
    id: 4,
    name: "Retails",
    icon: <FiGift />,
  },
];

const Section = styled.section`
  width: 100%;
  @media (min-width: 768px) {
    width: 768px;
    margin: 0 auto;
  }
`;

const SliderContainer = styled.div`
  margin-left: 1rem;
  button {
    width: 100%;
    padding: 0.5rem 1rem 0.5rem 0.4rem;
    display: flex;
    align-items: center;
    border-radius: 5rem;
    gap: 0.5rem;
    background-color: var(--white);
    color: var(--secondary);
    border: none;
    span {
      background: var(--primary);
      width: 32px;
      height: 32px;
      display: flex;
      align-content: center;
      justify-content: center;
      padding: 0.6rem;
      border-radius: 5rem;
      color: var(--white);
    }
  }
`;

const CategoryList = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    infinite: false,
  };
  return (
    <>
      <Container>
        <Title title="Explore Tokyo’s best category" />
      </Container>
      <Section>
        <Slider {...settings}>
          {categoryItems.map((item) => (
            <SliderContainer key={item.id}>
              <button>
                <span>{item.icon}</span>
                {item.name}
              </button>
            </SliderContainer>
          ))}
        </Slider>
      </Section>
    </>
  );
};

export default CategoryList;
