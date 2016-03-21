$(document).ready(function(){
		var selected;

		var getClasses = function(){
			$("#heading-classes").text("Your classes for " + (selected === "Today" ? selected : "the " + selected));

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
		selected = $("#datepicker").val();

		// stores the selected date;
		$("#datepicker").on("change",function(){
			$(".module-info").each(function(){
				$(this).removeClass("animate");
			});
        	selected = $(this).val();
    	});

		$("#search-btn").click(function(){
			// show the bottom container
			$(".bottom-container").css("display", "block");
			$(".bottom-container").css("height", "600px");

			$('html, body').animate({
          		scrollTop: 200
        	}, 1200);

			// -------------------------------------------
			// make the call to google calnedar here
			// then based on number of results recieved
			// add skeleton classes to the module-info
			// -------------------------------------------

			// display th edate on screen
			getClasses();
		});


});
