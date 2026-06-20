import Reviews from "../../Reviews/Reviews";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";

const reviewsPromise = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Brands></Brands>
      <Reviews reviewsPromise={reviewsPromise}></Reviews>
    </div>
  );
};

export default Home;
