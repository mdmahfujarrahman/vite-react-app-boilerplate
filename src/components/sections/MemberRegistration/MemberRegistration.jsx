import { warpleImage } from "../../../assets";
import CustomButton from "../../../ui/Button/CustomButton";
import Arrow from "../../layout/Arrow/Arrow";
import "./MemberRegistration.css";

const MemberRegistration = ({ classIdLeftPlane, classIdRightPlane }) => {
    return (
        <div className="memberRegistrationWrapper">
            <div className="memberRegistration">
                <p className="memberRegistrationTitle  memberRegistrationfirstTitle">
                    会員登録でお得なクーポン
                </p>
                <p className="memberRegistrationTitle">プレゼント中!</p>
                <CustomButton btnStyle="memberRegistrationBtn">
                    <p>簡単30秒！会員登録</p>
                    <Arrow />
                </CustomButton>
            </div>
            <div className={`planeRight ${classIdRightPlane}`}>
                <img src={warpleImage.planeRight} alt="planeRight" />
            </div>
            <div className={`planeLeft ${classIdLeftPlane}`}>
                <img src={warpleImage.planeLeft} alt="planeRight" />
            </div>
        </div>
    );
};

export default MemberRegistration;
