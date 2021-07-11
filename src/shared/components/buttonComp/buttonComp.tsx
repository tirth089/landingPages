// import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import './buttonComp.scss'; 
const ButtonComp = ({ buttonString, buttonClickedFunc, classes }: any) => {
    const buttonClicked = () => {
        buttonClickedFunc();
    }
    return (
        <Button variant="outlined" className={classes} onClick={buttonClicked}>
            {buttonString}
        </Button>
    );
}
export default ButtonComp