import Image from "next/image";
import React from "react";
import styled from "styled-components";

const StyledProfileTag = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

 const StyledProfileContainer = styled.div`
  h5 {
    font-size: 0.75;
    font-weight: 500;
  }
  p {
    font-size: 0.75rem;
    font-weight: 500;
    color: #ad9d87;
    text-align: right;
  }
`;

const StyledProfileImage = styled(Image)`
  border-radius: 50%;
  border: 2px solid var(--primary);
`;

const ProfileTag = ({ uname, avatar }) => {
  return (
    <StyledProfileTag>
      <StyledProfileContainer>
        <h5>Hi, {uname}</h5>
        <p>Welcome</p>
      </StyledProfileContainer>
      <StyledProfileImage src={avatar} alt="avatar" width={36} height={36} />
    </StyledProfileTag>
  );
};

export default ProfileTag;
