"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const HeroHeader = styled.div`
  width: 100%;
  height: 215px;
  background-color: var(--secondary);
  display: flex;
  justify-content: center;
  position: relative;
  .hero-header-content {
    padding-top: 58px;
    color: var(--white);
    width: 100%;
    h2 {
      font-weight: 500;
      font-size: 0.9rem;
      text-align: center;
      position: absolute;
      z-index: 2;
      left: auto;
      right: auto;
      width: 100%;
    }
  }
  .go-back {
    position: absolute;
    top: 46px;
    left: 1rem;
    transform: rotate(180deg);
    z-index: 2;
  }
`;

const CoverImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  object-fit: cover;
  z-index: 1;
`;

const Hero = ({ heroImg = "", headerText = "" }) => {
  return (
    <>
      <HeroHeader>
        <div className="hero-header-content">
          <h2>{headerText}</h2>
          <Link href={"/"} className="go-back">
            <Image
              src={"/assets/images/arrow.svg"}
              alt="go-back"
              width={40}
              height={40}
            />
          </Link>
          <CoverImage src={heroImg} alt={headerText} width={300} height={200} />
        </div>
      </HeroHeader>
    </>
  );
};

export default Hero;
