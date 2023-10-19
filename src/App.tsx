import React, { useEffect } from 'react';
import './App.css';
declare global {
  interface Window {
    Telegram: {
      WebApp: any; 
    };
  }
}



function App() {

  // useEffect(() => {
  //   tg.ready();
  // },[])



  return (
    <div className="App">
      work

    </div>
  );
}

export default App;
