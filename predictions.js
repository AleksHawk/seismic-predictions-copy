const predictions = [
    // --- WEALTH & OPPORTUNITY ---
    "Money loves silence; keep your plans secret.",
    "Your financial intuition is at its peak; trust it.",
    "What you have invested effort in for years will finally bring a harvest.",
    "Do not be afraid to spend on yourself; it is an investment, not a loss.",
    "A great opportunity will come through a person you barely know.",
    "Your wallet will soon be replenished from an unexpected source.",
    "The risk you are thinking about is justified and will bring profit.",
    "Do not settle for small things; play big.",
    "A generous offer is on its way; do not miss it.",
    "Your ability to see value where others do not is a gift.",
    "Old debts will be closed, opening the way to new wealth.",
    "Success is not an accident; it is the result of your persistence.",
    "Try a new approach to old business, and profits will double.",
    "Do not spare resources on learning; it is your key to gold.",
    "Your environment affects your income; choose friends wisely.",
    "Financial freedom is closer than it seems; take one more step.",
    "Luck is on your side; take that chance.",
    "Protect what you have to get what you desire.",
    "Your idea is worth millions if you start implementing it.",
    "Time works for you; your assets are growing.",
    "Do not chase quick money; build a foundation.",
    "Refuse an offer that raises doubts.",
    "Your talent will soon become your main capital.",
    "The partnership forming now will be very profitable.",
    "Money is energy; allow it to flow freely through you.",
    "You will find treasure where others see only trash.",
    "Be ready to accept a gift from fate.",
    "Your generosity will return to you a hundredfold.",
    "Avoid greed; it can destroy everything.",
    "Financial discipline today is luxury tomorrow.",
    "You are standing on the threshold of a golden period in your life.",
    "Do not be afraid to ask for a raise or name a higher price.",
    "Your success will inspire many; do not hide it.",
    "Find a mentor who has already achieved what you want.",
    "Money will come easily if you do what you love.",
    "Invest in your peace of mind; it is the most expensive asset.",
    "Do not let the fear of poverty control your decisions.",
    "Your persistence will open any bank door.",
    "The deal you are planning will be successful.",
    "You deserve wealth; accept this thought.",
    "An unexpected bonus will pleasantly surprise you this month.",
    "Your reputation works for you; protect it.",
    "Look under your feet; sometimes opportunities lie on the ground.",
    "Do not compare your wallet with others; your path is unique.",
    "Bold financial moves are most appropriate right now.",
    "A crisis is just a stepping stone to your rise.",
    "Your ability to earn has no limits.",
    "Save a part of today's success for the future.",
    "The gold mine is already found; just dig deeper.",
    "Wealth is a state of mind, and you are already there.",

    // --- LIFE & DESTINY ---
    "The universe is preparing a pleasant surprise for you; just wait.",
    "A person from the past will knock on your door with news.",
    "Your kindness will save someone, even if you do not notice it.",
    "A fateful meeting will happen where you least expect it.",
    "The storm in your life is ending; the sun is coming out.",
    "Your patience will be rewarded with peace and harmony.",
    "Signs are everywhere; just open your eyes and look.",
    "What you have lost will return in another form.",
    "Your intuition today is sharper than any knife.",
    "Do not be afraid of changes; they lead you to a better life.",
    "Your home will be filled with laughter and joy.",
    "Forgive yourself for past mistakes; they were lessons.",
    "Your destiny is in your hands; the lines on your palm change.",
    "An important conversation will dot all the 'i's.",
    "You are under the protection of higher forces; fear nothing.",
    "Your dream is closer than you think; reach out.",
    "The trip you are planning will change your worldview.",
    "Love will find you when you stop looking for it.",
    "Your strength is in your uniqueness; do not try to be someone else.",
    "Time heals all wounds, even the deepest ones.",
    "The answer you are looking for will come in a dream.",
    "Your sincerity opens the hearts of people around you.",
    "Do not hold on to what wants to leave; let go.",
    "A new stage of life will begin on Monday.",
    "Your wisdom will help a friend in trouble.",
    "Accidents do not exist; everything has a reason.",
    "Your happiness depends only on your choice.",
    "Old grievances pull you back; drop this burden.",
    "Your light annoys demons but attracts angels.",
    "Soon you will understand why everything happened exactly this way.",
    "Your faith is capable of moving mountains.",
    "Harmony inside will create order outside.",
    "You will meet a mentor who will show the way.",
    "Your life is a canvas; paint with bright colors.",
    "Do not look for meaning; create it yourself.",
    "Your smile today will change someone's day.",
    "You are loved more than you can imagine.",
    "Pay attention to dreams; they are prophetic.",
    "Your energy is being cleansed and renewed.",
    "The secret you learn will give you an advantage.",
    "Your modesty adorns, but boldness wins.",
    "Life gives you a second chance; use it.",
    "Your word has power; speak carefully.",
    "You are a magnet for good events.",
    "Do not be afraid of old age; be afraid of an unlived life.",
    "Your soul knows the way; trust it.",
    "Soon you will receive the answer you have been waiting for years.",
    "Your presence calms storms.",
    "Fate leads you by the shortest path.",
    "You are exactly where you need to be at this moment.",

    // --- STRATEGY & ACTION ---
    "Stop planning; the time for decisive action is now.",
    "Your main enemy is your own doubt; destroy it.",
    "Take the first step, and the road will appear itself.",
    "Sometimes retreat is the best tactic before an attack.",
    "Your victory requires sacrifices; be ready to pay.",
    "Do not wait for the perfect moment; create it yourself.",
    "Your willpower will break any wall.",
    "Be cunning like a fox and brave like a lion.",
    "Your strategy is correct; do not turn off the path.",
    "Silence is also an answer, sometimes the loudest one.",
    "Strike first if a fight is inevitable.",
    "Your discipline today is your freedom tomorrow.",
    "Do not be afraid of mistakes; be afraid of inaction.",
    "Your success is the best revenge against enemies.",
    "Focus on one goal and hit one point.",
    "Your team needs a leader; become one.",
    "Risk everything if you feel that this is 'it'.",
    "Do not scatter your forces; concentration is the key.",
    "Your persistence annoys competitors.",
    "Change the rules of the game if you cannot win by the old ones.",
    "Your reaction speed will save the situation.",
    "Do not look back; there is nothing new there.",
    "Your confidence is half the success.",
    "Study the enemy to defeat him without a fight.",
    "Your weapon is your intellect; sharpen it.",
    "Do not let emotions control your actions.",
    "Your independence makes you invulnerable.",
    "Build bridges, not walls, but keep the gates closed.",
    "Your time is expensive; do not give it away for free.",
    "Act quietly; let the results make the noise.",
    "Your flexibility will help you survive the storm.",
    "Do not rely on luck; rely on the plan.",
    "Your reputation walks ahead of you; control it.",
    "Give up what is holding you back.",
    "Your ambition is your fuel.",
    "Do not look for easy ways; they lead nowhere.",
    "Your work will pay off; just keep hitting the rock.",
    "Be ready to improvise; the plan may change.",
    "Your composure in a crisis is your trump card.",
    "It is not the strongest who wins, but the most enduring.",
    "Your voice must be heard; speak loudly.",
    "Do not be afraid to ask for help; it is a sign of strength.",
    "Your goal justifies the means today.",
    "Pause to gain strength before the jump.",
    "Your observation will give you an advantage.",
    "Do not believe words; believe only actions.",
    "Your determination scares the weak and inspires the strong.",
    "Finish what you started before taking on something new.",
    "Your adaptability is a superpower.",
    "Just do it; do not think about the consequences.",

    // --- MIX: PSYCHOLOGY & WISDOM ---
    "What you seek outside is already within you.",
    "The truth will set you free, but first, it will make you angry.",
    "Your fear is just an illusion, smoke.",
    "Do not try to please everyone; it is impossible.",
    "Your uniqueness is your gift to the world.",
    "Happiness loves silence; do not shout about it.",
    "You are the author of your book; write an interesting plot.",
    "Do not envy; yours will be better.",
    "Your energy changes the space around you.",
    "Be grateful for what you have, and you will receive more.",
    "Your intuition whispers the truth; hear it.",
    "Do not live in the past; it no longer exists.",
    "Your self-love teaches others how to love you.",
    "Calmness is the highest form of power.",
    "You are not alone, even when it seems so.",
    "Your courage to be yourself is a revolution.",
    "Do not be afraid to be funny; be afraid to be boring.",
    "Your kindness will return at the most unexpected moment.",
    "Time spent alone with yourself is priceless.",
    "Your faith performs miracles every day.",
    "Do not judge others; you do not know their war.",
    "Your heart knows the answer; the head only confuses.",
    "Be like water: soft but invincible.",
    "Your sincere smile opens iron doors.",
    "Do not be afraid of the dark; stars are visible in it.",
    "Your vulnerability is not weakness; it is humanity.",
    "Let go of control; allow life to happen.",
    "Your creativity has no limits; create.",
    "Do not wait for praise; praise yourself.",
    "Your body is your temple; take care of it.",
    "A simple conversation can save someone's life.",
    "Your curiosity will lead you to discoveries.",
    "Do not be afraid to refuse; 'no' is a complete sentence.",
    "Your memory keeps treasures, but do not live in a museum.",
    "Accept your flaws; they make you who you are.",
    "Your dream is worth fighting for.",
    "Do not let the world make you hard.",
    "Your hope is an anchor in a stormy sea.",
    "Beauty is in the eye of the beholder.",
    "Your life is not a rehearsal; it is a premiere.",
    "Be honest with yourself; it is the hardest thing.",
    "Your passion ignites fire in others.",
    "Do not be afraid of silence; ideas are born in it.",
    "Your freedom begins in your head.",
    "Forgiveness is a gift to yourself, not to another.",
    "Your journey is more important than the destination.",
    "Do not look for the ideal; look for the real.",
    "Your soul is eternal; problems are temporary.",
    "Love deeply, live brightly.",
    "Everything will be fine, even better than you think."
];

