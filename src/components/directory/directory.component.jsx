import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";

const Directory = ({ mainCategories }) => {
  return (
    <div className="categories-container">
      {/* before shifting the code it was {id, title, imageUrl} instead of (category) */}
      {mainCategories.map((categoryArray) => (
        <CategoryItem key={categoryArray.id} categoryProp={categoryArray} />
      ))}
    </div>
  );
};
export default Directory;
