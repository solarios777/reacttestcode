import react, { useState } from "react"
import { use } from "react";


const BASEURL = "https://api.datamuse.com/words?rel_syn=";

const FindSyn=()=>{
  const [word,setWord]=useState("")
  const [synoo,setSynoo]=useState([])


  const handleSubmit=(e)=>{
    e.preventDefault()
    fetch(`${BASEURL}${word}`)
    .then((response)=>response.json())
    .then(setSynoo)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="word">your word</label>
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => {
            setWord(e.target.value);
          }}
        />
        <br />
        <br />
        <button type="submit">submit</button>
      </form>
      <ul>
        {synoo.map((synon)=>(
          <li key={synon.word}>{synon.word}</li>
        ))}
      </ul>
    </div>
  );
}


export default FindSyn