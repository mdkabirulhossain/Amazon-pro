import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const[products, setProducts] = useState([]);
    const[cart, setCart]= useState([]);

    useEffect(()=>{
         fetch('products.json')
         .then(res =>res.json())
         .then(data=>setProducts(data))
    },[]);
    // load data from localStorage
    useEffect(()=>{
        const storedCart = getShoppingCart();
        const saveCart = [];
            // step 1 get id
        //  for (const id in storedCart){
        //      // console.log(storedCart[id]);
        //     //step 2 get the product by using id
        //     const addedCart= products.find(product => product.id === id);
        //     //step 3 get quantity of the product
        //     //  console.log(addedCart);
        //     const quan = storedCart[id];
        //     addedCart.quantity = quan;
        //     console.log(addedCart);
        
        //  }
        //update intially product is empty thats why gives error
        for (const id in storedCart){
            const addedCart = products.find(product => product.id === id);
            //if added cart exist
            if(addedCart){
                const quantity = storedCart[id];
                addedCart.quantity = quantity;
                //add the added product to the save cart
                saveCart.push(addedCart);
                
            }
            console.log(addedCart);
        }
        //set the cart
        setCart(saveCart);

    }, [products]);

    const handleAddtoCart =(product)=>{
        // console.log(product);
        //update data and push to array. Important part
        // const newCart = [...cart, product];
        let newCart = [];
        const exists = cart.find(pd => pd.id === product.id);
        if(!exists){
            product.quantity = 1;
            newCart = [...cart, product];
        }else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }
        setCart(newCart);
        //add to localstorage
        addToDb(product.id);
    }
    return (
        <div className='products'>
            <div className='product-container'>
                {
                    products.map(product =><Product
                    key={product.id}
                    product={product}
                    handleAddtoCart={handleAddtoCart}
                    ></Product>)
                }
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;