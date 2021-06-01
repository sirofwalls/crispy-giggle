import React from 'react';
import HeroSection from '../components/HeroSection/Hero';
import InfoSection from '../components/InfoSection/Info';
import { infoObj1, infoObj2, infoObj3 } from '../components/InfoSection/Data';
import MultiInfo from '../components/MultiInfo/MultiInfo';
import { multiObj1 } from '../components/MultiInfo/Data';

const Home = () => {

    return (
        <>
        <HeroSection></HeroSection>
        <InfoSection {...infoObj1} />
        <InfoSection {...infoObj2} />
        <InfoSection {...infoObj3} />
        <MultiInfo {...multiObj1}/>
        </>
    )
}

export default Home
