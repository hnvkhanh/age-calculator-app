import Content from "./Content.component";

const MainLayout = () => {
  return (
    <div className="bg-lightGrey flex flex-col items-center justify-center h-[100vh] font-poppins">        
        <Content />
        <hr/>
    </div>
  )
}

export default MainLayout;