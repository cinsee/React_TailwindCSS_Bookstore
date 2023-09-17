import React from 'react'
import { useEffect, useState } from 'react'
import { useStateContext } from '../context/StateContext'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
const Bill = () => {
    const { cartItems, totalPrice, setShowCart, totalQuantities, onRemove, toggleCartItemQuantity } = useStateContext()

    // useEffect(() => {
    //     setShowCart(false)

    // }, [])

    return (
        <div className='flex justify-center mx-5'>
            <div className='basis-3/4 h-full p-10'>
                <table className=' w-full table-auto border-collapse border border-slate-300 '>
                    <thead>
                        <tr className='border-collapse border border-slate-300 h-[50px]'>
                            <th></th>
                            <th className=' text-slate-700 font-semibold uppercase'>product</th>
                            <th className='text-slate-700 font-semibold uppercase'>price</th>
                            <th className='text-slate-700 font-semibold uppercase '>quantity</th>
                            {/* <th>total</th> */}
                            <th className='text-slate-700 font-semibold uppercase px-5'>delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item) => (
                            <tr className=' hover:ring-2'>
                                <td className='p-5'><img className='w-[150px] h-[150px] object-contain p-2 border' src={item.img_cover} alt={item.title} /></td>
                                <td className=''><span className=' w-[20px]'>{item.title}</span></td>
                                <td className=''><span className=' w-[20px]'>฿{Number(item.price).toFixed(2)}</span></td>
                                <td className=''>
                                    <div className='flex justify-center'>
                                        <button className='border w-[20px]' onClick={() => toggleCartItemQuantity(item.id, 'dec')}>-</button>
                                        <span className=' w-[40px] bg-slate-100 border flex justify-center'>{item.quantity}</span>
                                        <button className='border w-[20px]' onClick={() => toggleCartItemQuantity(item.id, 'inc')}>+</button>
                                    </div>
                                </td>
                                <td className=' px-10'> <span className=' w-[20px] flex justify-center cursor-pointer' onClick={() => onRemove(item)}><RiDeleteBin5Line size={18} /></span></td>

                            </tr>
                        ))}
                        {/* <tr className='border h-[50px]'>
                            <td className=''>
                                <div className='flex justify-center items-center p-5'>
                                    <button className='rounded-full bg-slate-100 w-[250px] p-3 shadow-md'>
                                        Continue Shopping
                                    </button>
                                </div>
                            </td>

                        </tr> */}
                    </tbody>
                </table>
                <div className='flex justify-end items-center p-5 border border-slate-300'>
                    <Link to="/">
                        <button className='rounded-full bg-slate-100 w-[250px] p-3 shadow-lg transition hover:bg-orange-500 hover:text-white duration-150'>
                            Continue Shopping
                        </button>
                    </Link>
                </div>
            </div>
            <div className='basis-1/4 h-[100vw] p-10 border border-slate-300 mt-10'>
                <h1 className=' font-bold text-2xl uppercase border-b-2'>cart total</h1>
                <div className='block w-full h-[40px] mt-5 border-b-2  items-center'>
                    <p className='float-left'>SubTotal:</p>
                    <p className='float-right'>฿{totalPrice.toFixed(2)}</p>
                </div>

                <div className='block  w-full h-[40px] mt-5 border-b-2 items-center'>
                    <p className='float-left'>Sales Tax(7%):</p>
                    <p className='float-right'>฿{(totalPrice * 0.07).toFixed(2)}</p>
                </div>
                <div className='mt-10'>
                    <form action="">
                        <div>
                            <label >Country</label>
                            <input type="text" className=' bg-slate-100 p-2 rounded-sm text-sm w-full hover:ring' placeholder='Enter your Country' />
                        </div>
                        <div className='mt-5'>
                            <label >State/Province</label>
                            <input type="text" className=' bg-slate-100 p-2 rounded-sm text-sm w-full hover:ring' placeholder='Enter your State/Province' />
                        </div>
                        <div className='mt-5'>
                            <label >Suburb/City</label>
                            <input type="text" className=' bg-slate-100 p-2 rounded-sm text-sm w-full hover:ring' placeholder='Enter your Suburb/City' />
                        </div>
                        <div className='mt-5'>
                            <label >Zip/PostCode</label>
                            <input type="text" className=' bg-slate-100 p-2 rounded-sm text-sm w-full hover:ring' placeholder='Enter your Zip/PostCode' />
                        </div>
                        <div className='flex mt-5 bg-orange-500 h-[40px] text-white justify-center items-center select-none'>
                            <p>Total:</p>
                            <p className='ml-10'>฿{((totalPrice * 0.07) + totalPrice).toFixed(2)}</p>
                        </div>
                        <Link to="/">
                            <button className='mt-3 bg-slate-700 h-[40px] text-white uppercase text-sm w-full transition hover:scale-110 duration-150  '>Proceed to checkout</button>
                        </Link>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Bill