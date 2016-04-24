$(document).ready(function () {
    // console.log(cal_ids["computer science"]);
    //The cols variable will contain each html section containing the class/module information
    var cols = [];
    var availableTags = Object.keys(cal_ids);

    //gets called when search is pressed and displays generated date
    var getClasses = function () {

        //Changes the title depending on the date selected
        $("#heading-classes").text("Your classes for " + (selectedDateInBox === "Today" ? selectedDateInBox : "the " + selectedDateInBox));

        //animate the classes divs
        $(".module-info").each(function (i) {

            setTimeout(function () {
                $(".module-info").eq(i).addClass("animate").attr("id", "temp-" + i);
            }, 150 * (i + 1));
        });
    }


    $( "#module-text" ).autocomplete({
     source: availableTags
   });

    //sets up the datepicker from the jQuery UI
    $("#datepicker").datepicker({
        inline: true,
        showOtherMonths: true,
        dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    });
    var selectedDateInBox = $("#datepicker").val();

    // hides the displayed modules when the date is changed and stores the selected date;
    $("#datepicker").on("change", function () {
        $(".module-info").each(function () {
            $(this).removeClass("animate");
        });

        //hides the canvas when new date is selected
        $("#canvas").removeClass("animate").css("visibility", "hidden").css("display", "none");
        selectedDateInBox = $(this).val();
    });

    //changes border/cursor of div when mouse is over class/module
    $(".row").on("mouseover", ".module-info", function () {
        $(this).css("cursor", "pointer");
    });

    //removes modules which are not selected/clicked on
    $(".row").on("click", ".module-info", function (event) {

        //Contains the modules/classes
        var modules = [];
        modules = $('.module-info').each(function () {
        }).toArray();

        //when a class is clicked it's moved to the left and the others get hidden, all animated
        modules.forEach(function (element) {
            if ($(element).attr('id') != event.target.id) {
                setTimeout(function () {
                    $(element).css("visibility", "hidden");
                }, 900);
                $(element).removeClass("animate").removeAttr("id");
            }
        })

        if (event.target.id == "temp-2") {
            setTimeout(function () {
                ($(event.currentTarget).css("z-index", "1"));
                ($(event.currentTarget).css("transform", "translateX(-270%)"));
                ($(event.currentTarget).css("transition", "all 0.3s ease-in-out"));
            }, 500);
        } else if (event.target.id == "temp-1") {
            setTimeout(function () {
                ($(event.currentTarget).css("z-index", "1"));
                ($(event.currentTarget).css("transform", "translateX(-140%)"));
                ($(event.currentTarget).css("transition", "all 0.3s ease-in-out"));
            }, 500);
        } else {
            setTimeout(function () {
                ($(event.currentTarget).css("z-index", "1"));
            }, 500);
        }

        //animates the canvas
        setTimeout(function () {
            $(document.getElementById("canvas")).addClass("animate");
            init();
        }, 900);

    });

    //shows the results with generated data
    $("#search-btn").click(function () {

        if( ! $("#module-text").val() ){
            $("#module-text").addClass("error");
            return;
        }
        $("#module-text").removeClass("error");
        $("nav").css("background", "none");
        //hides the title and only the search bar remains from the top section
        $(".search-container").css("position", "static");
        $(".top-container").css("height", "auto");
        $(".top-container h1").hide();
        $(".search-container").css("margin", "70px 0px 0px 0px");
        $(".bottom-container").css("display", "block");
        $(".bottom-container").css("height", "auto");
        $(".footer").css("display", "block");

        // get the date from jquery
        var selectedDate = $("#datepicker").datepicker("getDate");

        //The get methods for date objects return dates that are with one day backwards than the actual date,
        //so the date is set with one day forward to counteract this.
        selectedDate.setDate(selectedDate.getDate() + 1);

        // get the text from the ser bar
        var course = $("#module-text").val();
        var calendar_id = cal_ids[course]; // gets the calendar id from timetables.js


        //converts the selected date object to RFC3339 style date string. Needed to work with Google API.
        function ISODateString(d) {
            function pad(n) {
                return n < 10 ? '0' + n : n
            }
            return d.getUTCFullYear() + '-'
                + pad(d.getUTCMonth() + 1) + '-'
                + pad(d.getUTCDate()) + 'T'
        }

        //Will contain all the events of a day pulled from Google Calendar.
        var eventList = [];

        //Min and max time are strings and their contents are passed as parameters to the Google API.
        //Used to get events only from one day
        //They are further constructed to suit RFC3339 and the date is set back so that ===
        var minDate = ISODateString(selectedDate) + "00%3A00%3A00.000Z";
        var maxDate = ISODateString(selectedDate) + "23%3A59%3A59.000Z";
        console.log(maxDate + " " + minDate);
        //GET request for class info
        //Queries the Google database for calendar info and pulls the JSON
        $.get("https://www.googleapis.com/calendar/v3/calendars/" + calendar_id +
         "/events?timeMax=" + maxDate + "&timeMin=" + minDate +
            "&key=AIzaSyDsE7ox3w25QTkOB7bIQh5N4scbUnw_wZc", function (events) {
            eventList = events.items;
            console.log(events.items);
        }).success(function () { //this gets called when GET request is complete

            //Removes currently displayed modules
            $(".row").empty();
            if (eventList.length == 0) {
                $(".row").append("No classes during selected date.");
            } else {

                //builds a div by using the data pulled from the api/json and displays it
                for (var i = 0; i < eventList.length; i++) {
                    console.log(eventList);
                    var moduleToDisplay = eventList[i];
                    var buildingPicture = moduleToDisplay.location.substring(0, 1) + ".jpg";
                    $(".row").append('<div class = "three columns">\
                        <div class = "module-info">\
                        <h3>' + moduleToDisplay.summary + ' - ' + moduleToDisplay.location + '</h3>\
                        <h5>' + moduleToDisplay.description + '</h5>\
                        <p>' + moduleToDisplay.start.dateTime.substring(11, 16) + ' - ' + moduleToDisplay.end.dateTime.substring(11, 16) + '</p>\
                        <img src="img/buildings/' + buildingPicture + '">\
                        </div>\
                        </div>');
                }
            }

            //used for canvas construction
            cols = $('.three, .columns').each(function () {
            }).toArray();
            cols.forEach(function (element, i) {
                $(element).attr("id", "cols-temp-" + i);
            })

            $(".row").append('<canvas id="canvas" width="400" height="250"></canvas>');

            getClasses();
        });
    })
});
