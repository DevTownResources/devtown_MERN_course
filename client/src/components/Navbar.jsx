import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul className="flex justify-center">
      <li className="text-indigo-500 underline mx-4 hover:cursor-pointer">
        <Link to="/">Home</Link>
      </li>
      <li className="text-indigo-500 underline mx-4 hover:cursor-pointer">
        <Link to="/counter">Counter</Link>
      </li>
      <li className="text-indigo-500 underline mx-4 hover:cursor-pointer">
        <Link to="/timer">Timer </Link>
      </li>
      <li className="text-indigo-500 underline mx-4 hover:cursor-pointer">
        <Link to="/posts">Posts</Link>
      </li>
    </ul>
  );
}

export default Navbar;
