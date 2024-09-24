import bannerImage from '../../Components/images/cook-banner.png';
import './Banner.css';
const Banner = () => {
  return (
    <div className="banner mt-5">
      <div
        className="hero h-[600px] bg-base-200 rounded-3xl bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="hero-content text-center">
          <div className="max-w-[742px]">
            <h1 className="text-6xl font-extrabold text-white">
            Discover an exceptional cooking class<br />
              <span className="text-[#0BE58A]">tailored for you! </span>
            </h1>
            <p className="py-6 text-white">
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
            </p>
            <button className="btn bg-[#0BE58A] border-none text-lg text-[#030712]">
              <a href="#total-ticket-section">Explore Now</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
