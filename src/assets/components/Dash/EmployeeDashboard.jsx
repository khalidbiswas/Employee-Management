import React from 'react';
import Header from '../other/Header';
import TasklistSegment from '../other/TasklistSegment';
import TaskList from '../../../TaskList/TaskList';

const EmployeeDashBoard = () => {
    return (
        <div className='p-10 bg-[#1C1C1C] h-screen'>
            <Header></Header>
            <TasklistSegment></TasklistSegment>
            <TaskList></TaskList>
        </div>
    );
};

export default EmployeeDashBoard;