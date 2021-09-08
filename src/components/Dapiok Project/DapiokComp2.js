import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import pic3 from "./track-section.png"

const DapiokComp2 = () => {
   
    return (
        <DapiokCompCont>
            <LineDiv></LineDiv>
            <Design >Track</Design>
            <CompText>Follow the updates and always keeping everybody
               aligned on the latest API. Review the API designing
               before the performance issue happens.</CompText>
            <ImgComp src={pic3}/>
        </DapiokCompCont>
    )
}

export default DapiokComp2

const DapiokCompCont = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 130px;
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
    color:  rgb(212,110,41);
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
    // background-color: red;
    border-radius: 10px;
    //box-shadow: lightgray 0px 0px 12px 5px ;
    height: 600px;
    // border: solid 1px lightgray;
`


