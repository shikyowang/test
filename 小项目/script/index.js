window.onload=function(){
	
	var smBoxs=document.querySelectorAll(".smbox");
	var shadowBox=document.querySelector("#shadowBox");
	var nav=document.querySelector(".nav");
	var next=nav.querySelector(".next");
	var prev=nav.querySelector(".prev");
	var imgs=nav.querySelectorAll("img");

	shadowBox.style.height=document.querySelector("html").offsetHeight+'px';

	for(var i=0,l=smBoxs.length;i<l;i++){
		smBoxs[i].index=i;
		smBoxs[i].onclick=function(){
			shadowBox.style.display=nav.style.display='block';
			
			setTimeout(function(){
				nav.style.transform='scale(1)';
			})
			
			
		imgs[1].src="images/work_"+this.index+"_big.jpg";	
		}
	}

	shadowBox.onclick=function(){
		this.style.display='none';
		nav.style.transform='scale(0)';
		nav.style.display='none';
	}
	
	

}