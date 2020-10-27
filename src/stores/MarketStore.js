import { action, computed, observable } from 'mobx';

export default class CounterStore{
     cartList = observable([]);
     AddItem = (name,price)=>{
         const exist = this.cartList.find(item =>item.name == name);
         if(!exist){
             this.cartList.push({
                 name:name,
                 price:price,
                 count:1
             })
             return;
         }
        exist.count++;
    };

    total = computed(()=>{        
        return this.cartList.reduce((previous, current) => {
            return previous + current.price * current.count;
          }, 0);
    })
};