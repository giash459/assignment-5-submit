// console.log('hi')
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}


function showSectionId(id){
    document.getElementById('donation-list').classList.add('hidden');
    document.getElementById('history-list').classList.add('hidden');
    


    document.getElementById(id).classList.remove('hidden')
}
function showSectionFaqId(id){
    document.getElementById('header').classList.add('hidden');
    document.getElementById('donation-list').classList.add('hidden');
    document.getElementById('history-list').classList.add('hidden');
    document.getElementById('faq-list').classList.add('hidden');


    document.getElementById(id).classList.remove('hidden')
}
