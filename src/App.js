import './App.css';
import FotosPrincipales from './components/FotosPrincipales';
import FotosPrincipalesInvertida from './components/FotosPrincipalesInvertida';

export default function App() {
  return (
    <div className="App">
      <section className='flex-container'>
        <FotosPrincipales />
        <FotosPrincipalesInvertida />
      </section>
    </div>
  );
}
