import React from 'react'
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: min(768px, 100%);
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const Container = ({children}) => {
  return (
    <StyledContainer>{children}</StyledContainer>
  )
}

export default Container