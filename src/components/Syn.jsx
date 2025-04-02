import React, { useState } from "react"

const Syn=()=>{
    const [word, setWord]=useState('')
    const [syn,setSyn]=useState([])

    const handleSubmit=async(e)=>{
      e.preventDefault();                // Fix typo
  
    const response = await fetch(`https://api.datamuse.com/words?rel_syn=${word}`);
    const data = await response.json();  // Call .json()
    console.log(data);
    }
  return (
    <div>
      <form action="submit">
        <label htmlFor="word-input">word input</label>
        <input id={3} onChange={(e) => setWord(e.target.value)} />
        <button onClick={(e)=>handleSubmit(e)}>submit</button>
      </form>
    </div>
  );
}


export default Syn