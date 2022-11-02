import React from 'react'
import imgPrueba from "../img/imgPrueba.png"
import "./FotosPrincipales.css"

export default function FotosPrincipales() {
  return (
    <div class="flexImgDiv">
      <img class="imgPrueba" src={imgPrueba} alt="" />
      <div class="textContainer">
        <h3>Titulo</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero quam, voluptatibus incidunt eligendi velit
          odio vero excepturi repudiandae inventore in ratione, porro non optio perferendis quibusdam? Quaerat quos
          dolore
          placeat!</p>
      </div>
    </div>
  )
}
