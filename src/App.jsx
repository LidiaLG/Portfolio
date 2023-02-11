import './App.css';
import Router from './Route/Router';
import Header from "./components/Navigation/Header";
import Layout from './components/Layout';
import Medias from "./components/Navigation/Medias";



function App() {
  return (
    <>
      <Header/>
      <Router>
      <Layout/>
      </Router>
      <Medias/>
    </>
  );
}

export default App;
