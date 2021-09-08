import React from 'react';
import OurSlider from "./ourSlider";
import styled from "styled-components"
import Header from "./header"

const HomeScreen = () => {
    return (
        <>
           <Container>
                <Header/>
                <OurSlider/>
           </Container>
          
           
        
        </>
    )
}

export default HomeScreen

const Container = styled.div`
    width: 80%;
    margin: auto;
`