import CategoryItem from "../categoryItem/categoryItem";
import "./categoriesMenu.scss";
const CategoriesMenu = ({ categories }) => {
  return (
    <div className="categories-container ">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
export default CategoriesMenu;
