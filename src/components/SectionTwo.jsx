import React, { useEffect, useRef, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
// import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import Book from './Book';
// import data1 from '../data';
import axios from 'axios';
import { useStateContext } from '../context/StateContext';
import { useStepContext } from '@mui/material';
import { Link } from 'react-router-dom'
// import { darkScrollbar } from '@mui/material';

// const fetchURL = "https://www.googleapis.com/books/v1/volumes?q=search+test"
// let count = 0
// let slideInterval
const SectionTwo = ({ fetchURL }) => {

    // let [data, setData] = useState([])
    const { data, setData } = useStateContext()
    useEffect(() => {
        console.log(data)
        if (data.length === 0) {
            axios.get(fetchURL).then((response) => {
                // console.log(response)
                setData(response.data)
            }).catch(function (error) {
                console.error(error);
            });
        }

    }, [fetchURL])
    const ref = useRef(null)

    const slideLeft = (e) => {
        ref.current.scrollLeft -= 500;
    }

    const slideRight = (e) => {
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500
    }
    return (
        <div className=''>
            <div className='flex justify-between h-full w-full px-[5rem] py-4'>
                <h1 className='text-1xl font-bold left-0'>สินค้าใหม่</h1>
                <Link to="/products">
                    <a className='text-[12px] underline right-0'>ดูสินค้าขายดีทั้งหมด</a>
                </Link>
            </div>

            <div className='flex justify-between px-[5rem] items-center '>
                <MdChevronLeft className='z-[10] left-0 cursor-pointer' size={40} onClick={slideLeft} />
                <div id="slider" ref={ref} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {
                        data.map((item) => (
                            <Book {...item} key={item.id} />
                        ))
                    }
                </div>
                <MdChevronRight className='z-[10] right-0 cursor-pointer' size={40} onClick={slideRight} />
            </div>
        </div >
    )
}

export default SectionTwo