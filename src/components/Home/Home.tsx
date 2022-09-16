import React from 'react'
import Countries from '../Countries/Countries'
import SearchCountry from '../SearchCountry/SearchCountry'

function Home() {
  return (
    <div>
      <SearchCountry />
      <Countries />
    </div>
  )
}

export default Home
