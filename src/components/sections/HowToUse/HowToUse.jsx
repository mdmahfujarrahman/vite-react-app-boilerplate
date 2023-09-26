import { warpleImage, warpleUse } from "../../../assets";
import SectionHeader from "../../layout/SectionHeader/SectionHeader";
import "./HowToUse.css";

const HowToUse = () => {
    return (
        <section className="howToUseWrapper">
            <SectionHeader
                classId={"howToUseHeader"}
                title="HOW TO USE"
                subTitle="使い方は3ステップで簡単！"
            />
            <div className="howToUseProcessItmes">
                <div className="howToUseProcessItme">
                    <div className="howToUseProcessImg">
                        <img src={warpleUse.step1} alt="step1" />
                        <img
                            className="warpleSearch"
                            src={warpleUse.warpleSearch}
                            alt=""
                        />
                    </div>
                    <div className="howToUseProcessContent">
                        <p>自分の希望に合った</p>
                        <p>語学学校・プランを探す</p>
                    </div>
                </div>
                <div className="nextArrow">
                    <img src={warpleImage.NextArrow} alt="warpleImage" />
                </div>
                <div className="howToUseProcessItme">
                    <div className="howToUseProcessImg">
                        <img src={warpleUse.document} alt="step1" />
                        <img src={warpleUse.dollor} alt="step1" />
                    </div>
                    <div className="howToUseProcessContent">
                        <p>見積もりをとって</p>
                        <p>留学費用を確認する</p>
                    </div>
                </div>
                <div className="nextArrow">
                    <img src={warpleImage.NextArrow} alt="warpleImage" />
                </div>
                <div className="howToUseProcessItme">
                    <div className="howToUseProcessImg">
                        <img src={warpleUse.email} alt="step1" />
                        <img
                            className="warpleSearch"
                            src={warpleUse.warpleSearch}
                            alt=""
                        />
                    </div>
                    <div className="howToUseProcessContent">
                        <p>空き状況を確認して</p>
                        <p>お申し込みする</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowToUse;
