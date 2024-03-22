let user=0;
let computer=0;
//to make user choice
let choice=document.querySelectorAll(".choice")
choice.forEach((choice)=>{
    choice.addEventListener("click",(()=>{
        let userChoice=choice.getAttribute("id");
        playGame(userChoice)
    }
    ))
})
//to make comparision
let playGame=((userChoice)=>{
    console.log(userChoice);
    let comchoice=computerChoice();
    console.log(comchoice);
    if(userChoice===comchoice){

        console.log("Its a draw")
        msg.innerHTML="Its a draw!!!Play Again";
        msg.style.backgroundColor="palevioletred";
        msg.style.color="black";
        msg.style.fontWeight="bolder"
    }
    else if (
        userChoice === "Rock" && comchoice === "paper" ||
        userChoice === "paper" && comchoice === "scissors" ||
        userChoice === "scissors" && comchoice === "Rock"
    ) {
        computer++;
        console.log("You Lose");
        msg.innerHTML = `You Lose!!! Your ${userChoice} is defeated by ${comchoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color="white";
        computerScore.innerText = computer;
        
    }
    else{
        user++;
        console.log("You Win");
        msg.innerHTML=`You Win!!!! Your ${userChoice} beats ${comchoice}`;
        msg.style.backgroundColor="green";
        msg.style.color="white";
        userScore.innerText=user;
        
    }
    } 
);
//to make computer choice
function computerChoice(){
    let arr=["Rock","paper","scissors"];
   let randomNumber=Math.floor(Math.random()*3)
   return(arr[randomNumber]);
}
let msg=document.querySelector("#msg")
let userScore=document.querySelector("#user-scores");
let computerScore=document.querySelector("#computer-scores");

//reset button
let btn=document.querySelector("#btn");
btn.addEventListener("click",(()=>{
    user=0;
    computer=0;
    userScore.innerText = "0";
    computerScore.innerText = "0";
    msg.innerHTML="Play your Move";
    msg.style.backgroundColor="palevioletred";
    msg.style.color="White";
}))




