import React from 'react';

import SinglControl from './SingleControl/SingleControl';

import classes from './BurgerControls.css';

const burgerControls = (props) =>{
    const checkoutBtn = <div className={classes.CheckOut}><button onClick={props.checkout}>Check Out</button></div>;
    return (
            [props.ingredients.map((ingredient,index) => {
                return <SinglControl 
                key = {ingredient.id}
                name = {ingredient.name}
                count = {ingredient.count}
                price = {ingredient.price}
                addIngredient = {() => props.addIngredient(ingredient.id)}
                removeIngredient = {() => props.removeIngredient(ingredient.id)}
                />  
          }),
          props.burgerPrice > 0 ? checkoutBtn : null]
    );
}

export default burgerControls;