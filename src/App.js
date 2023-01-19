import './App.css';
import Nav from './components/Nav'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'
import { darkMode, lightMode } from './features/modeSlice';
//import useselector abd usedispatch, as well as dark and light mode
import { useSelector, useDispatch } from 'react-redux';

function App() {
  //define our dipatcha and selector
  const dispatch = useDispatch()
  const mode = useSelector((state) => state.mode)
  
  //create a function to control the toggle, dark or light more
  const toggleMode = () => {
    mode.darkMode ? dispatch(lightMode()) : dispatch(darkMode())
  }
  //create a button to controle the toggle 
  return (
    <div style={{ backgroundColor: mode.color1, color: 'white' }} className="App">
      <Nav />
      <button onClick={toggleMode}>{ mode.darkMode ? 'Light Mode' : 'Dark Mode' }</button>
      <ContentWrapper />
      <Footer />
    </div>
  );
}

export default App;
