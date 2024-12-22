import React from "react";
import Title from "./Title";
import styled from "styled-components";
import Image from "next/image";

const StyledCard = styled.div`
  border-radius: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: linear-gradient(to bottom, #ff980066, #ff98002f);
  gap: 3rem;
  margin-bottom: 2rem;
  button {
    background-color: var(--primary);
    border: none;
    border-radius: 10rem;
    padding: .7rem 1rem;
    color: white;
    font-weight: 600;
    cursor: pointer;
    max-width: 120px;
  }
  div {
    display: grid;
    gap: 0.5rem;
    h4 {
        color: var(--primary);
        font-size: 1rem;
        font-weight: 600;
    }
    p {
      margin-bottom: 1rem;
      color: #343434;
        font-size: .75rem;
    }
  }
`;

const SpecialOffer = () => {
  return (
    <div>
      <Title title="Add card for special offers" />
      <StyledCard>
        <div>
          <h4>Get Special Offers</h4>
          <p>Many offers waiting for you, get it now</p>
          <button>Add a card</button>
        </div>
        <Image
          src="/assets/images/offer.svg"
          alt="offer"
          width={115}
          height={120}
        />
      </StyledCard>
    </div>
  );
};

export default SpecialOffer;
