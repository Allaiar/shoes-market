import React from 'react';
import classes from './style.module.scss'

const Spinner = () => {
    return (
        <div>
            <div class={classes.ldsSpinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default Spinner;