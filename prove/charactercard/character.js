const cCard = {
    class: 'Desert Beast',
    level:'1',
    health: '100',
    character: 'Thorny Devil',
    image: 'images/baby-thornydevil.png'
};

// function cardTemplate(cCard) {
//    return `<img class='image'src="${image}">
//        <h2 class="name">${character}</h2>
//        <div class="stats">
//            <p><strong>Class:</strong>${class}</p>
//            <p><strong>Level:</strong>${level}</p>
//            <p><strong>Health:</strong>${health}</p>
//        </div>
//        <div class="buttons">
//            <button id="attacked">Attacked</button>
//            <button id="levelup">Level Up</button>
//        </div>`
//};


let health = 100;
let level = 5;
document.querySelector("#attacked").addEventListener("click", function () {
    const health = document.querySelector("#health").value;
    
});


function changeHealth(){

};

document.querySelector("#levelup").addEventListener("click", function () {
    const health = document.querySelector("#level").value;
    
});

// make a level up function
// make an attack function
