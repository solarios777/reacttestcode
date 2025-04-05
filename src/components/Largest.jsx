import React, { useEffect, useState } from "react"

const TextAnalizer=()=>{
    const [text , setText]=useState()
    const [stats, setStats]=useState({
        char:0,
        words:0,
        sentences:0,
        paragraph:0,
        longestWord:""
    })

    useEffect(()=>{
        if(!text)return
         if (text.trim()=== "") {
           setStats({
             char: 0,
             words: 0,
             sentences: 0,
             paragraph: 0,
             longestWord:""

           });
           return;
         }

         const char=text.length
         const words=text.trim()===''?0:text.trim().split(/\s+/).length
         const sentences=text.split(/[.?!\n]+/).filter(s=>s.trim().length>0).length
         const paragraph=text.split(/\n+/).filter(p=>p.trim().length>0).length

        const wordArray=text.split(/\s+/).map(w=>w.replace(/[^a-zA-Z]/g,'')).filter(w=>w)
        const largestword=wordArray.reduce((a,b)=>a.length>b.length?a:b,'')


       const wordCount={}
       wordArray.forEach(word=>{
        const lowWord=word.toLowerCase()
        wordCount[lowWord]=(wordCount[lowWord]||0)+1
       })


       const frequentWord=Object.entries(wordCount)

       console.log(wordCount);
       console.log(frequentWord);
        
        console.log(wordCount)
         setStats({
           char,
           words,
           sentences,
           paragraph,
           longestWord: largestword,
         });
    },[text])

    return (
      <div>
        <textarea
          onChange={(e) => setText(e.target.value)}
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "600px",
            minHeight: "100px",
          }}
          placeholder="type or copy your text here..."
        />

        <div>
          <p>{text}</p>
          <ul>
            <li>
              <strong>chars:</strong>
              <b>{stats.char}</b>
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
              <strong>paragraphs:</strong>
              <b>{stats.paragraph}</b>
            </li>
            <li>
              <strong>longest word:</strong>
              <b>{stats.longestWord}</b>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default TextAnalizer