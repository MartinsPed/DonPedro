import React from 'react'
import styled from "styled-components"

const CompButton = () => {
    return (
        <ButtonContainer>
            <Button>See what's been built</Button>
        </ButtonContainer>
       
    )
}

export default CompButton

const ButtonContainer = styled.div`
    display: flex;
    width: 600px;
    height: 100px;
    background-color: red;
    
`

const Button = styled.button`
display: flex;
width: 20px;
height: 40px;
background-color: black;
border: 2px white solid;
align-items: 
`
