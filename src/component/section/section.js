import React from 'react'
import './section.css'
import firstIcon from "../../image/firstIcon.png";
import lastIcon from "../../image/lastIcon.png";
import Icon from "../../image/Icon.png";
export default function Section() {
    return (
        <div className='benefit'>
            <h3>Benefits of Odigo</h3>
            <div className='section'>
            <div className='support'>
                <img src={Icon} alt='icon'/>
            <h4>Welcome to Odigo!</h4>
            <p>Jump off balcony, onto stranger's head.<br/> Chase ball of string hide when guests come over.</p>
            <a>LEARN MORE</a>
            </div>
            <div className='support'>
            <img src={firstIcon} alt='second icon'/>
            <h4>Your Personal Japan Guide</h4>
            <p>Jump off balcony, onto stranger's head.<br/> Chase ball of string hide when guests come over.</p>
            <a>LEARN MORE</a>
            </div>
            <div className='support'>
            <img src={lastIcon} alt='third icon'/>
            <h4>Promoting Local Buisnesses</h4>
            <p>Jump off balcony, onto stranger's head.<br/> Chase ball of string hide when guests come over.</p>
            <a>LEARN MORE</a>
            </div>
            </div>
        </div>
    )
}
