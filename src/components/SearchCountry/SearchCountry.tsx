import React from 'react'
import { AiOutlineSearch as Search } from 'react-icons/ai'
import styled from 'styled-components'
import useFetch from '../../Hooks/useFetch'
import Country from '../Country/Country'

const FormContainer = styled.form`
  max-width: 400px;
  margin-left: 50px;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 480px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  input {
    width: 100%;
    border: none;
    font-size: 1.1rem;

    &:focus {
      outline: none;
    }
  }

  svg {
    font-size: 1.5rem;
  }
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
