import React, { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { IoCartOutline } from 'react-icons/io5'
import { FaUserCircle } from 'react-icons/fa'
import { useStateContext } from '../context/StateContext';
import Cart from './Cart';
import { Link } from 'react-router-dom'

const Navbar = () => {

    const { showCart, setShowCart, totalQuantities, cartItems, totalPrice, showSearch, setShowSearch } = useStateContext();

    // useEffect(() => {
    //     localStorage.setItem("cartItems", JSON.stringify(cartItems))
    //     localStorage.setItem("totalPrice", totalPrice)
    //     localStorage.setItem("totalQuantities", totalQuantities)

    // }, [cartItems, totalPrice, totalQuantities])
    useEffect(() => {
        const searchIcon = document.querySelector(`.search-icon`)
        const searchInput = document.querySelector(`.search-input`)

        const toggleSearch = event => {
            event.stopPropagation();

            if (!event.target.closest('.search-input')) {

                searchInput.classList.toggle('active');

                searchInput.classList.contains('active')
                    ? document.addEventListener('click', toggleSearch)
                    : document.removeEventListener('click', toggleSearch);
            }
        }

        searchIcon.addEventListener('click', toggleSearch);

        return () => {
            searchIcon.removeEventListener('click', toggleSearch)
        }
    }, [])

    return (
        <div className='flex flex-col md:flex-row lg:flex-row justify-between px-[5rem] py-[1rem] border w-full z-[10]'>
            <div className='flex justify-between items-center'>
                <div className='logo flex items-center'>
                    <Link to={"/"}>
                        <a href='/' className='text-2xl font-bold'>Book</a>
                    </Link>
                </div>
                <ul className='menu flex flex-col md:flex-row lg:flex-row items-center'>
                    <Link to="/products">
                        <li className='mx-[20px] md:my-[0px]'><a href="">สินค้าใหม่</a> </li>
                    </Link>
                    <Link to="/products">
                        <li className='mx-[20px] md:my-[0px]'><a href="">สินค้าขายดี</a></li>
                    </Link>
                    <Link to="/products">
                        <li className='mx-[20px] md:my-[0px]'><a href="">สินค้าลดราคา</a></li>
                    </Link>
                    <Link to="/products">
                        <li className='mx-[20px] md:my-[0px]'><a href="">สินค้าแนะนำ</a></li>
                    </Link>


                </ul>
            </div>
            <div className='flex items-center'>
                <div className='flex justify-center items-center'>
                    <BsSearch className='search-icon mx-[5px] relative z-10 cursor-pointer' size={20} onClick={() => setShowSearch(true)} />
                    <input className="search-input rounded-xl text-2xl text-blue-500 outline-none focus:outline-none:focus" type="search" placeholder="Search..." />
                </div>

                <button type="button" className="flex" onClick={() => setShowCart(true)}>
                    <IoCartOutline className='mx-[5px]' size={20} />
                    {
                        totalQuantities > 0 && <span className="badge" value={totalQuantities}></span>
                    }
                </button>
                {showCart && <Cart />}

                <FaUserCircle className='mx-[5px]' size={20} />

            </div>

        </div>
    )
}

export default Navbar