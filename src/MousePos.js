import * as React from 'react'
import useMouse from '@react-hook/mouse-position'
import { Input } from './App'
import { useEffect, useState, Fragment } from 'react';



export function TrackIt() {
    const [x, setX] = useState()
    const [y, setY] = useState()
    useEffect(
        () => {
            const update = (e) => {
                setX(e.x)
                setY(e.y)
            }
            window.addEventListener('mousemove', update)
            window.addEventListener('touchmove', update)
            return () => {
                window.removeEventListener('mousemove', update)
                window.removeEventListener('touchmove', update)
            }
        },
        [setX, setY]
    )
    console.log(x, y);
    return x && y ? (<h1 style={{ textAlign: 'center' }}>{`x: ${x}; y: ${y};`}</ h1>) : null
}

