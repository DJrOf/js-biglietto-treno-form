/* 
1) Mostrare all'utente grazie al quale poter indicare 
il numero di chilometri da percorre e l'età.

2)In base a questi due valori numerici calcolare il prezzo del 
biglietto come di seguito:
Il prezzo del biglietto è definito in base ai km (0.21 € al km)
    - Sconto del 20% per i minorenni
    - Sconto del 40% per gli over 65.

Il recap dei dati e l'output del prezzo finale va stampato 
in pagina (formattato con massimo due decimali, 
per indicare centesimi sul prezzo).
*/


// Elementi HTML

//Form
const nameField = document.getElementById('name');
const kmsField = document.getElementById('kms');
const ageField = document.getElementById('age');
const generateButton = document.getElementById('generate-button');
const resetButton = document.getElementById('reset-button');

//Ticket
const ticketSection = document.getElementById('ticket-section');
const namePlaceholder = document.getElementById('passenger-name');
const offerPlaceholder = document.getElementById('offer');
const cpPlaceholder = document.getElementById('cp');
const carrozzaPlaceholder = document.getElementById('carrozza');
const pricePlaceholder = document.getElementById('price');

// Button Event

generateButton.addEventListener('click', function() {
    const nameValue = nameField.value;
    const kmsValue = parseInt(kmsField.value);
    const ageValue = ageField.value;
    console.log(nameValue, kmsValue, ageValue)

    // Calcolo del prezzo di base

    
    let fullPrice = (kmsValue * 0.21);
    console.log('fullPrice: ', fullPrice)
    
    let fPrice = fullPrice.toFixed(2);
    console.log(fPrice)

    // Promo Minorenni
    
    const minorAgePromo = (fullPrice - (fullPrice * 0.20));
    console.log('minorAgePromo: ', minorAgePromo)
    
    let minAp = minorAgePromo.toFixed(2); 
    console.log('minAp: ', minAp)
    
     // Promo Maggiorenni
    const majorAgePromo = (fullPrice - (fullPrice * 0.40)) 
    console.log('majorAgePromo: ', majorAgePromo)
    
    let majAp = majorAgePromo.toFixed(2);
    console.log('majAp: ', majAp)
    
    priceElement = document.getElementById('price');
    
    if(ageValue === 'min'){
    priceElement.innerText = minAp + '€';
    discountOffer = 'Sconto Minorenni';
    }
    
    if(ageValue === 'mag') {
        priceElement.innerText = majAp + '€';
        discountOffer = 'Sconto Maggiorenni';
    }
    
    else {
        priceElement.innerText = fPrice + '€';
        discountOffer = 'Sconto Over-65';
    }
    console.log('price', minAp || majAp || fPrice)
    offerPlaceholder.innerText = discountOffer;
    namePlaceholder.innerText = nameValue;
    carrozzaPlaceholder.innerText = carNum;
});

//  Mostra dati utente


