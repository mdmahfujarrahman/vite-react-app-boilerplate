// style
import CustomButton from "../../../ui/Button/CustomButton";
import "./Banner.css";

// UI

const Banner = () => {
    return (
        <section className="bannerWrapper">
            <div className="bannerContent">
                <CustomButton btnStyle="bannerBtn">warpleについて</CustomButton>
                <h1 className="bannerTitle">ABOUT</h1>
            </div>
        </section>
    );
};

export default Banner;
