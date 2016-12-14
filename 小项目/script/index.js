window.onload=function(){
	
	var smBoxs=document.querySelectorAll(".smbox");
	var shadowBox=document.querySelector("#shadowBox");
	var nav=document.querySelector(".nav");
	var next=nav.querySelector(".next");
	var prev=nav.querySelector(".prev");
	var imgsO=nav.querySelectorAll("img")[0];
	var imgsI=nav.querySelectorAll("img")[1];
	var upIndex=0;
	var dowIndex=0;
	var canClick=true;
	shadowBox.style.height=document.querySelector("html").offsetHeight+'px';

	for(var i=0,l=smBoxs.length;i<l;i++){
		
		smBoxs[i].index=i;
		smBoxs[i].onclick=function(){                 //第一点击 出来显示卡
			shadowBox.style.display=nav.style.display='block';
			
			setTimeout(function(){
				nav.style.transform='scale(1)';
			})
			
			
		imgsI.src="images/work_"+this.index+"_big.jpg";   // 然后改了 前面图片的地址。
		upIndex=this.index;
		}
	}

	shadowBox.onclick=function(){						//   点击 暗背景 
		this.style.display='none';
		nav.style.transform='scale(0)';
		nav.style.display='none';
	}
	
	next.onclick=function(){						//   点击 下一个  切换
		if(!canClick){
			return;
		}
		canClick=false;
		dowIndex=upIndex+1;
		if(dowIndex==smBoxs.length){
			dowIndex=0;
		}
		imgsO.src="images/work_"+dowIndex+"_big.jpg";
		imgsI.className=imgsO.className='trogO';
		imgsI.style.transform="translateX(600px) rotateY(-10deg)";
// 前面的图，右移、旋转。
// 之后，下面的图翘起，从上面移到到右边的图插入进去
		var endNum=0;
		imgsI.addEventListener('transitionend',
		function(){
			endNum++;
			imgsO.style.transform='rotateY(-10deg)';
			imgsI.style.transform='translateX(0)';
			
// imgsI触发两次transitionend，闭合翘起图片。
			if(endNum==2){
				imgsO.style.transform='rotateY(0)';
			}
		});
// 	
		var endNum2=0;
		imgsO.addEventListener('transitionend',function(){
			endNum2++;
			if(endNum2==2){
				imgsI.src="images/work_"+dowIndex+"_big.jpg";  //  将前面的图片地址
				upIndex++;
				if(upIndex==smBoxs.length){
					upIndex=0;
				}
				canClick=true;
			}
		});
			
	}
	/*
	 *                上     一         个
	 */
	var prev=document.querySelector(".prev");
		prev.onclick=function(){						//   点击 上一个  切换
		if(!canClick){
			return ;
		}
		canClick=false;
		dowIndex=upIndex-1;
		if(dowIndex<0){
			dowIndex=smBoxs.length-1;
		}
		imgsO.src="images/work_"+dowIndex+"_big.jpg";
		imgsI.className=imgsO.className='trogI';
		imgsI.style.transform="translateX(-600px) rotateY(10deg)";
// 前面的图，右移、旋转。
// 之后，下面的图翘起，从上面移到到右边的图插入进去
		var endNum=0;
		imgsI.addEventListener('transitionend',
		function(){
			endNum++;
			imgsO.style.transform='rotateY(10deg)';
			imgsI.style.transform='translateX(0)';
			
// imgsI触发两次transitionend，闭合翘起图片。
			if(endNum==2){
				imgsO.style.transform='rotateY(0)';
			}
		});
// 	
		var endNum2=0;
		imgsO.addEventListener('transitionend',function(){
			endNum2++;
			if(endNum2==2){
				imgsI.src="images/work_"+dowIndex+"_big.jpg";  //  将前面的图片地址
				upIndex--;
				if(upIndex<0){
					upIndex=smBoxs.length-1;
				}
				canClick=true;
			}

		});
		
	}

}