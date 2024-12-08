import React from 'react';
import banner from '../../assets/banner-main.png';
import shadow from '../../assets/bg-shadow.png';

const Banner = () => {
    return (

        <div className='relative flex flex-col items-center mx-auto mt-8 mb-6 w-full h-[545px]'>

            <div className='absolute inset-0 -z-10 flex justify-center items-center'>
                <img src={shadow} alt="" />
            </div>

            <div className='flex justify-center'>
                <img src={banner} alt="" />
            </div>

            <div>
                <h3 className='font-bold text-4xl leading-15 mt-8'>Assemble Your Ultimate Dream 11 Cricket Team</h3>
                <p className='font-medium text-2xl mt-4'>Beyond Boundaries Beyond Limits</p>
            </div>

            <button className='border border-yellow-400 w-[200px] h-[64px] mt-8 rounded-2xl'>
                <div className=' flex justify-center items-center'>
                    <h6 className=' bg-yellow-400 w-[184px] h-[48px] rounded-xl flex justify-center items-center'><p className='font-bold text-base'>Claim Free Credit</p></h6>
                </div>
            </button>
        

        </div>
       



    );
};
export default Banner;