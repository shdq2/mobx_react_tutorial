import { inject, observer } from 'mobx-react';
import React from 'react';

const test = ({counter})=>{
    return (
        <div>
            {counter.number}
        </div>
    )
}

export default inject(({counter}) =>({
    counter:counter.number
}))(observer(test));