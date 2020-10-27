import './App.css';
import { inject, observer } from 'mobx-react';
import Market from './components/market/market';
import Cart from './components/cart/cart'
function App({increment,decrement,total,}) {
    return (
      <div>
        <Market />
        <Cart />
      </div>
    );  
}

export default inject(({counter}) =>({
  increment:counter.increment,
  decrement:counter.decrement,
  total:counter.total,
}))(observer(App));;