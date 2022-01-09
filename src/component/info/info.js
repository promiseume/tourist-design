import React from "react";
import "./info.css";
import neighbourhood1 from "../../image/infoImg1.png";
import neighbourhood2 from "../../image/infoImg.png";
export default function Info() {
  return (
    <div className='info-content'>
        <section>
      <img src={neighbourhood2}/>
      <div className='info'> 
        <h3> Prefecture in Focus: Tottori</h3>
        <p>
          Jump off balcony, onto stranger's head. Chase ball of string hide when
          guests<br/> come over. Being gorgeous with belly side up i could pee on
          this if i had the<br/> energy but under the bed, for attack the child, open
          the door,
        </p>
        <a href='view'>VIEW PREFECTURE</a>
      </div>
      </section>

      <section>
      <div className='info'>
        <h3>Featured Neighborhood:<br/>
             Kyoto’s Arashiyama</h3>
        <p>
          Jump off balcony, onto stranger's head. Chase ball of string hide when<br/>
          guests come over. Being gorgeous with belly side up i could pee on
          this if i <br/> had the energy but under the bed, for attack the child, open
          the door,{" "}
        </p>
        <a href='view'>VIEW NEIGHBORHOOD</a>
      </div>
      <img src={neighbourhood1}/>
      </section>
    </div>
  );
}
