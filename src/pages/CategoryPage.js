import React from 'react';
import { Link } from "react-router-dom";

const CategoryPage = () => {
  return (
    <div>
        <h3>Category Page</h3>
        <div>
            <p>Ke Halaman Detail</p>
            <div>
                <Link style={{ margin: ' 24px'}} to="/detail/product-1">Product 1</Link>
                <Link style={{ margin: ' 24px'}} to="/detail/product-2">Product 2</Link>
                <Link style={{ margin: ' 24px'}} to="/detail/product-3">Product 3</Link>
            </div>
        </div>
    </div>
  )
}

export default CategoryPage