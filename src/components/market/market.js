import { inject, observer } from 'mobx-react'
import React from 'react'

const list = [
    {
        name:'1',
        price:800
    },
    {
        name:'2',
        price:3800
    },
    {
        name:'3',
        price:2800
    },
    {
        name:'4',
        price:1800
    },
    {
        name:'5',
        price:500
    }
]


const Item = ({name,price,onClick})=>{
    return(
        <div onClick={()=>{onClick(name,price)}}>
            {name} / {price}
        </div>
    )
}

const market = ({addItem})=>{
    const itemList = list.map((item,idx)=>{
        return <Item {...item} key={item.name} onClick={addItem}/>
    })
    return(
        <div>
            <h1>Production</h1>
            <div>
                {itemList}
            </div>
            
        </div>
    )
}

export default inject(({market})=>({
    list:market.cartList,
    addItem:market.AddItem
}))(observer(market));