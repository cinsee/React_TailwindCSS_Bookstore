import React, { useEffect, useRef } from 'react'
import { useStateContext } from '../context/StateContext';
import { IoIosArrowBack, IoIosCloseCircleOutline } from 'react-icons/io'
import { BiShoppingBag } from 'react-icons/bi'
import { Link } from 'react-router-dom';
const Cart = () => {
    const { cartItems, totalPrice, setShowCart, totalQuantities, onRemove, toggleCartItemQuantity } = useStateContext();

    const cartRef = useRef()
    useEffect(() => {
        function handleEscapeKey(event) {
            if (event.code === 'Escape') {
                setShowCart(false)
            }

        }

        const handleEscapeClick = (event) => {
            if (!cartRef?.current?.contains(event.target)) {
                // console.log(event.target)
                setShowCart(false)
            }
        }

        document.addEventListener('keydown', handleEscapeKey)
        document.addEventListener('mousedown', handleEscapeClick)
        return () => {
            document.removeEventListener('keydown', handleEscapeKey)
            document.removeEventListener('mousedown', handleEscapeClick)
        }
    }, [])

    return (
        <div className='fixed w-[100vw] inset-0 bg-black bg-opacity-25 backdrop-blur-sm right-0 top-0 z-[100] overflow-scroll' >
            <div ref={cartRef} className='w-[600px] h-[100vw] bg-white float-right p-[40px] scroll-smooth'>
                <div className='flex items-center'>
                    <IoIosArrowBack className=' cursor-pointer' size={25} onClick={() => setShowCart(false)} />
                    <p className='text-2xl ml-4'>Your Cart
                        <span className='text-red-500'> ({totalQuantities} items)</span>
                    </p>
                    {/* {console.log(cartItems)} */}

                </div>

                {totalQuantities > 0 &&
                    <div>
                        <div>

                            {

                                cartItems.map((item) => (
                                    // { console.log(totalQuantities) }
                                    <div key={item.id} className='flex w-full p-6 transition ease-in-out delay-150 hover:ring' >
                                        {/* {console.log(item)} */}
                                        <div className='w-[160px]'>
                                            <img className=' w-[150px] h-[150px] rounded-3xl border object-contain' src={item.img_cover} alt={item.title} />
                                        </div>
                                        <div className='flex  ml-10 w-[300px]'>
                                            <div className='flex-col w-[250px] font-bold '>
                                                <h1 className=' text-xl '>{item.title}</h1>
                                                <div className='flex mt-3'>
                                                    <button type='button' className=' border w-[25px] text-red-500' onClick={() => toggleCartItemQuantity(item.id, 'dec')}>-</button>
                                                    <p className='w-[25px] text-center border'>{item.quantity}</p>
                                                    <button type='button' className='border w-[25px] text-green-600' onClick={() => toggleCartItemQuantity(item.id, 'inc')}>+</button>
                                                </div>

                                            </div>
                                            <div className='flex-col w-[100px] ml-20 '>
                                                <p className='text-xl font-semibold'>฿{item.price}</p>
                                                <IoIosCloseCircleOutline size={25} color='red' className=' mt-5 ml-5 cursor-pointer' onClick={() => onRemove(item)} />

                                            </div>
                                        </div>

                                    </div>
                                ))
                            }
                        </div>
                        <div className='flex mt-[50px] items-center p-2'>
                            <div className='w-[430px] '>
                                <h1 className=' font-bold text-2xl'>Subtotal:</h1>
                            </div>
                            <div className=' font-bold text-2xl'>
                                ฿{totalPrice.toFixed(2)}
                            </div>
                        </div>
                        <div className='flex justify-center items-center mt-3'>
                            <Link to="/bill">
                                <button className=' bg-red-500 w-[330px] h-[50px] rounded-3xl text-white font-bold text-xl uppercase transition ease-in-out delay-150 hover:scale-110' onClick={() => setShowCart(false)}>Pay with Stripe</button>
                            </Link>
                        </div>
                    </div>

                }
                {
                    totalQuantities === 0 &&
                    <div className=' mt-10'>
                        <div className='flex justify-center items-center'>
                            <BiShoppingBag size={150} />
                        </div>
                        <div className='flex justify-center items-center'>
                            <p className=' text-2xl font-bold'>Your shopping bag is empty</p>
                        </div>
                        <div className='flex justify-center items-center mt-5'>
                            <button className=' w-9/12 bg-red-500 rounded-3xl p-4 text-white font-bold uppercase transition ease-in-out delay-150 hover:scale-110' type='button' onClick={() => setShowCart(false)}>Continue Shopping</button>

                        </div>
                    </div>
                }

            </div>

        </div >
    )
}

export default Cart