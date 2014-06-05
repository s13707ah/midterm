function fizzbuzz(i){
	if(i%3==0&&i%5==0){
		
		 i="fizzbuzz";
	}else if(i%3==0){
		i = "fizz";
	}else if(i%5==0){
		i="buzz";
	}else{
		i=i;
	}
	return i;
}


