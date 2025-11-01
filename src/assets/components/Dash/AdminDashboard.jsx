import React from 'react';
import Header from '../other/Header';
import CreateTask from '../other/CreateTask';

const AdminDashboard = () => {
    return (
        <div className='bg-[#151010] h-screen w-full p-10'>
            <Header></Header>
            <CreateTask></CreateTask>
        </div>
    );
};

export default AdminDashboard;