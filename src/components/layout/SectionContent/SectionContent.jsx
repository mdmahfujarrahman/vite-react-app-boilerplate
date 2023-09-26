import "./SectionContent.css";

const SectionContent = ({ titleOne, titleTwo, para }) => {
    return (
        <div className="sectionContentWrapper">
            <p className="sectionContentTitle">{titleOne}</p>
            <p className="sectionContentTitle">{titleTwo}</p>
            <hr />
            <p
                dangerouslySetInnerHTML={{
                    __html: para,
                }}
                className="sectionContentPara"
            ></p>
        </div>
    );
};

export default SectionContent;
