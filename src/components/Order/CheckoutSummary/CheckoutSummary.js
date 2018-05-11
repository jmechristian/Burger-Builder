import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>Hope You Enjoyed it Fatty</h1>
            <div style={{width: '100%', height: '300px !important', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button 
                btnType="Danger"
                clicked={props.checkoutCancelled}>CANEL</Button>
            <Button 
                btnType="Success"
                clicked={props.checkoutCont}>CONTINUE</Button>
        </div>
    )
}

export default checkoutSummary;