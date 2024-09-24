// console.log('vgugyufg')


document.getElementById('donation-item')
.addEventListener('click', function(){
    showSectionId('donation-list')
    
});

document.getElementById('history')
.addEventListener('click', function(){
    showSectionId('history-list')
});
document.getElementById('faq-open')
.addEventListener('click', function(){
    showSectionFaqId('faq-list')
});
document.getElementById('home')
.addEventListener('click', function(){
    document.getElementById('header').classList.remove('hidden');
    document.getElementById('donation-list').classList.remove('hidden');
    document.getElementById('history-list').classList.add('hidden');
    document.getElementById('faq-list').classList.add('hidden');


    document.getElementById('home').classList.add('hidden')


});

//repo link : https://github.com/giash459/assignment-5-submit

// live link : https://giash459.github.io/assignment-5-submit/
