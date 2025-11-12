import React from 'react';
import Header from '../other/Header';
import CreateTask from '../other/CreateTask';
import AllTask from '../other/AllTask';

const AdminDashboard = ({data}) => {
    
    
    return (
        <div className='bg-[#151010] h-screen w-full'>
            <div className='bg-[#151010] h-screen w-full p-10'>
                <Header data={data} />
                <CreateTask data={data}/>
                 
            </div>
            <div >
               <AllTask data={data}></AllTask>
            </div>
        </div>
    );
};

export default AdminDashboard;