import React, { useEffect } from "react";
import "./App.css";
import { useTelegram } from "./hooks/useTelegram";

declare global {
  interface Window {
    Telegram: {
      WebApp: any;
    };
  }
}

function App() {
  const { onToggleButton, tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  },[])

  return (
    <div className="App">
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
