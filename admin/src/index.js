import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom' ;
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContextProvider } from './Elements/AuthContexe';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <AuthContextProvider>
<BrowserRouter>    
<App />
</BrowserRouter>
 </AuthContextProvider>
  </React.StrictMode>
);


reportWebVitals();
