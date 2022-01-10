import React from 'react'
import './hero.css'
import oval from "../../image/Oval.png";

export default function Hero() {
    return (
        <div className='header-text'>
            <div className='hero'>
            <h3>Disover Amazing Places In Japan</h3>
            <p>Jump off balcony, onto stranger's head. Chase ball of string hide when guests<br/> come over. Being gorgeous with belly side up i could pee on this if i had the <br/>energy but under the bed, for attack the child, open the door, </p>
            </div>
            <div className='list'>
                <div className='search-line'>
                <p><img src={oval}/>What would you like to do?</p>
                <input type="text" class="form-control no-border" id="text"/>
                </div>
                <div className='search-line'>
                <p> <img src={oval}/> Where do you like to go?</p>
                <input type="text" class="form-control no-border" id="text"/>
                </div>
            <button>Search</button>
            </div>
            </div>
    )
}
