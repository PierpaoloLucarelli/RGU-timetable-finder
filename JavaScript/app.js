$(document).ready(function(){
	var selectedDayInBox;

	var getClasses = function(){
		$("#heading-classes").text("Your classes for " + (selectedDayInBox === "Today" ? selectedDayInBox : "the " + selectedDayInBox));

			//animate the classes divs
			$(".module-info").each(function(i){

				setTimeout(function(){
					$(".module-info").eq(i).addClass("animate");
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

		$("#search-btn").click(function(){
			// show the bottom container
			$(".bottom-container").css("display", "block");
			$(".bottom-container").css("height", "600px");

			$('html, body').animate({
				scrollTop: 200
			}, 800);

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
			var selectedDayOfWeek = weekDays[selectedDate.getUTCDay()];
			var searchedCourse = $("#module-text").val();
			$(".row").empty();
			for (var i = 0; i < timetables[searchedCourse][selectedDayOfWeek].length; i++) {
				var moduleToDisplay = timetables[searchedCourse][selectedDayOfWeek][i];
				var buildingPicture = moduleToDisplay.room.substring(0,1)+".jpg";
				$(".row").append('<div class = "three columns">\
					<div class = "module-info">\
					<h3 class = "module-info-code">'+moduleToDisplay.module+' - '+moduleToDisplay.room+' - '+moduleToDisplay.type+'</h3>\
					<h5 class = "module-info-title">'+moduleToDisplay.description+'</h5>\
					<p class = "module-info-time">'+moduleToDisplay.startTime+' - '+moduleToDisplay.endTime+'</p>\
					<img class = "module-img" src="img/'+buildingPicture+'">\
					</div>\
					<div class = "module-img">\
					</div>\
					</div>');
			}
			getClasses();
		});
	});
