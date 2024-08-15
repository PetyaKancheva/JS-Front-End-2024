function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchText = document.querySelector('#searchField').value;
      document.querySelector('#searchField').value='';
      
      const tableEl=document.querySelectorAll('.container tbody td');

      function removeSelect(elList){
         elList.forEach((e)=>e.parentElement.classList.remove('select'));
      }

      removeSelect(tableEl);
      function findTextMatches(input,elList){
         return [...elList].filter((e)=>e.textContent.toLowerCase().includes(input.toLowerCase())); 
      }
      const matches=findTextMatches(searchText,tableEl)
      matches.forEach((e)=>e.parentElement.classList.add('select'));
      console.log(matches);
     
    
     console.log(searchText);
     

   }
}