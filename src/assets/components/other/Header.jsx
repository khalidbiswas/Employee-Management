import React from 'react';

const Header = () => {
    return (
        <div className='flex items-end justify-between'>
            <h1 className='text-white'>
                <span className='text-2xl font-medium'>Hello</span>
                <br />
                <span className='text-3xl font-semibold'>Khalid 👋</span>
            </h1>
            <div>
                <button className='bg-red-400 rounded text-white text-md font-medium px-4 py-1'> Log out</button>
            </div>
        </div>
    );
};

export default Header;