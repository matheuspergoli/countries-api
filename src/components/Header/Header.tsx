import React from 'react'
import styled from 'styled-components'

const ContainerHeader = styled.header`
  margin-bottom: 50px;
  padding: 15px 0px 15px 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  h1 {
    font-size: 1.5rem;
  }
`

function Header() {
  return (
    <ContainerHeader>
      <h1>Where in the world ?</h1>
    </ContainerHeader>
  )
}

export default Header
