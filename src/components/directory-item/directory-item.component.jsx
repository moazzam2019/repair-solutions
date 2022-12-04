import "./directory-item.styles.scss";
import { Link } from "react-router-dom";

const DirectoryItem = ({ categoryProp }) => {
  const { title, imageUrl, param } = categoryProp;
  return (
    <Link className="directory-item-container" to={`/shop${param}`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <div className="directory-item-body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </Link>
  );
};

export default DirectoryItem;
