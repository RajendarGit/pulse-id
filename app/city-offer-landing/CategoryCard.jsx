import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { FiHeart } from "react-icons/fi";
import Link from "next/link";

const CardWrapper = styled.div`
  position: relative;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  border-radius: 1rem;
`;

const HeartIcon = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  border-radius: 50%;
  padding: 0.5rem;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  p {
    color: var(--white);
    margin-left: 2.5rem;
    font-size: 0.6rem;
  }
`;

const CircleImage = styled(Image)`
  border-radius: 50%;
  position: absolute;
`;

const TitleText = styled.p`
  font-size: 0.5rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const Badge = styled.div`
  padding: 0.5rem 0.8rem;
  background-color: var(--primary);
  color: var(--white);
  font-size: 0.5rem;
  border-radius: 5rem;
  display: inline-block;
`;

const CardContentTop = styled.div`
  position: relative;
`;
const CardContentTopCaptions = styled.div`
  position: absolute;
  bottom: 1.5rem;
  width: 100%;
  left: 0.5rem;
`;

const CategoryCard = ({
  image,
  circleImage,
  text,
  bottomText,
  badgeText,
  href,
}) => {
  return (
    <Link href={href}>
      <CardWrapper>
        <CardContentTop>
          <StyledImage
            src={image}
            alt="Category Image"
            layout="responsive"
            width={500}
            height={300}
          />
          <HeartIcon>
            <FiHeart />
          </HeartIcon>
          <CardContentTopCaptions>
            <FlexRow>
              <CircleImage
                src={circleImage}
                alt="Circle Image"
                width={30}
                height={30}
              />
              <p>{text}</p>
            </FlexRow>
          </CardContentTopCaptions>
        </CardContentTop>
        <div>
          <TitleText>{bottomText}</TitleText>
          <Badge>{badgeText}</Badge>
        </div>
      </CardWrapper>
    </Link>
  );
};

export default CategoryCard;
