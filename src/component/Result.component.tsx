type Props = {
    years: number | string,
    months: number | string,
    days: number | string,    
}

const Result = (props: Props) => {
    let daysDifference = -1;
    let year = -1;
    let month = -1;
    let day = -1;
    const getDateDifference = (startDate: Date, endDate: Date): number => {
        const timeDifference = endDate.getTime() - startDate.getTime();
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        return daysDifference
    }
    if (props.years != '--' && props.months != '--' && props.days != '--') {
        const inputDate = new Date(props.years + '-' + props.months + '-' + props.days);
        const currentDate = new Date();
        daysDifference = getDateDifference(inputDate, currentDate);
        year = Math.floor(daysDifference / 365);
        month = Math.floor((daysDifference - year * 365) / 30);
        day = daysDifference - year * 365 - month * 30;
    }
    
    return (
        <div className='flex flex-col justify-center h-[50%] text-custom md:text-[75px] font-extrabold italic'>
            <div className="md:mb-[-40px]">
                <span className='text-purple'>
                    {`${daysDifference == -1 ? '--' : year} `}
                </span>
                years
            </div>
            <div>
                <span className='text-purple' >
                    {`${daysDifference == -1 ? '--' : month} `}
                </span>
                months
            </div>
            <div className="md:mt-[-40px]">
                <span className='text-purple' >
                    {`${daysDifference == -1 ? '--' : day} `}
                </span>
                days
            </div>
        </div>
    )
}

export default Result;