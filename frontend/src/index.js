import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContextProvider } from './Components/User/AuthContexe';
import { AuthContextProvider2 } from './Components/Enseigant/AuthContexe';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <AuthContextProvider2>
<BrowserRouter>    
<App />
</BrowserRouter>
</AuthContextProvider2>
</AuthContextProvider>
  </React.StrictMode>
);



