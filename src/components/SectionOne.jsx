import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { useRef } from 'react'

const banner = [
    // { id: 1, img: "https://cf.shopee.co.th/file/09e942eb5a057da1a07bb2219f5c866b" },
    // { id: 2, img: "https://www.investerest.co/wp-content/uploads/2020/03/S__61325518.jpg%22;" },
    // { id: 3, img: "https://www.investerest.co/wp-content/uploads/2018/08/Slide1.jpg" },
    // { id: 4, img: "https://www.investerest.co/wp-content/uploads/2018/08/Slide2.jpg" },
    { id: 1, img: "https://drive.google.com/u/0/uc?id=1LxBBrzjysSIqyYFhPAPXq119fv_gjReb" },
    { id: 2, img: "https://drive.google.com/u/0/uc?id=1sW41Jf112HX00WeZM8yZ-HbBBurtR2d5" }
]

let slideInterval
let count = 0

const SectionOne = () => {
    let slider = useRef()
    let [currentIndex, setCurrentIndex] = useState(0)
    useEffect(() => {
        ``
        // console.log("Trigger use effect hook")
        slider.current.addEventListener("mouseenter", pauseSlider)
        slider.current.addEventListener("mouseleave", startSlider)
        startSlider()
        return () => pauseSlider()

    }, [])

    const startSlider = () => {
        slideInterval = setInterval(() => {
            handleOnNextClick()
            // console.log("Set Interval")

        }, 3000)
    }

    const pauseSlider = () => {
        clearInterval(slideInterval)
        // console.log("Clear Interval")

    }

    const handleOnNextClick = () => {
        count = (count + 1) % banner.length
        setCurrentIndex(count)
    }
    const handleOnPreviousClick = () => {
        count = (currentIndex + banner.length - 1) % banner.length
        setCurrentIndex(count)
    }
    return (
        <div className='border w-full h-[350px] flex justify-center items-center px-[5rem] py-[2rem]'>
            <div className='relative w-full flex justify-center items-center aspect-w-16 aspect-y-9'>
                <MdChevronLeft onClick={handleOnPreviousClick} className='left-0 rounded-full absolute opacity-50 cursor-pointer z-10' size={40} />
                <div className='w-[900px] h-auto block'>
                    <img ref={slider} src={banner[currentIndex].img} alt={banner[currentIndex].id} className=' object-contain' />
                </div>
                <MdChevronRight onClick={handleOnNextClick} className='right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10' size={40} />

            </div>
        </div>
    )
}

export default SectionOne

// import React, { useEffect } from 'react'
// import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
// import { useRef } from 'react'

// let slideInterval
// const SectionOne = () => {
//     let count = 0
//     let slider = useRef()
//     const banner = [
//         { id: 1, img: "https://cf.shopee.co.th/file/09e942eb5a057da1a07bb2219f5c866b" },
//         { id: 2, img: "https://www.investerest.co/wp-content/uploads/2020/03/S__61325518.jpg%22;" },
//         { id: 3, img: "https://www.investerest.co/wp-content/uploads/2018/08/Slide1.jpg" },
//         { id: 4, img: "https://www.investerest.co/wp-content/uploads/2018/08/Slide2.jpg" }
//     ]
//     useEffect(() => {
//         console.log("Trigger use effect hook")
//         slider.current.addEventListener("mouseenter", pauseSlider)
//         slider.current.addEventListener("mouseleave", startSlider)
//         startSlider()


//         return () => pauseSlider()

//     }, [])

//     const startSlider = () => {
//         slideInterval = setInterval(() => {
//             handleOnNextClick()
//             console.log("Set Interval")

//         }, 3000)
//     }

//     const pauseSlider = () => {
//         clearInterval(slideInterval)
//         console.log("Clear Interval")

//     }

//     const handleOnNextClick = () => {
//         if (count < banner.length - 1) {
//             count = count + 1
//             slider.current.src = banner[count].img

//         }
//     }
//     const handleOnPreviousClick = () => {
//         if (count > 0) {
//             count = count - 1
//             slider.current.src = banner[count].img

//         }
//     }
//     return (
//         <div className='border w-full h-[350px] flex justify-center items-center px-[5rem] py-[2rem]'>
//             <div className='relative w-full flex justify-center items-center aspect-w-16 aspect-y-9'>
//                 <MdChevronLeft onClick={handleOnPreviousClick} className='left-0 rounded-full absolute opacity-50 cursor-pointer z-10' size={40} />
//                 <img ref={slider} src={banner[count].img} alt={banner[count].img} className='w-[300px] h-auto block' />
//                 <MdChevronRight onClick={handleOnNextClick} className='right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10' size={40} />

//             </div>
//         </div>
//     )
// }

// export default SectionOne