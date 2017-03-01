window.onload=function(){
	var btn1=document.getElementById('btn1');
	var btn2=document.getElementById('btn2');
	var btn3=document.getElementById('btn3');
	var btn4=document.getElementById('btn4');
	var btn5=document.getElementById('btn5');
	var btn6=document.getElementById('btn6');
	var btn7=document.getElementById('btn7');
	var btn8=document.getElementById('btn8');
	btn1.addEventListener('click',function(){
		var list=document.getElementsByClassName('simple-spread')[0];
		if(!hasClass(list,'active'))
		addClass(list,'active');
		else{
			removeClass(list,'active');
		}
	})
	btn2.addEventListener('click',function(){
		var list=document.getElementsByClassName('fan-out')[0];
		if(!hasClass(list,'active'))
			addClass(list,'active');
		else
			removeClass(list,'active');
		})
	btn3.addEventListener('click',function(){
		var list=document.getElementsByClassName('random-rotation')[0];
		if(!hasClass(list,'active'))
			addClass(list,'active');
		else{
			removeClass(list,'active');
		}
	})
	btn4.addEventListener('click',function(){
		var list=document.getElementsByClassName('side-slide')[0];
		if(!hasClass(list,'active'))
			addClass(list,'active');
		else{
			removeClass(list,'active');
		}
	})
	btn5.addEventListener('click',function(){
		var list=document.getElementsByClassName('side-grid')[0];
		if(!hasClass(list,'active'))
			addClass(list,'active');
		else{
			removeClass(list,'active');
		}
	})
	btn6.addEventListener('click',function(){
		var list=document.getElementsByClassName('bouncy-grid')[0];
		if(!hasClass(list,'active'))
			addClass(list,'active');
		else{
			removeClass(list,'active');
		}
	})
	btn7.addEventListener('click',function(){
		var list=document.getElementsByClassName('cover-flow')[0];
		if(!hasClass(list,'active'))
			addClass(list,'active');
		else{
			removeClass(list,'active');
		}
	})
	btn8.addEventListener('click',function(){
		var list=document.getElementsByClassName('fan')[0];
		if(!hasClass(list,'active'))
			addClass(list,'active');
		else{
			removeClass(list,'active');
		}
	})
}

function hasClass(element,cla){
	var cla=cla||'';
	var t=element.className.replace(/\s+/g,' ');
	if(t.length==0)
		return false;
	element.className=t;
	return new RegExp("\\s?"+cla+"\\s?").test(element.className)
}
function addClass(element,cla){
	if(!hasClass(element,cla)){
		element.className+=' '+cla;
	}
}
function removeClass(element,cla){
	if(hasClass(element,cla)){
		var reg=new RegExp(' '+cla+' ');
		var result=(' '+element.className+' ').replace(reg,' ');
		element.className=result;
	}
}
