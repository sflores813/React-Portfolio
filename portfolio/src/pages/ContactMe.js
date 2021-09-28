import React from 'react'
import {FaPhone, FaEnvelope} from 'react-icons/fa'

const ContactMe = () => {
    return (
        <> 
        <section className="contacts">
        <h1 >Contact Me</h1>
            <ul >
                <li ><a href="tel:325-200-3360"><FaPhone />325-200-3360</a></li>
                <li><a href="mailto:floresstepehn998@gmail.com"><FaEnvelope />{" "}floresstephen998@gmail.com</a></li>
            </ul>
        </section>
        </>
    )
}

export default ContactMe
