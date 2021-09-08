import React from 'react'
import styled from 'styled-components'
import pic2 from "./preview-section.png"

const DapiokComp1 = () => {
    return (
        <DapiokCompCont>
            <LineDiv></LineDiv>
            <Design>Preview</Design>
            <CompText>Deploy a password-protected API doc site and
               mock API server whenever you want.
               Let others in the team to do the integration
               and review before the API is ready.</CompText>
            <ImgComp src={pic2}/>
        </DapiokCompCont>
    )
}

export default DapiokComp1

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
    // background-color: red;
    border-radius: 10px;
    //box-shadow: lightgray 0px 0px 12px 5px ;
    height: 600px;
    // border: solid 1px lightgray;
`


