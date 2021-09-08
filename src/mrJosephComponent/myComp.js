import React from 'react'
import styled from "styled-components"
import img from "./img10.png";

const  MyComp = ({paragraph, title, img, chng, clr}) => {
    return (
        <Container chng={chng}>
            <Image scr={img}/>
            <Wrapper>
            <Title clr={clr}>{title}</Title>
                <p>{paragraph}</p>
            </Wrapper>
        </Container>
    )
}

export default MyComp

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
    flex-direction: ${({chng}) => chng ? "row-reverse" : "row"}
`

const Wrapper = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h2`
    text-transform : uppercase;
    color: ${({clr})=> clr ? "red" : "white"};
`

const Image = styled.img`
    width: 300px;
    height: 200px;
    background-color: white;
    border-radius: 10px;
    object-fit: cover;
`