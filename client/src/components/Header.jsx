import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to="/">
          <h1 className='font-bold text-sm sm:text-xl'>
            <span>Null Estate</span>
          </h1>
        </Link>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
          <input className='bg-transparent focus:outline-none w-24 sm:w-64' type="text" placeholder='Search...' />
          <button> <FaSearch className='text-slate-600' /> </button>
        </form>
        <div className='lg:flex hidden'>
          <ul className='flex gap-4'>
            <Link to="/about">
              <li className='hover:underline font-bold'>
                About
              </li>
            </Link>
            {/* <Link to="/profile">
              {currentUser ? (
                <img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt="avatar" />
              ) : (
                <li className='hover:underline font-bold'>
                  Sign In
                </li>
              )}
            </Link> */}
          </ul>
        </div>

        <div className='lg:hidden'>
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <RiCloseLine  className='w-7 h-7' />
            ) : (
              <RiMenu3Line className='w-7 h-7' />
            )}
          </button>
        </div>
      </div>
      <ul className={`text-center ${isMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
        <li className='hover:underline'>
          <Link className='font-bold' to="/about">About</Link>
        </li>
        {/* <Link to="/profile">
          {currentUser ? (
            <img className='rounded-full h-7 w-7 object-cover inline-block' src={currentUser.avatar} alt="avatar" />
          ) : (
            <li className='hover:underline font-bold'>
              Sign In
            </li>
          )}
        </Link> */}
      </ul>

    </header>
  );
};

export default Header;
