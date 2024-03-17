import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Page404() {

    const navigate = useNavigate();
    const [count, setCount] = useState(5);

    useEffect(() => {
        const countdown = setInterval(() => {
            if (count > 0) {
                setCount(count - 1);
            } else {
                clearInterval(countdown);
                navigate('/');
            }
        }, 1000);

        return () => clearInterval(countdown);
    }, [count, navigate]);

    return (
        <>
            <div className="text-center madimi-one-regular mb-4 text-light" style={{ marginTop: '20vh', fontSize:'100px' }}>
                <strong>404! Page Not Found</strong>
                <br/>
                <h1 className='text-dark'>Redirecting to home in {count}</h1>
            </div>
        </>
    )
}
