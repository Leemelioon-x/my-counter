import React from 'react';
import classes from "./MyButton.module.css";

type MyButtonPropsType = {
    callBack: () => void
    name: string
    disable?: boolean

}

export const MyButton = (props: MyButtonPropsType) => {


    return (
        <button onClick={props.callBack} className={classes.button} disabled={props.disable}>
            {props.name}
        </button>
    );
};

