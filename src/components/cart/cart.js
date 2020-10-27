import { inject, observer } from 'mobx-react'
import React from 'react'


const Item = ({name,price,count})=>{
    return(
        <div>
            {name} / {price} / {count}
        </div>
    )
}

const cart = ({list,total})=>{
    const itemList = list.map((item,idx)=>{
        return <Item {...item} key={item.name}/>
    })
    return(
        <div>
            <h1>Cart</h1>
            <div>
                {itemList}
            </div>
            total: {total.get()}원
        </div>
    )
}

export default inject(({market})=>({
    list:market.cartList,
    total:market.total
}))(observer(cart));