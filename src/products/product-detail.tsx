import { useState, useEffect, useContext } from 'react';
import { useParams } from  'react-router-dom';
import IProduct from '../interfaces/IProduct';
import ICartItem from '../interfaces/ICartItem';
import { CartContext } from '../index';

function ProductDetail(){
    const { id } = useParams();

    const [product, setProduct] = useState<IProduct|null>(null);
    const cart = useContext(CartContext);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(data => {
                setProduct({id: data.id, title: data.title, price: data.price, image: data.image, description: data.description})
            })
    }, [])

    const addProductToCart = () => {
        if (!id || !product) return;

        let updatedCartItems = [...cart!.cartItems];
        let cartItemIndex = updatedCartItems.findIndex(c => c.id === parseInt(id));
        if (cartItemIndex !== -1) {
            updatedCartItems[cartItemIndex].quantity += 1;
        } else {
            updatedCartItems.push({...product, quantity: 1})
        }

        cart?.setCartItems(updatedCartItems);
    }
    
    return <>
        {product && <div>
            <p>Title: {product.title}</p>
            <p>Description: {product.description!}</p>
            <p>Price: {product.price}</p>
            <img src={product.image} alt={product.title} style={{height: '200px'}}/>
            <button onClick={() => addProductToCart()}>Add to cart</button>
        </div>}
    </>
}

export default ProductDetail;