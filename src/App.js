import './App.css';
import Sell from './components/pages/Sell';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import Profile from './components/pages/Profile';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Cart from './components/pages/Cart';
import Home from './components/pages/Home';
import Bid from './components/pages/Bid';
import Contest from './components/pages/Contest';
import { AuthContextProvider } from './components/AuthContext';
import ProtectedRoute from './components/Protect';
import Navbar from './components/Navbar'
import Thankyou from './components/pages/Thankyou';
import Checkout from './components/pages/Checkout';
import Product from './components/pages/Product';

function App() {
  return (
    <div className='App'>
      <Router>
        <AuthContextProvider>
          <Navbar />
          <Routes>
            <Route excat path='/' element={<Home />}></Route>
            <Route excat path='/sell' element={
              <ProtectedRoute>
                <Sell />
              </ProtectedRoute>
            }></Route>
            <Route excat path='/bid' element={
              <ProtectedRoute>
                <Bid />
              </ProtectedRoute>
            }></Route>
            <Route excat path='/Contest' element={
              <ProtectedRoute>
                <Contest />
              </ProtectedRoute>
            }></Route>
            <Route excat path='/login' element={<Login />}></Route>
            <Route excat path='/register' element={<SignUp />}></Route>
            <Route excat path='/cart' element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }></Route>
            <Route excat path='/profile' element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }></Route>
            <Route excat path='/thankyou' element={
              <ProtectedRoute>
                <Thankyou />
              </ProtectedRoute>
            }></Route>
            <Route excat path='/checkout' element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }></Route>
            <Route excat path='/product' element={
              <ProtectedRoute>
                <Product />
              </ProtectedRoute>
            }></Route>
          </Routes>
        </AuthContextProvider>
      </Router>
      <Footer />
    </div>
  )
}

export default App;
