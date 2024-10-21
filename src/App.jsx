import { useState } from 'react'
import './App.css'

function App() {
  const [str, setStr] = useState('0')
  const [O, setO] = useState(0)
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function Add() {
    let a = parseInt(str);
    setA(a);
    setO(1)
    setStr("0")
  }

  function Subtract() {
    let a = parseInt(str);
    setA(a);
    setO(2)
    setStr('0')
  }

  function Multiply() {
    let a = parseInt(str);
    setA(a);
    setO(3)
    setStr('0')
  }

  function Divide() {
    let a = parseInt(str);
    setA(a);
    setO(4)
    setStr('0')
  }

  function Equal() {
    let b = parseInt(str);
    setB(b);
    let ans;
    switch (O) {
      case 1:
        ans = a + b;
        setStr("" + ans);
        break;
      case 2:
        ans = a - b;
        setStr("" + ans);
        break;
      case 3:
        ans = a * b;
        setStr("" + ans);
        break;
      case 4:
        ans = a / b;
        setStr("" + ans);
        break;
    }
    setA(0);
    setB(0);
    setO(0);
  }

  return (
    <div className='cal'>
      <div className="outer">
        <div className="dis">
          <h1 style={{width:'400px', overflow:'hidden'}}>{str}</h1>
        </div>
        <div className="numpad">
          <table>
            <tr>
              <td><button onClick={() => { if (str == '0') { setStr("1") } else { setStr(str + "1") } }}>1</button></td>
              <td><button onClick={() => { if (str == '0') { setStr("2") } else { setStr(str + "2") } }}>2</button></td>
              <td><button onClick={() => { if (str == '0') { setStr("3") } else { setStr(str + "3") } }}>3</button></td>
              <td><button onClick={Add}>+</button></td>
            </tr>
            <tr>
              <td><button onClick={() => { if (str == '0') { setStr("4") } else { setStr(str + "4") } }}>4</button></td>
              <td><button onClick={() => { if (str == '0') { setStr("5") } else { setStr(str + "5") } }}>5</button></td>
              <td><button onClick={() => { if (str == '0') { setStr("6") } else { setStr(str + "6") } }}>6</button></td>
              <td><button onClick={Subtract}>-</button></td>
            </tr>
            <tr>
              <td><button onClick={() => { if (str == '0') { setStr("7") } else { setStr(str + "7") } }}>7</button></td>
              <td><button onClick={() => { if (str == '0') { setStr("8") } else { setStr(str + "8") } }}>8</button></td>
              <td><button onClick={() => { if (str == '0') { setStr("9") } else { setStr(str + "9") } }}>9</button></td>
              <td><button onClick={Multiply}>*</button></td>
            </tr>
            <tr>
              <td><button onClick={() => { if (str == '0') { setStr("0") } else { setStr(str + "0") } }}>0</button></td>
              <td><button onClick={() => { setStr('0');setA(0);setB(0) }}>A</button></td>
              <td><button onClick={Equal}>=</button></td>
              <td><button onClick={Divide}>/</button></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default App
