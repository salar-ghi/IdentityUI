"use client"
import React, { useState } from 'react'
// import register from '@/app/api/register';
import base from '@/app/api/base';

const Signup: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [fullName, setFullName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [nationalId, setNationalId] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);


    // postalCode, bourseCode,
    const validate = (): boolean => {
        const newErrors: { [key: string]: string } = {};
        const phoneRegex = /^[0-9]{10}$/; // Adjust based on your phone number format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) newErrors.email = "Invalid email format";
        if (!phoneRegex.test(phone)) newErrors.phone = "Invalid phone number";
        if (nationalId.length < 10) newErrors.nationalId = "National ID must be at least 10 characters";
        if (password.length < 6) newErrors.password = "Password must be at least 6 characters";
        if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validate()) {
            // Call the register API
            try {
                const response = await base.post('/Auth/register', { 
                    nationalId,
                    postalCode : "1816159599",
                    bourseCode: "1425369875",
                    email, 
                    password
                });
                setMessage(`Success: ${response.data.message}`);
                setIsSuccess(true);

                setEmail('');
                setFullName('');
                setPhone('');
                setNationalId('');
                setPassword('');
                setConfirmPassword('');

            } catch (err) {
                console.error(err);
                setMessage(`Error: ${err.response?.data?.message || err.message}`);
                setIsSuccess(false);
            }
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">Register</h2>

                <div className="mb-4">
                    <input type="text" name="fullName" placeholder="Full Name"
                        value={fullName} onChange={(e) =>  setFullName(e.target.value)} 
                        className="!border p-2 w-full rounded"/>
                    {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
                </div>                


                <div className="mb-4">
                    <input type="email" name="email" placeholder="Email"
                        value={email} onChange={(e) =>  setEmail(e.target.value)} 
                        className="border p-2 w-full rounded"/>
                    {errors.email && <p className="text-red-500">{errors.email}</p>}
                </div>

                <div className="mb-4">
                    <input type="text" name="phone" placeholder="Phone Number"
                        value={phone} onChange={(e) => setPhone(e.target.value)} 
                        className="border p-2 w-full rounded"/>
                    {errors.phone && <p className="text-red-500">{errors.phone}</p>}
                </div>

                <div className="mb-4">
                    <input type="text" name="nationalId" placeholder="National ID"
                    value={nationalId} onChange={(e) => setNationalId(e.target.value)} 
                    className="border p-2 w-full rounded"/>
                    {errors.nationalId && <p className="text-red-500">{errors.nationalId}</p>}
                </div>

                <div className="mb-4">
                    <input type="password" name="password" placeholder="Password"
                        value={password} onChange={(e) => setPassword(e.target.value)} 
                        className="border p-2 w-full rounded"/>
                    {errors.password && <p className="text-red-500">{errors.password}</p>}
                </div>

                <div className="mb-4">
                    <input type="password" name="confirmPassword" placeholder="Confirm Password"
                        value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} 
                        className="border p-2 w-full rounded"/>
                    {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
                </div>

                <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Sign Up</button>
                {/* {message && <p className="mt-4 text-red-500">{message}</p>} */}

                {message && (
                    <p className={`mt-4 ${isSuccess ? 'text-green-500' : 'text-red-500'}`}>
                        {message}
                    </p>
            )}
              </form>
            </div>
    );
};

export default Signup;