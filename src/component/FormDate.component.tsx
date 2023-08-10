type Props = {}

const FormDate = (props: Props) => {
  return (
    <form className="flex items-center justify-center p-5 gap-x-5 text-smokeyGrey font-bold">
      <div className="flex flex-col w-[28%]">
        <label>Day</label>
        <input type="number " className="border-2 border-lightGrey rounded-md p-3 text-offBlack" />
      </div>
      <div className="flex flex-col w-[28%]">
        <label>Month</label>
        <input type="number" className="border-2 border-lightGrey rounded-md p-3 text-offBlack" />
      </div>
      <div className="flex flex-col w-[28%]">
        <label>Year</label>
        <input type="number" className="border-2 border-lightGrey rounded-md p-3 text-offBlack" />
      </div>
    </form>
  )
}

export default FormDate;