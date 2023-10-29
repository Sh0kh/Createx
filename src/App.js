
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './Coomponents/Header';
import Footer from './Coomponents/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
