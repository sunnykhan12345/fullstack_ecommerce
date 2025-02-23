import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollection from '../components/Products/GenderCollection'
import NewArravels from '../components/Products/NewArravels'

const Home = () => {
  return (
    <div>
        <Hero />
        <GenderCollection />
        <NewArravels />
    </div>
  )
}

export default Home