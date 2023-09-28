import DirectoryItem from "../directoryItem/directoryItem";
import "./categoriesMenu.scss";
const CategoriesMenu = ({ categories }) => {
  return (
    <div className="categories-container ">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
export default CategoriesMenu;
