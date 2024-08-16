function addItem() {
    //element
    const tableElement=document.querySelector('#items');
    const inputElement=document.querySelector('#newItemText');
    const newElementText=inputElement.value;

    //create new Element
    const newItemEl=document.createElement('li');
    newItemEl.textContent=newElementText;
    //Create delete button
    const deleteButton=document.createElement('a');
    deleteButton.textContent='[Delete]';
    deleteButton.href='#';

    deleteButton.addEventListener('click', (e)=>{
            e.currentTarget.parentElement.remove();
    })
    newItemEl.appendChild(deleteButton);
    //append new element
    tableElement.appendChild(newItemEl);


    inputElement.value='';
    
}