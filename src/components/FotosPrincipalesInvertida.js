import React from 'react'
import imgPrueba from "../img/imgPrueba.png"
import "./FotosPrincipalesInvertida.css"

export default function FotosPrincipalesInvertida() {
  return (
    <div class="flexImgDiv">
      <div class="textContainer">
        <h3>Titulo</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero quam, voluptatibus incidunt eligendi velit
          odio vero excepturi repudiandae inventore in ratione, porro non optio perferendis quibusdam? Quaerat quos
          dolore
          placeat!</p>
      </div>
      <img class="imgPrueba" src={imgPrueba} alt="" />
    </div>
  )
}
