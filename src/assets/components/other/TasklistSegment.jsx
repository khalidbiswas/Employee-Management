import React from 'react';

const TasklistSegment = ({data}) => {
    console.log(data.stats);
    
    return (
        <div className='flex mt-10 justify-between gap-4 screen'>
            <div className='rounded-xl bg-blue-500 py-6 px-9 w-[45%]'>
                <h1 className='text-white text-3xl font-bold '>{data.tasks.length}</h1>
                <p className='text-white text-xl mt-.5 font-medium'>New Task</p>
            </div>
            <div className=' rounded-xl bg-red-500 py-6 px-9 w-[45%]'>
                <h1 className='text-white text-3xl font-bold '>{data?.stats?.new_task??"N/A"}
</h1>
                <p className='text-white text-xl mt-.5 font-medium'>Active</p>
              
                
            </div>
            <div className='rounded-xl bg-green-500 py-6 px-9 w-[45%]'>
                <h1 className='text-white text-3xl font-bold '></h1>
                <p className='text-white text-xl mt-.5 font-medium'>Compleated</p>
            </div>
            <div className='rounded-xl bg-yellow-500 py-6 px-9 w-[45%]'>
                <h1 className='text-white text-3xl font-bold '>0</h1>
                <p className='text-white text-xl mt-.5 font-medium'>Failed</p>
            </div>
        </div>
        
    );
};

export default TasklistSegment;