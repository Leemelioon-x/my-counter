import React, {useEffect} from 'react';
import classes from "./CounterSettings.module.css";
import MyInput from "../MyInput/MyInput";
import {MyButton} from "../MyButton/MyButton";

type CounterSettingsPropsType = {
    value: number,
    setValue: (value: number) => void,
    maxValue: number,
    minValue: number,
    setMaxValue: (maxValue: number) => void,
    setMinValue: (minValue: number) => void
}

const CounterSettings: React.FC<CounterSettingsPropsType> = ({maxValue, minValue, setMaxValue, setMinValue, value, setValue}) => {
    useEffect(() => {
        let valueString: string | null = localStorage.getItem('setMaxValue')
        if (valueString) {
            let newValue = JSON.parse(valueString)
            setMaxValue(newValue)
        }
        valueString = localStorage.getItem('setMinValue')
        if (valueString) {
            let newValue = JSON.parse(valueString)
            setMinValue(newValue)
        }
    }, [])

    useEffect(() => {

        localStorage.setItem('setMaxValue', JSON.stringify(maxValue))
        localStorage.setItem('setMinValue', JSON.stringify(minValue))
    }, [maxValue, minValue])


    const maxValueChecker = minValue + 1 >= maxValue;
    const minValueZeroChecker = minValue <= 0;
    const minValueChecker = maxValue <= minValue + 1;

    const onIncrementMaxValueClickHandler = () => {
        setMaxValue(maxValue + 1)
    }
    const onDecrementMaxValueClickHandler = () => {
        if (value < maxValue) {
            setMaxValue(maxValue - 1)
        } else {
            setMaxValue(maxValue - 1)
            setValue(maxValue - 1)
        }

    }
    const onIncrementMinValueClickHandler = () => {

        if (value > minValue) {
            setMinValue(minValue + 1)
        } else {
            setMinValue(minValue + 1)
            setValue(minValue + 1)
        }

    }
    const onDecrementMinValueClickHandler = () => {
        setMinValue(minValue - 1)
    }

    return (
        <div>
            <div>
                <MyButton callBack={onDecrementMaxValueClickHandler}
                          name={"-"}
                          disable={maxValueChecker}/>

                <MyInput value={maxValue}/>

                <MyButton callBack={onIncrementMaxValueClickHandler}
                          name={"+"}
                />
            </div>
            <div><MyButton callBack={onDecrementMinValueClickHandler}
                           name={"-"}
                           disable={minValueZeroChecker}/>

                <MyInput value={minValue}/>

                <MyButton callBack={onIncrementMinValueClickHandler}
                          name={"+"}
                          disable={minValueChecker}
                />
            </div>

        </div>
    );
};

export default CounterSettings;