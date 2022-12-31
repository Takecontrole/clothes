import Product from "./pages/Product/Product";
import Product2 from "./pages/Product/Product2";
import Product3 from "./pages/Product/Product3";
import Product5 from "./pages/Product/Product5";
import Product6 from "./pages/Product/Product6";
import Product7 from "./pages/Product/Product7";
import Product8 from "./pages/Product/Product8";
import Product9 from "./pages/Product/Product9";
import Product4 from "./pages/Product/Product4";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
  <HashRouter>
  <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products/:id"
        element={<ProductList />}/>
       
        <Route path="/product/1"
         element={ <Product />}/>
        <Route path="/product/2"
         element={ <Product2 />}/>
        <Route path="/product/3"
         element={ <Product3 />}/>
        <Route path="/product/4"
         element={ <Product4 />}/>
        <Route path="/product/5"
         element={ <Product5 />}/>
        <Route path="/product/6"
         element={ <Product6 />}/>
        <Route path="/product/7"
         element={ <Product7 />}/>
        <Route path="/product/8"
         element={ <Product8 />}/>
        <Route path="/product/9"
         element={ <Product9 />}/>
        
         
        <Route path="/cart"
         element= {<Cart />}/>
        <Route path="/login" element= { <Login />}/>
        <Route path="/register"
         element= {<Register />}/>
        
        </Routes>
</HashRouter>
)
};

export default App;