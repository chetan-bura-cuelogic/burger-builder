import React from 'react';

import classes from './ModalView.css';

const modalView = (props) =>{
    return props.showModal ?(
        <div className={classes.ModalView}>
            <div className={classes.Heading}> {props.title} </div>
            <div className={classes.Body}> 
            {props.ingredients.map((ingredient,index) => {
                return <p>{ingredient.name} slice count :{ingredient.count}</p>
            })}
            </div>
            <div className={classes.Footer}> 
                Total Order Value : {props.burgerPrice}
                <button onClick={props.checkOutClick}>Confirmed</button>
            </div>
        </div>
    ) : null;
}

export default modalView;