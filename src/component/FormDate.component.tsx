import { useState } from 'react'

interface InputDate {
  day: number | string;
  month: number | string;
  year: number | string
}

type Props = {
  date: InputDate,
  setDate: React.Dispatch<React.SetStateAction<InputDate>>
}

const FormDate = (props: Props) => {

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
    // const inputValue = parseInt(event.target.value);
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
          value={props.date.day}
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
          value={props.date.month}
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
          value={props.date.year}
        />
      </div>
    </form>
  )
}

export default FormDate;