import React from 'react';
import logo from './logo.svg';
import './App.css';
import ColorBox from "./components/ColorBox";
import ColorContext from "./context/color";

function App() {
    return (
        <ColorContext.Provider value={{color: 'red'}}>
            <div>
                <ColorBox/>
            </div>
        </ColorContext.Provider>
    );
}

export default App;
