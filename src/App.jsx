import './App.css'
import brasCubasImg from './assets/bras_cubas.jpeg';
import Capa from './Capa';

function App() {
  const informacaoLivro = {
    nome: 'Memórias Póstumas de Brás Cubas',
    autor: 'Machado de Assis',
    totalCapitulos: 2,
    capa: brasCubasImg,
    textoAlternativo: 'Capa do livro Memórias Póstumas de Brás Cubas',
  };

  return (
    <>
      <Capa imagemCapa={informacaoLivro.capa} textoAlternativo={informacaoLivro.textoAlternativo}/>
    </>
  );
}

export default App;
