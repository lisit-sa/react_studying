import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StrictMode } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

//const elem = <h2>Hello world</h2>;
//const elem = React.createElement('h2', {classname: 'hello'}, 'Hello world');
const text = 'Hello World'
const elem = (
  <div>
    <h2 className='text'>Текст: {text}</h2>
    <p>{2+2}</p>
    <input type="text" />
    <label htmlFor=""></label>
    <button tabIndex='0'>Click</button>
   </div>
)
root.render(
  <StrictMode>
    <App/>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
