/*import logo from './logo.svg';*/
import { Component } from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import axios from 'axios';
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
