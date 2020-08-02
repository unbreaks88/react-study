import React from 'react';
import './App.css';
import ColorBox from "./components/ColorBox";
import {ColorProvider} from "./context/color";

function App() {
    return (
        <ColorProvider>
            <div>
                <ColorBox/>
            </div>
        </ColorProvider>
        // <ColorContext.Provider value={{color: 'red'}}>
        //     <div>
        //         <ColorBox/>
        //     </div>
        // </ColorContext.Provider>
    );
}

export default App;
