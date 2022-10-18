import React, {useEffect, useState} from 'react';
import './App.css';
import {MyButton} from "./components/MyButton/MyButton";
import {Tablo} from "./components/Tablo/Tablo";
import CounterSettings from "./components/CounterSettings/CounterSettings";

function App() {
    const [value, setValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState(1)
    const [minValue, setMinValue] = useState(0)

    useEffect(() => {

        let valueString = localStorage.getItem('setValue')
        if (valueString) {
            let newValue = JSON.parse(valueString)
            setValue(newValue)
        }

    }, [])

    useEffect(() => {

        localStorage.setItem('setValue', JSON.stringify(value))
    }, [value])


    const disableMaxValue = value >= maxValue
    const zero = value === minValue
    const disableMinValue = value<=minValue

    const inc = () => {
        setValue(value + 1)
    }
    const dec = () => {
        setValue(value -1)
    }

    const reset = () => {
        setValue(minValue)
    }


    return (
        <div className="App">
            <div className="container">
                <div className="counter">
                    <div className="tabloAndButton">
                        <Tablo value={value} minValue={minValue} maxValue={maxValue}/>
                        <MyButton name="inc"
                                  callBack={inc}
                                  disable={disableMaxValue}/>
                        <MyButton name="dec"
                                  callBack={dec}
                                  disable={disableMinValue}
                        />
                        <MyButton name="reset"
                                  callBack={reset}
                                  disable={zero}
                        />
                    </div>
                </div>
                <CounterSettings value={value}
                                 setValue={setValue}
                                 maxValue={maxValue}
                                 minValue={minValue}
                                 setMaxValue={setMaxValue}
                                 setMinValue={setMinValue}
                />
            </div>
        </div>
    );
}

export default App;
