import React from 'react'
import styled from 'styled-components'
import HeaderComponent from './HeaderComponent'
import SearchComponent from './SearchComponent'

const PageBlock = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const SamplePage = () => {
  return (
    <PageBlock>
        <HeaderComponent/>
        <SearchComponent></SearchComponent>
    </PageBlock>
  )
}

export default SamplePage