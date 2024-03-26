import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {

    const categoriesData = useLoaderData();
    // console.log(categoriesData)

  return (
    <div>
      <Banner></Banner>
      <div className="container mx-auto">
        <CategoryList categoriesData={categoriesData}></CategoryList>
        <FeaturedJobs></FeaturedJobs>
      </div>
    </div>
  );
};

export default Home;
