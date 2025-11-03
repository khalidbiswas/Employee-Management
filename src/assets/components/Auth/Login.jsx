import React, { useState } from 'react';

const Login = ({handleLogIn}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    
    const handleSubmit = (e) => {
        e.preventDefault()
       handleLogIn(email, password)

        setEmail('');
        setPassword('');

    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-yellow-300 ">
            <div className="w-[380px]  shadow-2xl rounded-2xl bg-blue-300 p-8 border border-gray-200 hover:shadow-teal-400/40 transition-all duration-300">
                <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
                    Welcome Back 👋
                </h2>

                <form onSubmit={(e) => { handleSubmit(e) }} className="flex flex-col space-y-5">

                    <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        required
                        placeholder="Enter your email"
                        className="border border-gray-300 bg-white text-gray-800 placeholder:text-gray-400 rounded-full px-5 py-3 text-base focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm transition"
                    />

                    <input
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required
                        placeholder="Enter your password"
                        className="border border-gray-300 bg-white text-gray-800 placeholder:text-gray-400 rounded-full px-5 py-3 text-base focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm transition"
                    />

                    <button
                        type="submit"
                        className="mt-2 bg-linear-to-r from-teal-500 to-emerald-500 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold py-3 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-emerald-400/40"
                    >
                        Log in
                    </button>
                </form>

                <p className="text-center text-sm text-gray-700 mt-6">
                    Don’t have an account?{" "}
                    <a href="#" className="text-teal-600 font-medium hover:underline">
                        Sign up
                    </a>
                </p>
            </div>
        </div>

    );
};

export default Login;