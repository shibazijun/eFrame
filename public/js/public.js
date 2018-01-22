function drag(id){
	var obj = document.getElementById(id);
	var dis={}	
	obj.onmousedown=function(ev){
		dis.X=ev.pageX-obj.offsetLeft;
		dis.Y=ev.pageY-obj.offsetTop;
		document.onmousemove=function(ev){
			obj.style.left=ev.pageX - dis.X + "px"
			obj.style.top =ev.pageY - dis.Y + "px"
		};
		document.onmouseup=function(){
			document.onmousemove=null;
			document.onmouseup=null;
		}
	}
} 