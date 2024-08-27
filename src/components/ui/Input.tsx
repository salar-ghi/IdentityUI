

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
}
 
const Input: React.FC<InputProps> = ({ placeholder, ...props }) =>  {
    return (
        <input 
            {...props}
            placeholder={placeholder}
            className="border rounded px-4 py-2 w-full"
        />
    );
};

interface InputProps2 extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const Input2: React.FC<InputProps2> = ({ label, ...props }) =>  {
    return (
        <div className="mb-4">
            <label className="block font-medium mb-2">{label}</label>
            <input 
                {...props}
                className="border rounded px-4 py-2 w-full"
            />
        </div>
    );
};


export default Input2;
