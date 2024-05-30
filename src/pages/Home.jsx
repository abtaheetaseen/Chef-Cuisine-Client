import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Chef from '../components/Chef'
import TopFoodSection from '../components/TopFoodSection'
import { Helmet } from 'react-helmet-async'
import BookTable from '../components/BookTable'

const Home = () => {

  return (
    <>
    <Helmet>
        <title>Chef-Cuisine || Home</title>
    </Helmet>
      <Hero />
      <Services />
      <TopFoodSection />
      <Chef />
      <BookTable />
    </>
  )
}

export default Home
