import './App.css';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Header from '../src/components/header/header'
import Homepage from '../src/components/homepage/homepage'
import Midnight from '../src/components/Deals/Midnight'
import Roundtheclock from '../src/components/Deals/Roundtheckock'
import Lunch from '../src/components/Deals/lunch'
import Pizza from '../src/components/menu/pizza'
import Lasagna from '../src/components/menu/Lasagna'
import Sandwich from '../src/components/menu/sandwich'
import Sidelines from '../src/components/menu/sidelines'
import Salad from '../src/components/menu/salad'
import Beverages from '../src/components/menu/Beverages'
import Desserts from '../src/components/menu/desserts'
import Register from '../src/components/signup/resgister'
import Login from '../src/components/login/login'
import Footer from '../src/components/footer/footer'

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Route path='/' exact={true} component={Homepage}/>
    <Route path='/deal1/'  component={Midnight}/>
    <Route path='/deal2/'  component={Roundtheclock}/>
    <Route path='/deal3/'  component={Lunch}/>
    <Route path='/pizza/'  component={Pizza}/>
    <Route path='/lasagna/'  component={Lasagna}/>
    <Route path='/sandwich/'  component={Sandwich}/>
    <Route path='/sidelines/'  component={Sidelines}/>
    <Route path='/salad/'  component={Salad}/>
    <Route path='/beverages/'  component={Beverages}/>
    <Route path='/desserts/'  component={Desserts}/>
    <Route path='/signup/'  component={Register}/>
    <Route path='/login/'  component={Login}/>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
