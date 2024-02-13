// src/App.js
import React from "react";
import Kart from "./Kart";
import "leaflet/dist/leaflet.css";

import "./App.css";

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <h1>Name your app</h1>
            </header>
            <main>
                <Kart />
            </main>
        </div>
    );
}

export default App;
