
import './App.styled.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { useState } from 'react'
//screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

//components
import Navbar from './components/Navbar/Navbar';
import Backdrop from './components/Backdrop/Backdrop';
import SideDrawer from './components/SideDrawer/SideDrawer.js';

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <Router>
        <Navbar click={() => setSideToggle(true)}/>
        <SideDrawer show={sideToggle}  click={() => setSideToggle(false)}/>
        <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
        <main>
          <Switch>
            <Route exact path="/" component={HomeScreen}></Route>
            <Route exact path="/product/:id" component={ProductScreen}></Route> 
            <Route exact path="/cart" component={CartScreen}></Route> 
          </Switch>
        </main>
    </Router>
  );
}

export default App;
