import './App.css';
import { inject, observer } from 'mobx-react';


function App({increment,decrement,total,}) {
  console.log("asdadasd");
    return (
      <div>
        <h1>{total.get()}</h1>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
    );
  
}

export default inject(({counter}) =>({
  increment:counter.increment,
  decrement:counter.decrement,
  total:counter.total,
}))(observer(App));;