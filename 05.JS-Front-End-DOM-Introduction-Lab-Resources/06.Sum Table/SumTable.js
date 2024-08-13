function sumTable() {
    const tableEls =document.querySelectorAll('table tr');
    console.log(tableEls);
    let sum= 0;
    for (const el of tableEls) {
         const secondChild = el.children[1];
         if(secondChild.tagName==='TD' && secondChild.id!== 'sum'){
            console.log(secondChild);
            
            sum+= Number(secondChild.textContent);
         }
           
            
    }
   

    document.getElementById('sum').textContent=sum;
}