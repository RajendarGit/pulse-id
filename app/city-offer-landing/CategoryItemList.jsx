import React, { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import { getOffersData } from "@/lib/getOffers";
import styled from "styled-components";
import Container from "../components/Container";
import Padded from "../components/Padded";

const CardWrapperContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
`;

const CategoryItemList = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getOffersData();
        setCategory(data);
      } catch (err) {
        setError(err.message || "fetching data issue");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container>
      <Padded>
        <CardWrapperContainer>
          {category.map((item) => (
            <CategoryCard
              key={item.id}
              image={item.images[0] || "https://picsum.photos/200"}
              circleImage={item.merchant.image}
              text={item.merchant.name}
              bottomText="Some additional text here"
              badgeText="Special Offer"
              href={`city-offer-landing/${item.id}`}
            />
          ))}
        </CardWrapperContainer>
      </Padded>
    </Container>
  );
};

export default CategoryItemList;
