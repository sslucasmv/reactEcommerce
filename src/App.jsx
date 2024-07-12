
import { useEffect, useState } from "react";
import ItemListContainer from "./ItemListContainer";
import productsMock from "./productsMock";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import ItemDetailContainer from "./components/common/ItemDetailContainer";
import Nosotros from "./components/common/Nosotros";
import Contacto from "./components/common/contacto";
import LandingPage from "./components/common/landingPage";

function App() {
  
  const [products, setProducts] = useState([]);


  useEffect(() => {
    productsMock()
      .then(response => {
        setProducts(response);
      })
      .catch(err => console.error(err));
  }, []);


console.log(products)
  return (
    <BrowserRouter>
    <Navbar />

      <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/productos" element={ <ItemListContainer />} />

      <Route path="/item/:id" element={ <ItemDetailContainer/>} />
       
      <Route path="/productos/:category" element={ <ItemListContainer/>} />

      <Route path="/contacto" element={ <Contacto />} />

      </Routes>
    
    <Footer />
  </BrowserRouter>
  );
}

export default App;
