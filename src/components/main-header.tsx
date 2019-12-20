import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';
import { css } from '@emotion/core';

const ImageBackground = styled(BackgroundImage)`
  background-position: bottom 20% center;
  background-size: cover;
  height: 100vh;

  + * {
    margin-top: 0;
  }
`;
function Header() {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "header.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <header
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          font-size: 5rem;
          height: 100%;
        `}
      />
    </ImageBackground>
  );
}

export default Header;
