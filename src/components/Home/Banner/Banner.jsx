import "./Banner.scss";
import bannerImg from '../../../assets/banner-img.png'


const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                <p>Unwind wit sound at ZenBazaar, your destination for premium accessories</p>
                <div className="ctas">
                    <div className="banner-cta">Read More</div>
                    <div className="banner-cta version2">Shop Now</div>
                </div>
            </div>
            <img src={bannerImg} className="banner-img" alt="banner" />
        </div>
    </div>;
};

export default Banner;
