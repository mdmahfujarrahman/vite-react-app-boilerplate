import "./SectionHeader.css";

const SectionHeader = ({ title, subTitle, classId }) => {
    return (
        <div className={`headerWrapper ${classId}`}>
            <h6 className="headerTitle">{title}</h6>

            <p className="headerSubTitle">{subTitle}</p>
        </div>
    );
};

export default SectionHeader;
