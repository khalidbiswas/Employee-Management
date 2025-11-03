import React from 'react';
import Header from '../other/Header';
import CreateTask from '../other/CreateTask';
import AllTask from '../other/AllTask';

const AdminDashboard = () => {
    return (
        <div className='bg-[#151010] h-screen w-full'>
            <div className='bg-[#151010] h-screen w-full p-10'>
                <Header></Header>
                <CreateTask></CreateTask>
                 
            </div>
            <div >
               <AllTask></AllTask>
            </div>
        </div>
    );
};

export default AdminDashboard;