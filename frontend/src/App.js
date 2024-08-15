import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Shop from './Pages/Shop';
import LoginSignup from './Pages/LoginSignup';
import phone_banner from './Components/Assets/Banners/phone21.png';
import laptop_banner from './Components/Assets/Banners/lap1.png';
import head_banner from './Components/Assets/Banners/head2.png';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop />}/>
          <Route path='/phone' element={<ShopCategory banner={phone_banner} category="phone"/>}/>
          <Route path='/laptop' element={<ShopCategory banner={laptop_banner} category="laptop"/>}/>
          <Route path='/other' element={<ShopCategory banner={head_banner} category="other"/>}/>
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup />}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
