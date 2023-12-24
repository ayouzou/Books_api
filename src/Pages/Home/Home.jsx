import React from 'react'
import Header from '../../Components/Header/Header.jsx'
import { Outlet } from 'react-router-dom'
import './Home.css'
import Booklist from '../../Components/BookList/Booklist.jsx'

const Home = () => {
  return (
    <main>
      <Header/>
      <Outlet/>
      <Booklist/>
    </main>
  )
}

export default Home