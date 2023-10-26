import Hero from "../components/Hero";
import Features from "../components/Features";
import MobileAds from "../components/MobileAds";
import Payment from "../components/Payment";
import NewsLetter from "../components/NewsLetter";

const Homepage = () => {
  return (
    <div className="overflow-hidden">
      <Hero />

      <Features />
      <MobileAds />
      <Payment />
      <NewsLetter />
    </div>
  );
};

export default Homepage;
