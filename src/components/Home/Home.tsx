import React from 'react'
import Countries from '../Countries/Countries'
import SearchByRegion from '../SearchByRegion/SearchByRegion'
import SearchCountry from '../SearchCountry/SearchCountry'

function Home() {
  return (
    <>
      <SearchByRegion />
      <SearchCountry />
      <Countries />
    </>
  )
}

export default Home
