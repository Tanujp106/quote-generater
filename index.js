let btn = document.querySelector('#new-quote');

let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

btn.addEventListener('DOMContentLoaded','click',function(){

    let random = Math.floor(Math.random() * quotes.length);
    
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
       
    });
    
const quotes = [
    {
        quote:"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        person: "James Cameron"
    },
    {
        quote:"Life is what happens when you're busy making other plans.",
        person:"John Lennon"},
    {
        quote:"Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        person:"Benjamin Franklin" 
    },
    {
        quote:"Whoever is happy will make others happy too.",
        person:"Anne Frank"
    }
];

