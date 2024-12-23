import React from "react";
import styled from "styled-components";

const StyledPadded = styled.div`
  padding: 1rem 0;
`;

const Padded = ({ children }) => {
  return <StyledPadded>{children}</StyledPadded>;
};

export default Padded;
