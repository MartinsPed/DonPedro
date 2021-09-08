import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import pic1 from "./firstImage.png"

const DapiokFirstBody = () => {
    const myRef= useRef();
    const myRef1= useRef();
    const myRef2= useRef();

    const [addition, setAddition] = useState(0)

    useEffect(()=>{
        setInterval(()=>{
            setAddition((e)=>e+1)
        },3000)
    },[])

    const colours = ["rgb(193,111,183)", "white","white"]
    const colours1 = ["white","rgb(100,185,194)","white",]
    const colours2 = ["white","white","rgb(212,110,41)",]

    useEffect(()=>{
        myRef.current.style.color = colours[addition%colours.length];
        myRef.current.style.transition = "all 350ms";
    },[addition])
    useEffect(()=>{
        myRef1.current.style.color = colours1[addition%colours1.length];
        myRef1.current.style.transition = "all 350ms";
    },[addition])
    useEffect(()=>{
        myRef2.current.style.color = colours2[addition%colours2.length];
        myRef2.current.style.transition = "all 350ms";
    },[addition])
    return (
        <DapiBody>
            <FirstText>
                <First><span ref={myRef} style={{marginRight: "10px"}}>Design,
                 </span><span ref={myRef1} style={{marginRight: "10px"}}>Preview </span> and
                 <span ref={myRef2} style={{marginLeft: "10px"}}> Track </span>
                 </First>
                 <Second>the API with the team</Second>
            </FirstText>
            <SecondText>Dapi helps streamline API
               integration for the dev team, OpenAPI, sequence diagram,
               API document site and mock server. It aims for faste
               integration and better tracking</SecondText>
            <TryFreeButton>Try Free now</TryFreeButton>
            <FirstImage src={pic1}/>
        </DapiBody>
    )
}

export default DapiokFirstBody

const DapiBody = styled.div`
    width: 100%;
    display: flex;
    // background-color: lightgrey;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 150px;
    margin-top: 150px;
    
`
const FirstText = styled.div`
    
    font-size: 60px;
    color: white;
    font-weight: bold;
    margin-bottom: 15px;
    width: 800px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    
`

const First = styled.div`
    width: 800px;
    height: 95px;
    margin-bottom: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Second = styled.div`
    display: flex;
    width: 800px;
    height: 90px;
    justify-content: center;
    align-items: center;
`

const SecondText = styled.div`
    text-align: center;
    font-size: 19px;
    color: grey;
    letter-spacing: 0.8px;
    margin-bottom: 100px;
    width: 900px;
    height: 50px;
    display: flex;
    justify-content: center;
    
`

const TryFreeButton = styled.div`
    width: 280px;
    height: 60px;
    box-shadow:   gray 0px 0px 12px 5px ;
    border-radius: 10px;
    // background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 25px;
    font-weight: bold;
    border: solid 2px purple;
    margin-bottom: 100px;
    transition: all 350ms;
    

    :hover{
        cursor: pointer;
        box-shadow:   gray 2px 1px 15px 8px ;
        transform: scale(1.01);
        transition: all 350ms;
    }
`

const FirstImage = styled.img`
    width: 1000px;
    background-color: red;
    border-radius: 10px;
    box-shadow: gray 0px 0px 12px 5px ;
    height: 600px;
    
`