let selectedText = "";

const cardsContainer = document.getElementById("cards");
const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");
const text = document.getElementById("predictionText");

// Initialize Cards
for(let i=0; i<5; i++){
    const card = document.createElement("div");
    card.className = "card";

    card.onclick = () => {
        // Animation Start
        card.classList.add("flipping");

        // Wait for animation (600ms) then show popup
        setTimeout(() => {
            selectedText = predictions[Math.floor(Math.random() * predictions.length)];
            text.innerText = selectedText;

            popup.style.display = "block";
            overlay.style.display = "block";
            
            card.classList.remove("flipping");
        }, 600);
    };

    cardsContainer.appendChild(card);
}

overlay.onclick = () => {
    popup.style.display = "none";
    overlay.style.display = "none";
};

// --- IMAGE GENERATION (TEMPLATE BASED) ---
function downloadCard(){
    const canvas = document.createElement("canvas");
    canvas.width = 1200;
    canvas.height = 675;
    const ctx = canvas.getContext("2d");

    const template = new Image();
    // Ensure this path matches your file structure
    template.src = "images/template.png"; 
    template.crossOrigin = "anonymous"; 

    template.onload = () => {
        // 1. Draw Template
        ctx.drawImage(template, 0, 0, 1200, 675);

        // 2. Text Configuration
        ctx.fillStyle = "#ffffff"; 
        ctx.shadowColor = "rgba(0,0,0,0.5)"; 
        ctx.shadowBlur = 5;
        
        // Font settings - Bold and elegant
        ctx.font = "bold 56px Georgia"; 
        ctx.textAlign = "center";
        
        // 3. Draw Text Centered
        // x = center width (600), y = center height (337)
        wrapText(ctx, `"${selectedText}"`, canvas.width/2, canvas.height/2, 1000, 70);

        // 4. Trigger Download
        const link = document.createElement("a");
        link.download = "magicblock-fortune.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    };

    template.onerror = () => {
        alert("Error loading template.png. Please check if the file exists in the 'images' folder.");
    };
}

// Text Wrapping Function
function wrapText(ctx, text, x, y, maxWidth, lineHeight){
    const words = text.split(" ");
    let line = "";
    let lines = [];

    for(let n=0; n<words.length; n++){
        const testLine = line + words[n] + " ";
        const metrics = ctx.measureText(testLine);
        if(metrics.width > maxWidth && n > 0){
            lines.push(line);
            line = words[n] + " ";
        } else {
            line = testLine;
        }
    }
    lines.push(line);

    // Vertical Center Logic
    let startY = y - ((lines.length - 1) * lineHeight) / 2;

    for(let k=0; k<lines.length; k++){
        ctx.fillText(lines[k], x, startY + (k * lineHeight));
    }
}

// --- TWITTER SHARE ---
function shareCard(){
    const shareText = 
`There are no coincidences. 🔮
I pulled a card and this is the sign I needed today:

"${selectedText}"

What message is waiting for you? 👇
https://alekshawk.github.io/magicblock-fortune-cards/

built with 💜 by @hawk_tyt for @MagicBlock`;

    // Формуємо посилання для твіта
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
    
    // Відкриваємо вікно
    window.open(twitterUrl, '_blank');
}
