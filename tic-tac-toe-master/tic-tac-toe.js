window.onload=function()
{
    console.log("I am a Superstar");
    let board= document.getElementById("board");
    console.log(board);
    let squares= document.querySelectorAll("#board div");
    console.log(squares);
    for (let s in squares)
    {
       squares[s].classList.add("square");

    }

}