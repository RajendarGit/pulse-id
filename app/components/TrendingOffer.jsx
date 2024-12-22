import React, { useEffect, useState } from "react";
import Title from "./Title";
import styled from "styled-components";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Image from "next/image";
import Logo from "./Logo";

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: 1.8rem;
  object-fit: cover;
`;

const SliderContainer = styled.div`
  display: grid;
  align-items: center;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, .4) 0%, rgba(0, 0, 0, 1) 100%);
    z-index: 1;
    border-radius: 1.8rem;
  }
  p {
    font-size: 0.75rem;
    font-weight: 500;
    color: #343434;
    margin-top: 0.5rem;
  }
  div.top-section {
    position: absolute;
    top: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    z-index: 1;
  }
  div.top-section--inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  div.bottom-section {
    position: absolute;
    bottom: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
    display: grid;
    gap: .2rem;
    width: 100%;
    z-index: 1;
    h4 {
        color: var(--white);
        font-size: 1rem;
    }
    p {
        color: var(--white);
        font-size: .6rem;
        margin-bottom: 1rem;
    }
    button {
        background-color: #FF98007A;
        border-radius: 5rem;
        padding: .75rem;
        width: 100%;
        font-size: 1rem;
        font-weight: 500;
        color: var(--white);
        border: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media (max-width: 376px) {
            text-indent: 5rem;
        }
    }
  }
`;

const StyledSlider = styled(Slider)`
margin-bottom: 1.2rem;
  .slick-dots {
    li {
      button {
        &:before {
          color: var(--secondary);
          font-size: .5rem;
        }
      }

      &.slick-active button:before {
        color: var(--primary);
      }
    }
  }
`;

const TrendingOffer = () => {
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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const limitedItems = items.slice(0, 3);

  const closeIcon = "/assets/images/close.svg";
  const arrowIcon = "/assets/images/arrow.svg";

  return (
    <div>
      <Title title="Trending Offer" />
      <StyledSlider {...settings}>
        {limitedItems.map((item) => (
          <Link key={item.id} href={item.merchant.website || "#"} passHref>
            <SliderContainer>
              <div className="top-section">
                <div className="top-section--inner">
                  <Logo />
                  <Link href="#" passHref>
                    <Image src={closeIcon} alt="close" width={48} height={48} />
                  </Link>
                </div>
              </div>
              <StyledImage
                src={item.images[0]}
                alt={item.merchant.name}
                width={100}
                height={100}
              />
              <div className="bottom-section">
                <h4>{item.merchant.name}</h4>
                <p>{item.maximumRewardValue} reviews</p>
                <button>See more<Image src={arrowIcon} alt="close" width={36} height={36} /></button>
              </div>
            </SliderContainer>
          </Link>
        ))}
      </StyledSlider>
    </div>
  );
};

export default TrendingOffer;
