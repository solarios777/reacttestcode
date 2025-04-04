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
    const [correctColor, setCorrectColor]=useState(generateRandomHexColor())
    const [options, setOptions]=useState([])
    const [feedBack, setFeedBack]=useState()

    const generateNewGame=()=>{
        const newColor=generateRandomHexColor()
        const wrongColors=[generateRandomHexColor(),generateRandomHexColor()]
        const Shuffled=[...wrongColors,newColor].sort(()=>Math.random()-0.5)

        setCorrectColor(newColor)
        setOptions(Shuffled)
    }

    
    const handleGuess=(color)=>{
        if(color===correctColor){
            generateNewGame()
        }
    }
    if(options.length===0)generateNewGame()
    


        return (
          <div>
            <div
            //   style={{
            //     backgroundColor: correctColor,
            //     width: "200px",
            //     height: "200px",
            //   }}
            >
              {correctColor}
            </div>

            <div>
              {options.map((color) => (
                <button
                  value={color}
                  onClick={(e) => handleGuess(e.target.value)}
                  style={{
                    backgroundColor: color,
                    width: "100px",
                        height: "100px",
                  }}
                >
                  {/* {color} */}
                </button>
              ))}
            </div>
          </div>
        );
}


export default HexColorGame