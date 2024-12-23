"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getOffersData } from "@/lib/getOffers";
import styled from "styled-components";
import Image from "next/image";
import Loading from "../Loading";
import { FiHeart } from "react-icons/fi";
import Link from "next/link";
import Container from "@/app/components/Container";

const ImageContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--secondary);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
`;

const Header = styled.div`
  position: absolute;
  top: 46px;
  width: 100%;
  z-index: 1;
  left: 0;
  h1 {
    font-size: 0.9rem;
    color: var(--white);
  }
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;

const StyledArrow = styled(Image)`
  transform: rotate(180deg);
`;

const HeartIcon = styled.div`
  background-color: #6e6e6e;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--white);
`;

const BottomContent = styled.div`
  bottom: 0;
  position: absolute;
  width: 100%;
  padding: 5rem 1rem;
  color: var(--white);
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), #000);
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
`;

const LogoImage = styled(Image)`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

const CategoryMain = () => {
  const [offer, setOffer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchOffer = async () => {
        try {
          const data = await getOffersData();
          const selectedOffer = data.find((offer) => offer.id === parseInt(id));
          setOffer(selectedOffer);
        } catch (err) {
          setError(err.message || "Error fetching offer data");
        } finally {
          setLoading(false);
        }
      };

      fetchOffer();
    }
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!offer) {
    return <div>Offer not found</div>;
  }

  const backArrow = "/assets/images/arrow.svg";

  return (
    <>
      <ImageContainer>
        <Container>
          <Header>
            <HeaderContent>
              <Link href="/city-offer-landing">
                <StyledArrow
                  src={backArrow}
                  alt="back"
                  width={40}
                  height={40}
                />
              </Link>
              <h1>{offer.merchant.name}</h1>
              <HeartIcon>
                <FiHeart />
              </HeartIcon>
            </HeaderContent>
          </Header>
        </Container>
        <StyledImage
          src={offer.images[0] || "https://picsum.photos/200"}
          alt="Offer Image"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
          width={400}
          height={500}
        />
        <BottomContent>
          <div>
            <LogoImage
              src={offer.merchant.image}
              alt="Merchant Logo"
              width={24}
              height={24}
            />
            <p>{offer.merchant.name}</p>
          </div>
          <p>{offer.title}</p>
        </BottomContent>
      </ImageContainer>
    </>
  );
};

export default CategoryMain;
