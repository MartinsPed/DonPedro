import React from 'react'
import styled from 'styled-components'

const DapiokFooter = () => {
    return (
        <FooterContainer>
           <FooterItems>
                <Github>GitHub</Github>
                <Circle></Circle>
                <Twitter>Twitter</Twitter>
                <Circle></Circle>
                <FChangelog>Changelog</FChangelog>
                <Circle></Circle>
                <FPricing>Pricing</FPricing>
                <Circle></Circle>
                <Fcontact>Contact</Fcontact>
                <Circle></Circle>
                <Private>Private Privacy</Private>
           </FooterItems>
        </FooterContainer>
    )
}

export default DapiokFooter

const FooterContainer = styled.div`
width: 100%;
height: 60px;
display: flex;
justify-content: center;
align-items: center;
color: red;
padding-bottom: 20px;
`

const FooterItems = styled.div`
    width: 50%;
    
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: grey;
`

const Github = styled.div`
    margin-right: 20px;
    :hover{
        cursor: pointer;
    }
`
const Circle = styled.div`
     margin-right: 20px;
     width: 3px;
     height: 3px;
     border-radius: 3px;
     background-color: grey;
`
const Twitter = styled.div`
    margin-right: 20px;
    :hover{
        cursor: pointer;
    }
`
const FChangelog = styled.div`
     margin-right: 20px;
     :hover{
        cursor: pointer;
    }
`
const FPricing = styled.div`
     margin-right: 20px;
     :hover{
        cursor: pointer;
    }
`
const Fcontact = styled.div`
     margin-right: 20px;
     :hover{
        cursor: pointer;
    }
`
const Private = styled.div`
     margin-right: 20px;
     :hover{
        cursor: pointer;
    }
`