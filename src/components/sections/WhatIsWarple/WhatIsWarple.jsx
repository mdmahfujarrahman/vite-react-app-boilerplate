import "./WhatIsWarple.css";

import { warpleCotentImage } from "../../../assets";
import SectionHeader from "../../layout/SectionHeader/SectionHeader";
import Arrow from "../../layout/Arrow/Arrow";
import CustomButton from "../../../ui/Button/CustomButton";

const WhatIsWarple = () => {
    return (
        <section className="WhatIsWarpleWrapper">
            <SectionHeader title="WHAT IS warple" subTitle="warpleって" />
            <div className="WhatIsWarpleContent">
                <div className="WhatIsWarpleLeft">
                    <img src={warpleCotentImage.warpleInfo} alt="warple Info" />
                </div>
                <div className="WhatIsWarpleRight">
                    <p className="WhatIsWarpleRightTitle">留学を、</p>
                    <p className="WhatIsWarpleRightTitle">もっとかしこく、</p>
                    <p className="WhatIsWarpleRightTitle">おもしろく。</p>
                    <hr />
                    <p className="WhatIsWarpleRightPara">
                        warple は、語学学校/プログラムの検索や申込み、渡航
                        までの準備や学校/宿泊先の手配まで留学に必要なすべ
                        てをインターネット上で完結させることにより、どこよりも安
                        く、どこよりもあなたらしく、留学が実現できるサービスです。
                    </p>
                </div>
            </div>
            <div className="WhatIsWarpleAction">
                <CustomButton btnStyle="WhatIsWarpleBtn">
                    <p>初めての方へ</p>
                    <Arrow />
                </CustomButton>
            </div>
        </section>
    );
};

export default WhatIsWarple;
