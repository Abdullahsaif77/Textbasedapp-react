
import React, {useState} from 'react'

export default function TextForm(props) {
  const [Text,setText] = useState("Enter your text here")
  const HandleUppercase = ()=>{
    let newtext = Text.toUpperCase()
    setText(newtext)
    props.showalert("All Characters update to uppercase","success")
  }
  const HandleonChange = (event)=>{
     setText(event.target.value)
  }
  const HandleLowercase = ()=>{
    let lowtext = Text.toLocaleLowerCase()
    setText(lowtext)
    props.showalert("All Characters update to lowercase","success")

  }
  const CopyTheText= async()=>{
    await navigator.clipboard.writeText(Text);
    props.showalert("All Characters are copied","success")

  }
  return (
    <>
  <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1"  className={`form-label text-${props.mode === 'light'?'dark':'light'}`}>Example textarea</label>
    <textarea className="form-control " value={Text}  onChange={HandleonChange} id="exampleFormControlTextarea1" rows="8"></textarea>
    <button onClick={HandleUppercase} className='btn btn-primary'>Convert to Uppercase</button>
    <button onClick={HandleLowercase} className='btn btn-primary'>Convert to lowercase</button>
    <button onClick={CopyTheText} className='btn btn-primary'>Copy text</button>
  </div>
  <div className={`container text-${props.mode === 'light'?'dark':'light'}`}>
    <h1>Summery</h1>
    <p>{Text.split(" ").length} words and {Text.length} Characters</p>
    <p>{0.008*Text.split(" ").length} Minutes to complete read it</p>
    <h2>Preview</h2>
    <p>{Text}</p>
  </div>
  </>
  )
}
