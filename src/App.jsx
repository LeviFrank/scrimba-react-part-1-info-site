
// import './App.css'

// function App() {
  

//   return (
    
//   )
// }

// export default App

function App() {
  return (
    <div>Hello World!</div>
  );
}

export default App;

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);