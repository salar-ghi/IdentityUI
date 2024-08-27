'use client'
import React, { useState } from 'react'
import base from '@/app/api/base';
import Button from './ui/Button';
import Input from './ui/Input';
import Input2 from './ui/Input';


const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await base.post('/Auth/forgotPassword', {
                body : JSON.stringify({email}),
            });

            // const data = await response.json();
            setMessage(response.data.message);
        } catch(error) {
            console.error(error);
            setMessage('An error occured. please try again later.');
        } finally {
            setLoading(false);
        }
    };

  return (
    <div className='flex justify-center items-center min-h-screen'>
        <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
            <h1 className='text-2xl font-bold mb-4'>Forget Password</h1>
            <form onSubmit={handleSubmit}>
            <Input2
                label="Email Address" 
                type="email" 
                placeholder="enter your email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
            />
                {/* <div className='mb-4'>
                    <label htmlFor='email' className='block font-medium mb-2'>Email Address</label>
                    <Input id="email" type="email" placeholder="enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div> */}
                <Button type="submit" disabled={loading}>
                    {loading ? 'Loading...' : 'Reset Password'}
                </Button>
            </form>
            {message && (
                <div className='mt-4 p-4 rounded bg-green-100 text-green-800'>
                    {message}
                </div>
            )}
        </div>
    </div>
  );
};

export default ForgotPassword