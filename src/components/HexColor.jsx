import react, { useEffect, useState } from "react"

const generateRandomHexColor=()=>{
    const options='0123456789ABCDEF'
    let color='#'
    for (let i=0; i<6; i++){
        color+=options[Math.floor(Math.random()*16)]
    }
    
    return color
}

const HexColorGame=()=>{
     const [color, setColor]=useState()
    const handleColor=()=>{
        const result=generateRandomHexColor()
        setColor(result)
    }

    useEffect(()=>{
        handleColor()
    },[])

    return (
      <div
        style={{
          backgroundColor: color,
        }}
      >
        {color}
      </div>
    );
}

export default HexColorGame