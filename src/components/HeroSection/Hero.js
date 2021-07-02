import React, {useState} from 'react';
import { HeroContainer, HeroBg, HeroContent, HeroH1, HeroP, ArrowDown, ArrowSouth, HeroBtnWrapper } from './HeroElements';
import {ScrollButton} from '../ButtonElement';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    };

    return (
        <HeroContainer>
            <HeroBg></HeroBg>
            <HeroContent>
                <HeroH1>My name is Peter</HeroH1>
                <HeroP>This is my personal site and a learning tool!</HeroP>
                <HeroBtnWrapper>
                    <ScrollButton to='about' onMouseEnter={onHover} big={0} onMouseLeave={onHover} primary={1} smooth={true} duration={500} exact={1} offset={-80}>
                        Check me out{hover ? <ArrowSouth/> : <ArrowDown/>}
                    </ScrollButton>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
