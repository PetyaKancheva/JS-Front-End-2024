function deleteByEmail(){
    //  getELements 
    const tableElement=document.querySelectorAll('tbody tr');
    // input type="text" name="email
    const inputElement=document.querySelector('input[type="text"]');
    const resultEl=document.getElementById('result');
    const emailToSearch=inputElement.value;
    //  findMatch
    const matchEl=Array.from(tableElement).find((trEl)=>trEl.querySelector('td:nth-child(2)').textContent===emailToSearch);
    //  delete
    
    if(matchEl){
        matchEl.remove();
        resultEl.textContent='Deleted.';
    }else{
        resultEl.textContent='Not found.';
    }
    //  clear input
    inputElement.value='';
    
    
}
