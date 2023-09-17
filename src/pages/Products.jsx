import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useStateContext } from '../context/StateContext'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import Book from '../components/Book'

const Products = () => {
    const { data, onAdd } = useStateContext()
    const [index, setIndex] = useState(0);

    return (
        <div className='w-full m-10'>
            {
                data.map((item) => (
                    <Book {...item} key={item.id} />
                ))
            }
        </div>
    )
}

export default Products