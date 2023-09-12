import React from 'react';
import UserProfileCard from '../UserProfileCard';
import Heading from '../Heading';
import Divider from '../Divider';
import FeaturePostCard from '../FeaturePostCard';
import CategoryList from '../CategoryList';

const SideMenu = () => {
  return (
    <>
      <UserProfileCard
        coverImage="https://demo.rivaxstudio.com/kayleen/wp-content/uploads/elementor/thumbs/jon-tyson-sPim6Y8Wa7Y-unsplash-phfym1jjso3ao2hs4gsti4upoeqf3273k1ath2fkk0.jpg"
        avatarImage="https://demo.rivaxstudio.com/kayleen/wp-content/uploads/2021/11/nora-hutton-tCJ44OIqceU-unsplash.jpg"
        creator="Alice Qelvin"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborea aliqua."
      />
      <Heading title="Featured Posts" size="md" className="mt-5"></Heading>
      <Divider />
      <FeaturePostCard
        title="These Fabulous Photos Will Have Astonishing"
        date="November 17, 2021"
        className="mt-4"
        creator="Alice"
        imageUrl="https://demo.rivaxstudio.com/kayleen/wp-content/uploads/2021/11/benjamin-massello-BVNhd4c7rqg-unsplash-400x300.jpg"
      />
      <Heading title="Categories" size="md" className="mt-5"></Heading>
      <Divider />
      <CategoryList className="mt-4" />
    </>
  );
};

export default SideMenu;
