import React from "react";
import './App.css'
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import Cv from "./components/CV";
import pdf from "./Docs/imocv.pdf";


const App = () => {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Introduction />

      <Switch>
        <Route
          path="/cv"
          render= {<Cv pdf={pdf} />}
          />
         
      </Switch>
      </main>
      <footer>
        <Footer />

      </footer>

  
     
    </div>
  );
}

export default App;
