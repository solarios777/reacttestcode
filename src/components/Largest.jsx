// ABCDDDDDEEEFFGHHHI

import React, { useState } from "react";

const LargestRedendent=()=>{



    const [word, setLetters] = useState();  
    const [maxCounts, setMaxCounts] = useState();
    const [maxLetters, setMaxLetters] = useState();
    // const word = "ABCDDDDDEEEFFGHHHI";

  const handleSubmit=(e)=> { 

    
    e.preventDefault()
    
    const container={}

    for(const char of word){
       container[char]=(container[char]|| 0)+1
    }
   let maxCount=0
   let maxLetter=''
   for (const char in container){
    if(container[char]>maxCount){
        maxCount=container[char]
        maxLetter=char
    }
   }

   setMaxCounts(maxCount)
   setMaxLetters(maxLetter)

   }


   return (
     <div>
       <form action="submit" onSubmit={(e) => handleSubmit(e)}>
         <label htmlFor="your word"> please type your word</label>
         <input type="text" onChange={(e) => setLetters(e.target.value)} />
         <button>submit</button>
       </form>
       <div>
         {maxCounts ? (
           <h1>
             {maxLetters}:{maxCounts}
           </h1>
         ) : (
           ""
         )}
       </div>
     </div>
   );

}

export default LargestRedendent