import {useEffect, useState, useRef} from "react";
import styled from "styled-components";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";

import devices from "../../styles/devices";

import Button from "../Elements/Button/Button";

const SliderWrapper = styled.div`
  position: relative;
  background: red;
  overflow: hidden;
`

const SliderContainer = styled.div`
  transform: translateX(${({currentSlide}) => -currentSlide + "00%"});
`

const Slide = styled.div`
  position: relative;
  height: 25rem;
  width: 100%;
  display: flex;

  img {
    width: 100%;
    object-fit: cover;
  }

  @media screen and ${devices.md} {
    height: 40rem;
  }

  @media screen and ${devices.lg} {
    height: 55rem;
  }
`

const ButtonsWrapper = styled.div`
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  ${Button} {
    svg {
      font-size: 2rem;
    }
  }
`


const IndicatorWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

const Indicator = styled.span`
  width: 30px;
  height: 5px;
  margin-right: 1rem;
  display: block;
  background: ${({theme}) => theme.secondary};
  
  :last-child {
    margin-right: 0;
  }
`

const Slider = ({images}) => {

    const sliderRef = useRef(null);

    const [currentSlide, setCurrentSlide] = useState(0);
    const [htmlNode, setHtmlNode] = useState("");

    const createNode = () => {

        let nodeList = "";

        for (let i = 0; i < images.length; i++) {
            const element = `<img src=${images[i]}/>`
            nodeList += element
        }

        nodeList += `<img src=${images[0]}/>`

        setHtmlNode(nodeList)
    };

    const handleNextBtn = () => {
        if (currentSlide >= images.length) {
            setCurrentSlide(0)
        } else {
            setCurrentSlide(currentSlide + 1)
        }
    }

    const handlePrevBtn = () => {
        if (currentSlide <= 0) {
            setCurrentSlide(images.length - 1)
        } else {
            setCurrentSlide(currentSlide - 1)
        }
    }

    const handleTransition = () => {
        // if (currentSlide === images.length) {
        //     setCurrentSlide(0);
        //     sliderRef.current.style.transition = 'none'
        // }
    }


    useEffect(() => {
        createNode()
        if (currentSlide === images.length) {
            setCurrentSlide(0)
        } else {
        }
    }, [currentSlide])


    return (
        <SliderWrapper>
            <ButtonsWrapper>
                <Button onClick={handlePrevBtn}>
                    <FaArrowLeft/>
                </Button>
                <Button onClick={handleNextBtn}>
                    <FaArrowRight/>
                </Button>
            </ButtonsWrapper>
            <SliderContainer ref={sliderRef} onTransitionEnd={handleTransition} currentSlide={currentSlide}>
                <Slide dangerouslySetInnerHTML={{__html: htmlNode}}/>
            </SliderContainer>
            <IndicatorWrapper>
                <Indicator/>
                <Indicator/>
                <Indicator/>
            </IndicatorWrapper>
        </SliderWrapper>
    )
}

export default Slider
