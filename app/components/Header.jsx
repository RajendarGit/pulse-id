"use client";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import styled from "styled-components";
import Logo from "./Logo";
import ProfileTag from "./ProfileTag";
import { getUserData } from "@/lib/getUser";
import Loading from "./Loading";

const StyledHeader = styled.div`
  background: linear-gradient(to bottom, #ff980066, #ff98002f);
  height: 107px;
  display: flex;
  align-items: end;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 0 0 1.5rem 1.5rem;
`;

const StyledHeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserData();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loading />;
  if (error) return <div>Error: {error}</div>;

  const selectedUser = users.length > 0 ? users.find((user) => user.id === 1) : null;

  return (
    <StyledHeader>
      <Container>
        <StyledHeaderContent>
          <Logo />
          {selectedUser ? (
            <ProfileTag uname={selectedUser.name} avatar={selectedUser.avatar} />
          ) : (
            <p>No user found</p>
          )}
        </StyledHeaderContent>
      </Container>
    </StyledHeader>
  );
};

export default Header;