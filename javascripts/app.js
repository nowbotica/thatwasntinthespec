$(document).ready(function() {

	$(".edit").editable("http://localhost/waitingfortheworldtoend/echo.php");
	
	$("#done").click(function(e){
		$(".taskList ul li").appendTo(".doneList")
		$(".edit").removeClass("edit").unbind("click.editable");
		$("<li><div class='nine columns task'><div class='edit'>..I hope I can bill for this</div><div class='three columns time'><p>19:35</p></div></li>")
			.appendTo(".taskList ul");
		$(".edit").editable("http://localhost/waitingfortheworldtoend/echo.php");
		e.preventDefault();
	});


	
	
		startTime = new Date().getTime();
		
		function update_output() {
		
			
		
			var out  = [],
				displayTime;
				
			for (var i = 0, len = clicks.length; i < len; i++) {
				displayTime = (clicks[i].time - startTime);
				//console.log(displayTime);
				outputTime = displayTime //* 0.00001666666;
				//console.log(outputTime);
				outputTime = outputTime.toFixed(0);
				console.log(outputTime);
				out.push('<li>' + clicks[i].target + ' (' + outputTime + 's)</li>');
			}
			$('#output').html(out.join(''));
		}
		
		var clicks = [];
    
    $('#done').on('click', function () {
        clicks.push({ time : new Date().getTime(), target : $(this).attr('href') });
        update_output();
    });

    
	
});