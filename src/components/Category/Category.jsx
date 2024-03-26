
const Category = ({SingleCategory}) => {
    const {logo,category_name,availability} = SingleCategory;
    return (
        <div className="bg-gradient-to-r from-[#7E90FE]/[.10] to-[#9873FF]/[.10] p-10">
            <div className="bg-[#7E90FE]/[.10] inline-block p-2">
            <img className="h-20 w-20" src={logo} alt="" />
            </div>
            <h2 className="mt-8 text-xl font-bold text-[#474747]">{category_name}</h2>
            <p className="font-medium text-[#A3A3A3] mt-2">{availability}</p>
        </div>
    );
};

export default Category;