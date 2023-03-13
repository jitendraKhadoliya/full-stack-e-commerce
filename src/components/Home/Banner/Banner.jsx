import "./Banner.scss";
import bannerImg from "../../../assets/banner-img.png";

export const handleClickScrollToTopSection = () => {
  const element = document.getElementById("top");
  if (element) {
    // 👇 Will scroll smoothly to the top of the next section
    // element.scrollY({
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
};

const Banner = () => {
  return (
    <div className="hero-banner" id="top">
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>
          <p>
            Unwind wit sound at ZenBazaar, your destination for premium
            accessories
          </p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta version2">Shop Now</div>
          </div>
        </div>
        <img src={bannerImg} className="banner-img" alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
