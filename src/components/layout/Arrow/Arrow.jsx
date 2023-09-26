import "./Arrow.css";
import { warpleImage } from "../../../assets";

const Arrow = () => {
    return (
        <div className="arrowWrapper">
            <img src={warpleImage.ArrowIcon} alt="Arrow icon" />
        </div>
    );
};

export default Arrow;
