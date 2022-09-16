import React from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import { BsArrowLeft as Arrow } from 'react-icons/bs'
import useFetch from '../../Hooks/useFetch'
import CircularLoading from '../CircularLoading/CircularLoading'

const Container = styled.article`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 50px 30px 50px;
  gap: clamp(30px, 5vw, 80px);
`

const Information = styled.section`
  flex-grow: 1;
  flex-basis: 320px;

  h1 {
    font-size: 2rem;
    margin-bottom: 25px;
  }
  
  p {
    font-weight: 600;
    font-size: 1.1rem;

    span {
      font-weight: 300;
    }
  }

  p:not(:last-child) {
    margin-bottom: 5px;
  }

  .borders {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 30px;

    span {
      padding: 0 25px;
      border-radius: 3px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    }
  }
`

const ImageContainer = styled.figure`
  width: 100%;
  max-width: 600px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  
  img {
    display: block;
    width: 100%;
    height: 100%;
    max-height: 350px;
    border-radius: 5px;
  }
`

const ReturnBtn = styled(Link)`
  display: flex;
  align-items: center;
  gap: 15px;
  color: black;
  font-size: 1.2rem;
  padding: 5px 25px;
  margin-left: 50px;
  width: fit-content;
  border-radius: 5px;
  margin-bottom: 50px;
  text-decoration: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

  svg {
    font-size: 1.5rem;
  }
`

function CountryInformation() {
  const { id } = useParams()
  const { data, loading, request } = useFetch()

  React.useEffect(() => {
    async function fetchCountry() {
      await request(`https://restcountries.com/v3.1/alpha/${id}`)
    }
    fetchCountry()
  }, [])

  if (loading === true) return <CircularLoading />
  return (
    <>
      <ReturnBtn to="/">
        <Arrow /> Back
      </ReturnBtn>
      {data?.map((country: any) => (
        <Container key={country.name.common}>
          <ImageContainer>
            <img loading="lazy" src={country.flags.png} alt={country.name.common} />
          </ImageContainer>
          <Information>
            <h1>{country.name.common}</h1>
            <p>Native Name: <span>{country.name.official}</span></p>
            <p>Population: <span>{country.population}</span></p>
            <p>Region: <span>{country.region}</span></p>
            <p>Sub Region: <span>{country.subregion}</span></p>
            <p>Capital: <span>{country.capital}</span></p>
            <p>Top Level Domain: <span>{country.tld[0]}</span></p>
            <p className="borders">
              Border Countries:
              {country.borders ? country.borders.map((border: any) => (
                <span key={border}>{border}</span>
              )) : ' None'}
            </p>
          </Information>
        </Container>
      ))}
    </>
  )
}

export default CountryInformation
