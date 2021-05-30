import React, {useState} from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, ArrowRight, ArrowForward, HeroBtnWrapper } from './HeroElements';
import {Button} from '../ButtonElement'
import Video from '../../video/video.mp4';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    };

    return (
        <HeroContainer>
            <HeroBg>
                {/* This is in case i want to have a video in the background */}
                {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4' />  */}
            </HeroBg>
            <HeroContent>
                <HeroH1>Placeholder Text</HeroH1>
                <HeroP>Sign Up for more placeholder text</HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark='true'>
                        My Button{hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
