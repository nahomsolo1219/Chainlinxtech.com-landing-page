import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Sectiontop from './Components/Section top/Sectiontop';
import Aboutus from './Components/About us/Aboutus'
import Products from './Components/ERP Product/Products'
import Footer from './Components/Footer/Footer'
import Erpheading from './Components/ERP Title/Erpheading';
import Rmsproduct from './Components/RMS Product/Rmsproduct'


function App() {
  return (
  <>
    <Navbar />
    <Sectiontop />
    <Aboutus />
    <Erpheading />
    <Products />
    <Rmsproduct />
    <Footer />
    
    
  </>
  );
}

export default App;
