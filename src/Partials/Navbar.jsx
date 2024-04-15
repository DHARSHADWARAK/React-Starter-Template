import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav id="navScroll" className={`bg-zinc-950 fixed top-0 left-0 right-0 w-full px-[5vw] py-10 transition-all duration-500 z-50 ${isScrolled ? 'py-2' : 'py-10'}`}>
      <div className="flex flex-col justify-around items-center px-6 gap-x-px lg:flex-row">
        <Link className="text-3xl text-white font-bold py-2 pl-8 pr-10">Biss</Link>
        <ul className="flex justify-center lg:justify-end mx-auto mb-2 lg:mb-0 space-x-4">
          <li className="nav-item">
            <Link to="/" className="text-2xl text-white mx-4 py-2">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/Pages/Content" className="text-2xl text-white mx-4 py-2">Content</Link>
          </li>
          <li className="nav-item">
            <Link to="/Pages/System" className="text-2xl text-white mx-4 py-2">System</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
