import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1.5rem;
    padding-bottom: 1rem;
    h2 {
        font-weight: 600;
        font-size: .875rem;
    }
`;

const StyledLink = styled(Link)`
    font-weight: 600;
    font-size: .75rem;
    color: var(--primary);
`;

const Title = ({title, link, linkText = 'View All'}) => {
  return (
    <StyledTitle>
        <h2>{title}</h2>
        {link && <StyledLink href={link}>{linkText}</StyledLink>}
    </StyledTitle>
  )
}

export default Title