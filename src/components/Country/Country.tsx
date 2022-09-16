import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 80px 45px;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1440px;
  padding: 0 50px 30px 50px;

  @media (max-width: 425px) {
    padding: 0 20px 30px 20px;
    gap: 30px;
  }
`

const CountryContainer = styled.section`
  width: 300px;
  height: 425px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`

const CountryImage = styled.figure`
  width: 100%;

  img {
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px 5px 0 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
`

const CountryInformation = styled.section`
  padding: 30px 25px 25px 25px;

  h1 {
    margin-bottom: 15px;
  }

  p {
    font-weight: 600;
    font-size: 1.2rem;

    span {
      font-weight: 300;
    }
  }

  p:not(:last-child) {
    margin-bottom: 5px;
  }
`

function Country({ data }: any) {
  return (
    <Container>
      {data?.map((country: any) => (
        <CountryContainer key={country.name.common}>
          <CountryImage>
            <Link to={`/${country.cca3}`}>
              <img loading="lazy" src={country.flags.png} alt={country.name.common} />
            </Link>
          </CountryImage>
          <CountryInformation>
            <h1>{country.name.common}</h1>
            <p>Population: <span>{country.population}</span></p>
            <p>Region: <span>{country.region}</span></p>
            <p>Capital: <span>{country.capital}</span></p>
          </CountryInformation>
        </CountryContainer>
      ))}
    </Container>
  )
}

export default Country
