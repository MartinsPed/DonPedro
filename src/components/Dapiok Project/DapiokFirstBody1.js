import React from 'react'
import styled from 'styled-components'
import pic4 from "./landing-logo.png"

const DapiokFirstBody1 = () => {
    return (
        <DapiBody>
            <FirstText>Ready to work on your API</FirstText>
            <SecondText>Dapi keeps everyone in the dev team
                aligned, Backend, Frontend and PM, collaborative 
                working in one platform.
            </SecondText>
            <TryFreeButton>Try Free now</TryFreeButton>
            <FirstImage src={pic4}/>
        </DapiBody>
    )
}

export default DapiokFirstBody1

const DapiBody = styled.div`
    width: 100%;
    display: flex;
    // background-color: lightgrey;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
`
const FirstText = styled.div`
    text-align: center;
    font-size: 60px;
    color: white;
    font-weight: bold;
    margin-bottom: 15px;
    width: 800px;
    height: 80px;
    display: flex;
    justify-content: center;
    
`

const SecondText = styled.div`
    text-align: center;
    font-size: 19px;
    color: grey;
    letter-spacing: 0.8px;
    margin-bottom: 100px;
    width: 700px;
    height: 50px;
    display: flex;
    justify-content: center;
    
`

const TryFreeButton = styled.div`
    width: 280px;
    height: 60px;
    
    border-radius: 10px;
    background-color: rgb(86,142,242);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 25px;
    font-weight: bold;
    
    margin-bottom: 200px;
    transition: all 350ms;
    

    :hover{
        cursor: pointer;
    
        transform: scale(1.01);
        transition: all 350ms;
        background-color: rgb(10,100,200);
    }
`

const FirstImage = styled.img`
    width: 60px;
    // background-color: red;
    border-radius: 10px;
    // box-shadow: gray 0px 0px 12px 5px ;
    height: 60px;
    object-fit: cover;
    margin-bottom: 20px;
    
`