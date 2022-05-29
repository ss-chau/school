import { BrowserRouter, Route , Switch} from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Tutorials from "./pages/Tutorials";


function Approuter() {
  return (
    
    <BrowserRouter>

      <Switch>
        <Route path = '/' exact component = {Home}/>
        <Route path = '/home' exact component = {Home}/>
        <Route path = '/about' exact component = {About}/>
        <Route path = '/blog' exact component = {Blog}/>
        <Route path = '/tutorials' exact component = {Tutorials}/>
        <Route path = '/contact' exact component = {Contact}/>
        <Route path = '/gallery' exact component = {Gallery}/>
      </Switch>

    </BrowserRouter>
  );
}

export default Approuter;
