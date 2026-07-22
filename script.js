// Welcome button

function welcomeMessage(){

    alert("❤️ Welcome to Engr. Hilal Zaman's Love Website ❤️");

}


// Special message button

function showLove(){

    alert("💖 Every moment with you is a beautiful memory. ❤️");

}



// Floating hearts animation

function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.bottom = "0";
    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = "25px";

    heart.style.animation = "heartMove 5s linear";


    document.body.appendChild(heart);



    setTimeout(()=>{

        heart.remove();

    },5000);

}



setInterval(createHeart,500);



// Add animation style

const style = document.createElement("style");

style.innerHTML = `

@keyframes heartMove {

from {

transform: translateY(0);

opacity:1;

}


to {

transform: translateY(-100vh);

opacity:0;

}

}

`;


document.head.appendChild(style)
