import React from 'react';
import Banner from '../../components/Banner';
import CategoryCards from '../../components/CategoryCards';
import RecentListing from '../../components/RecentListing';
import WhyPawMarts from '../../components/WhyPawMarts';
import PetHeros from '../../components/PetHeros';
import Footer from '../../components/Footer';
import DocumentMeta from "react-document-meta";

const Home = () => {

  const meta = {
    title: "Home | PawMart",
    description: "PawMart - Find pets, accessories, food, and more. Explore latest listings and adopt your next furry friend.",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "pets, adoption, pet shop, paw mart, pet marketplace, animals"
      }
    }
  };

  return (
    <DocumentMeta {...meta}>
      <div>
        <Banner></Banner>
        <CategoryCards></CategoryCards>
        <RecentListing></RecentListing>
        <WhyPawMarts></WhyPawMarts>
        <PetHeros></PetHeros>
        <Footer></Footer>
      </div>
    </DocumentMeta>
  );
};

export default Home;
