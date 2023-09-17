import React from 'react'

const Test = () => {
    return (
        <div className=' bg-fuchsia-200'>
            <div className=' relative overflow-hidden h-[50px] border-orange-500 border-4'>
                <p className=' uppercase absolute w-full h-full m-0 text-center translate-x-1/2 leading-[50px] animate-marquee '>test</p>
            </div>
            <div className=' flex-col space-y-4 p-4 border-4 border-red-500 '>
                <div className='flex justify-center border border-red-600'>
                    <div className=' text-white box-border bg-red-500 h-32 w-32 p-4 border-4 text-center animate-[marquee2_1s_ease_infinite_alternate]'>Test</div>

                </div>
                <div className=' text-white box-border bg-red-500 h-32 w-32 p-4 border-4 text-center animate-marquee'>Test</div>
                <div className=' text-white box-border bg-red-500 h-32 w-32 p-4 border-4 text-center transition hover:bg-black hover:scale-150 hover:translate-x-[180px] duration-700'>Test</div>

            </div>
            <div className=' border-4 border-black'>
                {/* <div class=" text-center sm:text-left bg-slate-700 border text-white"> Test2</div> */}
                <div class="columns-2">
                    <p>Well, let me tell you something, ...</p>
                    <p class="break-after-column">Sure, go ahead, laugh...</p>
                    <p>Maybe we can live without...</p>
                    <p>Look. If you think this is...</p>
                </div>
            </div>
            <div className=' border-4 border-red-600'>
                <div class="p-4">
                    <div class="flow-root ...">
                        <div class="my-4 ...">Well, let me tell you something, ...</div>
                    </div>
                    <div class="flow-root ...">
                        <div class="my-4 ...">Sure, go ahead, laugh if you want...</div>
                    </div>
                </div>
            </div>
            <div className=' border-4 border-black'>
                <p>
                    Today I spent most of the day researching ways to ...
                    <span class="inline-flex items-baseline">
                        <img src="path/to/image.jpg" alt="" class="self-center w-5 h-5 rounded-full mx-1" />
                        <span>Kramer</span>
                    </span>
                    keeps telling me there is no way to make it work, that ...
                </p>
            </div>
            <div className=' w-full'>
                <div className='w-[300px] h-[300px] float-left border-4'>FLOAT</div>
                <p className='clear-both'>Maybe we can live without libraries, people like you and me. ...</p>
                <img src="https://www.traveloffpath.com/wp-content/uploads/2022/10/Cloud-Gate-Bean-Like-Monument-In-Chicago-Illinois-United-States-1.jpg" alt="" className='object-contain h-48 w-96 border animate-pulse ' />
            </div>
            {/* <div>
                <div class="grid grid-cols-3 gap-4">
                    <div className='border'>01</div>
                    <div class="invisible border">02</div>
                    <div className='border'>03</div>
                </div>
            </div>
            <div>
                <div class="grid grid-cols-3 gap-4">
                    <div className='border'>01</div>
                    <div class="hidden border">02</div>
                    <div className='border'>03</div>
                </div>
            </div> */}
            <div class="grid grid-rows-3 grid-flow-col gap-4 border-4 border-black">
                <div class="row-start-2 row-span-2 border-4 border-black">01</div>
                <div class="row-end-3 row-span-2 border-black border-black">02</div>
                <div class="row-start-1 row-end-4 border-black border-black">03</div>
            </div>

        </div>
    )
}

export default Test