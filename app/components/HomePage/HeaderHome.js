'use client';
import { useState, useEffect } from 'react';
import Navigation from '../Navigation/Navigation';
import HomePage from './HomePage';
import { mainBody } from '@/app/Utilities/data';

const HeaderHome = () => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      console.log(currentScrollY);
      setIsTop(currentScrollY <= 600);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  console.log(isTop);
  return (
    <div>
      <Navigation isTop={isTop} />
      <HomePage
        aboutme={mainBody.about}
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        isTop={isTop}
      />
    </div>
  );
};

export default HeaderHome;
