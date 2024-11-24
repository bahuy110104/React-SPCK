import BestSeller from "../Components/BestSeller";
import Hero from "../Components/Hero";
import LatestCollection from "../Components/LatestCollection";
import NewletterBox from "../Components/NewletterBox";
import OurPolicy from "../Components/OurPolicy";


const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewletterBox />
    </div>
  )
}

export default Home;
