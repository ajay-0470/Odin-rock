console.log('Namaste');
const option=["rock", "paper", "scissors"];
function getcomputerchoice()
{
    const choice=option[Math.floor(Math.random() * option.length)];
    console.log(choice);
    return choice;
    
}
function checkwinner(playerselection, computerselection)
{
    if (playerselection==computerselection){
         return "Tie";
        }
        else if(
            (playerselection=="rock"&&computerselection=="scissors")||(playerselection="scissors"&&computerselection=="paper")||(playerselection=="paper"&&computerselection=="rock")
        )
{
    return "Player";
}

    else {
        return "Computer";
    }
}
    
function playround(playerselection, computerselection){
    const result=checkwinner(playerselection,computerselection);
    if (result=="Tie")
        {
            return "It's a Tie!";
        }
            else if(result=="Player")
                {
                    console.log("You Win!!     "+playerselection+ "   beats   "+computerselection);
                }
                else if(result=="Computer")
                    {
                        console.log("You Loose!     " +computerselection+ "    beats    "+playerselection);
                    }
                
        }


const playerselection="rock";
const computerselection=getcomputerchoice();
console.log(playround(playerselection,computerselection));