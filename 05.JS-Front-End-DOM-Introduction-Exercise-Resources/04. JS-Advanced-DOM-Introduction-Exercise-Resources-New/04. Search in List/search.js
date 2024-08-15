function search() {

   const input=document.getElementsByTagName('input')[0].value;
   const townEl=document.querySelectorAll('#towns li');
   // 'unbold'
   function clearStyle(townEl){
      townEl.forEach((e)=> {
         e.style.fontWeight='normal';
         e.style.textDecoration ='none' });
   }
   clearStyle(townEl);
     function getMatches(input,elList){
         let newArray = [...elList].filter((el)=> el.textContent.toLowerCase().includes(input.toLowerCase()));
         return newArray;
     };
   console.log(getMatches(input,townEl));
   




   let matchedEls=getMatches(input,townEl);
   matchedEls.forEach((e)=> {
      e.style.fontWeight='bold';
      e.style.textDecoration ='underline' });
   document.getElementById('result').textContent=`${matchedEls.length} matches found`;
}
