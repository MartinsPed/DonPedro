import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";




const OurSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <Container>
            
            <Slider {...settings}>
                <Wrapper>
                    <Display src={img1}/>
                </Wrapper>
                <Wrapper>
                    <Display src={img2}/>
                </Wrapper>
                <Wrapper>
                    <Display src={img3}/>
                </Wrapper>
                <Wrapper>
                    <Display src={img4}/>
                </Wrapper>
            </Slider>
      </Container>
    
    )
}

export default OurSlider

const Container = styled.div`
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // flex-direction: column;
`

const Wrapper = styled.div``


const Display = styled.img`
    display: flex;
    justify-content: center;
    height: 1000px;
    border-radius: 10px;
    background-color: white;
    width: 100%;
    color: black;
    object-fit: cover;
`