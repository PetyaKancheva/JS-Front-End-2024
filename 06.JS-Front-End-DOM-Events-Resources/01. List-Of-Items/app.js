function addItem() {
    // read
    const itemsElement=document.getElementById('items');
    const inputTextEl=document.getElementById('newItemText');
    // create new LI
        const newLineEl=document.createElement('li');
        newLineEl.textContent=inputTextEl.value;

    // append
    itemsElement.appendChild(newLineEl);
    // clear input

    inputTextEl.value='';
        
    
}