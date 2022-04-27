import { useMouse } from 'react-use';
import React, { useEffect, useState, Fragment } from 'react';

export default function Demo(props) {
    const ref = React.useRef('chupapi');
    const { docX, docY, posX, posY, elX, elY, elW, elH } = useMouse(ref);
    console.log(docX, docY)
    return (
        <>
            <div>Mouse position in document - x:{docX} y:{docY}</div>

            <div>Mouse position in element - x:{elX} y:{elY}</div>
            <div>Element position- x:{posX} y:{posY}</div>
            <div>Element dimensions - {elW}x{elH}</div>
        </>
    );
};