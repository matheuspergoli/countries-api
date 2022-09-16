import React from 'react'
import useFetch from '../../Hooks/useFetch'
import CircularLoading from '../CircularLoading/CircularLoading'
import Country from '../Country/Country'
import { RegionContext } from '../Context/RegionContext'

function Countries() {
  const { data, loading, request } = useFetch()
  const { value } = React.useContext(RegionContext)

  React.useEffect(() => {
    async function fetchCountry() {
      await request('https://restcountries.com/v3.1/all')
    }
    fetchCountry()
  }, [])

  React.useEffect(() => {
    async function fetchCountryRegion() {
      await request(`https://restcountries.com/v3.1/region/${value}`)
    }
    fetchCountryRegion()
  }, [value])

  if (loading === true) return <CircularLoading />
  return (
    <Country data={data} />
  )
}

export default Countries
