function editElement(element, match , replacer) {

        let elementText=  element.textContent;
        element.textContent= elementText.replaceAll(match,replacer) ;
     
        
        
        }