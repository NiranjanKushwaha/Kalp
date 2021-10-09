import React from 'react'
import whatsApp from '../assets/wa-whatsapp.png';
const Floating = () => {
    return (
        <div className="floating_section">
            <a href="/map" target="_blank" className='floating_link'>
                <img src={whatsApp} alt="notification" />
            </a>
        </div>
    )
}

export default Floating
