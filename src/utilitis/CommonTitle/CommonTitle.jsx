
const CommonTitle = ({title,descripton}) => {
    console.log(title, descripton)
    return (
        <div className="my-8">
            <h1 className="text-6xl text-center font-bold">{title}</h1>
            <p className="w-[80%] mx-auto text-center my-6 font-medium text-[#757575]">{descripton}</p>
        </div>
    );
};

export default CommonTitle;