// console.log('sss')
// const historyTab = document.getElementById('history');
//     historyTab.addEventListener('click', function(){
        
//         historyTab.classList.add("bg-green-color");
//         historyTab.classList.remove("bg-gray-200");
        
//     });

document.getElementById('donate-noakhali')
    .addEventListener('click', function () {
        // console.log('jjjj');
        const addDonation1 = getInputFieldValueById('donate-noakhali-input');
        // console.log(addDonation1)
        if (isNaN(addDonation1) || addDonation1 <= 0) {
            alert('Failed to add donation');
            return;
        }
        else {
            // console.log(addDonation1)
            // alert('add donate')

            const balance1 = getTextFieldValueById('donate-add-noakhali');
            const newBalance1 = balance1 + addDonation1;
            // console.log(newBalance1)
            document.getElementById('donate-add-noakhali').innerText = newBalance1;
            const balance = getTextFieldValueById('balance');
            const newBalance = balance - addDonation1;
            document.getElementById('balance').innerText = newBalance;

        }
        // history

        const historyItem = document.createElement('div');
        historyItem.className = "container mx-auto bg-gray-100 rounded-xl p-4 my-2";
        historyItem.innerHTML = `
<p>${addDonation1} Taka is Donate for Flood at Noakhali, Bangladesh</p>

<p>Date: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' })} GMT+0600 (Bangladesh Standard Time)</p>
`;
        const historyContainer = document.getElementById('history-item');
        historyContainer.insertBefore(historyItem, historyContainer.firstChild);
        // 
        alert('added donation')
       
        return

    });

document.getElementById('donate-feni')
    .addEventListener('click', function () {
        // console.log('jjjj');
        const addDonation2 = getInputFieldValueById('donate-feni-input');
       
        if (isNaN(addDonation2) || addDonation2 <= 0) {
            alert('Failed to add donation');
            return;
        }
        else {
            
            const balance2 = getTextFieldValueById('donate-add-feni');
            const newBalance2 = balance2 + addDonation2;
            // console.log(newBalance1)
            document.getElementById('donate-add-feni').innerText = newBalance2;
            const balance = getTextFieldValueById('balance');
            const newBalance = balance - addDonation2;
            document.getElementById('balance').innerText = newBalance;

        }
        // history

        const historyItem = document.createElement('div');
        historyItem.className = "container mx-auto bg-gray-100 rounded-xl p-4 my-2";
        historyItem.innerHTML = `
<p>${addDonation2} Taka is Donate for Flood Relief in Feni,Bangladesh</p>

<p>Date: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' })} GMT+0600 (Bangladesh Standard Time)</p>
`;
        const historyContainer = document.getElementById('history-item');
        historyContainer.insertBefore(historyItem, historyContainer.firstChild);
        // 
        alert('added donation')
       
        return

    });
document.getElementById('donate-quota')
    .addEventListener('click', function () {
        // console.log('jjjj');
        const addDonation3 = getInputFieldValueById('donate-quota-input');
       
        if (isNaN(addDonation3) || addDonation3 <= 0) {
            alert('Failed to add donation');
            return;
        }
        else {
            
            const balance3 = getTextFieldValueById('donate-add-quota');
            const newBalance3 = balance3 + addDonation3;
            // console.log(newBalance1)
            document.getElementById('donate-add-quota').innerText = newBalance3;
            const balance = getTextFieldValueById('balance');
            const newBalance = balance - addDonation3;
            document.getElementById('balance').innerText = newBalance;

        }
        // history

        const historyItem = document.createElement('div');
        historyItem.className = "container mx-auto bg-gray-100 rounded-xl p-4 my-2";
        historyItem.innerHTML = `
<p>${addDonation3} Taka is Aid for Injured in the Quota Movement</p>

<p>Date: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' })} GMT+0600 (Bangladesh Standard Time)</p>
`;
        const historyContainer = document.getElementById('history-item');
        historyContainer.insertBefore(historyItem, historyContainer.firstChild);
        // 
        alert('added donation')
       
        return

    });

    

