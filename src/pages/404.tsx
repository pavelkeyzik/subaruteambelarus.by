import React from 'react';
import { Link } from 'gatsby';
import ArticleLayout from '../components/layouts/article';
import styled from '@emotion/styled';

const Main = styled.div`
  padding: 10px 40px;
`;

function PageNotFound() {
  return (
    <ArticleLayout>
      <Main>
        <h2>Страница не найдена</h2>
        <p>
          Мы не нашли страницу, которую вы запрашиваете. Можете перейти по
          следующим ссылкам:
        </p>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/news">Новости</Link>
          </li>
        </ul>
      </Main>
    </ArticleLayout>
  );
}

export default PageNotFound;
