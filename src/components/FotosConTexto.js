import React from 'react'
import "./FotosConTexto.css"

export default function FotosConTexto(props) {
  return (
    <div class="flexImgCard">
      <img class="imgPruebaCard" src={props.img} alt="" />
      <div class="textContainerCard">
        <h3>Titulo</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero quam, voluptatibus incidunt eligendi velit
          odio vero excepturi repudiandae inventore in ratione, porro non optio perferendis quibusdam? Quaerat quos
          dolore
          placeat!</p>
      </div>
    </div>
  )
}
