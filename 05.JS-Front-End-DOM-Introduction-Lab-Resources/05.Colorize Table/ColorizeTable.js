function colorize() {

    // const rowElements=document.querySelector('table tbody');
    // const individualRowElements=rowElements.children;
   
    // console.log(individualRowElements);
    
    const evenTableElements=document.querySelectorAll('table tbody tr:nth-child(even)');
    console.log(evenTableElements);
for (const trElement of evenTableElements) {
    trElement.style.backgroundColor='teal';
}
    // evenTableElements.style.backgroundColor='red';

    // for (let i = 1; i < individualRowElements.length; i+=2) {
    //     individualRowElements[i].style.backgroundColor='teal' ;   
    
    // }
       
 
}