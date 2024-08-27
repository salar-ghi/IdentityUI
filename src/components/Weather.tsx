"use client"
import React, { useEffect , useState } from 'react'
import base from '@/app/api/base';

const Weather: React.FC = () => {
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            if(token) {
                try {
                    const response = await base.get('/WeatherForecast/Get', {
                        headers : {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    setData(response.data);
                } catch(err) {
                    setError(err?.message);
                }
            } else {
                setError('No token found');
            }
        };
        fetchData();        
    }, []);

    if(error) return <div>Error: {error}</div>;
    if(!data) return <div>Loading... {error}</div>;
    return (
        <div>
            <h1>Data from Api Signin</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default Weather