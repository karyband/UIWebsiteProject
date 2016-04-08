var height = document.getElementById("column-1").clientHeight;
height+=10;
console.log(height);

document.getElementById("column-2").style.minHeight=height+"px";




document.getElementById("digital-button").addEventListener("click", function(){showExperience(1);});
document.getElementById("computer-button").addEventListener("click", function(){showExperience(2);});
document.getElementById("other-button").addEventListener("click", function(){showExperience(3);});

function showExperience(a) {
	var details=document.getElementById("insert-hidden");
	details.style.paddingTop="100px";
	details.style.paddingBottom="100px";

	switch(a){
		case 1:
			details.innerHTML=document.getElementById("hidden-digital").innerHTML;
			details.style.backgroundColor="#797dbd";
			break;
		case 2:
			details.innerHTML=document.getElementById("hidden-csc").innerHTML;
			document.getElementById("hidden-fw").style.backgroundColor="#e9c665";
			break;
		case 3:
			details.innerHTML=document.getElementById("hidden-other").innerHTML;
			document.getElementById("hidden-fw").style.backgroundColor="#e9ae65";
			break;
	}

    console.log(a);
}