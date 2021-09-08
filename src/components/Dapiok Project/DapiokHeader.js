import React from 'react'
import styled from 'styled-components'
import logo from "./landing-logo.png"

const DapiokHeader = () => {
    return (
        <HeaderContainer>
            <Headerholder>
                <LeftHeaderHolder>
                    <Logo>
                        <LogoDisplay src={logo}/>
                        <LogoText>Dapi</LogoText>
                    </Logo>
                    <ChangeLog>ChangeLog</ChangeLog>
                    <Pricing>Pricing</Pricing>
                    <Contact>Contact</Contact>
                </LeftHeaderHolder>
                <RightHeaderHolder>
                    <Login>Login</Login>
                    <SignUp>SignUp</SignUp>
                </RightHeaderHolder>
            </Headerholder>
        </HeaderContainer>
    )
}

export default DapiokHeader

const HeaderContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
    padding-top: 10px;
    margin-bottom: 160px;
    position: fixed;
    top: 0px;
    backdrop-filter: blur(5px)
    
`

const Headerholder = styled.div`
    width: 1300px;
    height: 60px;

    display: flex;
    justify-content: space-between;
    align-items: center;

`

const RightHeaderHolder = styled.div`
    width: 20%;
   
    height: 100%;
    display: flex;
    padding-left: 20px;
    align-items: center;
    justify-content: center;
    font-size: 18px;

  
`
const LeftHeaderHolder = styled.div`
    width: 40%;
   
    height: 100%;
    display: flex;
    padding-left: 20px;
    align-items: center;
    font-size: 16px;
    color: white;

`
const Logo = styled.div`
    margin-right: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  
`

const LogoDisplay = styled.img`
    width: 40px;
    height: 40px;
    object-fit: cover;
    margin-right: 5px;
`

const LogoText = styled.div`
    font-size: 25px;
    font-weight: bold;

`
const ChangeLog = styled.div`
    margin-right: 45px;
    transition: all 350ms;
   
   
    
    :hover{
        transition: all 350ms;
        color: grey;
        cursor: pointer;
    }
`
const Pricing = styled.div`
    margin-right: 45px;
    transition: all 350ms;
    
    :hover{
        transition: all 350ms;
        color: grey;
        cursor: pointer;
    }
`
const Contact = styled.div`
    margin-right: 45px;
    transition: all 350ms;
    
    :hover{
        transition: all 350ms;
        color: grey;
        cursor: pointer;
    }
`
const Login = styled.div`
    margin-right: 45px;
    color: rgb(86,142,242);

    :hover{
        cursor: pointer;
        
    }
    
`
const SignUp = styled.div`
    margin-right: 45px;
    width: 100px;
    height: 40px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: white;
    background-color: rgb(86,142,242);
    transition: all 350ms;

    :hover{
        cursor: pointer;
        border: solid 1px rgb(86,142,242);
        transition: all 350ms;
    }

`




