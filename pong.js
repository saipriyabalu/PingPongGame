var x=30; // defines y axis	
var	y=30; // defines x axis
var dx =8;
var dy =12;
var dt=2;
var count_strikes =0;
var max_score=0;
var large=0;	
var var_speed=0;
var myvar1,myvar2,myvar3;

function initialize()
{
	document.getElementById("ball").style.top= "20px";
	document.getElementById("ball").style.left="0px";		
}

function startGame()
{
	//myvar1=setInterval(moveBall, 100);
	if(document.getElementById("10").checked)
	{
		document.getElementById("messages").innerHTML = "Speed selected is slow, Time interval: 200";
		clearInterval(myvar2);
		clearInterval(myvar3);
		myvar1=setInterval(moveBall, 200);	
		//alert('setInterval(moveBall, 200)');
		
	}
	else{
		clearInterval(myvar1);
		clearInterval(myvar2);
		clearInterval(myvar3);
	}
	 if(document.getElementById("20").checked)
	{
		document.getElementById("messages").innerHTML = "Speed selected is medium, Time interval: 100";
		//alert('setInterval(moveBall, 100)');		
		clearInterval(myvar1);
		clearInterval(myvar3);
		myvar2=setInterval(moveBall, 100);
	}
	else if(document.getElementById("30").checked)
	{
		document.getElementById("messages").innerHTML = "Speed selected is fast, Time interval: 40";
		//alert('setInterval(moveBall, 40)');
		clearInterval(myvar2);
		clearInterval(myvar1);
		myvar3=setInterval(moveBall, 40);
	}
	 
	document.getElementById("paddle").onmousemove=movePaddle;
}

/*function setSpeed(var_speed)
{
	if(var_speed==0)
	{
		document.getElementById("messages").innerHTML = "Speed selected is slow";
		myvar1=setInterval(moveBall, 100);	
		alert('setInterval(moveBall, 200)');
		
	}
	else if(var_speed==1)
	{
		document.getElementById("messages").innerHTML = "Speed selected is medium";
		alert('setInterval(moveBall, 150)');		
		myvar2=setInterval(moveBall, 70);
	}
	else if(var_speed==2)
	{
		document.getElementById("messages").innerHTML = "Speed selected is fast";
		alert('setInterval(moveBall, 100)');
		myvar3=setInterval(moveBall, 10);
	}
}*/


function resetGame()
{
	document.getElementById("10").checked = true;
	location.reload();
	
	
}

// Move the ball on starting the game
function moveBall()
{
	if(x >=400||x<=-82)
	{
	   dx = -dx;  
    }
	if(y<0 || y>=780)
    {
		dy = -dy;  
    }
	var pb=paddle.getBoundingClientRect().bottom;
	var pt=paddle.getBoundingClientRect().top;
	var b=x;
	if(y>755)
	{
	if((x<=(pt-92.36666870117188) && x>((pt-92.36666870117188)-102))|| ((x<=(pt-167.36666870117188) && x>(pt-167.36666870117188)-102)))
	{
	dy=-dy;
	count_strikes++;
	max_score=count_strikes;
	document.getElementById("strikes").innerHTML = count_strikes;
	}	
	}
	// If the ball goes beyond the paddle, stop the game
	if(y>765)
	{	
		if(max_score>large)
		{
		large=max_score;
		document.getElementById("score").innerHTML = large;
		}
		
		count_strikes=0;max_score=0;
		x=0;y=-17;dx =8;dy =17;dt=1;
		document.getElementById("messages").innerHTML = "You missed it! Please try again!";		
		//alert('reached');
		document.getElementById("ball").style.top= x+'px';
		document.getElementById("ball").style.left=y+'px';
		document.getElementById("strikes").innerHTML = count_strikes;
		clearInterval(myvar1);
		clearInterval(myvar2);
		clearInterval(myvar3);
		
	}
	x =x+dx*dt;
    y =y+dy*dt;

	document.getElementById("ball").style.top=x+"px";
	document.getElementById("ball").style.left=y+"px"
	
}

// Move paddle on mouse over event
function movePaddle(event)
{
	//var offset_left = mycourt.offsetLeft;
	//var offset_top	= mycourt.offsetTop;	
	//var court_height=mycourt.height;
	
	var mycourt=document.getElementById("court");
	var mypaddle=document.getElementById("paddle");
	if(event.offsetY)
	{
	var cy=event.offsetY;
	}
	else
	{
	var cy=event.pageY-mycourt.offsetTop;	
	}
	if(cy<400 && cy>70)
	{
		mypaddle.style.top=(cy-70)+"px";
	}
	else if(cy<70){
		mypaddle.style.top="0px";
	}
	else if(cy>400){
		mypaddle.style.top="400px";
	}
	
}