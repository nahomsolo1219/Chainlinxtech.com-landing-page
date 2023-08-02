import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Sectiontop from './Components/Section top/Sectiontop';
import Aboutus from './Components/About us/Aboutus'
import Products from './Components/ERP Product/Products'
import Footer from './Components/Footer/Footer'
import Erpheading from './Components/ERP Title/Erpheading';
import Rmsproduct from './Components/RMS Product/Rmsproduct'
import About_our_product from './Components/About our Products/About_our_product'
import About_our_products_icons from './Components/About our Products icons/About_our_products_icons'


function App() {
  return (
  <>
    <Navbar />
    <Sectiontop />
    <Aboutus />
    <Erpheading />
    <Products />
    <Rmsproduct />
    <About_our_product />
    <About_our_products_icons />
    <Footer />
    
    
    
  </>
  );
}

export default App;
