import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CounterStore from './stores/CounterStore'; // 방금 만든 스토어 불러와줍니다.
import Counter from './Counter'
import { Provider } from 'mobx-react';
const counter = new CounterStore(); // 스토어 인스턴스를 만들고
ReactDOM.render(
  <Provider counter={counter} >
    {/* Provider 에 props 로 넣어줍니다. */}
    <App />
    <Counter />
  </Provider>,
  document.getElementById('root')
);
