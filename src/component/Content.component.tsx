import { useState } from 'react'
import ArrowButton from "./ArrowButton.component";
import FormDate, { ReturnedErrors } from "./FormDate.component";
import Result from "./Result.component";
import { InputDate } from './Input.component';

type Props = {}

const Content = (props: Props) => {
    const [triger, setTriger] = useState(false);
    const [date, setDate] = useState<InputDate>({
        day: '',
        month: '',
        year: ''
    })
    const [errors, setErrors] = useState<ReturnedErrors>({
        day: 'valid',
        month: 'valid',
        year: 'valid'
    })
    return (
        <div className="w-full md:w-[600px] h-[65vh] md:h-[500px] mx-2 p-7 mb-14 bg-white rounded-3xl rounded-br-[100px]">
            <FormDate date={date} setDate={setDate} setTriger={setTriger} errors={errors}/>            
            <div className="flex flex-col items-center justify-center md:items-end my-8">
                <hr className="w-full" /> {/* Horizontal line */}
                <ArrowButton setTriger={setTriger} date={date} setErrors={setErrors} errors={errors}/>
            </div>
            <Result                
                days={triger ? date.day : '--'}
                months={triger ? date.month : '--'}
                years={triger ? date.year : '--'}
            />
        </div>
    )
}

export default Content;