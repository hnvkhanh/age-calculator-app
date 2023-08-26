type Props = {
    years: number | string,
    months: number | string,
    days: number | string
}

const Result = (props: Props) => {
    let daysDifference;
    const getDateDifference = (startDate: Date, endDate: Date): number => {
        const timeDifference = endDate.getTime() - startDate.getTime();
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        return daysDifference
    }
    if (props.years != '--' && props.months != '--' && props.days != '--') {
        const inputDate = new Date(props.years + '-' + props.months + '-' + props.days);
        const currentDate = new Date();
        daysDifference = getDateDifference(inputDate, currentDate)
    }
    return (
        <div className='flex flex-col justify-center h-[50%] text-custom font-bold italic'>
            <div><span className='text-purple'>{daysDifference?'--':props.years}</span> years</div>
            <div><span className='text-purple' >{daysDifference?'--':props.months}</span> months</div>
            <div><span className='text-purple' >{daysDifference?'--':props.days}</span> days</div>
        </div>
    )
}

export default Result;