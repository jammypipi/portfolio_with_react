import React, { useState } from 'react';
import { IoMdContact } from 'react-icons/io';
import { Animate } from "react-simple-animate";
import PageHeaderContent from '../../components/pageHeaderContent';
import "./styles.scss";

const Contact = () => {
    const [submissionStatus, setSubmissionStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        try {
            const response = await fetch('./contact.php', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setSubmissionStatus("success");
            } else {
                setSubmissionStatus("error");
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmissionStatus("error");
        }
    };

    return (
        <section id='contact' className='contact'>
            <PageHeaderContent headerText='Contact Me' icon={<IoMdContact size={40} />} />

            <div className='contact_content'>
                <Animate play duration={1} delay={0} start={{ transform: "translateX(-200px)" }} end={{ transform: "translateX(0px)" }}>
                    <h3 className='contact_content_header-text'>
                        Send Me!
                    </h3>
                </Animate>

                <Animate play duration={1} delay={0} start={{ transform: "translateX(200px)" }} end={{ transform: "translateX(0px)" }}>
                    <form className='contact_content_form' onSubmit={handleSubmit}>
                        <div className='contact_content_form_controlswrapper'>
                            <div>
                                <input required name="name" className="inputName" type={"text"} />
                                <label htmlFor="name" className="nameLabel"> Name </label>
                            </div>
                            <div>
                                <input required name="email" className="inputEmail" type={"text"} />
                                <label htmlFor="email" className="emailLabel"> Email </label>
                            </div>
                            <div>
                                <input required name="description" className="inputDescription" type={"text"} />
                                <label htmlFor="description" className="descriptionLabel"> Description </label>
                            </div>
                        </div>
                        <button type="submit"> Submit </button>
                    </form>
                </Animate>

                {submissionStatus === "success" && <p>Thank you for your submission!</p>}
                {submissionStatus === "error" && <p>Error submitting the form. Please try again later.</p>}
            </div>
        </section>
    );
};

export default Contact;
