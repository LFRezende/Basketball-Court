let home = 0;
let guest = 0;

homeScore = document.getElementById("board-home")

function HomeOne(){
    home += 1;
    document.getElementById("board-home").textContent = home;
}

function HomeTwo(){
    home += 2;
    document.getElementById("board-home").textContent = home;
}

function HomeThree(){
    home += 3;
    document.getElementById("board-home").textContent = home;
}

function GuestOne(){
    guest += 1;
    document.getElementById("board-guest").textContent = guest;
}

function GuestTwo(){
    guest += 2;
    document.getElementById("board-guest").textContent = guest;
}

function GuestThree(){
    guest += 3;
    document.getElementById("board-guest").textContent = guest;
}