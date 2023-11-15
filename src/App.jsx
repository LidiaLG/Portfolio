import './App.css';
import Router from './Route/Router';
import Header from './components/Navigation/Header';
import Footer from './components/Navigation/Footer';

function App() {
  return (
    <>
      <Header/>
      <Router>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
