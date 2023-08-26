type Props = {
    years: number,
    months: number,
    days: number
}

const Result = (props: Props) => {
    return (
        <div className='flex flex-col justify-center h-[50%] text-custom font-bold italic'>
            <div><span className='text-purple'>{props.years}</span> years</div>
            <div><span className='text-purple' >{props.months}</span> months</div>
            <div><span className='text-purple' >{props.days}</span> days</div>
        </div>
    )
}

export default Result;