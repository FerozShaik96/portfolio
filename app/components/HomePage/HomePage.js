import HomeBg from './HomeBg';
import { Link as ScrollLink } from 'react-scroll';
export default function HomePage({ gradient, title, message, icons, aboutme }) {
  icons.map((icon) => console.log(icon.lable));
  const gradientStyle = {
    background: `linear-gradient(136deg, ${gradient})`,
    backgroundSize: '1200% 1200%',
    animation: 'gradientAnimation 12s ease infinite',
  };

  return (
    <HomeBg
      id='home'
      style={gradientStyle}
      className='title bg-transparent text-light text-white  min-h-screen flex  pt-32 md:pt-28  justify-center'
    >
      <div className='text-center'>
        <h1 className='text-6xl md:text-8xl font-light mb-4'>{title}</h1>
        <p className='text-lg font-light mb-8 px-2 md:px-0'>{message}</p>
        <div className='flex justify-center space-x-4'>
          {icons &&
            icons.map((icon, index) => (
              <div key={index} className='text-3xl mt-6 '>
                <a href={icon.siteLink} target='_blank'>
                  {icon.iconName}
                </a>
              </div>
            ))}
        </div>

        <ScrollLink
          to='about'
          spy={true}
          smooth={true}
          className='text-lg  cursor-pointer'
        >
          <button className='py-1 px-3 mt-10 border rounded-lg border-white'>
            {aboutme}
          </button>
        </ScrollLink>
      </div>
    </HomeBg>
  );
}
