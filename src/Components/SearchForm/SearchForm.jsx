import React, { useEffect, useState, useRef } from 'react'

import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from './../../Pages/Home/Context';
import './Searchform.css'
const SearchForm = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if ((tempSearchTerm.replace(/[^\w\s]/gi, "")).length === 0) {
      setSearchTerm("the lost world");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(searchText.current.value);
    }

    navigate("/book");
  };


  return (
    <div className='search-form'>
      <div className='container'>
        <div className='search-form-content'>
          <form className='search-form' onSubmit={handleSubmit}>
            <div className='search-form-elem flex flex-sb bg-white'>
              <input type="text" className='form-control' placeholder='The Lost World ...' ref={searchText} />
              <button type="submit" className='flex flex-c' onClick={handleSubmit}>
                {/* <FaSearch className='text-purple' size = {32} /> */}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                  className="text-purple"
                >
                  <path
                    fill="currentColor"
                    d="M9 0C4.031 0 0 4.03 0 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zM9 16a7 7 0 1 1 7-7 7.001 7.001 0 0 1-7 7z"
                  />
                </svg>

              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchForm