$(document).ready(function () {
    //The cols variable will contain each html section containing the class/module information
    //drawFlag is a boolean variable determining if the canvas has already been drewn so further clicks will not affect the state of canvas.
    //roomInventory is an array that is being populated with all the rooms for the modules that appear when a search is performed
    // it is used to determine the drawing of the canvas to be respective to the room.
    var cols = [];
    var availableTags = Object.keys(cal_ids);
    var roomInventory = [];
    var drawAvailable = false;
    var map;

    //gets called when search is pressed and displays generated date
    var getClasses = function () {

        //Changes the title depending on the date selected
        $("#heading-classes").text("Your classes for " + (selectedDateInBox === "Today" ? selectedDateInBox : "the " + selectedDateInBox));

        //animate the classes divs and add temporary id tags to them
        $(".module-info").each(function (i) {

            setTimeout(function () {
                $(".module-info").eq(i).addClass("animate").attr("id", "temp-" + i);
            }, 150 * (i + 1));
        });
    }

    // Jquery autocomplete
    $("#module-text").autocomplete({
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
        clearTimeout(map);
        map = null;
        $(".module-info").each(function () {
            $(this).removeClass("animate");
        });

        //hides the canvas when new date is selected
        $("#canvas").removeClass("animate").css("visibility", "hidden").css("display", "none");
        selectedDateInBox = $(this).val();
    });

    //changes cursor of div when mouse is over class/module
    $(".row").on("mouseover", ".module-info", function () {
        $(this).css("cursor", "pointer");
    });

    //removes modules which are not selected/clicked on
    $(".row").on("click", ".module-info", function (event) {
        //if any of the modules infos are clicked check if the draw state is available and then proceed with the function, otherwise perform nothing.
        if (drawAvailable) {
            var modules = [];  //Contains the modules/classes
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
            });
            //switch statement to target specifically the div object that is being clicked upon and depending on it's id tag, the event populates the canvas with the respective map
            //of the room the the module takes place in. Also adds some aesthetics on how canvas is being placed into the website and replaces some css attributes so there is no further
            //interference or more events created if the user decides to click the same element again.

            //animations are adjusted for responsiveness across devices

            switch (event.target.id) {
                case "temp-2" :
                    $(event.currentTarget).css("pointer-events", "none");
                    $(event.currentTarget).css("cursor", "normal");
                    map = setTimeout(function () {
                        ($(event.currentTarget).css("z-index", "1"));
                        if ($(window).width() > 361) {
                            ($(event.currentTarget).css("transform", "translateX(-280%)"));
                        } else {
                            ($(event.currentTarget).css("transform", "translateY(-350%)"));
                        }
                        ($(event.currentTarget).css("transition", "all 0.3s ease-in-out"));
                        $(document.getElementById("canvas")).addClass("animate");
                        $(event.currentTarget).css("border", "1px rebeccapurple")
                        $(event.currentTarget).css("border-style", "solid");
                        draw("N303");
                        drawAvailable = false;
                    }, 400);
                    break;
                case "temp-1" :
                    $(event.currentTarget).css("pointer-events", "none");
                    $(event.currentTarget).css("cursor", "normal");
                    map = setTimeout(function () {
                        ($(event.currentTarget).css("z-index", "1"));
                        if ($(window).width() > 361){
                            ($(event.currentTarget).css("transform", "translateX(-140%)"));
                        } else {
                            ($(event.currentTarget).css("transform", "translateY(-190%)"));

                        }
                        ($(event.currentTarget).css("transition", "all 0.3s ease-in-out"));
                        $(document.getElementById("canvas")).addClass("animate");
                        $(event.currentTarget).css("border", "1px rebeccapurple")
                        $(event.currentTarget).css("border-style", "solid");
                        draw("N309");
                        drawAvailable = false;
                    }, 300);
                    break;
                case "temp-0" :
                    $(event.currentTarget).css("cursor", "normal");
                    $(event.currentTarget).css("pointer-events", "none");
                    map = setTimeout(function () {
                        ($(event.currentTarget).css("z-index", "1"));
                        $(document.getElementById("canvas")).addClass("animate");
                        $(event.currentTarget).css("border", "1px rebeccapurple")
                        $(event.currentTarget).css("border-style", "solid");
                        draw("N340");
                        drawAvailable = false;
                    }, 250);
                    break;
            }
        }


    });

    //empties the search bar when clicked
    $("#module-text").click(function () {
        $("#module-text").val("");
    });


    //if there is an ongoing animation for the canvas and the user starts another search. Clear the function of canvas being drawn/displayed.
    //declares that the canvas can now be drawn.
    //clear the inventory array.
    //shows the results with generated data
    $("#search-btn").click(function () {
        drawAvailable = true;
        roomInventory.length = 0;
        clearTimeout(map);
        if (!$("#module-text").val()) {
            $("#module-text").addClass("error");
            return;
        }
        $("#module-text").removeClass("error");
        $("nav").css("background", "none");
        //hides the title and only the search bar remains from the top section
        $(".search-container").css("position", "static");
        $(".top-container").css("height", "auto");
        $(".top-container h1").hide();
        $(".search-container").css("margin", "0px 0px 0px 0px");
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

        //returns error message if typed in module doesn't exist
        if (typeof calendar_id == 'undefined') {
            $("#heading-classes").text("Please select existing module.");
            return;
        }

        //converts the selected date object to RFC3339 style date string. Needed to work with Google API.
        function ISODateString(d) {

            //ads a 0 in front i.e. if April -> 04 and not just 4.
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
        //They are further constructed to suit RFC3339
        var minDate = ISODateString(selectedDate) + "00%3A00%3A00.000Z";
        var maxDate = ISODateString(selectedDate) + "23%3A59%3A59.000Z";

        //GET request for class info
        //Queries the Google database for calendar info and pulls the JSON
        $.get("https://www.googleapis.com/calendar/v3/calendars/" + calendar_id +
            "/events?timeMax=" + maxDate + "&timeMin=" + minDate +
            "&key=AIzaSyDsE7ox3w25QTkOB7bIQh5N4scbUnw_wZc", function (events) {
            eventList = events.items;
        }).success(function () { //this gets called when GET request is complete

            //Removes currently displayed modules
            $(".row").empty();
            if (eventList.length == 0) {
                $(".row").append("No classes during selected date.");
            } else {
                if ($(window).width() > 361) {
                    //builds a div by using the data pulled from the api/json and displays it
                    for (var i = 0; i < eventList.length; i++) {
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

                        roomInventory.push(moduleToDisplay.room); //add the rooms for each module to the inventory array
                    }

                    $(".row").append('<canvas id="canvas" width="400" height="250"></canvas>');
                } else {
                    for (var i = 0; i < eventList.length; i++) {
                        var moduleToDisplay = eventList[i];
                        var buildingPicture = moduleToDisplay.location.substring(0, 1) + ".jpg";
                        $(".row").append('<div class = "three columns">\
                        <div class = "module-info">\
                        <h3>' + moduleToDisplay.summary + ' - ' + moduleToDisplay.location + '</h3>\
                        <h5>' + moduleToDisplay.description + '</h5>\
                        <p>' + moduleToDisplay.start.dateTime.substring(11, 16) + ' - ' + moduleToDisplay.end.dateTime.substring(11, 16) + '</p>\
                        </div>\
                        </div>');

                        roomInventory.push(moduleToDisplay.room); //add the rooms for each module to the inventory array
                    }

                    $(".row").append('<canvas id="canvas" width="400" height="250"></canvas>');
                }
            }

            //used for canvas construction
            //assigns unique temporary id tags to the div elements of .three-columns and saves them to an array for easy access
            cols = $('.three, .columns').each(function () {
            }).toArray();
            cols.forEach(function (element, i) {
                $(element).attr("id", "cols-temp-" + i);
            })

            getClasses();
        });
    });
});
