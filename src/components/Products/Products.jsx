import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';

const products = [
    { id: 1, name: "Laptop", category: "Black Apple Macbook"},
    { id: 2, name: "Table", category: "Blue Table"},
    { id: 3, name: "Clothes", category: "Various Tops and Sleeves"},
    { id: 4, name: "Electronics", category: "All kinds of TV's"},
]

const Products = () => {
    <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product />
                </Grid>
            ))}
        </Grid>
    </main>
}

export default Products
