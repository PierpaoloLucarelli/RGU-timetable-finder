$(document).ready(function(){
    var cols = [];

    //gets called when search is pressed and displays generated date
    var getClasses = function(){
      $("#heading-classes").text("Your classes for " + (selectedDayInBox === "Today" ? selectedDayInBox : "the " + selectedDayInBox));

			//animate the classes divs
			$(".module-info").each(function(i){

				setTimeout(function(){
					$(".module-info").eq(i).addClass("animate").attr("id", "temp-"+i);
				}, 150 * (i+1));
			});
		}

        //sets up the datepicker
        $("#datepicker").datepicker({
         inline: true,
         showOtherMonths: true,
         dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
     });
        var selectedDayInBox = $("#datepicker").val();

		// hides the displayed modules and stores the selected date;
		$("#datepicker").on("change",function(){
			$(".module-info").each(function(){
				$(this).removeClass("animate");
			});

            //hides the canvas when new date is selected
            $("#canvas").removeClass("animate").css("visibility", "hidden").css("display", "none");
            selectedDayInBox = $(this).val();
        });

		//changes border/cursor of div when mouse is over class/module
		$(".row").on("mouseover", ".module-info", function(){
           $(this).css("cursor", "pointer");
       });

        //removes modules which are not selected
		$(".row").on("click", ".module-info", function(event){
			var modules = [];
			modules = $('.module-info').each( function () {}).toArray();
			modules.forEach(function(element){
				if ( $(element).attr('id') != event.target.id ) {
                    setTimeout(function(){
                        $(element).css("visibility", "hidden");
                    }, 900);
                    $(element).removeClass("animate").removeAttr("id");
                }
            })

            if ( event.target.id == "temp-2"){
                setTimeout(function(){
                    ($(event.currentTarget).css("z-index", "1"));
                    ($(event.currentTarget).css("transform", "translateX(-270%)"));
                    ($(event.currentTarget).css("transition", "all 0.3s ease-in-out"));
                }, 500);
            } else if ( event.target.id == "temp-1"){
                setTimeout(function(){
                    ($(event.currentTarget).css("z-index", "1"));
                    ($(event.currentTarget).css("transform", "translateX(-140%)"));
                    ($(event.currentTarget).css("transition", "all 0.3s ease-in-out"));
                }, 500);
            } else {
                setTimeout(function() {
                    ($(event.currentTarget).css("z-index", "1"));
                }, 500);
            }

            setTimeout(function(){
                $(document.getElementById("canvas")).addClass("animate");
                init();
            }, 900);

        });

        //shows the results with generated data
		$("#search-btn").click(function(){
            //the first two lines move the search container from the middle of the page to the bottom of the page
            $(".search-container").css("margin-top", "0");
            $(".search-container").css("bottom", "0");
            $(".bottom-container").css("display", "block");
			$(".bottom-container").css("height", "600px");
            $(".footer").css("display", "block");

            $('html, body').animate({
                scrollTop: $(".search-container").offset().top - $("nav").height()
            },800);  
			

			// -------------------------------------------
			// make the call to google calnedar here
			// then based on number of results recieved
			// add skeleton classes to the module-info
			// -------------------------------------------

			// display th edate on screen

			/*
			Search function currently working only shows cs data works with hard-coded sample data
			in timetables.js for testing purposes. After testing is approved we will proceed with Google API.
			*/
			var weekDays = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
			var selectedDate = $("#datepicker").datepicker("getDate");
			var selectedDayOfWeek = weekDays[selectedDate.getDay()];
			var searchedCourse = "cs";
			// var searchedCourse = $("#module-text").val();
			$(".row").empty();
			if (typeof timetables[searchedCourse][selectedDayOfWeek] == "undefined") {
				$(".row").append("No classes during selected date.");
			} else {

                //builds a div by pulling data from timetables.js and displays it
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

            cols = $('.three, .columns').each( function () {}).toArray();
            cols.forEach( function(element, i){
                $(element).attr("id", "cols-temp-"+i);
            })

            $(".row").append('<canvas id="canvas" width="400" height="250"></canvas>');

            getClasses();
        });






        function init() {

            var canvas = document.getElementById("canvas");
            var ctx = canvas.getContext("2d");

            draw(ctx);
        }

        function draw(ctx) {

        // layer1/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(78.4, 91.0);
        ctx.bezierCurveTo(78.4, 109.1, 63.7, 123.8, 45.6, 123.8);
        ctx.bezierCurveTo(27.4, 123.8, 12.7, 109.1, 12.7, 91.0);
        ctx.bezierCurveTo(12.7, 72.9, 27.4, 58.2, 45.6, 58.2);
        ctx.bezierCurveTo(63.7, 58.2, 78.4, 72.9, 78.4, 91.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(146, 38, 142)";
        ctx.fill();
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(75.5, 104.6);
        ctx.lineTo(98.6, 133.5);
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(98.6, 133.5);
        ctx.lineTo(91.4, 140.8);
        ctx.bezierCurveTo(91.4, 140.8, 116.4, 173.2, 176.6, 167.8);
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(114.1, 152.4);
        ctx.bezierCurveTo(114.1, 152.4, 114.1, 152.4, 114.1, 152.4);
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(133.6, 158.4);
        ctx.bezierCurveTo(133.6, 158.4, 133.6, 158.4, 133.6, 158.4);
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(151.4, 161.1);
        ctx.bezierCurveTo(151.4, 161.1, 151.4, 161.1, 151.4, 161.1);
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(133.6, 158.4);
        ctx.bezierCurveTo(133.6, 158.4, 133.8, 158.4, 133.8, 158.4);
        ctx.stroke();

        // layer1/Rectangle
        ctx.beginPath();
        ctx.moveTo(210.7, 163.5);
        ctx.lineTo(176.6, 167.8);
        ctx.lineTo(172.3, 133.7);
        ctx.lineTo(206.4, 129.5);
        ctx.lineTo(210.7, 163.5);
        ctx.closePath();
        ctx.stroke();

        // layer1/Rectangle
        ctx.beginPath();
        ctx.moveTo(244.7, 159.3);
        ctx.lineTo(210.7, 163.5);
        ctx.lineTo(206.4, 129.5);
        ctx.lineTo(240.4, 125.2);
        ctx.lineTo(244.7, 159.3);
        ctx.closePath();
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(263.7, 156.9);
        ctx.lineTo(244.7, 159.3);
        ctx.lineTo(240.4, 125.2);
        ctx.lineTo(278.4, 120.4);
        ctx.lineTo(263.7, 156.9);
        ctx.closePath();
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(0.4, 39.0);
        ctx.lineTo(23.2, 67.0);
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(0.4, 39.0);
        ctx.lineTo(78.4, 26.5);
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(78.4, 26.5);
        ctx.lineTo(69.0, 42.8);
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(69.0, 42.8);
        ctx.lineTo(88.0, 65.6);
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(88.0, 65.6);
        ctx.lineTo(97.9, 57.4);
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(127.2, 93.6);
        ctx.bezierCurveTo(127.2, 93.6, 142.1, 111.9, 166.0, 107.8);
        ctx.lineTo(161.5, 87.9);
        ctx.bezierCurveTo(148.7, 88.8, 143.6, 80.7, 143.6, 80.7);
        ctx.lineTo(127.2, 93.6);
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(105.5, 110.9);
        ctx.lineTo(113.0, 117.9);
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(284.9, 95.4);
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(185.3, 99.8);
        ctx.lineTo(240.4, 54.1);
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(240.4, 54.1);
        ctx.lineTo(227.7, 38.4);
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(227.7, 38.4);
        ctx.lineTo(232.1, 34.9);
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(193.8, 110.8);
        ctx.lineTo(185.1, 99.6);
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(172.9, 105.4);
        ctx.lineTo(178.0, 119.0);
        ctx.bezierCurveTo(178.0, 119.0, 168.3, 122.9, 154.9, 122.7);
        ctx.lineTo(155.9, 108.4);
        ctx.bezierCurveTo(155.9, 108.4, 165.0, 109.0, 172.9, 105.4);
        ctx.closePath();
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(264.3, 10.6);
        ctx.lineTo(273.3, 29.5);
        ctx.lineTo(273.5, 29.8);
        ctx.bezierCurveTo(273.5, 29.8, 250.0, 43.7, 244.7, 51.1);
        ctx.lineTo(232.1, 34.9);
        ctx.bezierCurveTo(232.1, 34.9, 246.6, 19.4, 264.3, 10.6);
        ctx.stroke();

        // layer1/Rectangle
        ctx.beginPath();
        ctx.moveTo(126.8, 93.9);
        ctx.lineTo(109.1, 71.3);
        ctx.lineTo(125.9, 58.2);
        ctx.lineTo(143.6, 80.8);
        ctx.lineTo(126.8, 93.9);
        ctx.closePath();
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(109.2, 71.2);
        ctx.lineTo(76.7, 29.7);
        ctx.lineTo(88.5, 10.2);
        ctx.lineTo(125.9, 58.1);
        ctx.lineTo(109.2, 71.2);
        ctx.closePath();
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(173.0, 105.2);
        ctx.lineTo(178.0, 119.0);
        ctx.bezierCurveTo(178.0, 119.0, 185.6, 118.0, 193.7, 110.5);
        ctx.lineTo(185.3, 99.8);
        ctx.lineTo(188.4, 97.2);
        ctx.lineTo(176.4, 82.2);
        ctx.bezierCurveTo(171.7, 88.2, 161.4, 88.0, 161.4, 88.0);
        ctx.lineTo(166.0, 107.6);
        ctx.bezierCurveTo(166.0, 107.6, 169.8, 106.9, 173.0, 105.2);
        ctx.stroke();

        // layer1/Rectangle
        ctx.beginPath();
        ctx.moveTo(200.8, 100.0);
        ctx.lineTo(191.4, 107.5);
        ctx.lineTo(185.3, 99.9);
        ctx.lineTo(194.6, 92.4);
        ctx.lineTo(200.8, 100.0);
        ctx.closePath();
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(209.0, 97.4);
        ctx.lineTo(205.2, 100.5);
        ctx.lineTo(203.2, 98.1);
        ctx.lineTo(200.8, 100.0);
        ctx.lineTo(194.5, 92.1);
        ctx.lineTo(200.6, 87.1);
        ctx.lineTo(209.0, 97.4);
        ctx.closePath();
        ctx.stroke();

        // layer1/Group

        // layer1/Group/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(235.2, 75.5);
        ctx.lineTo(214.1, 92.9);
        ctx.lineTo(209.8, 87.6);
        ctx.lineTo(215.8, 82.6);
        ctx.lineTo(211.9, 77.8);
        ctx.lineTo(226.9, 65.4);
        ctx.lineTo(235.2, 75.5);
        ctx.closePath();
        ctx.stroke();

        // layer1/Group/Path
        ctx.beginPath();
        ctx.moveTo(215.8, 82.6);
        ctx.lineTo(224.9, 75.2);
        ctx.stroke();

        // layer1/Path
        ctx.restore();
        ctx.beginPath();
        ctx.moveTo(310.4, 24.6);
        ctx.lineTo(315.6, 3.6);
        ctx.bezierCurveTo(286.6, -5.9, 265.5, 9.4, 265.5, 9.4);
        ctx.lineTo(274.8, 28.6);
        ctx.bezierCurveTo(274.8, 28.6, 288.0, 18.7, 310.4, 24.6);
        ctx.closePath();
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(291.9, 23.0);
        ctx.lineTo(290.6, 7.8);
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(199.7, 116.4);
        ctx.lineTo(205.4, 115.6);
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(205.4, 115.6);
        ctx.lineTo(204.7, 111.8);
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(204.7, 111.8);
        ctx.lineTo(277.6, 53.0);
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(200.8, 124.2);
        ctx.lineTo(273.5, 112.8);
        ctx.stroke();

        // layer1/Group

        // layer1/Group/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(286.2, 23.9);
        ctx.bezierCurveTo(280.5, 24.8, 274.8, 28.6, 274.8, 28.6);
        ctx.lineTo(278.5, 35.8);
        ctx.bezierCurveTo(278.5, 35.8, 287.6, 32.4, 288.0, 32.5);
        ctx.lineTo(286.2, 23.9);
        ctx.stroke();

        // layer1/Group
        ctx.restore();

        // layer1/Group/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(297.4, 36.5);
        ctx.bezierCurveTo(294.4, 36.0, 289.0, 37.7, 289.0, 37.7);
        ctx.lineTo(285.5, 23.9);
        ctx.bezierCurveTo(285.5, 23.9, 292.4, 22.4, 297.4, 22.8);
        ctx.lineTo(297.4, 36.5);
        ctx.closePath();
        ctx.stroke();

        // layer1/Path
        ctx.restore();
        ctx.beginPath();
        ctx.moveTo(308.3, 34.4);
        ctx.bezierCurveTo(302.6, 32.2, 297.4, 33.2, 297.4, 33.2);
        ctx.lineTo(297.4, 22.8);
        ctx.bezierCurveTo(297.4, 22.8, 305.1, 23.2, 310.0, 24.9);
        ctx.lineTo(308.3, 34.4);
        ctx.closePath();
        ctx.stroke();

        // layer1/Group

        // layer1/Group/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(280.7, 90.9);
        ctx.bezierCurveTo(265.9, 68.5, 286.9, 56.4, 286.9, 56.4);
        ctx.lineTo(295.7, 60.5);
        ctx.lineTo(280.7, 90.9);
        ctx.closePath();
        ctx.stroke();

        // layer1/Group
        ctx.restore();

        // layer1/Group/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(288.3, 75.4);
        ctx.lineTo(295.7, 60.5);
        ctx.lineTo(324.5, 74.7);
        ctx.bezierCurveTo(326.2, 79.8, 320.0, 90.9, 320.0, 90.9);
        ctx.lineTo(288.3, 75.4);
        ctx.stroke();

        // layer1/Group
        ctx.restore();

        // layer1/Group/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(288.3, 75.4);
        ctx.lineTo(280.7, 90.9);
        ctx.bezierCurveTo(280.7, 90.9, 285.5, 96.3, 289.3, 96.2);
        ctx.lineTo(287.4, 100.4);
        ctx.bezierCurveTo(287.4, 100.4, 306.1, 108.3, 320.0, 90.9);
        ctx.lineTo(288.3, 75.4);
        ctx.stroke();

        // layer1/Path
        ctx.restore();
        ctx.beginPath();
        ctx.moveTo(277.6, 53.0);
        ctx.lineTo(280.7, 54.1);
        ctx.bezierCurveTo(280.7, 54.1, 256.7, 71.7, 280.7, 98.2);
        ctx.lineTo(273.9, 113.3);
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(311.8, 18.9);
        ctx.lineTo(323.9, 23.2);
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(353.3, 38.4);
        ctx.lineTo(323.1, 23.6);
        ctx.lineTo(333.6, 2.0);
        ctx.lineTo(360.4, 15.1);
        ctx.lineTo(357.1, 21.7);
        ctx.lineTo(360.6, 23.3);
        ctx.lineTo(353.3, 38.4);
        ctx.closePath();
        ctx.stroke();

        // layer1/Rectangle
        ctx.beginPath();
        ctx.moveTo(362.9, 43.1);
        ctx.lineTo(353.1, 38.3);
        ctx.lineTo(360.5, 23.3);
        ctx.lineTo(370.3, 28.2);
        ctx.lineTo(362.9, 43.1);
        ctx.closePath();
        ctx.stroke();

        // layer1/Rectangle
        ctx.beginPath();
        ctx.moveTo(374.4, 54.7);
        ctx.lineTo(360.7, 47.9);
        ctx.lineTo(370.4, 28.2);
        ctx.lineTo(384.1, 35.0);
        ctx.lineTo(374.4, 54.7);
        ctx.closePath();
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(278.4, 120.4);
        ctx.lineTo(287.4, 100.4);
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(316.4, 40.8);
        ctx.lineTo(311.3, 50.3);
        ctx.bezierCurveTo(311.3, 50.3, 326.2, 57.8, 326.2, 69.9);
        ctx.lineTo(324.3, 74.4);
        ctx.stroke();

        // layer1/Rectangle
        ctx.beginPath();
        ctx.moveTo(328.2, 46.8);
        ctx.lineTo(315.5, 40.4);
        ctx.lineTo(321.3, 28.7);
        ctx.lineTo(334.0, 35.0);
        ctx.lineTo(328.2, 46.8);
        ctx.closePath();
        ctx.stroke();

        // layer1/Rectangle
        ctx.beginPath();
        ctx.moveTo(336.4, 50.8);
        ctx.lineTo(328.1, 46.7);
        ctx.lineTo(333.9, 34.9);
        ctx.lineTo(342.2, 39.1);
        ctx.lineTo(336.4, 50.8);
        ctx.closePath();
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(230.9, 62.0);
        ctx.lineTo(239.6, 72.9);
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(239.6, 72.9);
        ctx.lineTo(276.6, 43.2);
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(270.9, 31.4);
        ctx.lineTo(276.6, 43.2);
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(126.8, 93.9);
        ctx.lineTo(117.0, 101.9);
        ctx.bezierCurveTo(117.0, 101.9, 120.6, 107.8, 127.5, 111.6);
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(127.5, 111.6);
        ctx.lineTo(134.6, 100.6);
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(132.3, 115.0);
        ctx.bezierCurveTo(132.3, 115.0, 139.4, 122.5, 154.9, 122.7);
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(140.8, 120.1);
        ctx.lineTo(146.3, 106.4);
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(131.1, 106.1);
        ctx.bezierCurveTo(131.1, 106.1, 131.9, 109.7, 143.6, 113.0);
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(136.9, 110.2);
        ctx.lineTo(140.0, 103.8);
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(239.6, 54.7);
        ctx.lineTo(248.1, 66.1);
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(252.5, 43.8);
        ctx.lineTo(261.9, 55.1);
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(336.4, 50.8);
        ctx.lineTo(367.9, 65.9);
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(367.9, 65.9);
        ctx.lineTo(374.4, 54.7);
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(360.7, 47.9);
        ctx.lineTo(342.2, 39.1);
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(347.0, 41.4);
        ctx.lineTo(341.1, 53.1);
        ctx.stroke();

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(352.7, 44.1);
        ctx.lineTo(347.0, 55.9);
        ctx.stroke();

        // layer1/N303
        ctx.font = "Bold 11.2px 'Lato'";
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.fillText("N303", 31.4, 94.9);

        // layer1/Path
        ctx.beginPath();
        ctx.moveTo(113.0, 117.9);
        ctx.lineTo(106.9, 125.2);
        ctx.bezierCurveTo(106.9, 125.2, 132.0, 147.6, 173.3, 141.9);
        ctx.stroke();
        ctx.restore();
    }
});
