
let counterValue=0;


function updateCounter(){
    document.getElementById('count').textContent=counterValue;
}

function incrementCounter(){
    counterValue++;
    updateCounter();
}

function decrementCounter(){
    counterValue--;
    updateCounter();
}

function resetCounter(){
    counterValue=0;
    updateCounter();
}

updateCounter()