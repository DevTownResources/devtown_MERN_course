function Navbar({ changeView }) {
  return (
    <ul className="flex justify-center">
      <li
        onClick={() => changeView("home")}
        className="text-indigo-500 underline mx-4 hover:cursor-pointer"
      >
        Home
      </li>
      <li
        onClick={() => changeView("counter")}
        className="text-indigo-500 underline mx-4 hover:cursor-pointer"
      >
        Counter
      </li>
      <li
        onClick={() => changeView("timer")}
        className="text-indigo-500 underline mx-4 hover:cursor-pointer"
      >
        Timer
      </li>
      <li
        onClick={() => changeView("posts")}
        className="text-indigo-500 underline mx-4 hover:cursor-pointer"
      >
        Posts
      </li>
    </ul>
  );
}

export default Navbar;
