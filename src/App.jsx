import Header from './components/Header/Header'
import Hero1 from './components/Hero/Hero1'
import './App.css'
import Companies from './components/Companies/companies';
import Residencies from './components/Residencies/Residencies';
import Value from './components/Value/Value';
import Contact from './components/Contact/Contact';
import GetStarted from './components/GetStarted/GetStarted';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <div>
      <div className="white-grdient"/>
      <Header/>
      <Hero1/>
      </div>
      <Companies/>
      <Residencies/>
       <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/> 
    </div>
  );
}

export default App;
 