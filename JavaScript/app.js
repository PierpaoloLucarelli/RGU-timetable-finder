//executes when the data to be displayed is ready
$(document).ready(function(){	
	var getClasses = function(){
		$("#heading-classes").text("Your classes for " + (selectedDayInBox === "Today" ? selectedDayInBox : "the " + selectedDayInBox));

			//animate the classes divs
			$(".module-info").each(function(i){

				setTimeout(function(){
					$(".module-info").eq(i).addClass("animate");
				}, 150 * (i+1));
			});
		}

		//adding the datepicker
		$("#datepicker").datepicker({
			inline: true,
			showOtherMonths: true,
			dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
		});
		var selectedDayInBox = $("#datepicker").val();

		// stores the selected date;
		$("#datepicker").on("change",function(){
			selectedDayInBox = $(this).val();
		});

		//changes border/cursor mouse is over class/module
		$(".row").on("mouseover", ".module-info", function(){
			$(this).css("cursor", "pointer"); 
		});

		$(".row").on("click", ".module-info", function(){
			//using floor 5 of Riverside East as test. Will be made to work with objects in the future and not substring.
			var floorPlanPicture = "N5.jpg";
			// var floorPlanPicture = $(this).text().substring(15,17)+".jpg";
			var floorPlanPictureLocation = "img/floorPlans/" + floorPlanPicture;
			// var floorPlanPictureHTML = "<a class = 'image' href ='img/floorPlans/" + floorPlanPicture+"'</a>";
			//the Colorbox plugin is used when clicking on a module. It will display the floor map in a fancy window.
			$.colorbox({href:floorPlanPictureLocation});
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
			Search function currently working only show data for Computer Science and works with hard-coded sample data
			in timetables.js for testing purposes. After testing is approved we will proceed with Google API.
			*/
			var weekDays = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
			var selectedDate = $("#datepicker").datepicker("getDate");

			//getDay() returns 0 to 6 and thus we get sunday - saturday
			var selectedDayOfWeek = weekDays[selectedDate.getDay()];
			var searchedCourse = "cs";

			// var searchedCourse = $("#module-text").val();
			$(".row").empty();
			if (typeof timetables[searchedCourse][selectedDayOfWeek] == "undefined") {
				$(".row").append("No classes during selected date.");
			} else {

				//scans the cs object in timetables.js and pulls the information and creates a div object with it
				for (var i = 0; i < timetables[searchedCourse][selectedDayOfWeek].length; i++) {
					var moduleToDisplay = timetables[searchedCourse][selectedDayOfWeek][i];
					var buildingPicture = moduleToDisplay.room.substring(0,1)+".jpg";				
					$(".row").append('<div class = "three columns">\
						<div class = "module-info">\
						<h3 class = "module-info-code">'+moduleToDisplay.module+' - '+moduleToDisplay.room+' - '+moduleToDisplay.type+'</h3>\
						<h5 class = "module-info-title">'+moduleToDisplay.description+'</h5>\
						<p class = "module-info-time">'+moduleToDisplay.startTime+' - '+moduleToDisplay.endTime+'</p>\
						<img class = "module-img" src="img/buildings/'+buildingPicture+'">\
						</div>\
						<div class = "module-img">\
						</div>\
						</div>');
				}
			}
			getClasses();
		});
	});
