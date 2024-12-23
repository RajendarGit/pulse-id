"use client";
import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Title from "../components/Title";
import CategoryList from "./CategoryList";
import SpecialOffersList from "./SpecialOffersList";
import CategoryItemList from "./CategoryItemList";

const MainWrapperContent = styled.div`
  background-color: var(--main-bg);
  height: calc(100% - 200px);
  border-radius: 1rem 1rem 0 0;
  margin-top: -15px;
  width: 100%;
  position: relative;
  z-index: 2;
`;

const CityOfferLanding = () => {
  return (
    <>
      <Hero heroImg="https://picsum.photos/200" headerText="Tokyo" />
      <MainWrapperContent>
        <Container>
          <Title title="Special Offers!" />
          <SpecialOffersList />
        </Container>
        <CategoryList />
        <CategoryItemList />
      </MainWrapperContent>
    </>
  );
};

export default CityOfferLanding;
