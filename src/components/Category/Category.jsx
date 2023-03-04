import Products from '../Products/Products.jsx';

import "./Category.scss";


const Category = () => {
    return (
        <div className="category-main-layout">
            <div className="layout">
                <div className="category-title">
                    Category Title
                </div>
                <Products innerPage = {true} />
            </div>
        </div>
    );
};

export default Category;
