import React from 'react'
import './Item.css'

const Item = (props) => {
  return (
    <div className='item'>
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item prices">
        <span className="item-price-new">
            ${props.new_price}
        </span> &nbsp; &nbsp;
        <span className="item-price-old">
            ${props.old_price}
        </span>
      </div>
    </div>
  )
}

export default Item
