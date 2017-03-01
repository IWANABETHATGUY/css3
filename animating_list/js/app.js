/**
 * Created by fakehxj on 17-2-26.
 */
window.onload=function(){

	setInterval(function(){
		for(var i=0;i<4;i++){
			document.getElementsByTagName('button')[i].click();
		}
	},1000);
	console.log(document.getElementById('list1').className);
	var add1=document.getElementById('add_1');
	var list1=document.getElementById('list_1');
	var list2=document.getElementById('list_2');
	var list3=document.getElementById('list_3');
	var list4=document.getElementById('list_4');
	var add2=document.getElementById('add_2');
	var add3=document.getElementById('add_3');
	var add4=document.getElementById('add_4');
	var li=document.getElementsByClassName('fade');
	add1.onclick=function(){
		var p=document.createElement('li');
		p.innerHTML='List Item';
		p.className='show';
		setTimeout(function(){
			p.className='fade';
		},10)
		p.style.backgroundColor=color();
		list1.appendChild(p);
	}
	add2.onclick=function(){
		var p=document.createElement('li');
		p.innerHTML='List Item';
		p.className='show_2';
		setTimeout(function(){
			p.className='fade_2';
		},10)
		p.style.backgroundColor=color();
		list2.appendChild(p);
	}
	add3.onclick=function(){
		var p=document.createElement('li');
		p.innerHTML='List Item';
		p.className='show_3';
		setTimeout(function(){
			p.className='fade_3';
		},10)
		p.style.backgroundColor=color();
		list3.appendChild(p);
	}
	add4.onclick=function(){
		var p=document.createElement('li');
		p.innerHTML='List Item';
		p.className='show_4';
		setTimeout(function(){
			p.className='fade_4';
		},10)
		p.style.backgroundColor=color();
		list4.appendChild(p);
	}
}
function color(){
	var r=Math.floor(Math.random()*244);
	var g=Math.floor(Math.random()*244);
	var b=Math.floor(Math.random()*244);
	return 'rgb('+r+','+g+','+b+')';
}