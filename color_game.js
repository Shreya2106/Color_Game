var num=6;
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
var colors=generateRandomColor(num);
var squares=document.querySelectorAll(".squares");
var rgb=document.querySelector("#rgb");
var msg=document.querySelector("#message");
var head=document.querySelector("#head");
var n=document.querySelector("#reset");

squareColor();
easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	num=3;
	reset();
	for(var i=3; i<6; i++)
	{
		squares[i].style.display="none";
	}
});
hard.addEventListener("click",function(){
	easy.classList.remove("selected");
	hard.classList.add("selected");
	num=6;
	reset();
	for(var i=3; i<6; i++)
	{
		squares[i].style.display="block";
	}
});
var pickedColor=pickColor();
rgb.textContent=pickedColor;
n.addEventListener("click",function(){
	//n.classList.add("selected");
	reset();
});
function squareColor(){
	for(var i=0; i<colors.length; i++)
  {
  	squares[i].style.background=colors[i];
    squares[i].addEventListener("click",function(){
    var clickedColor=this.style.background;
    console.log(clickedColor);
    if(pickedColor==clickedColor)
	   {
         msg.textContent="Correct!!";
         changeColors(clickedColor);
         head.style.background=pickedColor;
         n.textContent="Play Again??";
       }
      else
       {
   	      msg.textContent="Try Again";
          this.style.background="#232323";
       }
    });
   }
}
function pickColor(){
	var random= Math.floor(Math.random()*colors.length);
	return colors[random];
}
function changeColors(color){
	for(var i=0; i<squares.length; i++){
       squares[i].style.background=color;
   }
}
function generateRandomColor(num){
	var arr=[];
	for(var i=0; i<num; i++)
	{
		arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}
function reset(){
	colors=generateRandomColor(num);
	pickedColor=pickColor();
	head.style.background="steelblue";
	rgb.textContent=pickedColor;
	squareColor();
	msg.textContent="    ";

}