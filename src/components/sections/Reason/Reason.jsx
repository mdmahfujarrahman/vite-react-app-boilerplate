import { warpleImage } from "../../../assets";
import SectionHeader from "../../layout/SectionHeader/SectionHeader";
import MemberRegistration from "../MemberRegistration/MemberRegistration";
import "./Reason.css";

const Reason = () => {
    return (
        <section className="reasonWrapper">
            <div className="reasonContainer">
                <div className="reasonContent">
                    <div className="reasonPointcontainer">
                        <SectionHeader
                            classId="reasonPoint"
                            title="POINT"
                            subTitle="こんなひとにおすすめ!"
                        />
                        <div className="reasonPointLists">
                            <div className="reasonPointList">
                                <img
                                    src={warpleImage.checkIcon}
                                    alt="checkIcon"
                                />
                                <p>
                                    とにかく<span> 安く申し込みたい方</span>
                                </p>
                            </div>
                            <div className="reasonPointList">
                                <img
                                    src={warpleImage.checkIcon}
                                    alt="checkIcon"
                                />
                                <p>
                                    <span> 希望の国</span>や<span> プラン</span>
                                    が決まっている方
                                </p>
                            </div>
                            <div className="reasonPointList">
                                <img
                                    src={warpleImage.checkIcon}
                                    alt="checkIcon"
                                />
                                <p>
                                    現地スタッフと
                                    <span> 直接やりとりをしたい方</span>
                                </p>
                            </div>
                            <div className="reasonPointList">
                                <img
                                    src={warpleImage.checkIcon}
                                    alt="checkIcon"
                                />
                                <p>
                                    自分のペースで
                                    <span>留学プランを探したい方</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="reasonPointcontainer">
                        <SectionHeader
                            title="REASON"
                            subTitle="最低価格保証を実現できる理由"
                        />
                        <div className="reasonPointItems">
                            <div className="reasonPointItem">
                                <div className="reasonPointImage">
                                    <img
                                        src={warpleImage.searchIcon}
                                        alt="searchIcon"
                                    />
                                    <div className="starIcon">
                                        <img
                                            src={warpleImage.startIcon}
                                            alt=""
                                        />
                                        <p>01</p>
                                    </div>
                                </div>
                                <div className="reasonPointContent">
                                    <p className="reasonPointContentTitle">
                                        いつでもどこでも申し込める
                                    </p>
                                    <hr />
                                    <p className="reasonPointContentPara">
                                        語学学校/宿泊先の空き状況やキャンペーン情報をリアルタイムで知ることができるため、warpleならいつでも
                                        どこでも申し込んだり留学準備を進めることができます。
                                    </p>
                                </div>
                            </div>
                            <div className="reasonPointItem">
                                <div className="reasonPointImage">
                                    <img
                                        src={warpleImage.searchIcon}
                                        alt="searchIcon"
                                    />
                                    <div className="starIcon">
                                        <img
                                            src={warpleImage.startIcon}
                                            alt=""
                                        />
                                        <p>02</p>
                                    </div>
                                </div>
                                <div className="reasonPointContent">
                                    <p className="reasonPointContentTitle">
                                        いつでもどこでも申し込める
                                    </p>
                                    <hr />
                                    <p className="reasonPointContentPara">
                                        語学学校/宿泊先の空き状況やキャンペーン情報をリアルタイムで知ることができるため、warpleならいつでも
                                        どこでも申し込んだり留学準備を進めることができます。
                                    </p>
                                </div>
                            </div>
                            <div className="reasonPointItem">
                                <div className="reasonPointImage">
                                    <img
                                        src={warpleImage.searchIcon}
                                        alt="searchIcon"
                                    />
                                    <div className="starIcon">
                                        <img
                                            src={warpleImage.startIcon}
                                            alt=""
                                        />
                                        <p>03</p>
                                    </div>
                                </div>
                                <div className="reasonPointContent">
                                    <p className="reasonPointContentTitle">
                                        いつでもどこでも申し込める
                                    </p>
                                    <hr />
                                    <p className="reasonPointContentPara">
                                        語学学校/宿泊先の空き状況やキャンペーン情報をリアルタイムで知ることができるため、warpleならいつでも
                                        どこでも申し込んだり留学準備を進めることができます。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="travel">
                        <img src={warpleImage.airplane} alt="airplane" />
                    </div>
                </div>
            </div>
            <MemberRegistration 
            classIdLeftPlane="leftPlane"
            classIdRightPlane="rightPlane"
            />
        </section>
    );
};

export default Reason;
