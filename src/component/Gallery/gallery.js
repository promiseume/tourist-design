import React from "react";
import './gallery.css'
import lamp from "../../image/lamp.png";
import street from "../../image/street.png";
import snow from "../../image/snow.png";
import flower from "../../image/flower.png";
import building from "../../image/building.png";
import nagoyaa from "../../image/nagoyaa.png";

export default function Gallery() {
  return (
    <div>
            <h3>Today top places to visit</h3>
    <article className='gallery'> 

  <div class="card">
  <img src={nagoyaa} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">NAGOYA</h5>
    <p class="card-text">Jump off balcony, onto stranger's head. Chase ball of string hide when
          guests come over. Being gorgeous with belly side up i could pee on
          this.</p>
    <a href="#" class="btn btn-primary">SEE MORE</a>
  </div>
  </div>

  <div class="card">
  <img src={snow} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">NIGATA</h5>
    <p class="card-text">Jump off balcony, onto stranger's head. Chase ball of string hide when
          guests come over. Being gorgeous with belly side up i could pee on
          this.</p>
    <a href="#" class="btn btn-primary">SEE MORE</a>
  </div>
  </div>

  <div class="card">
  <img src={building} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">OSAKA</h5>
    <p class="card-text">Jump off balcony, onto stranger's head. Chase ball of string hide when
          guests come over. Being gorgeous with belly side up i could pee on
          this.</p>
    <a href="#" class="btn btn-primary">SEE MORE</a>
  </div>
  </div>

  </article>

  <article className='gallery'>

  <div class="card">
  <img src={lamp} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">SAITAMA</h5>
    <p class="card-text">Jump off balcony, onto stranger's head. Chase ball of string hide when
          guests come over. Being gorgeous with belly side up i could pee on
          this.</p>
    <a href="#" class="btn btn-primary">SEE MORE</a>
  </div>
  </div>

  <div class="card">
  <img src={flower} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">UENO</h5>
    <p class="card-text">Jump off balcony, onto stranger's head. Chase ball of string hide when
          guests come over. Being gorgeous with belly side up i could pee on
          this.</p>
    <a href="#" class="btn btn-primary">SEE MORE</a>
  </div>
  </div>

  <div class="card">
  <img src={street} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">SHIBUYA</h5>
    <p class="card-text">Jump off balcony, onto stranger's head. Chase ball of string hide when
          guests come over. Being gorgeous with belly side up i could pee on
          this.</p>
    <a href="#" class="btn btn-primary">SEE MORE</a>
  </div>
  </div>

  </article>

</div>
  );
}
