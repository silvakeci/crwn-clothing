import SHOP_DATA from "../../shop-data.js";
import {Fragment, useContext} from "react";
import { CategoriesContext } from "../../contexts/categoriesContext";
import ProductCard from "../../Component/productCard/productCard";
import "./shop.scss";

const Shop = () => {
  const {categoriesMap  } = useContext(CategoriesContext);


  return (
      <Fragment>
          {
                  Object.keys(categoriesMap).map(title => (
                      <Fragment key={title}>
                         <h2>{title}</h2>
                          <div className="products-container">
                              {categoriesMap[title].map((product) => (
                                <ProductCard key={product.id} product={product} />
                              ))}
                          </div>
                      </Fragment>
                  ))
          }
      </Fragment>
  );
};

export default Shop;
