import React from 'react'
import { AiOutlineSearch as Search } from 'react-icons/ai'
import styled from 'styled-components'
import useFetch from '../../Hooks/useFetch'
import Country from '../Country/Country'

const FormContainer = styled.form`

`

const FormGroup = styled.div`

`

function SearchCountry() {
  const [value, setValue] = React.useState('')
  const { data, request } = useFetch()

  React.useEffect(() => {
    async function fetchCountry() {
      await request(`https://restcountries.com/v3.1/name/${value}`)
    }
    fetchCountry()
  }, [])

  return (
    <>
      <FormContainer onSubmit={(event) => event.preventDefault()}>
        <FormGroup>
          <Search />
          <input
            type="text"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            placeholder="Search for a country..."
          />
        </FormGroup>
      </FormContainer>

      <Country data={data} />
    </>
  )
}

export default SearchCountry
