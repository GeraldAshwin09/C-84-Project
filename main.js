canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
var img12;
function add()
{
	bgId=new Image();
	bgId.onload=bguploadimg;
	bgId.src=img12;
}

function bguploadimg()
{
	ctx.drawImage(bgId,0,0,canvas.width,canvas.height);
}

window.addEventListener("keydown",mk);
function mk(e)
{
	keyPressed=e.keyCode;
	if((keyPressed>=97 && keyPressed<=122)||(keyPressed>=60&& keyPressed<=90))
	{
		alpkey();
		document.getElementById("d1").innerHTML="You Pressed Alphabet Key";
	}
	else if(keyPressed>=48 && keyPressed<=57)
	{
		numkey();
		document.getElementById("d1").innerHTML="You Pressed Number Key";
	}

	else if(keyPressed>=37 && keyPressed<=40)
	{
		arrowkey();
		document.getElementById("d1").innerHTML="You Pressed Arrow Key";
	}

	else if(keyPressed==17||keyPressed==18||keyPressed==19)
	{
		specialkey();
		document.getElementById("d1").innerHTML="You Pressed Special Key";
	}

	else
	{
		symbolkey();
		document.getElementById("d1").innerHTML="You Pressed Symbol Key";
	}
}




function alpkey()
{
	img12="Alpkey.png";
	add();
}

function numkey()
{
	img12="numkey.png";
	add();
}

function arrowkey()
{
	img12="arrkey.png";
	add();
}

function specialkey()
{
	img12="spkey.png";
	add();
}

function symbolkey()
{
	img12="otherkey.png";
	add();
}