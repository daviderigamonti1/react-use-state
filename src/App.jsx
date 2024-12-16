import HeaderComponent from './components/HeaderComponent'
import MainComponent from './components/MainComponent'

function App() {

  return (
    <>
      <HeaderComponent />
      <MainComponent />
    </>
  )
}

export default App;

/*- Se nessun linguaggio è selezionato, la card del dettaglio mostra “nessun linguaggio selezionato”
- Scomporre i buttons in componenti a parte che mantengono tutte le funzionaliltà*/