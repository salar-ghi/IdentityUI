"use client"
import Signup from "@/components/Signup";
import Signin from "@/components/Signin";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from 'react'

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
          setIsAuthenticated(true);
      }
  }, []);

  return (
      <div className="flex justify-center items-center h-screen bg-gray-200">
         { isAuthenticated ? 
           <Link 
            href="/weather"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Weather
          </Link>
        :
        <>
          <div className="flex flex-wrap flex-col">
          <Link 
            href="/auth/signup"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Signup
          </Link>
          </div>
          <br />
          <hr />
        
          <div className="flex flex-col">
            <Link
              href="/auth/signin"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Signin
            </Link>
          </div>
        </>
}
      </div>
  );
}
