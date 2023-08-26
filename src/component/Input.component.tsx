import React from 'react'

export interface InputDate {
    day: number | string;
    month: number | string;
    year: number | string
}

type Props = {
    value: string | number,
    label: string,
    placeholder: string,
    setDate: React.Dispatch<React.SetStateAction<InputDate>>
}

const Input = (props: Props) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
        if (inputValue.length <= 2) {
            props.setDate((prevState) =>
            ({
                ...prevState,
                [event.target.id]: inputValue
            })
            );
        }

    };
    return (<div className="flex flex-col w-[28%]">
        <label>{props.label.toUpperCase()}</label>
        <input
            type="number"
            placeholder={props.placeholder}
            className="border-2 border-lightGrey rounded-md p-3 text-offBlack"
            id={props.label}
            onChange={handleChange}
            value={props.value}
        />
    </div>

    )
}

export default Input;
