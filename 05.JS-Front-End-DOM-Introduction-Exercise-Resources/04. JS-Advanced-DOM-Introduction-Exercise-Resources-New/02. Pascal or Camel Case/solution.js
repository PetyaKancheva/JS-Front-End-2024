function solve() {
    const [...textArray]=document.getElementById("text").value.split(" ");
   
    const namingConvention=document.getElementById("naming-convention").value;
    const resultArr=[];

    textArray.forEach(element => {
      const newWord= element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
      resultArr.push(newWord);
    });
      let message='';
     if(namingConvention==='Pascal Case'){
         message=resultArr.join('');
     }else if(namingConvention==='Camel Case'){
        message=resultArr.join('');
        message=message.charAt(0).toLowerCase() + message.slice(1);
     }else{
        message='Error!' ;
     }

  document.querySelector(".result-container > span").textContent=message;
}