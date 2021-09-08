import React from 'react'
import styled from 'styled-components'
import image from './img/1.jpg'

const cardClassWork = () => {
    return (
      <Container>
        <Wrapper>
          <Cancel>X</Cancel>
          <Top>
            <Image src={image}/>

          </Top>
          <Body>
            <Name>Martins</Name>
            <Quote>No man climbs a ladder with his hands in his pocket</Quote>
            <Time>Some seconds ago</Time>
          </Body>
        </Wrapper>
      </Container>
        
        
    )
}

export default cardClassWork

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center
`
const Wrapper = styled.div`
  width: 400px;
  height: 600px;
  background-color: #222728;
  border-radius: 8px;
  border: 2px solid white;
  display: flex;
  flex-direction: column;
  align-items: flex-end
`
const Top = styled.div`
  width: 100%;
  height: 150px;
  
  border-bottom: 2px solid gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center
`

const Cancel = styled.div`
  width: 20px;
  height: 20px;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: red;
  border-radius: 10px;
  margin: 5px;

  :hover{
    cursor: pointer;
    background-color: darkred;
    transition: all 350ms;
  }
`
const Image = styled.img`
  width: 160px;
  height: 160px;
  border: 5px solid white;
  border-radius: 100%;
  margin-bottom: -150px;
  object-fit: cover;
  
`

const Body = styled.div`
  width: 100%;
  height: 350px;
  
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  margin: auto;
  
  
`
const Name = styled.div`
  color: white;
  font-weight: bold;
  font-size: 20px;
  display: flex
`
const Quote = styled.div``

const Time = styled.div``




