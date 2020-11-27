import React from "react";
import '../src/App.css';
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import Cv from "./pages/CV";
import pdf from "./Docs/imocv.pdf";
import Contact from "./components/Contact";
import HomePage from './pages/HomePage';


const App = () => {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
      <Switch>
        <Route
          path="/cv">
           <Cv />
        </Route>
        
        <Route
          path="/contact">
           <Contact />     
          </Route> 
        <Route
        exact
        path="/">
          <HomePage />
        </Route>
      </Switch>
        
       

     
      </main>
      
      <footer>
        <Footer />

      </footer>

  
     
    </div>
  );
}

export default App;
