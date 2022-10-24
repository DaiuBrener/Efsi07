import React from "react";
import Product from "./producto";
import { Row, Container } from 'react-bootstrap'
import DetalleProd from "./detalleProd";


const Products = (id) => {
    const [products, setProducts] = React.useState([]);
    React.useEffect(() => {
        fetch(`https://dummyjson.com/products`)
        .then(res => res.json())
        .then(res => setProducts(res.products))
        .catch(err => console.error(err));
    }, []);
    console.log(products)

    return (
        <Container>
       <Row md={3}>
            { products.map(product => <Product key={product.id} product={product} />) }
        </Row>
            </Container>
        
    );
}

export default Products;