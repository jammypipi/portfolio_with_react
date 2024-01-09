import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../components/pageHeaderContent';
import { Animate } from "react-simple-animate";
import { MdSecurity, MdLanguage } from 'react-icons/md';
import { FaPython, FaDev } from 'react-icons/fa';
import "./styles.scss";

const personalDetails = [
    {
        label: "Name",
        value: "Thiri May Thu",
    },
    {
        label: "Age",
        value: "25",
    },
    {
        label: "Address",
        value: "Yangon, Myanmar",
    },
    {
        label: "Email",
        value: "ppthroline@outlook.com",
    },
    {
        label: "Contact Number",
        value: "+95 9 430 71085",
    },
]

const jobSummary = "Passionate about CyberSecurity, Bug Bounties, Pentesting, Cryptography, Programming Languages, and Web Development. My love for programming languages fuels my journey in crafting secure and innovative solutions, while my passion for Web Development propels me to create engaging digital experiences."


const About = () => {
    return (
        <section id='about' className='about'>

            <PageHeaderContent headerText='About Me' icon={<BsInfoCircleFill size={40} />} />

            <div className='about_content'>

                <div className='about_content_personalWrapper'>
                    <Animate play duration={1.5} delay={1} start={{ transform: 'translateX(-900px)' }} end={{ transform: 'translatex(0px)' }}>
                        <h3>
                            Junior Web Developer
                        </h3>
                        <p>{jobSummary}</p>
                    </Animate>

                    <Animate play duration={1.5} delay={1} start={{ transform: 'translateX(500px)' }} end={{ transform: 'translatex(0px)' }}>
                        <h3 className='personalInformationHeaderText'>Personal Information</h3>
                            <ul>
                                {
                                    personalDetails.map((item,i) => (
                                        <li key = {i}>
                                            <span className='title'>{item.label}</span>
                                            <span className='value'>{item.value}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                    </Animate>
                </div>

                <div className='about_content_servicesWrapper'>
                    <Animate play duration={1.5} delay={1} start={{ transform: 'translateX(600px)' }} end={{ transform: 'translatex(0px)' }}>
                        <div className='about_content_servicesWrapper_innerContent'>
                        <div>
                            <FaPython size={60} color="var(--themed-icon-background-color)" />
                        </div>
                        <div>
                            <MdLanguage size={60} color="var(--themed-icon-background-color)" />
                        </div>
                        <div>
                            <FaDev size={60} color="var(--themed-icon-background-color)" />
                        </div>
                        <div>
                            <MdSecurity size={60} color="var(--themed-icon-background-color)" />
                        </div>
                        </div>
                    </Animate>
                </div>

            </div>
            
        </section >
    )
}

export default About;