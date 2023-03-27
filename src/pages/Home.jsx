import React from 'react'
import kineimg from '../assets/images/kinesiologia.png'

const Home = () => {
  return (
    <div className='container text-center mt-4'>
      <h1>Kinesiología integral</h1>
      <img src={kineimg} alt="kinelogo" />      
      <p>Mejores kinesiologos around the world</p>
    </div>
  )
}

export default Home
