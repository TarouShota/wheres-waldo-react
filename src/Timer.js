/* This is importing the useTimer hook from the react-timer-hook library. */
import React, { useState } from 'react';
import { useTimer } from 'react-timer-hook';

export default function MyTimer({ expiryTimestamp, changeState }) {

    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp, onExpire: () => changeState('losing') });

    return (

        <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem' }}>
                <span>{minutes}</span>:<span>{seconds}</span>
            </div>

        </div>
    );
}
/* Using the useTimer hook to create a timer that counts down to the expiryTimestamp. */

