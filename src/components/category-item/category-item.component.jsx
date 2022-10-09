import "./category-item.styles.scss";

const CategoryItem = ({ categoryProp }) => {
  const { title, imageUrl } = categoryProp;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
