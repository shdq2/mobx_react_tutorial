import CounterStore from './CounterStore';
import MarketStore from './MarketStore';

class RootStore {
    constructor(){
        this.counter = new CounterStore();
        this.market = new MarketStore();
    }
}
export default new RootStore();