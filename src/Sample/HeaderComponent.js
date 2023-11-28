import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
width: 100%;
height:40px;
display:flex;
align-items:center;
justify-content:center;
`

const Title = styled.div`
font-size: 24px;
font-style: bold;
`

const HeaderComponent = () => {
  return (
    <HeaderWrapper>
        <Title>뉴스검색</Title>
    </HeaderWrapper>
  )
}

export default HeaderComponent