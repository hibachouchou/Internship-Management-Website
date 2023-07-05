import { Component } from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import axios from 'axios';
import Home from './Components/Home';
axios.defaults.withCredentials=true
class App extends Component {
  render() {

    return (
      <div>
       
  <Header />
<Footer/>
      
      </div>
    );
  }
}

export default App;
