import React from 'react'
import { InputDate, KeyOfErrorContent } from '../untils/types';


type Props = {
    value: string | number,
    label: string,
    placeholder: string,
    error: KeyOfErrorContent,
    setDate: React.Dispatch<React.SetStateAction<InputDate>>,
    setTriger: React.Dispatch<React.SetStateAction<boolean>>
}

const ErrorContent = {
    invalidDate: "Must be a valid date",
    invalidDay: "Must be a vavlid day",
    invalidMonth: "Must be a vavlid month",
    invalidYear: "Must be in the past",
    emptyField: "This field is required",
    valid: "",
    empty: ""
};


const Input = (props: Props) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setTriger(false);
        if (event.target.value == '') {
            props.setDate((prevState) =>
            ({
                ...prevState,
                [event.target.id]: ''
            })
            );
            return;
        }

        const inputValue = event.target.value;
        if (props.label == 'year') {
            if (inputValue.length <= 4) {
                props.setDate((prevState) =>
                ({
                    ...prevState,
                    [event.target.id]: inputValue
                })
                );
            }
        } else {
            if (inputValue.length <= 2) {
                props.setDate((prevState) =>
                ({
                    ...prevState,
                    [event.target.id]: inputValue
                })
                );
            }
        }

    };
    return (
        <div className="flex flex-col w-[28%]">
            <label className={`${props.error !== 'valid' && "text-lightRed"}`}>
                {props.label.toUpperCase()}
            </label>
            <input
                type="number"
                placeholder={props.placeholder}
                className={`border-2 rounded-md p-3 text-offBlack focus:border-purple focus:outline-none
                            ${props.error === 'valid' ? "border-lightGrey" : "border-lightRed"}`}
                id={props.label}
                onChange={handleChange}
                value={props.value}
            />
            <p className='text-lightRed font-thin text-xs italic'>{ErrorContent[props.error]}</p>
        </div>
    )
}


export default Input;


