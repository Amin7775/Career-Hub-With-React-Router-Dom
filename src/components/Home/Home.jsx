import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="container mx-auto">
        <h2>This is home</h2>
        <CategoryList></CategoryList>
      </div>
    </div>
  );
};

export default Home;
