import React from 'react';
import About from './components/About';
import Shop from './components/Shop';
import Nav from './components/Nav';
import itemDetails from './components/itemDetails';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/shop/:id" component={itemDetails} />
        </Switch>
      </div>
    </Router>
  );
}


const Home = () => (
<div>
  <h1>Home page</h1>
</div>
)


export default App;
