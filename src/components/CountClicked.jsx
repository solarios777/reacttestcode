import React, { useState } from 'react'

const CountClicked = () => {
    const[count, setCount] = useState(0)

   const  handleClick=()=>{
        setCount((c) => c + 1);
    }

    const handleUnclick=()=>{
        if(count>0){
            setCount(c=>c-1)
        }
    }

    const array=[1,2,3,4,5]
    const shuffled=[...array].sort(()=>Math.random()-0.5)
    console.log(shuffled)

  return (
    <div>
      <button onClick={handleClick}>click me</button>
      <button onClick={handleUnclick}>unclick me</button>
      <h1>count:{count}</h1>
    </div>
  );
}

export default CountClicked