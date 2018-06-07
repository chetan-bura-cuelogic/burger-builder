import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const burger = (props) =>{
    let defaultIngredints = null;
    defaultIngredints = props.ingredients.map((ingredient,index) => {
        return <BurgerIngredient count={ingredient.count} key={index} type={(ingredient.name).toLowerCase()}/>; 
    });
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" count="1" />
            {defaultIngredints}
            <BurgerIngredient type="bread-bottom" count="1" />
            <p>Burger Price : {props.burgerPrice}</p>
        </div>
    );
}

export default burger;