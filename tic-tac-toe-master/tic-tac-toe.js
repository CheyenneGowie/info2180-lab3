var change = false;
let roundWon = false;
window.onload = function()
{
    var change = false;
    let roundWon = false;
    let board= document.getElementById("board");
    let squares= document.querySelectorAll("#board div");
    for (let s=0; s<squares.length;s++)
    {
       squares[s].classList.add ("square");
       squares[s].onmouseover = function(){squares[s].classList.toggle('hover', true)}
       squares[s].onmouseout = function(){squares[s].classList.toggle('hover', false)}
    //    squares[s].setAttribute("class","square");
    //    squares[s].addEventListener("click", function(){})

    }
    const statusText = document.querySelector("#status"); 
    const newGameBtn = document.querySelector(".btn"); 
    const winningcombinations= [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        let options = ["", "", "", "", "", "", "", "", ""];
        let index =0;
        let currentPlayer ="X";
        // boolean to ensure game running
        let running =false;

        initializeGame();

        function initializeGame(){
            squares.forEach((square,index) => square.addEventListener("click",()=>{
                squareClicked(index,square)}
                ))
                
            newGameBtn.addEventListener("click",newGame);
            statusText.textContent= `${currentPlayer}'s turn`;
            running = true;
        }
        function squareClicked(index,square){
            
            console.log(index)
            
            // if (options[index] != "" || !running){
            //     return;
            // }
            if(square.textContent == "" && !roundWon)
            {
                options[index] = currentPlayer;
            squareUpdate( square,currentPlayer);
            change = true;
            checkWinner();

            }
            else{
                change = false;
            }
            
            
            // console.log(this)
            // this.textContent="X";
           
            
        }
        function squareUpdate(square,currentPlayer){
           
                square.textContent = currentPlayer;
                         
            
            

        }
        function changePlayer(){
            if(change)
            {
                currentPlayer=(currentPlayer == "X") ? "O" : "X";
            statusText.textContent = `${currentPlayer}'s turn`;
            }
            
        }
        function checkWinner(){
            roundWon = false;

            console.log(winningcombinations)
            for(let i =0; i < winningcombinations.length;i++){
                const condition = winningcombinations[i];
                const squareA= options[condition[0]];
                const squareB= options[condition[1]];
                const squareC= options[condition[2]];
                if (squareA == "" || squareB == "" || squareC == ""){
                    console.log("SQ1")
                    continue;
                    
                }
                if (squareA == squareB && squareB== squareC){
                    roundWon = true;
                    console.log("SQ2")
                    break;
                    
                }
                console.log(roundWon)
                
            }
            if (roundWon){
                document.getElementById("status").className="you-won"
                statusText.innerHTML = `Congratulations ${currentPlayer} is the Winner!`;
                running = true;
                
            }
            else if(!options.includes("")){
                statusText.innerText = `TIE`;
                running= false;
                
            }
            else{changePlayer();}

               
        }
        function newGame(){
            change = false;
            roundWon = false;
            currentPlayer= "X";
            options = ["", "", "", "", "", "", "", "", ""];
            statusText.textContent = `${currentPlayer}'s turn`;
            squares.forEach( square => square.textContent = "");
            running= false;
        }
    
       

     
}