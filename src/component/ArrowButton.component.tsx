type Props = {
    setTriger : React.Dispatch<React.SetStateAction<boolean>>
}

const ArrowButton = (props:Props) => {
    const handleClick = () => {
        props.setTriger(true);
    }
    return (
        <button
            onClick={handleClick}
            className="bg-purple hover:bg-offBlack text-white font-bold p-3 rounded-full flex items-center absolute"
        >
            <img
                src={"/icon-arrow.svg"}
                alt="Arrow Icon"
                className="h-8 w-8"
            />
        </button>
    )
}

export default ArrowButton;
