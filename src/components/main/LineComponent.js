import React from 'react'
import styled from 'styled-components'

const HeartBeat = styled.img`
width: 68px;
`
const LineComponent = () => {
  return (
    <div>
    <HeartBeat src={`https://yoonhees2.github.io/protein_page/heartBeat.png`}/>
    </div>
  )
}

export default LineComponent
