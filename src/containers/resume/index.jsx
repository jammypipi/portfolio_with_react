import React from 'react';
import { FaFileAlt } from 'react-icons/fa';
import PageHeaderContent from '../../components/pageHeaderContent';
import { Data } from './utils';
import {MdWork, MdSchool} from 'react-icons/md';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./styles.scss";

const Resume = () => {
    return (
        <section id='resume' className='resume'>

            <PageHeaderContent headerText='My Resume' icon={<FaFileAlt size={40} />} />

            <div className='timeline'>

                <div className='timeline_experience'>

                    <h3 className='timeline_experience_header-text'>Experiences</h3>

                    <VerticalTimeline
                        layout={'1-column'}
                        lineColor="var(--themed-icon-background-color)"
                    >
                        {
                            Data.experience.map((item, i) => (
                                <VerticalTimelineElement
                                    key={i}
                                    className='timeline_experience_vertical-vertical-timeline-element'
                                    contentStyle={{
                                        
                                    }}
                                    icon = {<MdWork />}
                                    iconStyle={{
                                        color: 'var(--themed-icon-background-color)',
                                        background: 'var(--themed-background-color)',
                                    }}    
                                >
                                    <div className='vertical-timeline-element-title-wrapper'>

                                        <h3 className='vertical-timeline-element-title'>
                                            {item.title}
                                        </h3>

                                        <h4 className='vertical-timeline-element-subtitle'>
                                            {item.subTitle}
                                        </h4>

                                    </div>

                                    <p>
                                        {item.description}
                                    </p>

                                </VerticalTimelineElement>

                            ))
                        }

                    </VerticalTimeline>
                </div>

                <div className='timeline_education'>

                    <h3 className='timeline_education_header-text'>Education</h3>

                    <VerticalTimeline
                        layout={'1-column'}
                        lineColor="var(--themed-icon-background-color)"
                    >
                        {
                            Data.education.map((item, i) => (
                                <VerticalTimelineElement
                                    key={i}
                                    className='timeline_experience_vertical-vertical-timeline-element'
                                    contentStyle={{
                                        
                                    }}
                                    icon = {<MdSchool />}
                                    iconStyle={{
                                        color: 'var(--themed-icon-background-color)',
                                        background: 'var(--themed-background-color)',
                                    }}   
                                    >
                                    <div className='vertical-timeline-element-title-wrapper'>

                                        <h3 className='vertical-timeline-element-title'>
                                            {item.title}
                                        </h3>

                                        <h4 className='vertical-timeline-element-subtitle'>
                                            {item.subTitle}
                                        </h4>                                      

                                    </div>

                                    <p>
                                        {item.description}
                                    </p>

                                </VerticalTimelineElement>

                            ))
                        }

                    </VerticalTimeline>

                </div>


            </div>

        </section>
    )
}

export default Resume;