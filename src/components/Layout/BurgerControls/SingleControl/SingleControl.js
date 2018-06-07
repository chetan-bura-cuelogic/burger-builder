import React from 'react';

import classes from './SingleControl.css';

const singleControls = (props) =>{
    return(
        <div className={classes.ControlRow}>
            <p>
                {props.name} slice count :  
                {props.count}
                <button onClick={props.addIngredient}>Add</button>
                <button onClick={props.removeIngredient}>Remove</button>
            </p>
        </div>
    );
} 

export default singleControls;