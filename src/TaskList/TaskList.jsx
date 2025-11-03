import React from 'react';

const TaskList = () => {
    return (
        <div  className='flex hide-scrollbar justify-start items-center h-[55%] w-full  p-4 mt-6 gap-4 flex-nowrap overflow-x-auto'>
           

            
            <div className='shrink-0 h-full  w-[300px] bg-red-400 rounded-xl text-white p-4'>
                <div className=' flex  justify-between items-center'>
                    <h2 className='bg-red-600 px-2 py-1 rounded text-sm'>High</h2>
                    <h3 className=''>date</h3>
                </div>
                <h2 className='text-xl mt-5'>Title</h2>
                <p className='text-sm mt-2'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum iure, iusto dicta fugit odit perspiciatis.
                </p>

            </div>
            
        </div>
    );
};

export default TaskList;