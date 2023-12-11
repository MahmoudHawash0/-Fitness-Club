import React from 'react'
import { InfinitySpin } from 'react-loader-spinner';
import './Loader.css'
export const Loader = () => {

    const loaderProps = {
        loading: true,
        size: 120,
        duration: 3,
        colors: ["#1460e5", "#1460e5"]
    };

    return (
        <div className='loader'>
            <InfinitySpin {...loaderProps} />
            <h2>Fitness Club</h2>
        </div>
    )
}
