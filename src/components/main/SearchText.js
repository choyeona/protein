import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
justify-content: right;
flex-direction: column;
margin-bottom: 15px;
`

const FirstLine = styled.div`
display: flex;
flex-direction: row;
`
const Name = styled.span`
color: #000;
font-size: 14px;
font-weight: 800;
`

const Text = styled.span`
color: #000;
font-size: 14px;
font-style: normal;
`

const SearchText = ({name}) => {
  return (
    <div>
        <Container>
            <FirstLine>
                <Name>{name}</Name>
                <Text>에는</Text>
            </FirstLine>
            <Text>이 성분으로 이루어져 있어요!</Text>
        </Container>
    </div>
  )
}

export default SearchText