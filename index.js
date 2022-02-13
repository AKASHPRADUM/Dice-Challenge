x = Math.floor((Math.random()*6)+1);
y = Math.floor((Math.random()*6)+1);
console.log(x);
console.log(y);

if (x===1)
{
    document.querySelector(".img1").setAttribute("src","images/dice1.png");
}
else if (x===2)
{
    document.querySelector(".img1").setAttribute("src","images/dice2.png");
}
else if (x===3)
{
    document.querySelector(".img1").setAttribute("src","images/dice3.png");
}
else if (x===4)
{
    document.querySelector(".img1").setAttribute("src","images/dice4.png");
}
else if (x===5)
{
    document.querySelector(".img1").setAttribute("src","images/dice5.png");
}
else
{
    document.querySelector(".img1").setAttribute("src","images/dice6.png");
}

if (y===1)
{
    document.querySelector(".img2").setAttribute("src","images/dice1.png");
}
else if (y===2)
{
    document.querySelector(".img2").setAttribute("src","images/dice2.png");
}
else if (y===3)
{
    document.querySelector(".img2").setAttribute("src","images/dice3.png");
}
else if (y===4)
{
    document.querySelector(".img2").setAttribute("src","images/dice4.png");
}
else if (y===5)
{
    document.querySelector(".img2").setAttribute("src","images/dice5.png");
}
else
{
    document.querySelector(".img2").setAttribute("src","images/dice6.png");
}




if(x>y)
{
    document.querySelector(".container h1").innerHTML= "Player 1 Wins";
}
else if(x<y)
{
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else
{
    document.querySelector("h1").innerHTML="Drow!";
}
