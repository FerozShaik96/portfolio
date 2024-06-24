'use client';
import { useState, useEffect } from 'react';
import { BiMenu } from 'react-icons/bi';
import { Link as ScrollLink } from 'react-scroll';
import { NavData } from '@/app/Utilities/data';
function Navigation() {
  const [NavItem, showNavItem] = useState(false);
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Determine if we are at the top of the page
      setIsTop(currentScrollY === 0);
    };

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed top-0 z-10 w-full justify-between bg-white p-4 md:flex ${
        isTop ? 'bg-white' : 'bg-gray-50/90'
      }`}
    >
      <div className="flex justify-between">
        <ScrollLink
          to={NavData.name.page}
          spy={true}
          smooth={true}
          className="cursor-pointer text-2xl"
        >
          {'<'}
          <span>Feroz</span> {'/>'}
        </ScrollLink>
        <BiMenu
          size={30}
          className="md:hidden"
          onClick={() => showNavItem((prevstate) => !prevstate)}
        />
      </div>
      <div
        className={`${NavItem ? 'block' : 'hidden'} mr-8 md:block md:space-x-6`}
      >
        {Object.keys(NavData).map((item) => {
          if (item === 'name') return null;
          return (
            <ScrollLink
              to={NavData[item].page}
              spy={true}
              smooth={true}
              className="mt-3 block cursor-pointer md:mt-0 md:inline-block"
              key={NavData[item.lable]}
            >
              {NavData[item].lable}
            </ScrollLink>
          );
        })}
      </div>
    </header>
  );
}

export default Navigation;
