import { warplePoint } from "../../../assets";
import SectionContent from "../../layout/SectionContent/SectionContent";
import SectionHeader from "../../layout/SectionHeader/SectionHeader";
import "./Point.css";

const Point = () => {
    return (
        <section className="pointWrapper">
            <SectionHeader title="POINT" subTitle="warpleの3つのポイント" />
            <div className="pointContnet">
                <div className="pointLeft">
                    <div className="pointLeftItems">
                        <div className="pointLeftIamge">
                            <img src={warplePoint.ponitOne} alt="どこよりも" />
                        </div>

                        <SectionContent
                            titleOne="どこよりも"
                            titleTwo="安く留学できる"
                            para="warple は、お申し込みから渡航の準備まで留学に関わる すべてをWEB上で完結させることで、語学学校に直接申し 込むよりも安い費用で留学することが可能です。"
                        />
                    </div>
                    <div className="pointLeftItems secondItem">
                        <div className="pointLeftIamge">
                            <img src={warplePoint.ponitTwo} alt="" />
                        </div>
                        <SectionContent
                            titleOne="自分の理想プランを"
                            titleTwo="見つけやすい"
                            para="語学学校と直接繋がることができるシステムになっており、現地のリアルで正確な情報を知ることができるため、自分で 自由に情報を見ながら留学プランを決めることができます。<span>※語学学校と1on1のチャットができるのは申し込み後です。</span>"
                        />
                    </div>
                    <div className="pointLeftItems ">
                        <div className="pointLeftIamge">
                            <img
                                src={warplePoint.ponitThree}
                                alt="自分の理想プランを"
                            />
                        </div>
                        <SectionContent
                            titleOne="いつでもどこでも"
                            titleTwo="申し込める"
                            para="語学学校/宿泊先の空き状況やキャンペーン情報をリアル タイムで知ることができるため、warpleならいつでもどこでも 申し込んだり留学準備を進めることができます。"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Point;
