import React from 'react'
import styled from 'styled-components'
import Pix from "./mypix.jpg"

const Header = () => {
    return (
        <Container>
            <Image src={Pix}/>
            <Content>
                <Place>Overview</Place>
                <Place>Release Note</Place>
                <Place>Help</Place>
            </Content>
            <HeadHolder>
                <Heading>GitHub Desktop</Heading>
                <Caption>
                    Focus on what matters instead of fighting with Git.
                    Whether you are new to git or a seasoned user, 
                    GitHub Desktop simplifies your development workflow.
                </Caption>
            </HeadHolder>
            <Download>
                <DownloadButton>Download for Windows (64bit)</DownloadButton>
                <DownloadText>
                    Download for <Span>macOs</Span> or <Span>Windows(msi)</Span> <br/>
                    By downloading, you agree to the <Span>Open Source Application Terms.</Span>
                </DownloadText>

            </Download>
        </Container>
    )
}

export default Header

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
    padding-top: 200px;
`
const Image = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 60px;
    background-color: white;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid black;
    object-fit: cover;
`
const Content = styled.div`
    display: flex;
    margin-top: 30px
`
const Place = styled.div`
    margin: 10px;
    transition: all 350ms;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1.2px;
    transform: scale(1);
    position: relative;

    :after{
        content: " ";
        position: absolute;
        height: 2px;
        width: 100%;
        background-color: white;
        bottom: -4px;
        left: 0;
        opacity: 0;
        transform : scale(0);
        transform-origin: right;
        transition: all 350ms;

    }
    :hover{
        cursor: pointer;
        color: #812790;
        transform: scale(1.03);

        :after{
            opacity: 1;
            transform : scale(1.05)
        }
    }
`
const HeadHolder = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    margin-top: 100px;
`

const Heading = styled.div`
    display: flex;
    font-size: 50px;
    
    
`

const Caption = styled.div`
    display: flex;
    width: 800px;
    color: grey;
    align-items: center;
    font-size: 24px;
    text-align: center;
    margin-top: 20px;
`

const Download = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
margin-top: 50px;
margin-bottom: 30px;
`

const DownloadButton = styled.button`
    background-color: #A900FF;
    height: 45px;
    width: 320px;
    color: white;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    border: solid black 2px;
    box-shadow: inset 0px 0px 10px 0px rgba(57, 35, 82, 0.925);
`

const DownloadText = styled.div`
    margin-top: 20px;
    color: grey;
    width: 600px;
    text-align: center;
`
const Span = styled.span`
    color: #A900ff;
`