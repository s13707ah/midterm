function hinge(i){
	if(i<=10){
		 i=0;
	}else if (i>=10){
		 i-=10;
	}
	return i;
}


var num=hinge(5);