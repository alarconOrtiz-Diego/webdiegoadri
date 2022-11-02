import './App.css';
import FotosPrincipales from './components/FotosPrincipales';
import FotosPrincipalesInvertida from './components/FotosPrincipalesInvertida';
import FotosConTexto from "./components/FotosConTexto"
import imgHTML from "./img/imgHTML.png"
import imgCSS from "./img/imgCSS.png"
import imgJS from "./img/imgJS.png"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="App">
      <section className='flex-container'>
        <FotosPrincipales />
        <FotosPrincipalesInvertida />
      </section>
      <section className='flex-container-2'>
        <FotosConTexto img={imgHTML} />
        <FotosConTexto img={imgCSS} />
        <FotosConTexto img={imgJS} />
      </section>
      <Footer />
    </div>
  );
}
