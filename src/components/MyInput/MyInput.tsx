import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type MyInputPropsType=DefaultInputPropsType &{

}

const MyInput = (props:MyInputPropsType) => {
    const {type, onChange,value}=props
    return (
        <input type={'text'} value={value}
    />

    );
};

export default MyInput;