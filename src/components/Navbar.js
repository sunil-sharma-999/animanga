import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { animangaActions } from '../store/slices/animangaSlice';

const Navbar = () => {
  const { type } = useSelector((state) => state.animanga);
  const dispatch = useDispatch();
  const inputRef = useRef('');
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handler = (e) => {
    e.preventDefault();
    navigate(`/${type}/1`);
    dispatch(animangaActions.search(inputRef.current.value));
  };
  return (
    <div className="nav-wrap bg-purple-500 shadow-slate-900 shadow-sm p-4 px-8 sticky top-0 flex flex-wrap items-center z-50 w-full ">
      <nav className="max-w-screen-lg flex-wrap flex justify-start w-full items-center m-auto ">
        <Link
          to="/manga/1"
          onClick={() => {
            inputRef.current.value = '';
            dispatch(animangaActions.clearQuery());
            dispatch(animangaActions.typeSet('manga'));
          }}
          className="logo text-white mr-auto sm:mr-8 text-2xl">
          <h1>Animanga</h1>
        </Link>
        <div className="links sm:mr-auto">
          <Link
            to="/manga/1"
            className={`text-white mr-3 ${
              pathname.includes('manga') ? 'active' : ''
            }`}
            onClick={() => dispatch(animangaActions.typeSet('manga'))}>
            Manga
          </Link>

          <Link
            to="/anime/1"
            className={`text-white mr-3 ${
              pathname.includes('anime') ? 'active' : ''
            }`}
            // activeclassname="active"
            onClick={() => dispatch(animangaActions.typeSet('anime'))}>
            Anime
          </Link>
          <Link
            to="/profile"
            // activeclassname="active"
            className={`text-white mr-3 ${
              pathname.includes('profile') ? 'active' : ''
            }`}>
            Profile
          </Link>
        </div>
        <form onSubmit={handler} className="ml-0 my-2">
          <input
            className="rounded-md px-4 py-2 outline-none  ml-0 sm:mt-0 border-none"
            type="text"
            ref={inputRef}
            placeholder="search and Enter"
            minLength={3}
          />
        </form>
      </nav>
    </div>
  );
};

export default Navbar;
