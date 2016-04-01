$(document).ready(function(){
	var selectedDayInBox;

	var getClasses = function(){
		$("#heading-classes").text("Your classes for " + (selectedDayInBox === "Today" ? selectedDayInBox : "the " + selectedDayInBox));

			//animate the classes divs
			$(".module-info").each(function(i){

				setTimeout(function(){
					$(".module-info").eq(i).addClass("animate").attr("id", "temp-"+i);
				}, 150 * (i+1));
			});
		}

		$("#datepicker").datepicker({
			inline: true,
			showOtherMonths: true,
			dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
		});
		selectedDayInBox = $("#datepicker").val();

		// stores the selected date;
		$("#datepicker").on("change",function(){
			$(".module-info").each(function(){
				$(this).removeClass("animate");
			});
			selectedDayInBox = $(this).val();
		});

		//change color/style of div when mouse is over class/module
		$(".row").on("mouseover", ".module-info", function(){
  			//use addClass to change div color/cursor when hovered over
  			$(this).css("cursor", "pointer"); 
  		});

		$(".row").on("click", ".module-info", function(event){
			var s = [];
			s = $('.module-info').each( function () {}).toArray();

			s.forEach(function(element){
				if ( element.getAttribute("id") != event.target.id ){
					$(element).removeClass("animate");
					$(element).removeAttr("id");
					setTimeout(function(){
						$(element).hide();
					}, 500);
					
				}
			});
  		});

		$("#search-btn").click(function(){
			// show the bottom container
			$(".bottom-container").css("display", "block");
			$(".bottom-container").css("height", "600px");

			$('html, body').animate({
				scrollTop: 400
			},800);

			// -------------------------------------------
			// make the call to google calnedar here
			// then based on number of results recieved
			// add skeleton classes to the module-info
			// -------------------------------------------

			// display th edate on screen

			/*
			Search function currently working only with "cs" in search box and works with hard-coded sample data
			in timetables.js for testing purposes. After testing is approved we will proceed with Google API.
			*/
			var weekDays = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
			var selectedDate = $("#datepicker").datepicker("getDate");
			var selectedDayOfWeek = weekDays[selectedDate.getDay()];
			var searchedCourse = "cs";
			// var searchedCourse = $("#module-text").val();
			$(".row").empty();
			if (selectedDayOfWeek == "saturday" || selectedDayOfWeek == "sunday") {
				$(".row").append("No classes during weekend.");
			} else {
				for (var i = 0; i < timetables[searchedCourse][selectedDayOfWeek].length; i++) {
					var moduleToDisplay = timetables[searchedCourse][selectedDayOfWeek][i];
					var buildingPicture = moduleToDisplay.room.substring(0,1)+".jpg";				
					$(".row").append('<div class = "three columns">\
						<div class = "module-info">\
						<h3>'+moduleToDisplay.module+' - '+moduleToDisplay.room+' - '+moduleToDisplay.type+'</h3>\
						<h5>'+moduleToDisplay.description+'</h5>\
						<p>'+moduleToDisplay.startTime+' - '+moduleToDisplay.endTime+'</p>\
						<img src="img/buildings/'+buildingPicture+'">\
						</div>\
						</div>');
				}
			}
			getClasses();
		});
	});
