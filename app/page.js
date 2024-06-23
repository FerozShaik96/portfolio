import About from './components/About/About';
import Experience from './components/Experience/Experience';
import GetInTouch from './components/Footer/GetInTouch';
import Leadership from './components/LeaderShip/LeaderShip';
import Project from './components/Projects/Projects';

export default function Home() {
  return (
    <main>
      <About />
      <Experience />
      <Project />
      <Leadership />
      <GetInTouch />
    </main>
  );
}
