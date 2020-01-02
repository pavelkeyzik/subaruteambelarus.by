import React from 'react';
import HomeLayout from '../components/layouts/home';
import LastArticle from '../components/last-article';
import StayUpdated from '../components/stay-updated';

function HomePage() {
  return (
    <HomeLayout>
      <LastArticle />
      <StayUpdated />
    </HomeLayout>
  );
}

export default HomePage;
