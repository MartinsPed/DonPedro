import React from 'react'
import styled from 'styled-components'

const About = () => {
    return (
        <Container>
            <Wrapper>This is the About Page</Wrapper>
        </Container>
    )
}

export default About

const Container = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Wrapper = styled.div`
    font-size: 30px;
    font-weight: bold;
`