const predictions = [
"Your next block will change everything.",
"A powerful collaboration is coming.",
"Momentum is building around you.",
"You are closer to breakthrough than you think.",
"A new opportunity will appear soon."
];

const cardsContainer = document.getElementById("cards");
const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");
const text = document.getElementById("predictionText");

for(let i=0;i<5;i++){
    const card = document.createElement("div");
    card.className="card";

    card.onclick = () => {
        const random = predictions[Math.floor(Math.random()*predictions.length)];
        text.innerText = random;

        popup.style.display="block";
        overlay.style.display="block";
    };

    cardsContainer.appendChild(card);
}

overlay.onclick = () => {
    popup.style.display="none";
    overlay.style.display="none";
};

function downloadCard(){
    alert("Download feature placeholder");
}

function shareCard(){
    alert("Share feature placeholder");
}
