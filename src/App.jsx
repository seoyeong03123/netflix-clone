import React from 'react';
import Main from './pages/Main';
import {createGlobalStyle} from "styled-components"

const Globalstyle = createGlobalStyle`
  *{
    margin : 0;
    padding : 0;
  }

  body{
    background-color:black;
  }
`

function App() {
  return (
    <div className="App">
    <Globalstyle />
    <Main/>
    </div>
  );
}

export default App;
