// Getting Two Player NAmes
p1_name = prompt("Enter Player1 Name: ")
p2_name = prompt("Enter Player2 Name: ")

// Set Player names
document.getElementById("p1").textContent = p1_name
document.getElementById("p2").textContent = p2_name

// Randomly Generate Dices
p1 = Math.floor(Math.random() * 6) + 1;
p2 = Math.floor(Math.random() * 6) + 1;
path_p1 = "images/dice" + p1 +".png";
path_p2 = "images/dice" + p2 +".png";
console.log(path_p1)
console.log(path_p2)
document.querySelector(".img1").setAttribute("src",path_p1);
document.querySelector(".img2").setAttribute("src",path_p2);

// Decide which Player wins
if (p1===p2){
    x = "Draw!"
}
else if (p1 > p2){
    x =  p1_name+" wins!"
}
else{
    x = p2_name+" wins!"
}
document.querySelector("h1").innerHTML = x
