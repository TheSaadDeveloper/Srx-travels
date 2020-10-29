import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './Services';
import Products from './Products';
import UserAuth from './UserAuth';
import Footer from './components/Footer';
import { auth } from './firebase';
import { useStateValue } from './components/StateProvider';

function App() {
  const [{user},dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('authUser >>>> ' ,authUser);
      if(authUser){
        dispatch(
          {
            type:'SET_USER',
            user:authUser?.email
          }
        )
        console.log('You are caught bitch ::::: > ',user);
      }else{
        dispatch({
          type:'SET_USER',
          user:null
        });
      }
    })
  }, [dispatch, user])

  return (
    <div className="App">
    <Router>
        <Switch>
          <Route path='/services'>
            <Navbar />
            <Services />
          </Route>
          <Route path='/products'>
            <Navbar />
            <Products />
          </Route>
          <Route path='/signup'>
            {/* <Navbar /> */}
            <UserAuth />
          </Route>
          <Route path='/'>
            <Navbar />
            <Home />
            <Cards />
            <Footer />
          </Route>
        </Switch>
    </Router>
    </div>
  )
}

export default App;
