import HomeBg from './HomeBg';
import { Link as ScrollLink } from 'react-scroll';
import Typist from 'react-typist-component';
export default function HomePage({ gradient, title, message, icons, aboutme }) {
  icons.map((icon) => console.log(icon.lable));
  const gradientStyle = {
    background: `linear-gradient(136deg, ${gradient})`,
    backgroundSize: '1200% 1200%',
    animation: 'gradientAnimation 12s ease infinite',
  };

  return (
    <HomeBg
      id="home"
      style={gradientStyle}
      className="title text-light flex min-h-screen justify-center bg-transparent pt-32 text-white md:pt-28"
    >
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-light md:text-8xl">{title}</h1>
        <Typist>
          <p className="mb-8 px-2 text-lg font-light md:px-0">{message}</p>
        </Typist>
        <div className="flex justify-center space-x-4">
          {icons &&
            icons.map((icon, index) => (
              <div key={index} className="mt-6 text-3xl">
                <a href={icon.siteLink} target="_blank">
                  {icon.iconName}
                </a>
              </div>
            ))}
        </div>

        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          className="cursor-pointer text-lg"
        >
          <button className="mt-10 rounded-lg border border-white px-3 py-1">
            {aboutme}
          </button>
        </ScrollLink>
      </div>
    </HomeBg>
  );
}
