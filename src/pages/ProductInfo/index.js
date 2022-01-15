import React from 'react';
import { useLocation } from 'react-router-dom'

const ProductInfo = (props) => {

    const { state } = useLocation();

    return (
        <div>
            estoy en el catálogo
        </div >
    )
}

export default ProductInfo;
