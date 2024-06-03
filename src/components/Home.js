import AllTimeFav from "./AllTimeFav";
import Banner from "./Banner";
import Forus from "./Forus";
import TrendingProducts from "./TrendingProducts";

function Home() {
  return (
    <div>
      <Banner />
      <TrendingProducts />
      <AllTimeFav />
      <Forus />
    </div>
  );
}
export default Home;
