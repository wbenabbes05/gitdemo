let images = ["file:///C:/Users/Iyad-pc/Pictures/Dice-1-b.svg",
    "file:///C:/Users/Iyad-pc/Pictures/Dice-2-b.svg",
    "file:///C:/Users/Iyad-pc/Pictures/Dice-3-b.svg",
    "file:///C:/Users/Iyad-pc/Pictures/Dice-4-b.svg",
    "file:///C:/Users/Iyad-pc/Pictures/Dice-5-b.svg",
    "file:///C:/Users/Iyad-pc/Pictures/Dice-6-b.svg"
];
let dice= document.querySelectorAll("img");
function Roll(){
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function(){dice.forEach(function(die){
        die.classList.remove("shake");
    })},
    1000
)
 let diceone = Math.floor(Math.random()*6);
 let dicetwo = Math.floor(Math.random()*6);
 document.querySelector("#die1").setAttribute("src",images[diceone]);
 document.querySelector("#die2").setAttribute("src",images[dicetwo]);
  document.querySelector("#total").innerHTML="Your Roll is "+ ((diceone +1)+(dicetwo+1));

}

