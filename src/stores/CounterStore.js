import { computed, observable } from 'mobx';

export default class CounterStore{
     number = observable({
        number:0
    });
    
     increment = ()=>{
        this.number.number++;
    }

     decrement = ()=>{
        this.number.number--;
    }

    total = computed(()=>{        
        return this.number.number*this.number.number;;
    })
};