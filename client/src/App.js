import React ,{useState} from "react";
import Header from "./componets/Header/Header";
import Footer from "./componets/footer/Footer";
import Product from "./componets/Products/Product";

// import { words } from "./words";
import data from "./data.json"
function App() {
  const [products,setProducts]=useState(data)
  console.log(products)
  return (
    <div className="layout">
      <Header/>
      <main>
        <div className="wrapper">
        <Product products={products}/>
          <div className="filter-wrapper">
             filter
          </div>
         </div>
        </main>
      <Footer/>
    </div>
  );
}

export default App;
