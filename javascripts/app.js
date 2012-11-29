$(document).ready(function() {

	function now() {
    return (new Date()).getTime();
	}
	

	 $(".edit").editable("echo.php", {
		 placeholder : "Click me to edit",
		 loadtype : "POST",
		 callback: function(value, settings) {
		  startTime = now();
		  console.log(startTime);
		 }
	 });

	
	$("#done").click(function(e){
	
		$(".edit").removeClass("edit").unbind("click.editable");
		
		function update_output() {
		
			
		
			var out  = [],
				displayTime;
				
			for (var i = 0, len = clicks.length; i < len; i++) {
				displayTime = (clicks[i].time - startTime);
				console.log(displayTime);
				outputTime = displayTime //* 0.00001666666;
				console.log(outputTime);
				//outputTime = outputTime.toFixed(0);
				console.log(outputTime);
				//out.push('<li>'  outputTime + 'm</li>');
			}
			$(".taskList ul li .time").html(outputTime);
		}
		
		var clicks = [];
		
        clicks.push({ time : new Date().getTime(), target : $(this).attr('href') });
        update_output();
		
		
		$(".taskList ul li").appendTo(".doneList ul");
		
		$(".taskList ul")
			.html("<li><div class='nine columns task'><div class='edit'>..click to edit</div></div><div class='three columns time'></div></li>");
		
		$(".edit").editable("echo.php", {
			 placeholder : "Click me to edit",
			 loadtype : "POST",
			 callback: function(value, settings) {
				startTime = now();
				console.log(startTime);
			 }
		 });
		return false;//
	});
  
	
});