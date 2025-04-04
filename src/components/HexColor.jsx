import react, { useState } from "react"

const generateRandomHexColor=()=>{
  const letters='0123456789ABCDEF'
  let color='#'
  for (let i=0; i<6; i++){
    color+=letters[Math.floor(Math.random()*16)]
  }
  return color
}

const HexColorGame=()=>{
  const [correctColor,setCorrectColor]=useState(generateRandomHexColor())
  const [options, setOptions]=useState([])
  const [fedBack , setFedBack]=useState(null)

  const generateNewGame=()=>{

    const newColor=generateRandomHexColor()
    const wrongColors=[generateRandomHexColor(),generateRandomHexColor()]
    const shuffled=[...wrongColors,newColor].sort(()=>Math.random()-0.5)

    setCorrectColor(newColor)
    setOptions(shuffled)
    setFedBack(null)

  }

  const handleGuess=(color)=>{
    if(color===correctColor){
      generateNewGame()
    }
    else{setFedBack(color)}
  }

  if(options.length===0)generateNewGame()


    return(
      <div>
        <div style={{
          backgroundColor:correctColor,
          width:"150px",
          height:"150px"
        }}>

        </div>
        <div>
          {options.map((color)=>(
            <button value={color} onClick={(e)=>handleGuess(e.target.value)}  style={{
              backgroundColor:fedBack===color?"red":""
            }}>
              {color}
            </button>
          ))}
        </div>
      </div>
    )

}


export default HexColorGame