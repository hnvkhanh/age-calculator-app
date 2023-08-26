import { useState } from 'react'
import ArrowButton from "./ArrowButton.component";
import FormDate from "./FormDate.component";
import Result from "./Result.component";
import { InputDate } from './Input.component';

type Props = {}
// interface InputDate {
//     day: number | string;
//     month: number | string;
//     year: number | string
// }

const Content = (props: Props) => {
    const [date, setDate] = useState<InputDate>({
        day: '',
        month: '',
        year: ''
    })
    return (
        <div className="w-full h-[65vh] mx-2 p-7 mb-14 bg-white rounded-3xl rounded-br-[100px]">
            <FormDate date={date} setDate={setDate} />
            <div className="flex flex-col items-center justify-center my-8">
                <hr className="w-full" /> {/* Horizontal line */}
                <ArrowButton />
            </div>
            <Result days={0} months={0} years={0} />
        </div>
    )
}

export default Content;