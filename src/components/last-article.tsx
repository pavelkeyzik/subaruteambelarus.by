import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import useLastPost from '../hooks/use-last-post';

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  padding: 80px 0;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 600px;
  height: 400px;
`;

const TagTitle = styled.span`
  text-transform: uppercase;
  font-size: 0.7rem;
  color: #777;
`;

function LastArticle() {
  const data = useLastPost();

  return (
    <Section>
      <ImageContainer>
        <Image
          fluid={data.image.sharp.fluid}
          Tag="div"
          style={{
            width: 500,
            height: 400,
            borderRadius: 20,
          }}
        />
      </ImageContainer>
      <div>
        <TagTitle>Новости</TagTitle>
        <h2>{data.title}</h2>
        <p>{data.excerpt}</p>
        <Link to={`/${data.slug}`}>Читать подробнее &rarr;</Link>
      </div>
    </Section>
  );
}

export default LastArticle;
