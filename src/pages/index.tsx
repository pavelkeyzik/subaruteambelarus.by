import React from 'react';
import HomeLayout from '../components/layouts/home';
import LastArticle from '../components/last-article';

function HomePage() {
  return (
    <HomeLayout>
      <LastArticle />
    </HomeLayout>
  );
}

export default HomePage;
