import react, { useState } from "react"
import { useEffect } from "react"

const TextAnalizer=()=>{
  // states to save the datas
  const [text , setText]=useState()
  const [stats, setStats]=useState({
    chars:0,
    words:0,
    sentences:0,
    paragraphs:0,
    longestWord:"",
    frequentWord:"",
    numPronoun:0

  })
const pronouns = [
  "i",
  "you",
  "he",
  "she",
  "it",
  "we",
  "they",
  "me",
  "him",
  "her",
  "us",
  "them",
];
  // use useEffect to change the values of the stats as the text changes
  useEffect(()=>{
    // check the availability of the text
    if(!text)return

    // set the value if the text is empty
    if(text.trim()===''){
      setStats({
        chars: 0,
        words: 0,
        sentences: 0,
        paragraphs: 0,
        longestWord:"",
        frequentWord:"",
        numPronoun:0
      });
      return
    }

    // if there is text that is not empty
    // chars are just the length of the whole text
    const chars=text.length
    // words can be found by spliting the text by using the space
    const words=text.trim()===''?0:text.trim().split(/\s+/).length
    // sentences can be found by spliting the text using . ? ! \n
   const sentences=text.split(/[.!?\n]+/).filter(s=>s.trim().length>0).length
   const paragraphs=text.split(/\n+/).filter(p=>p.trim().length>0).length

  // to get logest word and the most frequest wors
      //  first let's prepare a clean array of words in the text
      const wordArray=text.split(/\s+/).map(w=>w.replace(/[^a-zA-Z]/g,'')).filter(w=>w)

      const longestWord=wordArray.reduce((a,b)=>a.length>b.length?a:b,"")

      const wordCount={}
      wordArray.forEach(word=>{
        const lowerWord=word.toLowerCase()
        wordCount[lowerWord]=(wordCount[lowerWord]||0)+1
      })

      const frequentWord=Object.entries(wordCount).reduce((a,b)=>a[1]>b[1]?a:b,['',0])


      // number of pronouns
      const numPronoun = wordArray.filter((word) => {
        const lowerWord = word.toLowerCase(); // Step 1: Convert to lowercase
        return pronouns.includes(lowerWord); // Step 2: Check if pronoun exists
      }).length;

    setStats({
      chars,
      words,
      sentences,
      paragraphs,
      longestWord,
      frequentWord,
      numPronoun
    })
    
  },[text])

  return (
    <div>
      {/* textarea to take the text from the user */}
      <textarea
        name=""
        id=""
        placeholder="type or copy your text here..."
        onChange={(e) => setText(e.target.value)}
        style={{
          width: "500px",
          minHeight: "100px",
        }}
      ></textarea>

      {/* div to display the stats of the provided text */}
      <div>
        <ul>
          <li>
            <strong>chars:</strong>
            <b>{stats.chars}</b>
          </li>
          <li>
            <strong>words:</strong>
            <b>{stats.words}</b>
          </li>
          <li>
            <strong>sentences:</strong>
            <b>{stats.sentences}</b>
          </li>
          <li>
            <strong>paragrarhs:</strong>
            <b>{stats.paragraphs}</b>
          </li>
          <li>
            <strong>longest Word:</strong>
            <b>{stats.longestWord}</b>
          </li>
          <li>
            <strong>frequent Word:</strong>
            <b>{stats.frequentWord[0]}</b>-<b>{stats.frequentWord[1]}</b>
          </li>
          <li>
            <strong>pronouns:</strong>
            <b>{stats.numPronoun}</b>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TextAnalizer