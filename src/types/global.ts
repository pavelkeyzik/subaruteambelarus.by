import { GatsbyImageProps } from 'gatsby-image';

export interface IPost {
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  image: {
    sharp: GatsbyImageProps;
  };
}
