type Props = {}

const FormDate = (props: Props) => {
  return (
    <form className="flex items-center justify-center p-5 gap-x-5">
      <div className="flex flex-col w-[28%]">
        <label>Day</label>
        <input type="text" className="border-2 border-lightGrey rounded-md p-3" />
      </div>
      <div className="flex flex-col w-[28%]">
        <label>Month</label>
        <input type="text" className="border-2 border-lightGrey rounded-md p-3" />
      </div>
      <div className="flex flex-col w-[28%]">
        <label>Year</label>
        <input type="text" className="border-2 border-lightGrey rounded-md p-3" />
      </div>
    </form>
  )
}

export default FormDate;