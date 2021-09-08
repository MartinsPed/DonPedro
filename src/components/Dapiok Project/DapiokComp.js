import React from 'react'
import styled from 'styled-components'
import pic1 from "./design-section.png"

const DapiokComp = () => {
    return (
        <DapiokCompCont>
            <LineDiv></LineDiv>
            <Design>Design</Design>
            <CompText>More than just editing an openAPI doc,
               you can define the model relationship,
               draw sequence diagram to understand better the
               logic behind each API.</CompText>
            <ImgComp src={pic1}/>
        </DapiokCompCont>
    )
}

export default DapiokComp

const DapiokCompCont = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 100px;
`

const LineDiv = styled.div`
    height: 120px;
    width: 1px;
    background-color: grey;
    margin-bottom: 100px;
`

const Design = styled.div`
    font-size: 60px;
    color: white;
    font-weight: bold;
    margin-bottom: 25px; 
    color:  rgb(193,111,183);
`

const CompText = styled.div`
text-align: center;
font-size: 19px;
color: grey;
letter-spacing: 0.8px;
margin-bottom: 60px;
width: 900px;
height: 50px;
display: flex;
justify-content: center;
align-items: center;

`

const ImgComp = styled.img`
    width: 1000px;
    
    border-radius: 10px;
    //box-shadow: lightgray 0px 0px 12px 5px ;
    height: 600px;
    // border: solid 1px lightgray;
`


