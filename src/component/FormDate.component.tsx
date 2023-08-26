import Input, { InputDate } from './Input.component';

type Props = {
  date: InputDate,
  setDate: React.Dispatch<React.SetStateAction<InputDate>>
}

const FormDate = (props: Props) => {

  return (
    <form className="flex items-center justify-center py-5 gap-x-5 text-smokeyGrey font-bold">
      <Input
        placeholder='DD'
        label='day'
        value={props.date.day}
        setDate={props.setDate}
      />
      <Input
        placeholder='MM'
        label='month'
        value={props.date.month}
        setDate={props.setDate}
      />
      <Input
        placeholder='YYYY'
        label='year'
        value={props.date.year}
        setDate={props.setDate}
      />
    </form>
  )
}

export default FormDate;