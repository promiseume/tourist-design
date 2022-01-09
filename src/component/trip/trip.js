import React from 'react'
import './trip.css'
import fuji from "../../image/fuji.png";
import koyoto from "../../image/koyoto.png";
import tokyo from "../../image/tokyo.png";
import niigata from "../../image/niigata.png";
import saporo from "../../image/saporo.png";

export default function Trip() {
    return (
        <div className='trip'>
            <div className='trip-header'>
                <div>
            <h3>Get Inspired For Your Next Trip</h3>
            <div className='line'></div>
            </div>
            <a>View All</a>
            </div>
            <div className='city'>
                <img src={fuji} alt='fuji,a town in japan'/>
                <img src={koyoto} alt='Koyoto,a town in japan'/>
            </div>

            <div className='city'>
                <img src={tokyo} alt='Tokyo,a town in Japan'/>
                <img src={niigata} alt='Niigate,a town in Japan'/>
                <img src={saporo} alt='Saparo,a town in japan'/>
            </div>
        </div>
    )
}
