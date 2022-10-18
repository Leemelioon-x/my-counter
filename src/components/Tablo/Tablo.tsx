import React, {useEffect} from 'react';
import classes from "./Tablo.module.css";

type TabloPropsType = {
    value: number
    maxValue: number,
    minValue: number
}

export const Tablo: React.FC<TabloPropsType> = (props: TabloPropsType) => {
    useEffect(() => {
        console.log(props?.value)
    }, [props?.value])

    return (
        <div
            className={props.value === props.maxValue || props.value === props.minValue ? classes.value + " " + classes.valueRed : classes.value}>
            {props?.value}
        </div>
    );
};

