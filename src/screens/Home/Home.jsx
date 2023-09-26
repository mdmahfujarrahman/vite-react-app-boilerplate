// layout components
import Banner from "../../components/layout/Banner/Banner";
import Navbar from "../../components/layout/Navbar/Navbar";
import HowToUse from "../../components/sections/HowToUse/HowToUse";
import Point from "../../components/sections/Point/Points";
import Reason from "../../components/sections/Reason/Reason";
// componentes
import WhatIsWarple from "../../components/sections/WhatIsWarple/WhatIsWarple";
const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <WhatIsWarple />
            <Point />
            <Reason />
            <HowToUse />
        </>
    );
};

export default Home;
