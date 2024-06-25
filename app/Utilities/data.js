import imag1 from '@/public/img1.png';
import imag2 from '@/public/img2.png';
import imag3 from '@/public/img3.png';
import imag4 from '@/public/img4.png';
import imag5 from '@/public/img5.png';
import imag6 from '@/public/img6.png';
import imag7 from '@/public/img7.png';
import imag8 from '@/public/img8.png';
import imag9 from '@/public/img9.png';
import imag10 from '@/public/img10.png';
import {
  FaGithub,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
export const NavData = {
  name: { lable: 'Feroz', page: 'home' },
  Projects: { lable: 'Project', page: 'projects' },
  Resume: { lable: 'Resume', page: '' },
  About: { lable: 'About', page: 'about' },
  Skills: { lable: 'Skills', page: 'skills' },
};
export const ProjectData = [
  {
    projectName: 'MailBox-Clent',
    repo: 'https://github.com/FerozShaik96/MailBox-Client',
    dateUpdate: '17',
    monthUpdate: 'Octobar',
    yearUpdate: '2023',
    Javascript: '51.7 %',
    CSS: '33.7 %',
    HTML: '17.7 %',
  },
  {
    projectName: 'Expense Tracker',
    repo: 'https://github.com/FerozShaik96/Expense-Tracker',
    dateUpdate: '31',
    monthUpdate: 'september',
    yearUpdate: '2023',
  },
  {
    projectName: 'Ecommers Tracker',
    repo: 'https://github.com/FerozShaik96/Ecommers',
    dateUpdate: '20',
    monthUpdate: 'Augest',
    yearUpdate: '2023',
    Javascript: '49.7 %',
    CSS: '30.7 %',
    HTML: '27.7 %',
  },
  {
    projectName: 'Restaurant App',
    repo: 'https://github.com/FerozShaik96/Restaurant_App',
    dateUpdate: '15',
    monthUpdate: 'July',
    yearUpdate: '2023',
  },
];
export const AboutData = {
  title: 'About Me',
  size: 350,
  message:
    'My name is Shaik Feroz. I’m a Under-graduate of 2019 from Rama Chandra College Of Engineering  at Eluru , Andhra Pradesh with a degree in Mechanical Engineering . Driven by a passion for challenge, I embarked on a self-directed coding journey, honing technical skills and a problem-solving approach.',
};

export const experienceData = [
  {
    role: 'React Developer',
    about: 'simpana Technologies',
    duration: 'Aug 2020 - May 2022 ',
  },
  {
    role: 'Senior Software Engineer ',
    about: 'Vendify',
    duration: 'May 2022 - March 2023',
  },
  {
    role: 'React Developer',
    about: 'pace',
    duration: 'March 2023 - Present ',
  },
];
export const getInTouch = {
  heading: 'Get In Touch',
  message:
    "I'm currently looking for full-time React Developer/Frontend Developer opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: 'ferozshaik1997@gmail.com',
};
export const imgData = [
  imag1,
  imag2,
  imag3,
  imag4,
  imag5,
  imag6,
  imag7,
  imag8,
  imag9,
  imag10,
];
export const leadershipData = {
  heading: 'Leadership',
  message:
    'As a React developer with leadership experience, I bring technical expertise, project management skills, and strong communication abilities to the table. I have a proven track record of building large-scale applications, optimizing code for performance, and implementing best practices. Additionally, I have experience leading teams and projects, creating and maintaining project plans, managing timelines and budgets, and ensuring timely delivery of high-quality work. I excel at communicating effectively with team members, stakeholders, and clients, both verbally and in writing, and am a skilled listener who can provide clear and constructive feedback. I am also passionate about mentoring and training other developers to help them develop their skills and achieve their goals. With my ability to solve complex technical problems and think creatively, I am always up-to-date with the latest developments in React and related technologies, and am able to innovate and inspire a positive, collaborative work environment.',
};
export const skillsData = {
  show: true,
  heading: 'Skills',
  hardSkills: [
    { name: 'React', value: 90 },
    { name: 'JavaScript', value: 90 },
    { name: 'Data Structures', value: 65 },
    { name: 'HTML/CSS', value: 55 },
    { name: 'TypeScript', value: 80 },
    { name: 'SQL', value: 75 },
  ],
  softSkills: [
    { name: 'Goal-Oriented', value: 80 },
    { name: 'Collaboration', value: 90 },
    { name: 'Positivity', value: 75 },
    { name: 'Adaptability', value: 85 },
    { name: 'Problem Solving', value: 75 },
    { name: 'Empathy', value: 90 },
    { name: 'Organization', value: 70 },
    { name: 'Creativity', value: 90 },
  ],
};
export const mainBody = {
  gradientColors: '#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1',
  firstName: 'Feroz',
  lastName: 'Shaik',
  message: 'Passionate about changing the world with technology',
  icons: [
    {
      lable: 'git',
      iconName: <FaGithub size={45} />,
      siteLink: 'https://github.com/FerozShaik96',
    },
    {
      lable: 'facebook',
      iconName: <FaFacebookSquare size={45} />,
      siteLink: 'https://www.facebook.com/feroz.shaik.5895/',
    },
    {
      lable: 'insta',
      iconName: <FaInstagram size={45} />,
      siteLink: 'https://www.instagram.com/feroz_shaikk/',
    },
    {
      lable: 'linkedIn',
      iconName: <FaLinkedin size={45} />,
      siteLink: 'https://www.linkedin.com/in/ferozshaik-b29822190/',
    },
  ],
  about: 'More about me',
};
