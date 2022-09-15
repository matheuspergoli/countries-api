import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import CountryInformation from './components/CountryInformation/CountryInformation'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CountryInformation />} />
      </Routes>
    </>
  )
}

export default App
