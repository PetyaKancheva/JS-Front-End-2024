function extract(content) {
    let innerText =document.getElementById(content).innerText;
   
     const pattern= /\(([^()]+)\)/g;
     let textArr= innerText.matchAll(pattern);
            const result= Array.from(textArr).map(e => e[1]).join(';');
            return result;

}