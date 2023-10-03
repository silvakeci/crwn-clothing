import { useParams } from "react-router-dom";
import {useContext, useState, useEffect, Fragment} from "react";
import {CategoriesContext} from "../../contexts/categoriesContext";
import ProductCard from "../../Component/productCard/productCard";
import { CategoryContainer, Title } from './categoryStyle';
const Category = () => {
    const {category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);



    const categoryTitle = category ? category.toUpperCase() : "";
    return (
        <Fragment>
            <Title>{categoryTitle}</Title>
            <CategoryContainer>
                {products &&
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </CategoryContainer>
        </Fragment>
    );
};

export default Category;