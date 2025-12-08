import React from 'react';
import Banner from '../../components/Banner';
import CategoryCards from '../../components/CategoryCards';
import RecentListing from '../../components/RecentListing';
import WhyPawMarts from '../../components/WhyPawMarts';
import PetHeros from '../../components/PetHeros';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CategoryCards></CategoryCards>
      <RecentListing></RecentListing>
      <WhyPawMarts></WhyPawMarts>
      <PetHeros></PetHeros>
      <Footer></Footer>
    </div>
  );
};

export default Home;