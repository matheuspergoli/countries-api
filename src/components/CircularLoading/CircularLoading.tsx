import React from 'react'
import styled from 'styled-components'
import { CircularProgress } from '@mui/material'

const CircularLoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
`

function CircularLoading() {
  return (
    <CircularLoadingContainer>
      <CircularProgress color="inherit" />
    </CircularLoadingContainer>
  )
}

export default CircularLoading
