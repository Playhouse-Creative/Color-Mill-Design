import React from 'react'
import Deth from '../images/Deth-Fort-Bragg-White.svg'
import ContactForm from './contactForm'

const Footer = () => {
    return (
        <>
        <div>
        <ContactForm/>
        </div>
        <div
        style={{
            padding: 30,
            backgroundColor: '#63768D',
            color: '#E9F1F7',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
        }}
        >
        <div>
            © Color Mill Design {new Date().getFullYear()}, Built with
            {` `}
            <a style={{ color: '#E9F1F7' }} href="https://www.gatsbyjs.org">
            Gatsby
            </a>
        </div>
        <img src={Deth} type="image/svg+xml" width="128" height="144" />
        </div>
        </>
    )
}

export default Footer
