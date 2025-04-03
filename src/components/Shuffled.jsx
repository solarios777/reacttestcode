import react, { useState } from "react"


const Shuffled =()=>{

    const [shuffled2, setShuffled2]=useState([])

    const array=[1,2,3,4,5,6,7,8]
    const shuffled1=[...array].sort(()=>Math.random()-0.5)

    const shuffler=(array)=>{
        const shuffled2=[...array]

        for (let i = shuffled2.length - 1; i > 0; i--){
            const j=Math.floor(Math.random()* (i + 1));

            [shuffled2[i], shuffled2[j]]= [shuffled2[j],shuffled2[i]]

        }
        return shuffled2
    }

    shuffler(array)

    return (
        <div>
            <ul>
                {shuffled1.map((num)=>(
                    <li key={num}>{num}</li>
                ))}
            </ul>
        </div>
    )
}

export default Shuffled