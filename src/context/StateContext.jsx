import React, { createContext, useContext, useState, useEffect } from 'react'
import { toast } from "react-hot-toast";


const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [data, setData] = useState(() => {
        const saved = localStorage.getItem("data")
        const initialValue = JSON.parse(saved)
        return initialValue || [];
        // return []
    })
    const [cartItems, setCartItems] = useState(() => {
        const saved = localStorage.getItem("cartItems");
        const initialValue = JSON.parse(saved);
        return initialValue || [];
        // return []
    }
    );
    const [totalPrice, setTotalPrice] = useState(() => {
        const initialValue = localStorage.getItem("totalPrice")
        return Number(initialValue) || Number(0)
    });

    const [totalQuantities, setTotalQuantities] = useState(() => {
        const initialValue = localStorage.getItem("totalQuantities")
        return Number(initialValue) || Number(0)
    }
    );
    const [qty, setQty] = useState(1);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
        localStorage.setItem("totalPrice", totalPrice)
        localStorage.setItem("totalQuantities", totalQuantities)
        localStorage.setItem("data", JSON.stringify(data))

    }, [cartItems, totalPrice, totalQuantities])

    let foundProduct;
    let index;

    const onAdd = (product, quantity) => {
        // console.log(product)
        // console.log("quantity :" + quantity)

        const checkProductInCart = cartItems.find(
            (item) => item.id === product.id
        );
        // console.log(product + " " + quantity)
        setTotalPrice(
            (prevTotalPrice) => Number(prevTotalPrice) + Number(product.price) * Number(quantity)
        );
        setTotalQuantities((prevTotalQuantities) => Number(prevTotalQuantities) + Number(quantity));
        // console.log(checkProductInCart)

        if (checkProductInCart) {
            const updatedCartItems = cartItems.map((cartProduct) => {
                // console.log(cartProduct.id)

                if (cartProduct.id === product.id) {

                    return {
                        ...cartProduct,
                        quantity: Number(cartProduct.quantity) + Number(quantity)
                    };
                } else {

                    return {
                        ...cartProduct
                    }
                }
            });
            // console.log(updatedCartItems)

            // const updatedCartItems = [...cartItems]
            // index = cartItems.findIndex((cartProduct) => product.id === cartProduct.id);
            // updatedCartItems[index].quantity = updatedCartItems[index].quantity + quantity

            setCartItems(updatedCartItems);

        } else {
            let item = Object.assign({}, product);

            // const item = JSON.parse(JSON.stringify(product))
            item.quantity = Number(quantity);
            // console.log(item)

            setCartItems([...cartItems, { ...item }]);
            // console.log(cartItems)
            // console.log('false')


        }
        // console.log('Cart')

        // console.log(cartItems)

        toast.success(`${qty} ${product.title} added to the cart.`);
    };

    const onRemove = (product) => {
        foundProduct = cartItems.find((item) => item.id === product.id);
        const newCartItems = cartItems.filter((item) => item.id !== product.id);

        setTotalPrice(
            (prevTotalPrice) =>
                Number(prevTotalPrice) - Number(foundProduct.price) * Number(foundProduct.quantity)
        );
        setTotalQuantities(
            (prevTotalQuantities) => Number(prevTotalQuantities) - Number(foundProduct.quantity)
        );
        setCartItems(newCartItems);
    };

    const toggleCartItemQuantity = (id, value) => {
        console.log('test')
        foundProduct = cartItems.find((item) => item.id === id);
        index = cartItems.findIndex((product) => product.id === id);
        // const newCartItems = cartItems.filter((item) => item.id !== id);
        const item = [...cartItems]

        if (value === "inc") {
            item[index].quantity += 1
            setCartItems(item)
            // setCartItems([
            //     ...newCartItems,
            //     { ...foundProduct, quantity: foundProduct.quantity + 1 },
            // ]); //อันนี้จะเป็นอันที่อัพเดตใหม่ไปอยู่ล่างสุด
            setTotalPrice((prevTotalPrice) => Number(prevTotalPrice) + Number(foundProduct.price));
            setTotalQuantities((prevTotalQuantities) => Number(prevTotalQuantities) + 1);
        } else if (value === "dec") {
            if (foundProduct.quantity > 1) {
                item[index].quantity -= 1
                setCartItems(item)
                // setCartItems([
                //     ...newCartItems,
                //     { ...foundProduct, quantity: foundProduct.quantity - 1 },
                // ]);
                setTotalPrice((prevTotalPrice) => Number(prevTotalPrice) - Number(foundProduct.price));
                setTotalQuantities((prevTotalQuantities) => Number(prevTotalQuantities) - 1);
            }
        }
    };

    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
    };

    const decQty = () => {
        setQty((prevQty) => {
            if (prevQty - 1 < 1) return 1;

            return prevQty - 1;
        });
    };

    return (
        <Context.Provider
            value={{
                showCart,
                setShowCart,
                cartItems,
                totalPrice,
                totalQuantities,
                qty,
                incQty,
                decQty,
                onAdd,
                toggleCartItemQuantity,
                onRemove,
                setCartItems,
                setTotalPrice,
                setTotalQuantities,
                data,
                setData,
                showSearch,
                setShowSearch
            }}>
            {children}
        </Context.Provider>
    );
};

export const useStateContext = () => useContext(Context);
