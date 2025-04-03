import react from "react"


const Shuffled =()=>{

    const array=[1,2,3,4,5,6,7,8]
    const shuffled=[...array].sort(()=>Math.random()-0.5)

    return (
        <div>
            <ul>
                {shuffled.map((num)=>(
                    <li key={num}>{num}</li>
                ))}
            </ul>
        </div>
    )
}

export default Shuffled