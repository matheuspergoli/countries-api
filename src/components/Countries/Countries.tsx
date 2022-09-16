import React from 'react'
import useFetch from '../../Hooks/useFetch'
import CircularLoading from '../CircularLoading/CircularLoading'
import Country from '../Country/Country'

function Countries() {
  const { data, loading, request } = useFetch()

  React.useEffect(() => {
    async function fetchCountry() {
      await request('https://restcountries.com/v3.1/all')
    }
    fetchCountry()
  }, [])

  if (loading === true) return <CircularLoading />
  return (
    <Country data={data} />
  )
}

export default Countries
