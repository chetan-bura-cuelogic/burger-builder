import React from 'react';

import classes from './ModalView.css';

const modalView = (props) =>{
    return props.showModal ?(
        <div className={classes.ModalView}>
            <div className={classes.Heading}> {props.title} </div>
            <div className={classes.Body}> 
            Your Burger made with below ingredients!!!
            {props.ingredients.map((ingredient,index) => {
                return <p>{ingredient.name} slice count :{ingredient.count}</p>
            })}
            </div>
            <div className={classes.Footer}> 
                Total Order Value : {props.burgerPrice}
                <button onClick={props.checkOutClick}>Close</button>
            </div>
        </div>
    ) : null;
}

export default modalView;