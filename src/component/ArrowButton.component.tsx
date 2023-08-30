import { SetStateAction } from 'react';
import { ReturnedErrors } from "./FormDate.component";
import { InputDate } from "./Input.component";

type Props = {
    errors: ReturnedErrors,
    setErrors: React.Dispatch<SetStateAction<ReturnedErrors>>,
    setTriger: React.Dispatch<React.SetStateAction<boolean>>,
    date: InputDate
}

const ArrowButton = (props: Props) => {
    function isValidDate(year: number, month: number, day: number): boolean {
        const daysInMonth = new Date(year, month, 0).getDate();
        return day >= 1 && day <= daysInMonth && !isDateInFuture(year, month, day);
    }
    function isYearInFuture(year: number): boolean {
        const currentYear = new Date().getFullYear();
        return year > currentYear;
    }
    function isDateInFuture(year: number, month: number, day: number): boolean {
        const currentDate = new Date();
        const inputDate = new Date(year, month - 1, day); // Month is 0-indexed in JavaScript Date
        return inputDate > currentDate;
    }

    const validateInput = (): boolean => {
        let valid = true;
        const year = Number(props.date.year);
        const month = Number(props.date.month);
        const day = Number(props.date.day);
        let buffer: ReturnedErrors = {
            day: 'valid',
            month: 'valid',
            year: 'valid'
        }

        if (day > 31 || day < 1) {
            if (props.date.day.length == 0) {
                buffer.day = 'emptyField';
            } else {
                buffer.day = 'invalidDay';
            }
            valid = false
        }
        if (month > 12 || month < 1) {
            if (props.date.month.length == 0) {
                buffer.month = 'emptyField';
            } else {
                buffer.month = 'invalidMonth';
            }
            valid = false;
        }
        if (isYearInFuture(year)) {
            valid = false;
            buffer.year = 'invalidYear';
        }
        if (props.date.year.length == 0) {
            valid = false;
            buffer.year = 'emptyField';
        }
        if (!isValidDate(year, month, day) && props.date.day.length > 0) {
            buffer.day = 'invalidDate';
            valid = false;
        }

        props.setErrors(buffer);
        return valid;
    }
    const handleClick = () => {
        const isValid = validateInput();
        if (isValid) {
            props.setTriger(true);
        }
    }
    return (
        <button
            onClick={handleClick}
            className="bg-purple hover:bg-offBlack text-white font-bold p-3 md:p-5 rounded-full flex items-center absolute"
        >
            <img
                src={"/icon-arrow.svg"}
                alt="Arrow Icon"
                className="h-8 w-8"
            />
        </button>
    )
}

export default ArrowButton;
