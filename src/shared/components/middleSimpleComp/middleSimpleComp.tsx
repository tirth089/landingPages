import './middleSimpleComp.scss'
const MiddleSimpleComp = ({ sectionTitle, sectionId, isContainerCentered = true }: any) => {
    return (
        <div className= {isContainerCentered ? "containerSection containerPadding" : "containerSection containerSmallPadding"} id={sectionId}>
            <div className={isContainerCentered ? "container textCentered" : "container"}>
                <h3 className={isContainerCentered ? "title" : "title font-size-18"}>{sectionTitle}</h3>
                <p className="text textColor">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
        </div>
    );
}
export default MiddleSimpleComp;