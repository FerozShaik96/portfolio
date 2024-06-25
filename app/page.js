import About from '@/app/components/About/About';
import Experience from '@/app/components/Experience/Experience';
import GetInTouch from '@/app/components/Footer/GetInTouch';
import Leadership from '@/app/components/LeaderShip/LeaderShip';
import Project from '@/app/components/Projects/Projects';
import Skills from '@/app/components/Skill/Skills';
import HeaderHome from './components/HomePage/HeaderHome';
export default function Home() {
  return (
    <main>
      <HeaderHome />
      <About />
      <Experience />
      <Project />
      <Leadership />
      <Skills />
      <GetInTouch />
    </main>
  );
}
