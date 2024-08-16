"use client"
import React, { useEffect , useState } from 'react'
import base from '@/app/api/base';

const Signin: React.FC = () => {
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await base.get('/WeatherForecast/Get');
                setData(response.data);
            } catch(err) {
                setError(err.message);
            }
        };
        fetchData();        
    }, []);

    if(error) {
        return <div>Error: {error}</div>;
    }

    if(!data) {
        return <div>Loading... {error}</div>;
    }
  return (
    <div>
        <h1>Data from Api Signin</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Signin