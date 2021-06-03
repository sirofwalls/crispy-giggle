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
                <HeroH1>My name is Peter</HeroH1>
                <HeroP>This is my personal site and a learning tool!</HeroP>
                <HeroBtnWrapper>
                    <Button to='about' onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark='true' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                        Check me out{hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
