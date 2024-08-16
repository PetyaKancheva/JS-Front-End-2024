function solve() {
  const textArea=document.querySelector('textarea').value;
  const sentences=textArea.split('.').map((e)=> e.trim().concat('.'));
  const outputEl=document.getElementById('output');
  
    function createParagraphEl(text){
      const pEl=document.createElement("p");
      pEl.textContent=text;
      return pEl;
    }
   
     for (let i = 0; i < sentences.length/3; i++) {
          const currSentence=sentences.slice(i,3). join(" ");
          const currParagraph=createParagraphEl(currSentence);
      outputEl.appendChild(currParagraph);
      
     }
     
    


  // console.log(textArea.value);
  
}