import { useContext } from 'react';
import { CartContext } from '../index';

function Cart() {
    const cart = useContext(CartContext);

    if (!cart || !cart.cartItems.length) {
        return <p>Cart is empty</p>
    }

    const removeItem = (id: number) => {
        let updatedCartItems = [...cart.cartItems];
        const itemIndex = updatedCartItems.findIndex(c => c.id === id);

        if (itemIndex === -1) {
            return;
        }

        updatedCartItems.splice(itemIndex, 1);
        cart.setCartItems(updatedCartItems);
    }

    const decreaseItemQuantity = (id: number) => {
        let updatedCartItems = [...cart.cartItems];
        const itemIndex = updatedCartItems.findIndex(c => c.id === id);

        if (itemIndex === -1) {
            return;
        }

        if (updatedCartItems[itemIndex].quantity === 1){
            removeItem(id);
            return;
        }

        updatedCartItems[itemIndex].quantity -= 1;
        cart.setCartItems(updatedCartItems);
    }

    return <table>
    <thead>
        <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
            {
                cart.cartItems.map(p => 
                    <tr key={p.id}>
                        <td><a href={`/product/${p.id}`}>{p.id}</a></td>
                        <td>{p.title}</td>
                        <td><img src={p.image} style={{height:'50px'}} alt={p.title}/></td>
                        <td>{p.price}</td>
                        <td>{p.quantity}</td>
                        <td>
                            <button onClick={() => decreaseItemQuantity(p.id)}>Decrease quantity</button>
                            <button onClick={() => removeItem(p.id)}>Remove item</button>
                        </td>
                    </tr>
                )
            }
        </tbody>
  </table>}

export default Cart;