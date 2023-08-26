import { useState } from 'react'

interface InputDate {
  day: number;
  month: number;
  year: number
}

type Props = {
  date: InputDate,
}

const FormDate = (props: Props) => {
  const [day, setDay] = useState<number | ''>('');
  const [month, setMonth] = useState<number | ''>('');
  const [year, setYear] = useState<number | ''>('');


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 2){
      console.log(event.target.value)
      return;
    }
    switch (event.target.id) {
      case 'day':
        if (event.target.value == '') {
          setDay('');
          return;
        }
        const inputDay = parseInt(event.target.value);
        if (!isNaN(inputDay) && inputDay >= 0 && inputDay < 32) {
          setDay(inputDay);
        }
        break;
      case 'month':
        if (event.target.value == '') {
          setMonth('');
          return;
        }
        const inputMonth = parseInt(event.target.value);
        if (!isNaN(inputMonth) && inputMonth >= 0 && inputMonth < 13) {
          setMonth(inputMonth);
        }
        break;
      default:
        if (event.target.value == '') {
          setYear('');
          return;
        }
        const inputYear = parseInt(event.target.value);
        if (!isNaN(inputYear) && inputYear >= 0 && inputYear < 100) {
          setYear(inputYear);
        }
        break;
    }

  };

  return (
    <form className="flex items-center justify-center py-5 gap-x-5 text-smokeyGrey font-bold">
      <div className="flex flex-col w-[28%]">
        <label>DAY</label>
        <input
          type="number"
          placeholder="DD"
          className="border-2 border-lightGrey rounded-md p-3 text-offBlack"
          id="day"
          onChange={handleChange}
          value={day}
        />
      </div>
      <div className="flex flex-col w-[28%]">
        <label>MONTH</label>
        <input
          type="number"
          placeholder="MM"
          className="border-2 border-lightGrey rounded-md p-3 text-offBlack"
          id="month"
          onChange={handleChange}
          value={month}
        />
      </div>
      <div className="flex flex-col w-[28%]">
        <label>YEAR</label>
        <input
          type="number"
          placeholder="YY"
          className="border-2 border-lightGrey rounded-md p-3 text-offBlack"
          id="year"
          onChange={handleChange}
          value={year}
        />
      </div>
    </form>
  )
}

export default FormDate;