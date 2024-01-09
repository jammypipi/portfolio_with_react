import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Animate} from "react-simple-animate";
import './styles.scss';

const Home = () => {

    const navigate = useNavigate();
    console.log(navigate);

    const handleNavigateToContactMe = () => {
        navigate("/contact")
    }

    return(
        <section id='home' className='home'>

            <div className='home_text-wrapper'>
                <h1>
                    Hello, I'm Thiri May Thu
                    <br />
                    Junior Web Developer
                </h1>
            </div>

            <Animate play duration={1.5} delay={1} start={{transform : 'translateY(550px)'}} end={{transform : 'translateY(0px)'}}>
            <div className='home_contact-me'>
                <button onClick = {handleNavigateToContactMe}>
                    Hire Me!
                </button>

            </div>
            </Animate>
         
        </section>
    )
}

export default Home;