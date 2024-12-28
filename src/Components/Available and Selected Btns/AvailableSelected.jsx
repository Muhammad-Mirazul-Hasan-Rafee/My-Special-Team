import React from 'react';

const AvailableSelected = ({select}) => {
    return (
        
        <>
            <div className='flex justify-between'>

                <div className='mt-8'><h3 className='font-bold text-2xl'>Available Players</h3></div>

                <div className='flex gap-4 mt-4'>
                    <button className='w-[138px] h-[48px] bg-yellow-400 rounded-xl font-bold text-base'>Available</button>
                    <button className='w-[141px] h-[48px] font-thin border border-current rounded-xl'>Selected(<span>{select}</span>)</button>
                </div>
            </div>



        </>



    );
};

export default AvailableSelected;