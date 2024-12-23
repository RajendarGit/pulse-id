import React from "react";
import styled from "styled-components";
import Image from "next/image";

const StyledCard = styled.div`
  border-radius: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  background: linear-gradient(to bottom, #ff980066, #ff98002f);
  gap: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 7px 4px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06);

  button {
    background-color: var(--primary);
    border: none;
    border-radius: 10rem;
    padding: 0.7rem 1rem;
    color: white;
    font-weight: 500;
    cursor: pointer;
    max-width: 120px;
  }

  .content {
    display: grid;
    gap: 0.5rem;

    h4 {
      font-size: 1rem;
      font-weight: 600;
      color: var(--primary);
    }

    p {
      margin-bottom: 1rem;
      font-size: 0.75rem;
      color: #343434;
    }

    &.type-2 {
      h4 {
        color: var(--foreground);
        font-weight: 300;
      }
      p {
        color: var(--primary);
        font-size: 1rem;
        font-weight: 600;
      }
      span {
        font-size: 0.6rem;
      }
    }
  }
`;

const SpecialOfferCard = ({ type, title, description, spanText, btnText }) => {
  return (
    <>
      <StyledCard>
        <div className={`content ${type === 2 ? "type-2" : ""}`}>
          {type === 2 && <span>{spanText}</span>}
          <h4>{title}</h4>
          <p>{description}</p>
          {btnText && <button>{btnText}</button>}
        </div>
        <Image
          src="/assets/images/offer.svg"
          alt="Offer"
          width={115}
          height={120}
        />
      </StyledCard>
    </>
  );
};

export default SpecialOfferCard;
