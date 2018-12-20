console.log(navigator);
txt = "<p>浏览器代号:" + navigator.appCodeName + "</p>";
document.getElementById("example").innerHTML = txt;

var person=prompt("请输入你的名字","Harry Potter");
if (person!=null && person!="")
{
    x="你好 " + person + "! 今天感觉如何?";
    document.getElementById("example").innerHTML=x;
}

setInterval( function(){
	var d = new Date();
	var t = d.toLocaleTimeString();
	document.getElementById("example").innerHTML = t;
}, 1000);

p=document.querySelector("p");
p.textContent="Hello World";

document.querySelector('img').onclick = function() {
    var src= document.querySelector("img");
	if( src.getAttribute("src") == "Kenny.jpg" ) {
		src.setAttribute("src", "IMG_9479.JPG" );
	} else {
		src.setAttribute("src", "Kenny.jpg" );
	}
}