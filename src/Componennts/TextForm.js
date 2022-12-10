import React ,{useState}from 'react'

export default function TextForm(props) {
  const haldleupclick =()=>{
    let newtext =text.toUpperCase();
    settext(newtext)

  }
  const haldleloclick =()=>{
    let newtext =text.toLowerCase();
    settext(newtext)
 
  }
  const haldlecleartext =()=>{
    let newtext ="";
    settext(newtext)
 
  }
  const handleonchange=(event)=>{
    settext(event.target.value)
  }
  const speak =()=> {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    const toogle = document.getElementById('toogle')
    if(toogle.textContent="Speak"){
      toogle.innerHTML="Stop"
    }
    else{
      toogle.innerHTML="Speak"
      if(toogle.innerHTML="Speak"){
        window.speechSynthesis.cancel()
      }
    }
  }
  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([text], {
      type: "text/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    element.click();
}
   const handleDuplicates=()=>{
  let wordArr = text.split(" ");
  let newText = wordArr.filter((item, pos)=>{
      return wordArr.indexOf(item) === pos;
  })
  newText = newText.join(" ");
  settext(newText);
}
const handlecopy =()=>{
  var text = document.getElementById("mybox");
  text.select();
  navigator.clipboard.writeText(text.value);

}
const handleExtraSpace=()=>{
    let newText = text.split(/[ ]+ /);
    settext(newText.join(" "))
}
// const handleFindChange = (event) => {
//   findWord(event.target.value);
// };
// const handlefindChange=()=>{
//   let newText =text.findWord(fWord, findWord);
//   settext(newText)
// }
// const handleReplaceChange = (event) => {
//   console.log(replaceWord(event.target.value)) ;
//   };
//   const handleReplaceClick = () => {
//     let newText = text.replaceAll(fWord,rWord);
//     settext(newText);
//   };
  const [text , settext] = useState('Enter Your Text Here!');
  // const [fWord, findWord] = useState("");
  // const [rWord, replaceWord] = useState("");
  return (
   
<div className='container' style={{color :props.mode ==='dark'?'white':'#gre'}}>
  <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
         
          <textarea className="form-control" value={text} onChange={handleonchange}  style={{backgroundColor:props.mode==='light'?'white':'#042743' ,color :props.mode ==='dark'?'white':'#042743'}} id="mybox" rows="10"></textarea>
       
        </div>
        <button className="btn btn-primary "onClick={haldleupclick}>ToUpperCase</button>
        <button className="btn btn-secondary mx-2 "onClick={haldleloclick} >ToLowerCase</button>
        <button className="btn btn-danger "onClick={haldlecleartext} >ClearText</button>
        <button type="submit" onClick={speak }className="btn btn-warning mx-2">Speak</button>
        <button  type="submit"className='btn btn-success' onClick={downloadTxtFile}>Download Text</button>
        <button className="btn btn-info mx-1"onClick={handleDuplicates}>RemoveDupli</button>
        {/* <button className="btn btn-primary mx-1"onClick={handlefindChange} value={fWord} onChange={handleFindChange}>FindWord</button>
        <button className="btn btn-primary mx-1"onClick={handleReplaceClick} value={fWord} onChange={handleReplaceChange}>ReplaceWord</button> */}
        <button className="btn btn-primary mx-1"onClick={handlecopy}>Copy Text</button>
        <button className="btn btn-info mx-1"onClick={handleExtraSpace}>RemoveSpace</button>

    </div>   

<div className='container my-4'style={{color :props.mode ==='dark'?'white':'##042743'}}>
<h1>Summary of your text</h1>
<p>{text.split(" ").length} words {text.length} characters</p>
<p>{0.008 * (text.split(" ").length)} Minutes read </p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter somthing to preview it here!"}</p>
</div>
</div>
)}

