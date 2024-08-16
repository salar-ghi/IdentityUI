"use client"
import React, { useEffect , useState } from 'react'
import { useRouter } from 'next/navigation';
import base from '@/app/api/base';

const Signin: React.FC = () => {
    const [nationalId, setNationalId] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await base.post('/Auth/login', {
                nationalId, password
            });
            localStorage.setItem('token', response.data.token);
            console.log('response.data.token ===>', response.data.token)
            setMessage('Login successful!');
            setIsSuccess(true);
            router.push('/');
        } catch (error) {
            setMessage(`Error: ${error.response?.data?.message || error.message}`);
            setIsSuccess(false);
        }
    };
    return (
        <div className="flex items-center justify-center max-h-screen">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <div className="mb-4">
                    <input
                        type="text" name="nationalId" placeholder="National Id"
                        value={nationalId}
                        onChange={(e) => setNationalId(e.target.value)}
                        className="!border p-2 w-full rounded" required
                    />
                </div>
                <div className="mb-4">
                    <input type="password" name="password" placeholder="Password"
                        value={password} onChange={(e) => setPassword(e.target.value)} 
                        className="border p-2 w-full rounded"/>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                    Login
                </button>
                {message && (
                    <p className={`mt-4 ${isSuccess ? 'text-green-500' : 'text-red-500'}`}>
                        {message}
                    </p>
                )}
            </form>
        </div>
    );    
};

export default Signin