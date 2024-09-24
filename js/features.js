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
