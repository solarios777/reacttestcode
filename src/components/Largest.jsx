import React, { useState } from "react";

const TextAnalizer=()=>{
    const [text,setText]=useState()

    const [stats,setStats]=useState({
        char:0,
        words:0,
        sentences:0,
        paragraphs:0
    })



    return(
        <div>
            <input type="textarea" onChange={(e)=>setText(e.target.value)} placeholder="type or copy something..."/>

            
        </div>
    )
}

export default TextAnalizer