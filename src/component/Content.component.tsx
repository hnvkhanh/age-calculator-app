import FormDate from "./FormDate.component";

type Props = {}

const Content = (props: Props) => {
    return (
        <div className="w-full h-[65vh] mx-2 bg-white rounded-3xl rounded-br-[100px]">
            <FormDate />
        </div>
    )
}

export default Content;