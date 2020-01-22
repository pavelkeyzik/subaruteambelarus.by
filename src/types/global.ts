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

export type MyWindow = typeof window & {
  __theme: string;
  __setPreferredTheme: (theme: string) => void;
  __onThemeChange: () => void;
};
