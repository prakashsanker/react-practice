import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Square from './square';
// import Board from './board';\

import {Game} from './game'
const App = ()=>{
    return <Game />
}
ReactDOM.render(<App />,document.getElementById('root'))

