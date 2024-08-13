function calc() {
    const firstElement=document.getElementById('num1');
    const secondElement=document.getElementById('num2');
    const sumElement=document.getElementById('sum');
    result=Number(firstElement.value)+Number(secondElement.value);
    sumElement.value=result;
    // TODO: sum = num1 + num2
}
