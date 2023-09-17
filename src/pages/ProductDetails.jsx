import React, { useEffect, useRef, useState } from 'react'
import { GoMail } from 'react-icons/go'
import { AiFillTwitterSquare, AiFillFacebook, AiOutlineGooglePlus } from 'react-icons/ai'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { elementAcceptingRef } from '@mui/utils';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useStateContext } from '../context/StateContext'

import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import Book from '../components/Book';



function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

let slideInterval
let count = 0
const ProductDetails = () => {
    const { onAdd, setShowCart, data } = useStateContext()
    const [value, setValue] = useState(0)
    const [currentIndex, setCurrentIndex] = useState(0)
    const slider = useRef()
    const cover = useRef()
    const { id } = useParams()
    const ref = useRef(null)

    // const fetchURL = "https://sheet.best/api/sheets/81a9d26d-fe2e-4cc4-a31e-2010667e7624"
    const [initialData, setInitialData] = useState([])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        // axios.get(fetchURL).then((res) => {

        const dataTemp = data.find((item) => item.id === id)
        // console.log(dataTemp)
        setInitialData(dataTemp)
        // }).catch((err) => {
        //     console.log(err)
        // })
        // slider.current.AddEventListener("mouseenter", pauseSlider)
        // slider.current.AddEventListener("mouseleave", startSlider)
        // startSlider()

        // return () => pauseSlider()
    }, [currentIndex, id])

    const startSlider = () => {
        slideInterval = setInterval(() => {
            count = (count + 1) % data[0].other_img.length
            setCurrentIndex(count)
        }, 3000)
    }

    const pauseSlider = () => {
        clearInterval(slideInterval)
    }
    const handleOnMouseEnter = (key) => {
        setCurrentIndex(key)
    }

    const slideLeft = (e) => {
        ref.current.scrollLeft -= 500;
    }

    const slideRight = (e) => {
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500
    }
    return (
        <div>
            <div className="flex justify-center items-center px-[5rem] py-[1rem] w-full">
                <div className="flex flex-col px-[2rem] w-2/5">
                    <div className='flex items-center mt-[0.5rem]'>
                        <img ref={cover}
                            className="w-[300px] h-auto block hover:scale-[1.5]"
                            src={initialData.img_cover}
                            alt={initialData.title}
                        />
                    </div>
                    {/* <div className="w-[400px] flex my-2 space-x-[1rem] py-[0.5rem]">
                                {item.other_img.map((item, count) => (
                                    <img className='w-[120px] ' ref={slider} key={count} src={item.img} alt={item.id} onMouseEnter={() => handleOnMouseEnter(count)} />
                                ))}
                            </div> */}
                </div>
                <div className="flex-col w-3/5 justify-center items-center px-[2rem] mb-[12rem]">
                    <h1 className="flex text-2xl font-bold">{initialData.title}</h1>
                    <div className='mt-[2rem]'>
                        <p className='' >ผู้เขียน : {initialData.author}</p>
                        <p className='' >สำนักพิมพ์ : {initialData.publisher}</p>
                        {/* <p className='' >หมวดหมู่ : {data.category}</p> */}
                        <p className="mt-[3rem]">ราคา
                            <span className='ml-[1rem] font-bold text-2xl'>
                                THB
                                {initialData.price}
                            </span>
                        </p>
                    </div>
                    <div className="mt-[3rem] flex">
                        <input
                            className="border rounded pl-[15px] w-[150px] h-[50px]"
                            type="number"
                            min="1"
                            max={initialData.quantity}
                            step="1"
                            defaultValue={initialData.quantity}
                        />
                        <button className="ml-[2rem] bg-blue-300 rounded-full w-[200px] h-[50px]" onClick={() => onAdd(initialData, Number(initialData.quantity))}>
                            Add
                        </button>
                        <button className="ml-[2rem] bg-orange-300 rounded-full w-[200px] h-[50px]">
                            Wishlist
                        </button>
                    </div>
                    <div className="mt-[3rem] flex flex-row w-full items-center">
                        <h1 className=" text-slate-1000">แชร์ :</h1>
                        <GoMail className="ml-[1rem]" size={30} />
                        <AiFillTwitterSquare className="ml-[1rem]" size={30} />
                        <AiFillFacebook className="ml-[1rem]" size={30} />
                        <AiOutlineGooglePlus className="ml-[1rem]" size={30} />
                    </div>
                </div>
            </div>
            <div>
                <Box sx={{ width: '100%' }} className='px-[5rem]'>
                    <Box >
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
                            <Tab label="เกี่ยวกับสินค้า" {...a11yProps(0)} />
                            <Tab label="รายละเอียด" {...a11yProps(1)} />

                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        {/* <div> */}
                        <span className='font-bold'>รายละเอียด : </span>
                        {initialData.title}
                        {/* </div> */}
                        {/* <p className='mt-[2rem]' >
                            {data.description}
                        </p> */}
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        รายละเอียด...
                    </TabPanel>

                </Box>
            </div>
            <div className='px-[5rem] pt-[3rem]' >
                <div className='flex justify-between'>
                    <h1 className='font-bold left-0' >สินค้าที่เกี่ยวข้อง</h1>
                    <p className='underline right-0' >ดูสินค้าทั้งหมด</p>
                </div>
                {/* <div className='w-full h-[200px] bg-slate-50 my-[1rem]'>

                </div> */}
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
            </div>

        </div>
        // <>
        //     {data.map((item) => (
        //         <>
        //             <div className="flex justify-center items-center px-[5rem] py-[1rem] w-full">
        //                 <div className="flex flex-col px-[2rem] w-2/5">
        //                     <div className='flex items-center mt-[0.5rem]'>
        //                         <img ref={cover}
        //                             className="w-[300px] h-auto block hover:scale-[1.5]"
        //                             src={item.img_cover}
        //                             alt={item.title}
        //                         />
        //                     </div>
        //                     {/* <div className="w-[400px] flex my-2 space-x-[1rem] py-[0.5rem]">
        //                         {item.other_img.map((item, count) => (
        //                             <img className='w-[120px] ' ref={slider} key={count} src={item.img} alt={item.id} onMouseEnter={() => handleOnMouseEnter(count)} />
        //                         ))}
        //                     </div> */}
        //                 </div>
        //                 <div className="flex-col w-3/5 justify-center items-center px-[2rem] mb-[12rem]">
        //                     <h1 className="flex text-2xl font-bold">{item.title}</h1>
        //                     <div className='mt-[2rem]'>
        //                         <p className='' >ผู้เขียน : {item.author}</p>
        //                         <p className='' >สำนักพิมพ์ : {item.publisher}</p>
        //                         <p className='' >หมวดหมู่ : {item.category}</p>
        //                         <p className="mt-[3rem]">ราคา
        //                             <span className='ml-[1rem] font-bold text-2xl'>
        //                                 THB
        //                                 {item.price.toFixed(2)}
        //                             </span>
        //                         </p>
        //                     </div>
        //                     <div className="mt-[3rem] flex">
        //                         <input
        //                             className="border rounded pl-[15px] w-[150px] h-[50px]"
        //                             type="number"
        //                             min="1"
        //                             max={item.quantity}
        //                             step="1"
        //                             defaultValue={item.quantity}
        //                         />
        //                         <button className="ml-[2rem] bg-blue-300 rounded-full w-[200px] h-[50px]">
        //                             Add
        //                         </button>
        //                         <button className="ml-[2rem] bg-orange-300 rounded-full w-[200px] h-[50px]">
        //                             Wishlist
        //                         </button>
        //                     </div>
        //                     <div className="mt-[3rem] flex flex-row w-full items-center">
        //                         <h1 className=" text-slate-1000">แชร์ :</h1>
        //                         <GoMail className="ml-[1rem]" size={30} />
        //                         <AiFillTwitterSquare className="ml-[1rem]" size={30} />
        //                         <AiFillFacebook className="ml-[1rem]" size={30} />
        //                         <AiOutlineGooglePlus className="ml-[1rem]" size={30} />
        //                     </div>
        //                 </div>
        //             </div>
        //             <div>
        //                 <Box sx={{ width: '100%' }} className='px-[5rem]'>
        //                     <Box >
        //                         <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
        //                             <Tab label="เกี่ยวกับสินค้า" {...a11yProps(0)} />
        //                             <Tab label="รายละเอียด" {...a11yProps(1)} />

        //                         </Tabs>
        //                     </Box>
        //                     <TabPanel value={value} index={0}>
        //                         <p>
        //                             <span className='font-bold'>รายละเอียด : </span>
        //                             {item.title}
        //                         </p>
        //                         <p className='mt-[2rem]' >
        //                             {item.description}
        //                         </p>
        //                     </TabPanel>
        //                     <TabPanel value={value} index={1}>
        //                         รายละเอียด...
        //                     </TabPanel>

        //                 </Box>
        //             </div>
        //             <div className='px-[5rem] pt-[3rem]' >
        //                 <div className='flex justify-between'>
        //                     <h1 className='font-bold left-0' >สินค้าที่เกี่ยวข้อง</h1>
        //                     <p className='underline right-0' >ดูสินค้าทั้งหมด</p>
        //                 </div>
        //                 <div className='w-full h-[200px] bg-slate-50 my-[1rem]'>

        //                 </div>
        //             </div>
        //         </>
        //     ))
        //     }
        // </>

    );
}

export default ProductDetails