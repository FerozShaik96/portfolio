import { getInTouch } from '@/app/Utilities/data';
import { FaCode, FaHeart, FaReact } from 'react-icons/fa';
export default function GetInTouch() {
  const { heading, message, email } = getInTouch;
  return (
    <div className="h-full bg-gray-footer text-center font-extralight text-gray-text">
      <h1 className="pb-5 pt-10 text-5xl font-extralight text-gray-text md:py-10">
        {heading}
      </h1>
      <p className="mx-auto w-5/6 text-lg">
        {message}, <a>{email}</a>
      </p>
      <div className="mt-6 flex items-center justify-center pb-14">
        <FaCode className="me-1" /> <span className="me-1">with</span>{' '}
        <FaHeart className="me-1" />
        <span className="me-1">by </span>
        <a className="me-1 rounded-md bg-black/75 px-2 text-sm font-semibold text-white">
          Feroz Shaik
        </a>
        <span className="me-1">using</span>
        <FaReact />
      </div>
    </div>
  );
}
