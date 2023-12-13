import React from 'react';
import {ReactComponent as HeaderBG} from '../assets/svg/Header-BG.svg'
import Container from './Container';
import UserImg from '../assets/images/Illustraion 2.png'
const HeaderSection = () => {
    return (
        <header className='pt-[60px]'>
            <Container className='flex justify-between items-center'>
                <div>
            <div className='text-primary text-[36px] font-[600]'>Looking for Experienced  Developer</div>
            <div className='text-primary font-[500px] text-[30px] '>My name is </div>
            <div className='text-primary text-[72px] font-[600px] '>Hamza Manzoor</div>
            </div>
            <div className='max-w-[560px] w-full relative'>
            <HeaderBG/>
            <div className='absolute left-[100px] top-[70px] border-4 border-white w-[374px] h-[453px] bg-[#0C8CE9B2] rounded-[21px] overflow-hidden'>
<img src={UserImg} className='w-full absolute right-[-14px] bottom-[-6px]' alt="UserImg" />
            </div>
            </div>

            </Container>
        </header>
    );
};

export default HeaderSection;