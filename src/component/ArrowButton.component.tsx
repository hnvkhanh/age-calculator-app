
type Props = {}

const ArrowButton = (props: Props) => {
    return (
        <button className="bg-purple hover:bg-offBlack text-white font-bold p-3 rounded-full flex items-center absolute">
            <img
                src={"/icon-arrow.svg"}
                alt="Arrow Icon"
                className="h-8 w-8"
            />
        </button>
    )
}

export default ArrowButton;