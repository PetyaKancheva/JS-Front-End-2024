function extractText() {
    
    const listElement = document.getElementById('items');
    const resultElement=document.getElementById('result');
    const result =listElement.innerText;    ;
    resultElement.textContent= result ;

}