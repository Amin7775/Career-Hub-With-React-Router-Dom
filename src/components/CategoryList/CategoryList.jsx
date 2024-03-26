import CommonTitle from "../../utilitis/CommonTitle/CommonTitle";
import Category from "../Category/Category";

const CategoryList = ({categoriesData}) => {
    
    return (
        <div className="my-10">
            <CommonTitle title={'Job Category List'} descripton={'Explore thousands of job opportunities with all the information you need. Its your future '}></CommonTitle>
        {/* categories container */}
            <div className="grid grid-cols-4 gap-5 mb-10">
                {
                categoriesData.map(SingleCategory => <Category key={SingleCategory.id} SingleCategory={SingleCategory}></Category>)
                }
            </div>
        </div>
    );
};

export default CategoryList;