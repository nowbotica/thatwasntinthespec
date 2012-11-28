$(document).ready(function() {

	

	 $(".edit").editable("echo.php", {
		 placeholder : "Click me to edit",
		 loadtype : "POST",
		 callback: function(value, settings) {
		  startTime = new Date().getTime();
		  console.log(startTime);
		 }
	 });

	
	$("#done").click(function(e){
	
		function update_output() {
		
			
		
			var out  = [],
				displayTime;
				
			for (var i = 0, len = clicks.length; i < len; i++) {
				displayTime = (clicks[i].time - startTime);
				console.log(displayTime);
				outputTime = displayTime //* 0.00001666666;
				console.log(outputTime);
				outputTime = outputTime.toFixed(0);
				console.log(outputTime);
				out.push('<li>' + clicks[i].target + ' (' + outputTime + 's)</li>');
			}
			$(".taskList ul li p").html(out.join(''));
		}
		
		var clicks = [];
		
        clicks.push({ time : new Date().getTime(), target : $(this).attr('href') });
        update_output();
		
		
		$(".taskList ul li").appendTo(".doneList")
		$(".edit").removeClass("edit").unbind("click.editable");
		$("<li><div class='nine columns task'><div class='edit'>..click to edit</div><div class='three columns time'><p></p></div></li>")
			.appendTo(".taskList ul");
		
		$(".edit").editable("echo.php", {
			 placeholder : "Click me to edit",
			 loadtype : "POST",
			 callback: function(value, settings) {
				startTime = new Date().getTime();
				console.log(startTime);
			 }
		 });
		e.preventDefault();//
	});
  
	
});