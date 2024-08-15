function toggle() {
    const buttonEl=document.querySelector('#accordion .button');
        const buttonText=buttonEl.textContent;
    const extraEl= document.getElementById('extra');
    if(buttonText==='More'){
        extraEl.style.display="block";
        buttonEl.textContent='Less'
    }else if(buttonText==='Less'){
        extraEl.style.display="none";
        buttonEl.textContent='More';

    }
}