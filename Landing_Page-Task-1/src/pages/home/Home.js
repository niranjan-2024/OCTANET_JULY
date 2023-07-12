import React, { useEffect } from 'react'
import {Outlet} from 'react-router'
import { axiosClient } from '../../utils/axiosClient';
import Navbar from '../../components/navbar/Navbar';

function Home() {
  return (
    <>
      <Navbar/>
      <div className="outlet" style={{marginTop:"60px"}}>
        <Outlet/>
      </div>
    </>
  )
}

export default Home