import logo from './logo.svg';

import './App.css';
import React, { useEffect, useState, Fragment } from 'react';
import Cursor from "react-cursor-follow";
import mainImage from './main-image.jpg'
import turnipHead from './turnip-head.png'
import bowser from './Super-Mario-Bowser.png'
import ryuk from './shinigami-ryu.png'
import patrick from './patrick.png'
import tom from './tom.png'
import { useTimer } from 'react-timer-hook';
import Demo from './PositionTracker';
import { useMouse } from 'react-use';
import MyTimer from './Timer';
import { characters, chars } from './main-script';
import { getNextKeyDef } from '@testing-library/user-event/dist/keyboard/getNextKeyDef';







/**
 * It sets the state of the input to the value of the input.
 * @returns A form with an input field.
 */
export function Input() {




  // 5 minutes timer


  window.time = new Date();
  window.time.setSeconds(314);

  const [gameState, setGameState] = useState('starting');//starting,playing,losing,winning

  const [nameInput, setNameInput] = useState('');
  // const [gameStart, setGameStart] = useState(false);

  const [chooseObject, setChooseObject] = useState(false);
  const [alertBlock, setAlertBlock] = useState('hidden');//right,wrong

  window.charList = []


  const ref = React.useRef(null);
  const { docX, docY } = useMouse(ref);


  function InputChange(nameInput, setNameInput) {

    setNameInput(nameInput);
  }


  function gameStart() {
    setGameState('playing');

  }


  function MyButton() {
    return (
      <button onClick={gameStart}>
        Start
      </button>
    )
  }
  /* A function that is called when the user clicks on the image. It is used to display the dropdown
  menu. */
  function GotClicked() {
    console.log(`IN ELEM ${docX}, ${docY}`);
    //bowser Y 2345-2480 
    dropDown(docX, docY);
    setChooseObject(true);

    // console.log(`IN DOC ${docX}, ${docY}`);
  }

  /* Checking if the character is in the position of the click. */
  function verifyClick(toVerify) {
    return (chars[`${toVerify}`].position.includes(docY)) ? chars[`${toVerify}`].clicked() : false;

  }

  /* A function that is called when the user clicks on the dropdown menu. It sets the state of the
  dropdown menu to false, so it disappears. It also checks if the character that the user clicked on
  is the right one. If it is, it sets the state of the alert block to right, if not, it sets it to
  wrong. It also creates a promise that waits for 1.5 seconds and then sets the state of the alert
  block to hidden. */
  async function listClick(e) {
    setChooseObject(false);

    (verifyClick(e.target.innerText)) ? setAlertBlock('right') : setAlertBlock('wrong');


    let promise = new Promise((resolve, reject) => {

      setTimeout(() => resolve('waiting'), 1500)
    })

    promise.then(
      result => setAlertBlock('hidden')
    )

  }








  /**
   * It loops through the characters object and if the character has not been found, it adds it to the
   * character list
   */
  /**
   * It creates an array of li elements that are displayed on the page
   */
  function createArray() {

    for (const char in chars) {
      if (chars[`${char}`].found === false) {
        window.charList.push(<li key={char} onClick={listClick}>{chars[`${char}`].name}</li>)
      }
    }
    if (window.charList.length == 0) {
      setGameState('winning');
    }

  }


  function dropDown(x, y) {
    createArray();


    window.dropDownMenu = <div style={{
      position: 'absolute',
      left: `${x}px`,
      top: `${y}px`,
      background: '#2A2B2E',
      color: '#C0E2C4',
      borderRadius: '0.6rem'
    }}>
      <ul style={{
        listStyleType: 'none',
        marginRight: '2rem'
      }}> {window.charList}</ul>
    </div>

  }

  // function Block() {
  //   return (
  //     <div onClick={GotClicked} style={{
  //       position: 'relative',
  //       top: '150rem',
  //       left: '75rem',
  //       width: '40%',
  //       height: '120px',
  //       border: '10px solid white'
  //     }}>

  //     </div>
  //   )
  // }




  if (gameState === 'losing') {
    return (<><h1 style={{ textAlign: 'center', marginTop: '15%' }}>Damn <span className='easy-dif'>{nameInput}</span>, <br /> You have ran out of time <br />  (┬┬﹏┬┬)</h1 >

    </>
    )

  }
  if (gameState === 'playing') {
    return (
      <>

        <MyTimer expiryTimestamp={window.time} changeState={setGameState} />

        {/* <FollowCursor /> */}
        {/* <Demo /> */}
        <div ref={ref} style={{ display: 'flex', justifyContent: 'center', }}>
          {alertBlock !== 'hidden' && <div style={{ position: 'fixed', left: '40%', top: '7vh', backgroundColor: '#2A2B2E', padding: '1.5rem', borderRadius: '1.2rem' }}>
            <h1>You got it
              {alertBlock == 'right' && <span className='easy-dif' > {alertBlock}!</span>
              }

              {alertBlock == 'wrong' && <span className='hard-dif'> {alertBlock}!</span>}

            </h1>
          </div>
          }
          <img onClick={GotClicked} src={mainImage} className='main-image' ></img>
          {chooseObject &&
            window.dropDownMenu
          }
        </div>
      </>
    )
  }
  if (gameState === 'winning') {
    return (<><h1 style={{ textAlign: 'center', marginTop: '15%' }}>Good job <span className='easy-dif'>{nameInput}</span>,<br />you have found all of them <br /> (☞ﾟヮﾟ)☞</h1 >

    </>
    )
  }
  return (

    <div className='main-div'>

      <div className='input-form'>
        <form>
          <h1>Gonna find them all!</h1>
          <input type='text' className='main-input'
            value={nameInput}
            placeholder='Your Name'
            onChange={(e) => InputChange(e.target.value, setNameInput)}
          />
          <MyButton />

        </form >
      </div>
      <div className='items-to-find'>
        <h2>Bowser - <span className='easy-dif'> Easy</span></h2>
        <img className='toFind' src={bowser}></img>
        <h2>Turnip-Head - <span className='normal-dif'> Normal</span></h2>
        <img className='toFind' src={turnipHead}></img>
        {/* <h2>Shinigami Ryuk - <span className='normal-dif'> Normal</span></h2>
        <img className='toFind' src={ryuk}></img> */}
        <h2>Patrick - <span className='hard-dif'> Hard</span></h2>
        <img className='toFind' src={patrick}></img>
        <h2>Tom - <span className='hard-dif'> Hard</span></h2>
        <img className='toFind' src={tom}></img>

      </div>
    </div >
  );
}




/**
 * It's a function that returns a component that renders a cursor that follows the mouse.
 * @returns A cursor that follows the mouse.
 */
export function FollowCursor() {
  const [i, setI] = useState(0);
  return (
    <Cursor hollow={true} duration={0.1} size={35} opacity={1} color="white" />
  )
}

