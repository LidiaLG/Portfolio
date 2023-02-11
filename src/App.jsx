import './App.css';
import Router from './Route/Router';
import Medias from "./components/Navigation/Medias";
import Header from './components/Navigation/Header';

function App() {
  return (
    <>
      <Header/>
      <Router>
      </Router>
      <Medias/>
    </>
  );
}

export default App;
