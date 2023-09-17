import React, { useEffect } from 'react'
import { useState, useRef, useLocation } from 'react'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { useStateContext } from '../context/StateContext';
import { Link } from 'react-router-dom'


const Book = (props) => {
    // const location = useLocation();
    // const [id, setId] = useState(location.state?.id);

    const [index, setIndex] = useState(0);
    const { decQty, incQty, qty, onAdd, setShowCart, cartItems } = useStateContext();
    const item = props
    // const [locationId, setLocationId] = useState(location.state?.id)
    let [isButton, setIsButton] = useState(false)
    let imgHover = useRef()
    const handleOnMouseLeave = (event) => {
        setIsButton(false)
    }
    const handleOnMouseEnter = (event) => {
        setIsButton(true)
    }

    useEffect(() => {
    }, [item.id])

    const handleBuyNow = () => {
        // console.log('item')
        // console.log(item)
        // console.log('cartItems')
        // console.log(cartItems)
        onAdd(item, 1);

        // setShowCart(true);
    }

    const render = (vote) => {
        switch (vote) {
            case "0": return (
                <div className='flex'>
                    <AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar />
                </div>
            )
            case "1": return (
                <div className='flex'>
                    <AiFillStar color='FFCB42' /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar />
                </div>
            )
            case "2": return (
                <div className='flex'>
                    <AiFillStar color='FFCB42' /><AiFillStar color='FFCB42' /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar />
                </div>
            )
            case "3": return (
                <div className='flex'>
                    <AiFillStar color='FFCB42' /><AiFillStar color='FFCB42' /><AiFillStar color='FFCB42' /><AiOutlineStar /><AiOutlineStar />
                </div>
            )
            case "4": return (
                <div className='flex'>
                    <AiFillStar color='FFCB42' /><AiFillStar color='FFCB42' /><AiFillStar color='FFCB42' /><AiFillStar color='FFCB42' /><AiOutlineStar />
                </div>
            )
            case "5": return (
                <div className='flex'>
                    <AiFillStar color='FFCB42' /><AiFillStar color='FFCB42' /><AiFillStar color='FFCB42' /><AiFillStar color='FFCB42' /><AiFillStar color='FFCB42' />
                </div>
            )
            default: return null

        }
    }

    return (
        <div ref={imgHover} className='sm:w-[200px] md:w-[240px] lg:w-[340px] hover:shadow-lg inline-block cursor-pointer p-[2rem] ' onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} >

            <Link to={"/product/" + item.id}>
                <div className=''>
                    <div className='flex justify-center items-center'>
                        <img className='w-[200px] h-[200px] object-scale-down border' src={item.img_cover} alt={item.title} />
                    </div>
                </div>
            </Link>

            {
                isButton &&

                <div id={'button'} className='flex justify-center items-center mt-[1rem]'>
                    <button className='w-[150px] h-[40px] rounded-full border-4 border-blue-700 text-blue-700' onClick={handleBuyNow} >Add To Cart</button>
                </div>
            }




            <div className='flex col mt-[2rem]'>
                {render(item.vote)}
            </div>
            <div className='w-full h-full whitespace-normal '>
                <p className='break-words'>{item.title}</p>
            </div>
            <div>
                <p className='flex'>{"(" + item.id + ")"}</p>

            </div>

            <div className='mt-[1rem]'>
                <p className='text-2xl font-bold'>THB{Number(item.price).toFixed(2)}</p>
            </div>
        </div>
    )
}

export default Book