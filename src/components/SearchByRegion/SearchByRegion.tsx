import React from 'react'
import styled from 'styled-components'
import { RegionContext } from '../Context/RegionContext'

const options = [
  'Africa',
  'America',
  'Asia',
  'Europe',
  'Oceania'
]

const SelectContainer = styled.select`
  position: relative;
  border: none;
  appearance: none;
  font-size: 1.1rem;
  margin-left: 50px;
  border-radius: 5px;
  padding: 10px 20px;
  margin-bottom: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  &:focus {
    outline: none;
  }

  @media (max-width: 480px) {
    margin-left: 20px;
  }
`

function SearchByRegion() {
  const { value, setValue } = React.useContext(RegionContext)

  return (
    <SelectContainer value={value} onChange={({ target }) => setValue(target.value)}>
      <option value="" disabled>Filter by Region</option>
      {options.map((option) => <option key={option} value={option}>{option}</option>)}
    </SelectContainer>
  )
}

export default SearchByRegion
