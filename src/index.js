// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import  App  from 'components/App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


import React from 'react';
import { createRoot } from 'react-dom/client'; 
import App from './components/App';
import './index.css';


const root = document.getElementById('root');
const rootElement = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootInstance = createRoot(root);
rootInstance.render(rootElement);
