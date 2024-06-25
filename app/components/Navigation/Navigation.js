'use client';
import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { Link as ScrollLink } from 'react-scroll';
import { NavData } from '@/app/Utilities/data';
function Navigation({ isTop }) {
  const [NavItem, showNavItem] = useState(false);
  return (
    <header
      className={`fixed top-0 z-10 w-full items-center justify-start gap-x-0 p-4 lg:flex lg:gap-x-2 ${
        isTop ? 'bg-transparent' : 'bg-nav-Col/70'
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
          className="lg:hidden"
          onClick={() => showNavItem((prevstate) => !prevstate)}
        />
      </div>
      <div
        className={`${NavItem ? 'block' : 'hidden'} mr-8 lg:block lg:space-x-6`}
      >
        {Object.keys(NavData).map((item) => {
          if (item === 'name') return null;
          return (
            <ScrollLink
              to={NavData[item].page}
              spy={true}
              smooth={true}
              className="mt-3 block cursor-pointer lg:mt-0 lg:inline-block"
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
