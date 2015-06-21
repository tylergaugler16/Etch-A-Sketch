

$(document).ready(function(){

	$('button').click(function(){
		$('#myTable').empty();

		var number= $("input:text").val();
	
	
	for(var r=0;r<number;r++){
		$('table').append("<tr></tr>");
		for(var d=0;d<number;d++){
			$('#myTable tr:last').append("<td><div></div></td>");
		}
	}
	 $('#myTable div').each(function(){
	 	var cw= $('#myTable div').width();
	 	$(this).css({'height':cw+'px'});
	 		
	 });
	
	$('#myTable div').hover(function(){


		var rand1=Math.floor(Math.random()*255);
		var rand2=Math.floor(Math.random()*255);
		var rand3=Math.floor(Math.random()*255);
		
		
		$(this).css("background-color",'rgb('+rand1+','+rand2+','+rand3+')');

	
	

	});
	
	// button.click function
	});


//document.ready function	
});



