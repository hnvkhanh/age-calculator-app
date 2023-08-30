import { InputDate, ReturnedErrors } from "../untils/types"
import Input from "./Input.component"



type Props = {
  date: InputDate,
  errors :ReturnedErrors,  
  setDate: React.Dispatch<React.SetStateAction<InputDate>>,
  setTriger: React.Dispatch<React.SetStateAction<boolean>>
}


const FormDate = (props: Props) => {  

  return (    
      <form className="flex items-start justify-center py-5 gap-x-5 text-smokeyGrey font-bold">
        <Input
          placeholder='DD'
          label='day'
          value={props.date.day}
          setDate={props.setDate}
          setTriger={props.setTriger}
          error={props.errors.day}
        />
        <Input
          placeholder='MM'
          label='month'
          value={props.date.month}
          setDate={props.setDate}
          setTriger={props.setTriger}
          error={props.errors.month}
        />
        <Input
          placeholder='YYYY'
          label='year'
          value={props.date.year}
          setDate={props.setDate}
          setTriger={props.setTriger}
          error={props.errors.year}
        />        
      </form >
  )
}

export default FormDate;