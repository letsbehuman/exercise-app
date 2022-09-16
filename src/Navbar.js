import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="w-full bg-black">
      <ul className="flex items-center justify-evenly font-bold text-2xl p-4  text-green-400 border-b border-black ">
        <li className="hover:scale-150 transition ease-in-out duration 300">
          <Link to="/">Home</Link>
        </li>
        <li className=" hover:animate-bounce transition ease-in-out duration 300">
          <Link to="/workout">Workout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
