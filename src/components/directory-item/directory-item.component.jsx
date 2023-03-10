import { useNavigate } from "react-router-dom";


import { BackGroundImage, DirectoryItemBodyContainer, DirectoryItemContainer } from "./directory-item.styles";
import "./directory-item.styles.scss";

const DirectoryItem = ({category}) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate()

  const onNavigateHandler = ()=> navigate(route)
  return (
    <>
      {/* <div className="directory-item-container large">
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <div className="directory-item-body-container">
          <h1>{title}</h1>
          <p>Shop Now</p>
        </div>
      </div> */}

      <DirectoryItemContainer onClick={onNavigateHandler}>
        <BackGroundImage
          imageUrl = {imageUrl}
        />
        <DirectoryItemBodyContainer>
          <h1>{title}</h1>
          <p>Shop Now</p>
        </DirectoryItemBodyContainer>
      </DirectoryItemContainer>
    </>
  );
};

export default DirectoryItem;
