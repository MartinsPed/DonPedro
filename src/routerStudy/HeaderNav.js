import React from 'react'
import styled from 'styled-components'
import logo from "./Logo.jpg"
import { Link } from 'react-router-dom'

const HeaderNav = () => {
    return (
        <Container>
            <Logo src={logo}/>
            <Wrapper>
                <NavLinks to="/homepage">
                    <span>Home</span>
                </NavLinks>
                <NavLinks to="/about">
                        <span>About</span>
                </NavLinks>
                <NavLinks to="/contact">
                        <span>Contact</span>
                </NavLinks>
                <NavLinks to="/help">
                        <span>Help</span>
                </NavLinks>                    
            </Wrapper>
            <AvatarLink>
                <Avatar>M</Avatar>
                <a onClick={()=>{
                    console.log("You are now logged out...")
                }}>LogOut</a>
            </AvatarLink>
            
        </Container>
        
    )
}

export default HeaderNav

const Container = styled.div`
    width: 100%;
    height: 80px;
    background-color: darkgrey;
    display: flex;
    align-items: center;

`     
const Wrapper = styled.div`
    flex: 1
`
const Logo = styled.img`
    padding-left: 20px;
    width: 100px;
    height: 60px;
    object-fit: contain;
    margin-right: 60px;
`

const NavLinks = styled(Link)`
    margin: 0 10px;
    text-decoration: none;
    span {
        font-weight: bold;
        text-transform: uppercase;
        font-size: 15px;
        position: relative;
        

        :after{
            content: "";
            position: absolute;
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: white;
            width: 100%;
            opacity: 0;
            transition: all 350ms;
            transform: scaleX(0);
            transform-origin: left;
        }
    }
    :hover{
        span{
            cursor: pointer;
            :after{
                opacity: 1;
                transform: scaleX(1.05)
            }
        }
    }
`

const Avatar = styled.div`
    margin-right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 20px;
`
const AvatarLink = styled.div`
    a{
        display: none;
    }
    :hover{
        a {
            cursor: pointer;
            display: block;
            font-weight: bold;
            text-decoration: underline;
            color: white;
        }
    }
`

