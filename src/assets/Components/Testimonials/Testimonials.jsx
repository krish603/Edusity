import React from 'react'
import './Testimonials.css'
import next_icon from '../../img/next-icon.png'
import back_icon from '../../img/back-icon.png'
import user_1 from '../../img/user-1.png'
import user_2 from '../../img/user-2.png'
import user_3 from '../../img/user-3.png'
import user_4 from '../../img/user-4.png'

const Testimonials = () => {
  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn'/>
        <img src={back_icon} alt="" className='back-btn'/>
        <div className="slider">
            <ul>
                <li>
                    <div className="slide">
                        
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials