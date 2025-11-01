import React from 'react';

const CreateTask = () => {
    return (
        <div className='bg-[#2b2a2a] text-white p-3 rounded-2xl mt-10'>
            <form className='flex justify-between m-10 '>

                <div className='w-[45%]  flex flex-col gap-2'>
                    <div className='w-full'>
                        <h3 className='text-lg'>Task Title</h3>
                        <input type="text" className='border-amber-50 border-2 rounded mt-2 placeholder:p-2 w-full' placeholder='Type the task you want to add' />
                    </div>
                    <div className='w-full'>
                        <h3 className='text-lg'>Date</h3>
                        <input type="date" className='border-amber-50 border-2 rounded mt-2 placeholder:p-2 w-full' name="" id="" />
                    </div>
                    <div className='w-full '>
                        <h3 className='text-lg'>Assign to</h3>
                        <input type="text" className='border-amber-50 border-2 rounded mt-2 placeholder:p-2 w-full' placeholder='Employee name' name="" id="" />
                    </div>

                    <div className='w-full'>
                        <h3 className='text-lg'>Category</h3>
                        <input type="text" className='border-amber-50 border-2 rounded mt-2 placeholder:p-2' placeholder='Type the category name' name="" id="" />

                    </div>
                </div>
                <div className='w-[45%] flex flex-col '>
                    <div>
                        <h3>Description</h3>
                        <textarea className='border-amber-50 border-2 rounded mt-2 placeholder:p-2 w-9/10 h-40' placeholder='Write the description' name="" id=""></textarea>
                    </div>
                    <button className=' rounded text-xl text-white p-2 bg-[#07ff1777] w-9/10'>Create Task</button>
                </div>

            </form>
        </div>
    );
};

export default CreateTask;