import React from 'react'
import { useState } from 'react'
import './Calculator.css'
const Calculator = () => {
  const [clickedNumber,setClickedNumber] = useState("");
  const handleClick = (e) =>{
    setClickedNumber(clickedNumber.concat(e.target.name));
  }
  const calculate = () =>{
    try{
      setClickedNumber(eval(clickedNumber).toString());
    }
    catch(err){
      setClickedNumber("Invalid Input");
    }

  }
  const clearEntry = ()=>{
    setClickedNumber(clickedNumber.slice(0,-1));
  }
  const clearAll = ()=>{
    setClickedNumber("");
  }

  return (
    <div className='container'>
        <form className='calc-reader'>
            <input type="text" value={clickedNumber} />
        </form>
        
        <div className='calc-grid'>
           
            <div className='calc-row'><button name='%'onClick={handleClick} className='calc-rowbtn'>%</button></div>
            <div className='calc-row'><button name='' onClick={clearEntry} className='calc-rowbtn'>CE</button></div>
            <div className='calc-row'><button name='' onClick={clearAll} className='calc-rowbtn'>C</button></div>
            <div className='calc-row'><button name='3.14' onClick={handleClick} className='calc-rowbtn'>Π</button></div>
            <div className='calc-row'><button name='7' onClick={handleClick} className='calc-rowbtn'>7</button></div>
            <div className='calc-row'><button name='8' onClick={handleClick} className='calc-rowbtn'>8</button></div>
            <div className='calc-row'><button name='9' onClick={handleClick} className='calc-rowbtn'>9</button></div>
            <div className='calc-row'><button name='/' onClick={handleClick} className='calc-rowbtn'>÷</button></div>
            <div className='calc-row'><button name='4' onClick={handleClick} className='calc-rowbtn'>4</button></div>
            <div className='calc-row'><button name='5' onClick={handleClick} className='calc-rowbtn'>5</button></div>
            <div className='calc-row'><button name='6' onClick={handleClick} className='calc-rowbtn'>6</button></div>
            <div className='calc-row'><button name='*' onClick={handleClick} className='calc-rowbtn'>×</button></div>
            <div className='calc-row'><button name='1' onClick={handleClick} className='calc-rowbtn'>1</button></div>
            <div className='calc-row'><button name='2' onClick={handleClick} className='calc-rowbtn'>2</button></div>
            <div className='calc-row'><button name='3' onClick={handleClick} className='calc-rowbtn'>3</button></div>
            <div className='calc-row'><button name='-' onClick={handleClick} className='calc-rowbtn'>-</button></div>
            <div className='calc-row'><button name='.' onClick={handleClick} className='calc-rowbtn'>.</button></div>
            <div className='calc-row'><button name='0' onClick={handleClick} className='calc-rowbtn'>0</button></div>
            <div className='calc-row'><button name='+' onClick={handleClick} className='calc-rowbtn'>+</button></div>
            <div className='calc-row'><button name='=' onClick={calculate} className='calc-rowbtn'>=</button></div>
        </div>
    </div>
  )
}

export default Calculator