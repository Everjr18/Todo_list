import React, {useEffect, useState}from 'react'
import './ProgressCircle.css'
import { TodoCounter } from './TodoCounter';


const ProgressCircle = ({size, strokeWidth, percentage,color}) => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        setProgress(percentage);
    }, [percentage]); 
    const viewBox = `0 0 ${size} ${size}`
    const radius = (size - strokeWidth) / 2
    const circumference = radius * Math.PI * 2
    const dash = (progress * circumference) / 100

    return (
        <div className='circle'>
        <svg width={size} height={size} viewBox={viewBox}>
            <circle 
            fill="none"
            stroke="#ccc"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
            />
            <circle
            fill="none"
            stroke={color}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={`${strokeWidth}px`}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
            strokeDasharray={[dash, circumference - dash]}
            strokeLinecap="round"
            style={{transition: 'all 0.3s '}}
            />
            <text
            fill='white'
            fontSize="30px"
            x="50%"
            y="50%"
            dy="10px"
            textAnchor="middle"
            >
            {`${percentage}%`}
            </text>
        </svg>
     <TodoCounter />
        </div>
    );
}

export { ProgressCircle };

