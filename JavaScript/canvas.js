/**
 * Created by Jehutty on 02/04/2016.
 */

var draw = function(args){

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    switch(args) {


        //Sir Ian Wood Building aka Riverside East Building (RSE)
        //Level 3  : HTML5 Canvas - Rooms representation.

        //Room N303 ( Amphitheatrum )
        case "N303":
            ctx.save();

            // layer1/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(86.0, 128.7);
            ctx.bezierCurveTo(86.0, 147.4, 70.9, 162.5, 52.3, 162.5);
            ctx.bezierCurveTo(33.6, 162.5, 18.5, 147.4, 18.5, 128.7);
            ctx.bezierCurveTo(18.5, 110.1, 33.6, 95.0, 52.3, 95.0);
            ctx.bezierCurveTo(70.9, 95.0, 86.0, 110.1, 86.0, 128.7);
            ctx.closePath();
            ctx.fillStyle = "rgb(135, 37, 107)";
            ctx.fill();
            ctx.lineWidth = 0.8;
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(82.6, 143.6);
            ctx.lineTo(105.1, 171.6);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(105.0, 171.6);
            ctx.lineTo(97.0, 178.2);
            ctx.bezierCurveTo(97.0, 178.2, 118.2, 211.3, 181.2, 203.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(29.2, 104.1);
            ctx.lineTo(6.0, 77.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(6.0, 77.3);
            ctx.lineTo(84.6, 64.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(84.8, 64.0);
            ctx.lineTo(75.0, 80.4);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(75.0, 80.4);
            ctx.lineTo(94.0, 103.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(94.0, 103.0);
            ctx.lineTo(103.7, 95.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(114.9, 109.4);
            ctx.lineTo(82.3, 68.4);
            ctx.lineTo(82.3, 68.4);
            ctx.lineTo(94.2, 47.9);
            ctx.lineTo(131.7, 96.0);
            ctx.lineTo(114.9, 109.4);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(132.6, 131.5);
            ctx.lineTo(114.9, 109.2);
            ctx.lineTo(131.6, 95.9);
            ctx.lineTo(149.3, 118.2);
            ctx.lineTo(132.6, 131.5);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(171.9, 145.1);
            ctx.lineTo(168.0, 125.7);
            ctx.bezierCurveTo(168.0, 125.7, 154.5, 127.1, 149.3, 118.2);
            ctx.lineTo(132.6, 131.5);
            ctx.bezierCurveTo(132.6, 131.5, 147.5, 149.1, 171.9, 145.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(168.0, 125.7);
            ctx.bezierCurveTo(168.0, 125.7, 177.3, 124.9, 182.0, 119.8);
            ctx.bezierCurveTo(182.1, 119.7, 182.4, 119.7, 182.5, 119.8);
            ctx.lineTo(193.9, 134.6);
            ctx.lineTo(190.6, 137.5);
            ctx.lineTo(199.7, 148.1);
            ctx.bezierCurveTo(199.7, 148.1, 193.2, 155.3, 184.0, 157.3);
            ctx.lineTo(178.6, 142.6);
            ctx.bezierCurveTo(178.6, 142.6, 176.1, 144.6, 171.9, 145.1);
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(133.1, 149.2);
            ctx.bezierCurveTo(133.1, 149.2, 127.0, 148.6, 122.1, 139.9);
            ctx.lineTo(132.6, 131.5);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(133.1, 149.2);
            ctx.lineTo(141.0, 138.5);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(152.9, 144.0);
            ctx.lineTo(146.9, 158.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(161.7, 145.7);
            ctx.lineTo(161.5, 160.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(146.3, 141.5);
            ctx.lineTo(142.5, 148.2);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(136.5, 144.5);
            ctx.bezierCurveTo(136.5, 144.5, 141.3, 149.1, 149.9, 151.2);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(138.1, 152.8);
            ctx.bezierCurveTo(138.1, 152.8, 149.3, 167.0, 184.0, 157.3);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(114.9, 149.7);
            ctx.lineTo(121.7, 158.1);
            ctx.stroke();

            // layer1/Group/Group/Path
            ctx.beginPath();
            ctx.moveTo(121.7, 157.8);
            ctx.lineTo(113.7, 164.8);
            ctx.bezierCurveTo(113.7, 164.8, 137.5, 192.0, 178.8, 179.5);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(216.7, 201.6);
            ctx.lineTo(181.8, 205.3);
            ctx.lineTo(178.0, 169.5);
            ctx.lineTo(212.9, 165.8);
            ctx.lineTo(216.7, 201.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(250.4, 197.8);
            ctx.lineTo(216.7, 201.4);
            ctx.lineTo(212.9, 165.9);
            ctx.lineTo(246.6, 162.3);
            ctx.lineTo(250.4, 197.8);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(269.6, 195.7);
            ctx.lineTo(250.3, 197.7);
            ctx.lineTo(246.5, 162.4);
            ctx.lineTo(284.2, 158.4);
            ctx.lineTo(269.6, 195.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(208.1, 160.7);
            ctx.lineTo(278.3, 154.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(294.6, 134.7);
            ctx.lineTo(284.2, 158.4);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(206.6, 154.0);
            ctx.lineTo(212.9, 153.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(212.9, 153.3);
            ctx.lineTo(212.9, 148.6);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(212.9, 148.6);
            ctx.lineTo(283.1, 91.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(283.1, 91.0);
            ctx.lineTo(286.8, 91.8);
            ctx.bezierCurveTo(286.8, 91.8, 260.6, 109.1, 286.1, 136.5);
            ctx.lineTo(278.3, 154.0);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(302.0, 98.3);
            ctx.lineTo(292.8, 93.8);
            ctx.bezierCurveTo(292.8, 93.8, 271.9, 107.1, 286.8, 128.5);
            ctx.lineTo(302.0, 98.3);
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(302.0, 98.3);
            ctx.lineTo(330.1, 112.1);
            ctx.bezierCurveTo(330.1, 112.1, 331.0, 119.8, 325.5, 129.5);
            ctx.lineTo(294.1, 113.9);
            ctx.lineTo(302.0, 98.3);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(294.1, 113.9);
            ctx.lineTo(286.8, 128.5);
            ctx.bezierCurveTo(289.2, 132.5, 295.0, 134.3, 295.0, 134.3);
            ctx.lineTo(293.0, 138.4);
            ctx.bezierCurveTo(293.0, 138.4, 316.3, 144.5, 325.5, 129.5);
            ctx.lineTo(294.1, 113.9);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(207.2, 137.9);
            ctx.lineTo(197.5, 145.7);
            ctx.lineTo(190.7, 137.3);
            ctx.lineTo(200.3, 129.5);
            ctx.lineTo(207.2, 137.9);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(215.1, 135.7);
            ctx.lineTo(211.7, 138.5);
            ctx.lineTo(209.6, 135.9);
            ctx.lineTo(207.2, 137.9);
            ctx.lineTo(200.2, 129.4);
            ctx.lineTo(206.1, 124.7);
            ctx.lineTo(215.1, 135.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(330.1, 112.1);
            ctx.lineTo(332.6, 106.8);
            ctx.bezierCurveTo(332.6, 106.8, 329.5, 95.0, 317.8, 87.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(317.8, 87.8);
            ctx.lineTo(322.1, 79.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(317.8, 56.5);
            ctx.lineTo(328.5, 60.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(206.1, 124.7);
            ctx.lineTo(217.9, 115.2);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(241.2, 113.9);
            ctx.lineTo(220.7, 130.5);
            ctx.lineTo(216.4, 125.2);
            ctx.lineTo(222.3, 120.4);
            ctx.lineTo(217.9, 115.2);
            ctx.lineTo(232.6, 103.2);
            ctx.lineTo(241.2, 113.9);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(222.3, 120.4);
            ctx.lineTo(230.6, 113.6);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(245.6, 110.6);
            ctx.lineTo(236.7, 99.9);
            ctx.lineTo(245.3, 92.7);
            ctx.lineTo(254.2, 103.4);
            ctx.lineTo(245.6, 110.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(232.6, 103.2);
            ctx.lineTo(236.7, 99.9);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(245.3, 92.7);
            ctx.lineTo(232.6, 77.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(232.6, 77.8);
            ctx.lineTo(238.1, 73.5);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(238.1, 72.7);
            ctx.lineTo(250.8, 88.8);
            ctx.bezierCurveTo(250.8, 88.8, 267.9, 72.6, 279.3, 67.1);
            ctx.lineTo(269.8, 47.9);
            ctx.bezierCurveTo(269.8, 47.9, 259.6, 50.3, 238.1, 72.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(279.3, 67.1);
            ctx.lineTo(269.8, 47.9);
            ctx.bezierCurveTo(269.8, 47.9, 292.0, 33.7, 321.2, 41.7);
            ctx.lineTo(315.8, 62.5);
            ctx.bezierCurveTo(315.8, 62.5, 298.1, 57.4, 279.3, 67.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group/Path
            ctx.beginPath();
            ctx.moveTo(297.6, 61.6);
            ctx.lineTo(297.2, 45.9);
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(359.0, 76.6);
            ctx.lineTo(328.5, 61.3);
            ctx.lineTo(339.3, 39.7);
            ctx.lineTo(366.0, 53.0);
            ctx.lineTo(362.8, 59.4);
            ctx.lineTo(366.6, 61.3);
            ctx.lineTo(359.0, 76.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(368.4, 81.2);
            ctx.lineTo(359.0, 76.5);
            ctx.lineTo(366.6, 61.3);
            ctx.lineTo(376.0, 66.0);
            ctx.lineTo(368.4, 81.2);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(380.4, 93.0);
            ctx.lineTo(366.2, 85.8);
            ctx.lineTo(376.0, 66.1);
            ctx.lineTo(390.3, 73.2);
            ctx.lineTo(380.4, 93.0);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(267.8, 92.7);
            ctx.lineTo(282.6, 81.0);
            ctx.lineTo(276.4, 68.7);
            ctx.bezierCurveTo(276.4, 68.7, 265.6, 75.6, 258.5, 81.9);
            ctx.lineTo(267.8, 92.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(254.2, 103.4);
            ctx.lineTo(267.8, 92.7);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(333.8, 85.1);
            ctx.lineTo(321.2, 78.8);
            ctx.lineTo(327.2, 66.7);
            ctx.lineTo(339.9, 73.0);
            ctx.lineTo(333.8, 85.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(342.0, 89.3);
            ctx.lineTo(333.9, 85.2);
            ctx.lineTo(339.9, 73.1);
            ctx.lineTo(348.0, 77.1);
            ctx.lineTo(342.0, 89.3);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(346.6, 91.6);
            ctx.lineTo(342.0, 89.3);
            ctx.lineTo(348.1, 77.0);
            ctx.lineTo(352.7, 79.4);
            ctx.lineTo(346.6, 91.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(352.7, 94.6);
            ctx.lineTo(346.6, 91.6);
            ctx.lineTo(352.8, 79.3);
            ctx.lineTo(358.8, 82.4);
            ctx.lineTo(352.7, 94.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(374.2, 105.4);
            ctx.lineTo(352.7, 94.6);
            ctx.lineTo(358.9, 82.2);
            ctx.lineTo(380.4, 93.0);
            ctx.lineTo(374.2, 105.4);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/N303
            ctx.font = "12.0px 'Myriad Pro'";
            ctx.fillStyle = "rgb(255, 255, 255)";
            ctx.fillText("N303", 38.5, 132.3);

            // layer1/RSE Level  3  Ground floor
            ctx.restore();
            ctx.font = "12.0px 'Lato'";
            ctx.fillText("RSE Level - 3  (Ground floor)", -0.0, 10.3);
            ctx.restore();
            break;

        case "N309":
            ctx.save();

            // layer1/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(86.0, 128.7);
            ctx.bezierCurveTo(86.0, 147.4, 70.9, 162.5, 52.3, 162.5);
            ctx.bezierCurveTo(33.6, 162.5, 18.5, 147.4, 18.5, 128.7);
            ctx.bezierCurveTo(18.5, 110.1, 33.6, 95.0, 52.3, 95.0);
            ctx.bezierCurveTo(70.9, 95.0, 86.0, 110.1, 86.0, 128.7);
            ctx.closePath();
            ctx.lineWidth = 0.8;
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(82.6, 143.6);
            ctx.lineTo(105.1, 171.6);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(105.0, 171.6);
            ctx.lineTo(97.0, 178.2);
            ctx.bezierCurveTo(97.0, 178.2, 118.2, 211.3, 181.2, 203.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(29.2, 104.1);
            ctx.lineTo(6.0, 77.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(6.0, 77.3);
            ctx.lineTo(84.6, 64.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(84.8, 64.0);
            ctx.lineTo(75.0, 80.4);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(75.0, 80.4);
            ctx.lineTo(94.0, 103.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(94.0, 103.0);
            ctx.lineTo(103.7, 95.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(114.9, 109.4);
            ctx.lineTo(82.3, 68.4);
            ctx.lineTo(82.3, 68.4);
            ctx.lineTo(94.2, 47.9);
            ctx.lineTo(131.7, 96.0);
            ctx.lineTo(114.9, 109.4);
            ctx.closePath();
            ctx.fillStyle = "rgb(135, 37, 107)";
            ctx.fill();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(132.6, 131.5);
            ctx.lineTo(114.9, 109.2);
            ctx.lineTo(131.6, 95.9);
            ctx.lineTo(149.3, 118.2);
            ctx.lineTo(132.6, 131.5);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(171.9, 145.1);
            ctx.lineTo(168.0, 125.7);
            ctx.bezierCurveTo(168.0, 125.7, 154.5, 127.1, 149.3, 118.2);
            ctx.lineTo(132.6, 131.5);
            ctx.bezierCurveTo(132.6, 131.5, 147.5, 149.1, 171.9, 145.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(168.0, 125.7);
            ctx.bezierCurveTo(168.0, 125.7, 177.3, 124.9, 182.0, 119.8);
            ctx.bezierCurveTo(182.1, 119.7, 182.4, 119.7, 182.5, 119.8);
            ctx.lineTo(193.9, 134.6);
            ctx.lineTo(190.6, 137.5);
            ctx.lineTo(199.7, 148.1);
            ctx.bezierCurveTo(199.7, 148.1, 193.2, 155.3, 184.0, 157.3);
            ctx.lineTo(178.6, 142.6);
            ctx.bezierCurveTo(178.6, 142.6, 176.1, 144.6, 171.9, 145.1);
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(133.1, 149.2);
            ctx.bezierCurveTo(133.1, 149.2, 127.0, 148.6, 122.1, 139.9);
            ctx.lineTo(132.6, 131.5);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(133.1, 149.2);
            ctx.lineTo(141.0, 138.5);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(152.9, 144.0);
            ctx.lineTo(146.9, 158.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(161.7, 145.7);
            ctx.lineTo(161.5, 160.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(146.3, 141.5);
            ctx.lineTo(142.5, 148.2);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(136.5, 144.5);
            ctx.bezierCurveTo(136.5, 144.5, 141.3, 149.1, 149.9, 151.2);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(138.1, 152.8);
            ctx.bezierCurveTo(138.1, 152.8, 149.3, 167.0, 184.0, 157.3);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(114.9, 149.7);
            ctx.lineTo(121.7, 158.1);
            ctx.stroke();

            // layer1/Group/Group/Path
            ctx.beginPath();
            ctx.moveTo(121.7, 157.8);
            ctx.lineTo(113.7, 164.8);
            ctx.bezierCurveTo(113.7, 164.8, 137.5, 192.0, 178.8, 179.5);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(216.7, 201.6);
            ctx.lineTo(181.8, 205.3);
            ctx.lineTo(178.0, 169.5);
            ctx.lineTo(212.9, 165.8);
            ctx.lineTo(216.7, 201.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(250.4, 197.8);
            ctx.lineTo(216.7, 201.4);
            ctx.lineTo(212.9, 165.9);
            ctx.lineTo(246.6, 162.3);
            ctx.lineTo(250.4, 197.8);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(269.6, 195.7);
            ctx.lineTo(250.3, 197.7);
            ctx.lineTo(246.5, 162.4);
            ctx.lineTo(284.2, 158.4);
            ctx.lineTo(269.6, 195.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(208.1, 160.7);
            ctx.lineTo(278.3, 154.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(294.6, 134.7);
            ctx.lineTo(284.2, 158.4);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(206.6, 154.0);
            ctx.lineTo(212.9, 153.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(212.9, 153.3);
            ctx.lineTo(212.9, 148.6);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(212.9, 148.6);
            ctx.lineTo(283.1, 91.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(283.1, 91.0);
            ctx.lineTo(286.8, 91.8);
            ctx.bezierCurveTo(286.8, 91.8, 260.6, 109.1, 286.1, 136.5);
            ctx.lineTo(278.3, 154.0);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(302.0, 98.3);
            ctx.lineTo(292.8, 93.8);
            ctx.bezierCurveTo(292.8, 93.8, 271.9, 107.1, 286.8, 128.5);
            ctx.lineTo(302.0, 98.3);
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(302.0, 98.3);
            ctx.lineTo(330.1, 112.1);
            ctx.bezierCurveTo(330.1, 112.1, 331.0, 119.8, 325.5, 129.5);
            ctx.lineTo(294.1, 113.9);
            ctx.lineTo(302.0, 98.3);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(294.1, 113.9);
            ctx.lineTo(286.8, 128.5);
            ctx.bezierCurveTo(289.2, 132.5, 295.0, 134.3, 295.0, 134.3);
            ctx.lineTo(293.0, 138.4);
            ctx.bezierCurveTo(293.0, 138.4, 316.3, 144.5, 325.5, 129.5);
            ctx.lineTo(294.1, 113.9);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(207.2, 137.9);
            ctx.lineTo(197.5, 145.7);
            ctx.lineTo(190.7, 137.3);
            ctx.lineTo(200.3, 129.5);
            ctx.lineTo(207.2, 137.9);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(215.1, 135.7);
            ctx.lineTo(211.7, 138.5);
            ctx.lineTo(209.6, 135.9);
            ctx.lineTo(207.2, 137.9);
            ctx.lineTo(200.2, 129.4);
            ctx.lineTo(206.1, 124.7);
            ctx.lineTo(215.1, 135.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(330.1, 112.1);
            ctx.lineTo(332.6, 106.8);
            ctx.bezierCurveTo(332.6, 106.8, 329.5, 95.0, 317.8, 87.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(317.8, 87.8);
            ctx.lineTo(322.1, 79.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(317.8, 56.5);
            ctx.lineTo(328.5, 60.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(206.1, 124.7);
            ctx.lineTo(217.9, 115.2);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(241.2, 113.9);
            ctx.lineTo(220.7, 130.5);
            ctx.lineTo(216.4, 125.2);
            ctx.lineTo(222.3, 120.4);
            ctx.lineTo(217.9, 115.2);
            ctx.lineTo(232.6, 103.2);
            ctx.lineTo(241.2, 113.9);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(222.3, 120.4);
            ctx.lineTo(230.6, 113.6);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(245.6, 110.6);
            ctx.lineTo(236.7, 99.9);
            ctx.lineTo(245.3, 92.7);
            ctx.lineTo(254.2, 103.4);
            ctx.lineTo(245.6, 110.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(232.6, 103.2);
            ctx.lineTo(236.7, 99.9);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(245.3, 92.7);
            ctx.lineTo(232.6, 77.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(232.6, 77.8);
            ctx.lineTo(238.1, 73.5);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(238.1, 72.7);
            ctx.lineTo(250.8, 88.8);
            ctx.bezierCurveTo(250.8, 88.8, 267.9, 72.6, 279.3, 67.1);
            ctx.lineTo(269.8, 47.9);
            ctx.bezierCurveTo(269.8, 47.9, 259.6, 50.3, 238.1, 72.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(279.3, 67.1);
            ctx.lineTo(269.8, 47.9);
            ctx.bezierCurveTo(269.8, 47.9, 292.0, 33.7, 321.2, 41.7);
            ctx.lineTo(315.8, 62.5);
            ctx.bezierCurveTo(315.8, 62.5, 298.1, 57.4, 279.3, 67.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group/Path
            ctx.beginPath();
            ctx.moveTo(297.6, 61.6);
            ctx.lineTo(297.2, 45.9);
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(359.0, 76.6);
            ctx.lineTo(328.5, 61.3);
            ctx.lineTo(339.3, 39.7);
            ctx.lineTo(366.0, 53.0);
            ctx.lineTo(362.8, 59.4);
            ctx.lineTo(366.6, 61.3);
            ctx.lineTo(359.0, 76.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(368.4, 81.2);
            ctx.lineTo(359.0, 76.5);
            ctx.lineTo(366.6, 61.3);
            ctx.lineTo(376.0, 66.0);
            ctx.lineTo(368.4, 81.2);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(380.4, 93.0);
            ctx.lineTo(366.2, 85.8);
            ctx.lineTo(376.0, 66.1);
            ctx.lineTo(390.3, 73.2);
            ctx.lineTo(380.4, 93.0);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(267.8, 92.7);
            ctx.lineTo(282.6, 81.0);
            ctx.lineTo(276.4, 68.7);
            ctx.bezierCurveTo(276.4, 68.7, 265.6, 75.6, 258.5, 81.9);
            ctx.lineTo(267.8, 92.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(254.2, 103.4);
            ctx.lineTo(267.8, 92.7);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(333.8, 85.1);
            ctx.lineTo(321.2, 78.8);
            ctx.lineTo(327.2, 66.7);
            ctx.lineTo(339.9, 73.0);
            ctx.lineTo(333.8, 85.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(342.0, 89.3);
            ctx.lineTo(333.9, 85.2);
            ctx.lineTo(339.9, 73.1);
            ctx.lineTo(348.0, 77.1);
            ctx.lineTo(342.0, 89.3);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(346.6, 91.6);
            ctx.lineTo(342.0, 89.3);
            ctx.lineTo(348.1, 77.0);
            ctx.lineTo(352.7, 79.4);
            ctx.lineTo(346.6, 91.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(352.7, 94.6);
            ctx.lineTo(346.6, 91.6);
            ctx.lineTo(352.8, 79.3);
            ctx.lineTo(358.8, 82.4);
            ctx.lineTo(352.7, 94.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(374.2, 105.4);
            ctx.lineTo(352.7, 94.6);
            ctx.lineTo(358.9, 82.2);
            ctx.lineTo(380.4, 93.0);
            ctx.lineTo(374.2, 105.4);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/N309
            ctx.font = "9.0px 'Myriad Pro'";
            ctx.fillStyle = "rgb(255, 255, 255)";
            ctx.fillText("N309", 95.7, 82.9);

            // layer1/RSE Level  3  Ground floor
            ctx.restore();
            ctx.font = "12.0px 'Lato'";
            ctx.fillText("RSE Level - 3  (Ground floor)", -0.0, 10.3);
            ctx.restore();
            break;


        case "N310":
            // layer1/Group
            ctx.save();

            // layer1/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(86.0, 128.7);
            ctx.bezierCurveTo(86.0, 147.4, 70.9, 162.5, 52.3, 162.5);
            ctx.bezierCurveTo(33.6, 162.5, 18.5, 147.4, 18.5, 128.7);
            ctx.bezierCurveTo(18.5, 110.1, 33.6, 95.0, 52.3, 95.0);
            ctx.bezierCurveTo(70.9, 95.0, 86.0, 110.1, 86.0, 128.7);
            ctx.closePath();
            ctx.lineWidth = 0.8;
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(82.6, 143.6);
            ctx.lineTo(105.1, 171.6);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(105.0, 171.6);
            ctx.lineTo(97.0, 178.2);
            ctx.bezierCurveTo(97.0, 178.2, 118.2, 211.3, 181.2, 203.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(29.2, 104.1);
            ctx.lineTo(6.0, 77.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(6.0, 77.3);
            ctx.lineTo(84.6, 64.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(84.8, 64.0);
            ctx.lineTo(75.0, 80.4);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(75.0, 80.4);
            ctx.lineTo(94.0, 103.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(94.0, 103.0);
            ctx.lineTo(103.7, 95.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(114.9, 109.4);
            ctx.lineTo(82.3, 68.4);
            ctx.lineTo(82.3, 68.4);
            ctx.lineTo(94.2, 47.9);
            ctx.lineTo(131.7, 96.0);
            ctx.lineTo(114.9, 109.4);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(132.6, 131.5);
            ctx.lineTo(114.9, 109.2);
            ctx.lineTo(131.6, 95.9);
            ctx.lineTo(149.3, 118.2);
            ctx.lineTo(132.6, 131.5);
            ctx.closePath();
            ctx.fillStyle = "rgb(135, 37, 107)";
            ctx.fill();
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(171.9, 145.1);
            ctx.lineTo(168.0, 125.7);
            ctx.bezierCurveTo(168.0, 125.7, 154.5, 127.1, 149.3, 118.2);
            ctx.lineTo(132.6, 131.5);
            ctx.bezierCurveTo(132.6, 131.5, 147.5, 149.1, 171.9, 145.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(168.0, 125.7);
            ctx.bezierCurveTo(168.0, 125.7, 177.3, 124.9, 182.0, 119.8);
            ctx.bezierCurveTo(182.1, 119.7, 182.4, 119.7, 182.5, 119.8);
            ctx.lineTo(193.9, 134.6);
            ctx.lineTo(190.6, 137.5);
            ctx.lineTo(199.7, 148.1);
            ctx.bezierCurveTo(199.7, 148.1, 193.2, 155.3, 184.0, 157.3);
            ctx.lineTo(178.6, 142.6);
            ctx.bezierCurveTo(178.6, 142.6, 176.1, 144.6, 171.9, 145.1);
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(133.1, 149.2);
            ctx.bezierCurveTo(133.1, 149.2, 127.0, 148.6, 122.1, 139.9);
            ctx.lineTo(132.6, 131.5);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(133.1, 149.2);
            ctx.lineTo(141.0, 138.5);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(152.9, 144.0);
            ctx.lineTo(146.9, 158.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(161.7, 145.7);
            ctx.lineTo(161.5, 160.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(146.3, 141.5);
            ctx.lineTo(142.5, 148.2);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(136.5, 144.5);
            ctx.bezierCurveTo(136.5, 144.5, 141.3, 149.1, 149.9, 151.2);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(138.1, 152.8);
            ctx.bezierCurveTo(138.1, 152.8, 149.3, 167.0, 184.0, 157.3);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(114.9, 149.7);
            ctx.lineTo(121.7, 158.1);
            ctx.stroke();

            // layer1/Group/Group/Path
            ctx.beginPath();
            ctx.moveTo(121.7, 157.8);
            ctx.lineTo(113.7, 164.8);
            ctx.bezierCurveTo(113.7, 164.8, 137.5, 192.0, 178.8, 179.5);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(216.7, 201.6);
            ctx.lineTo(181.8, 205.3);
            ctx.lineTo(178.0, 169.5);
            ctx.lineTo(212.9, 165.8);
            ctx.lineTo(216.7, 201.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(250.4, 197.8);
            ctx.lineTo(216.7, 201.4);
            ctx.lineTo(212.9, 165.9);
            ctx.lineTo(246.6, 162.3);
            ctx.lineTo(250.4, 197.8);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(269.6, 195.7);
            ctx.lineTo(250.3, 197.7);
            ctx.lineTo(246.5, 162.4);
            ctx.lineTo(284.2, 158.4);
            ctx.lineTo(269.6, 195.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(208.1, 160.7);
            ctx.lineTo(278.3, 154.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(294.6, 134.7);
            ctx.lineTo(284.2, 158.4);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(206.6, 154.0);
            ctx.lineTo(212.9, 153.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(212.9, 153.3);
            ctx.lineTo(212.9, 148.6);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(212.9, 148.6);
            ctx.lineTo(283.1, 91.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(283.1, 91.0);
            ctx.lineTo(286.8, 91.8);
            ctx.bezierCurveTo(286.8, 91.8, 260.6, 109.1, 286.1, 136.5);
            ctx.lineTo(278.3, 154.0);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(302.0, 98.3);
            ctx.lineTo(292.8, 93.8);
            ctx.bezierCurveTo(292.8, 93.8, 271.9, 107.1, 286.8, 128.5);
            ctx.lineTo(302.0, 98.3);
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(302.0, 98.3);
            ctx.lineTo(330.1, 112.1);
            ctx.bezierCurveTo(330.1, 112.1, 331.0, 119.8, 325.5, 129.5);
            ctx.lineTo(294.1, 113.9);
            ctx.lineTo(302.0, 98.3);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(294.1, 113.9);
            ctx.lineTo(286.8, 128.5);
            ctx.bezierCurveTo(289.2, 132.5, 295.0, 134.3, 295.0, 134.3);
            ctx.lineTo(293.0, 138.4);
            ctx.bezierCurveTo(293.0, 138.4, 316.3, 144.5, 325.5, 129.5);
            ctx.lineTo(294.1, 113.9);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(207.2, 137.9);
            ctx.lineTo(197.5, 145.7);
            ctx.lineTo(190.7, 137.3);
            ctx.lineTo(200.3, 129.5);
            ctx.lineTo(207.2, 137.9);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(215.1, 135.7);
            ctx.lineTo(211.7, 138.5);
            ctx.lineTo(209.6, 135.9);
            ctx.lineTo(207.2, 137.9);
            ctx.lineTo(200.2, 129.4);
            ctx.lineTo(206.1, 124.7);
            ctx.lineTo(215.1, 135.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(330.1, 112.1);
            ctx.lineTo(332.6, 106.8);
            ctx.bezierCurveTo(332.6, 106.8, 329.5, 95.0, 317.8, 87.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(317.8, 87.8);
            ctx.lineTo(322.1, 79.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(317.8, 56.5);
            ctx.lineTo(328.5, 60.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(206.1, 124.7);
            ctx.lineTo(217.9, 115.2);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(241.2, 113.9);
            ctx.lineTo(220.7, 130.5);
            ctx.lineTo(216.4, 125.2);
            ctx.lineTo(222.3, 120.4);
            ctx.lineTo(217.9, 115.2);
            ctx.lineTo(232.6, 103.2);
            ctx.lineTo(241.2, 113.9);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(222.3, 120.4);
            ctx.lineTo(230.6, 113.6);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(245.6, 110.6);
            ctx.lineTo(236.7, 99.9);
            ctx.lineTo(245.3, 92.7);
            ctx.lineTo(254.2, 103.4);
            ctx.lineTo(245.6, 110.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(232.6, 103.2);
            ctx.lineTo(236.7, 99.9);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(245.3, 92.7);
            ctx.lineTo(232.6, 77.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(232.6, 77.8);
            ctx.lineTo(238.1, 73.5);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(238.1, 72.7);
            ctx.lineTo(250.8, 88.8);
            ctx.bezierCurveTo(250.8, 88.8, 267.9, 72.6, 279.3, 67.1);
            ctx.lineTo(269.8, 47.9);
            ctx.bezierCurveTo(269.8, 47.9, 259.6, 50.3, 238.1, 72.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(279.3, 67.1);
            ctx.lineTo(269.8, 47.9);
            ctx.bezierCurveTo(269.8, 47.9, 292.0, 33.7, 321.2, 41.7);
            ctx.lineTo(315.8, 62.5);
            ctx.bezierCurveTo(315.8, 62.5, 298.1, 57.4, 279.3, 67.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group/Path
            ctx.beginPath();
            ctx.moveTo(297.6, 61.6);
            ctx.lineTo(297.2, 45.9);
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(359.0, 76.6);
            ctx.lineTo(328.5, 61.3);
            ctx.lineTo(339.3, 39.7);
            ctx.lineTo(366.0, 53.0);
            ctx.lineTo(362.8, 59.4);
            ctx.lineTo(366.6, 61.3);
            ctx.lineTo(359.0, 76.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(368.4, 81.2);
            ctx.lineTo(359.0, 76.5);
            ctx.lineTo(366.6, 61.3);
            ctx.lineTo(376.0, 66.0);
            ctx.lineTo(368.4, 81.2);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(380.4, 93.0);
            ctx.lineTo(366.2, 85.8);
            ctx.lineTo(376.0, 66.1);
            ctx.lineTo(390.3, 73.2);
            ctx.lineTo(380.4, 93.0);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(267.8, 92.7);
            ctx.lineTo(282.6, 81.0);
            ctx.lineTo(276.4, 68.7);
            ctx.bezierCurveTo(276.4, 68.7, 265.6, 75.6, 258.5, 81.9);
            ctx.lineTo(267.8, 92.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(254.2, 103.4);
            ctx.lineTo(267.8, 92.7);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(333.8, 85.1);
            ctx.lineTo(321.2, 78.8);
            ctx.lineTo(327.2, 66.7);
            ctx.lineTo(339.9, 73.0);
            ctx.lineTo(333.8, 85.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(342.0, 89.3);
            ctx.lineTo(333.9, 85.2);
            ctx.lineTo(339.9, 73.1);
            ctx.lineTo(348.0, 77.1);
            ctx.lineTo(342.0, 89.3);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(346.6, 91.6);
            ctx.lineTo(342.0, 89.3);
            ctx.lineTo(348.1, 77.0);
            ctx.lineTo(352.7, 79.4);
            ctx.lineTo(346.6, 91.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(352.7, 94.6);
            ctx.lineTo(346.6, 91.6);
            ctx.lineTo(352.8, 79.3);
            ctx.lineTo(358.8, 82.4);
            ctx.lineTo(352.7, 94.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(374.2, 105.4);
            ctx.lineTo(352.7, 94.6);
            ctx.lineTo(358.9, 82.2);
            ctx.lineTo(380.4, 93.0);
            ctx.lineTo(374.2, 105.4);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/N310
            ctx.font = "9.0px 'Myriad Pro'";
            ctx.fillStyle = "rgb(255, 255, 255)";
            ctx.fillText("N310", 121.7, 116.1);

            // layer1/RSE Level  3  Ground floor
            ctx.restore();
            ctx.font = "12.0px 'Lato'";
            ctx.fillText("RSE Level - 3  (Ground floor)", -0.0, 10.3);
            ctx.restore();
            break;

        case "N311":
            // layer1/Group
            ctx.save();

            // layer1/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(86.0, 128.7);
            ctx.bezierCurveTo(86.0, 147.4, 70.9, 162.5, 52.3, 162.5);
            ctx.bezierCurveTo(33.6, 162.5, 18.5, 147.4, 18.5, 128.7);
            ctx.bezierCurveTo(18.5, 110.1, 33.6, 95.0, 52.3, 95.0);
            ctx.bezierCurveTo(70.9, 95.0, 86.0, 110.1, 86.0, 128.7);
            ctx.closePath();
            ctx.lineWidth = 0.8;
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(82.6, 143.6);
            ctx.lineTo(105.1, 171.6);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(105.0, 171.6);
            ctx.lineTo(97.0, 178.2);
            ctx.bezierCurveTo(97.0, 178.2, 118.2, 211.3, 181.2, 203.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(29.2, 104.1);
            ctx.lineTo(6.0, 77.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(6.0, 77.3);
            ctx.lineTo(84.6, 64.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(84.8, 64.0);
            ctx.lineTo(75.0, 80.4);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(75.0, 80.4);
            ctx.lineTo(94.0, 103.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(94.0, 103.0);
            ctx.lineTo(103.7, 95.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(114.9, 109.4);
            ctx.lineTo(82.3, 68.4);
            ctx.lineTo(82.3, 68.4);
            ctx.lineTo(94.2, 47.9);
            ctx.lineTo(131.7, 96.0);
            ctx.lineTo(114.9, 109.4);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(132.6, 131.5);
            ctx.lineTo(114.9, 109.2);
            ctx.lineTo(131.6, 95.9);
            ctx.lineTo(149.3, 118.2);
            ctx.lineTo(132.6, 131.5);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(171.9, 145.1);
            ctx.lineTo(168.0, 125.7);
            ctx.bezierCurveTo(168.0, 125.7, 154.5, 127.1, 149.3, 118.2);
            ctx.lineTo(132.6, 131.5);
            ctx.bezierCurveTo(132.6, 131.5, 147.5, 149.1, 171.9, 145.1);
            ctx.closePath();
            ctx.fillStyle = "rgb(135, 37, 107)";
            ctx.fill();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(168.0, 125.7);
            ctx.bezierCurveTo(168.0, 125.7, 177.3, 124.9, 182.0, 119.8);
            ctx.bezierCurveTo(182.1, 119.7, 182.4, 119.7, 182.5, 119.8);
            ctx.lineTo(193.9, 134.6);
            ctx.lineTo(190.6, 137.5);
            ctx.lineTo(199.7, 148.1);
            ctx.bezierCurveTo(199.7, 148.1, 193.2, 155.3, 184.0, 157.3);
            ctx.lineTo(178.6, 142.6);
            ctx.bezierCurveTo(178.6, 142.6, 176.1, 144.6, 171.9, 145.1);
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(133.1, 149.2);
            ctx.bezierCurveTo(133.1, 149.2, 127.0, 148.6, 122.1, 139.9);
            ctx.lineTo(132.6, 131.5);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(133.1, 149.2);
            ctx.lineTo(141.0, 138.5);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(152.9, 144.0);
            ctx.lineTo(146.9, 158.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(161.7, 145.7);
            ctx.lineTo(161.5, 160.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(146.3, 141.5);
            ctx.lineTo(142.5, 148.2);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(136.5, 144.5);
            ctx.bezierCurveTo(136.5, 144.5, 141.3, 149.1, 149.9, 151.2);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(138.1, 152.8);
            ctx.bezierCurveTo(138.1, 152.8, 149.3, 167.0, 184.0, 157.3);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(114.9, 149.7);
            ctx.lineTo(121.7, 158.1);
            ctx.stroke();

            // layer1/Group/Group/Path
            ctx.beginPath();
            ctx.moveTo(121.7, 157.8);
            ctx.lineTo(113.7, 164.8);
            ctx.bezierCurveTo(113.7, 164.8, 137.5, 192.0, 178.8, 179.5);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(216.7, 201.6);
            ctx.lineTo(181.8, 205.3);
            ctx.lineTo(178.0, 169.5);
            ctx.lineTo(212.9, 165.8);
            ctx.lineTo(216.7, 201.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(250.4, 197.8);
            ctx.lineTo(216.7, 201.4);
            ctx.lineTo(212.9, 165.9);
            ctx.lineTo(246.6, 162.3);
            ctx.lineTo(250.4, 197.8);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(269.6, 195.7);
            ctx.lineTo(250.3, 197.7);
            ctx.lineTo(246.5, 162.4);
            ctx.lineTo(284.2, 158.4);
            ctx.lineTo(269.6, 195.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(208.1, 160.7);
            ctx.lineTo(278.3, 154.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(294.6, 134.7);
            ctx.lineTo(284.2, 158.4);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(206.6, 154.0);
            ctx.lineTo(212.9, 153.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(212.9, 153.3);
            ctx.lineTo(212.9, 148.6);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(212.9, 148.6);
            ctx.lineTo(283.1, 91.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(283.1, 91.0);
            ctx.lineTo(286.8, 91.8);
            ctx.bezierCurveTo(286.8, 91.8, 260.6, 109.1, 286.1, 136.5);
            ctx.lineTo(278.3, 154.0);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(302.0, 98.3);
            ctx.lineTo(292.8, 93.8);
            ctx.bezierCurveTo(292.8, 93.8, 271.9, 107.1, 286.8, 128.5);
            ctx.lineTo(302.0, 98.3);
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(302.0, 98.3);
            ctx.lineTo(330.1, 112.1);
            ctx.bezierCurveTo(330.1, 112.1, 331.0, 119.8, 325.5, 129.5);
            ctx.lineTo(294.1, 113.9);
            ctx.lineTo(302.0, 98.3);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(294.1, 113.9);
            ctx.lineTo(286.8, 128.5);
            ctx.bezierCurveTo(289.2, 132.5, 295.0, 134.3, 295.0, 134.3);
            ctx.lineTo(293.0, 138.4);
            ctx.bezierCurveTo(293.0, 138.4, 316.3, 144.5, 325.5, 129.5);
            ctx.lineTo(294.1, 113.9);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(207.2, 137.9);
            ctx.lineTo(197.5, 145.7);
            ctx.lineTo(190.7, 137.3);
            ctx.lineTo(200.3, 129.5);
            ctx.lineTo(207.2, 137.9);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(215.1, 135.7);
            ctx.lineTo(211.7, 138.5);
            ctx.lineTo(209.6, 135.9);
            ctx.lineTo(207.2, 137.9);
            ctx.lineTo(200.2, 129.4);
            ctx.lineTo(206.1, 124.7);
            ctx.lineTo(215.1, 135.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(330.1, 112.1);
            ctx.lineTo(332.6, 106.8);
            ctx.bezierCurveTo(332.6, 106.8, 329.5, 95.0, 317.8, 87.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(317.8, 87.8);
            ctx.lineTo(322.1, 79.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(317.8, 56.5);
            ctx.lineTo(328.5, 60.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(206.1, 124.7);
            ctx.lineTo(217.9, 115.2);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(241.2, 113.9);
            ctx.lineTo(220.7, 130.5);
            ctx.lineTo(216.4, 125.2);
            ctx.lineTo(222.3, 120.4);
            ctx.lineTo(217.9, 115.2);
            ctx.lineTo(232.6, 103.2);
            ctx.lineTo(241.2, 113.9);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(222.3, 120.4);
            ctx.lineTo(230.6, 113.6);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(245.6, 110.6);
            ctx.lineTo(236.7, 99.9);
            ctx.lineTo(245.3, 92.7);
            ctx.lineTo(254.2, 103.4);
            ctx.lineTo(245.6, 110.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(232.6, 103.2);
            ctx.lineTo(236.7, 99.9);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(245.3, 92.7);
            ctx.lineTo(232.6, 77.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(232.6, 77.8);
            ctx.lineTo(238.1, 73.5);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(238.1, 72.7);
            ctx.lineTo(250.8, 88.8);
            ctx.bezierCurveTo(250.8, 88.8, 267.9, 72.6, 279.3, 67.1);
            ctx.lineTo(269.8, 47.9);
            ctx.bezierCurveTo(269.8, 47.9, 259.6, 50.3, 238.1, 72.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(279.3, 67.1);
            ctx.lineTo(269.8, 47.9);
            ctx.bezierCurveTo(269.8, 47.9, 292.0, 33.7, 321.2, 41.7);
            ctx.lineTo(315.8, 62.5);
            ctx.bezierCurveTo(315.8, 62.5, 298.1, 57.4, 279.3, 67.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group/Path
            ctx.beginPath();
            ctx.moveTo(297.6, 61.6);
            ctx.lineTo(297.2, 45.9);
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(359.0, 76.6);
            ctx.lineTo(328.5, 61.3);
            ctx.lineTo(339.3, 39.7);
            ctx.lineTo(366.0, 53.0);
            ctx.lineTo(362.8, 59.4);
            ctx.lineTo(366.6, 61.3);
            ctx.lineTo(359.0, 76.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(368.4, 81.2);
            ctx.lineTo(359.0, 76.5);
            ctx.lineTo(366.6, 61.3);
            ctx.lineTo(376.0, 66.0);
            ctx.lineTo(368.4, 81.2);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(380.4, 93.0);
            ctx.lineTo(366.2, 85.8);
            ctx.lineTo(376.0, 66.1);
            ctx.lineTo(390.3, 73.2);
            ctx.lineTo(380.4, 93.0);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(267.8, 92.7);
            ctx.lineTo(282.6, 81.0);
            ctx.lineTo(276.4, 68.7);
            ctx.bezierCurveTo(276.4, 68.7, 265.6, 75.6, 258.5, 81.9);
            ctx.lineTo(267.8, 92.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(254.2, 103.4);
            ctx.lineTo(267.8, 92.7);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(333.8, 85.1);
            ctx.lineTo(321.2, 78.8);
            ctx.lineTo(327.2, 66.7);
            ctx.lineTo(339.9, 73.0);
            ctx.lineTo(333.8, 85.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(342.0, 89.3);
            ctx.lineTo(333.9, 85.2);
            ctx.lineTo(339.9, 73.1);
            ctx.lineTo(348.0, 77.1);
            ctx.lineTo(342.0, 89.3);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(346.6, 91.6);
            ctx.lineTo(342.0, 89.3);
            ctx.lineTo(348.1, 77.0);
            ctx.lineTo(352.7, 79.4);
            ctx.lineTo(346.6, 91.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(352.7, 94.6);
            ctx.lineTo(346.6, 91.6);
            ctx.lineTo(352.8, 79.3);
            ctx.lineTo(358.8, 82.4);
            ctx.lineTo(352.7, 94.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(374.2, 105.4);
            ctx.lineTo(352.7, 94.6);
            ctx.lineTo(358.9, 82.2);
            ctx.lineTo(380.4, 93.0);
            ctx.lineTo(374.2, 105.4);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/N311
            ctx.font = "9.0px 'Myriad Pro'";
            ctx.fillStyle = "rgb(255, 255, 255)";
            ctx.fillText("N311", 146.2, 136.9);

            // layer1/RSE Level  3  Ground floor
            ctx.restore();
            ctx.font = "12.0px 'Lato'";
            ctx.fillText("RSE Level - 3  (Ground floor)", -0.0, 10.3);
            ctx.restore();
            break;

        case "N317":
            // layer1/Group
            ctx.save();

            // layer1/Group/Group
            ctx.save();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(184.0, 157.1);
            ctx.bezierCurveTo(174.8, 160.5, 161.5, 160.8, 161.5, 160.8);
            ctx.lineTo(161.7, 145.7);
            ctx.bezierCurveTo(161.7, 145.7, 174.2, 146.3, 178.6, 142.6);
            ctx.lineTo(184.0, 157.1);
            ctx.closePath();
            ctx.fillStyle = "rgb(135, 37, 107)";
            ctx.fill();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(86.0, 128.7);
            ctx.bezierCurveTo(86.0, 147.4, 70.9, 162.5, 52.3, 162.5);
            ctx.bezierCurveTo(33.6, 162.5, 18.5, 147.4, 18.5, 128.7);
            ctx.bezierCurveTo(18.5, 110.1, 33.6, 95.0, 52.3, 95.0);
            ctx.bezierCurveTo(70.9, 95.0, 86.0, 110.1, 86.0, 128.7);
            ctx.closePath();
            ctx.lineWidth = 0.8;
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(82.6, 143.6);
            ctx.lineTo(105.1, 171.6);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(105.0, 171.6);
            ctx.lineTo(97.0, 178.2);
            ctx.bezierCurveTo(97.0, 178.2, 118.2, 211.3, 181.2, 203.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(29.2, 104.1);
            ctx.lineTo(6.0, 77.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(6.0, 77.3);
            ctx.lineTo(84.6, 64.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(84.8, 64.0);
            ctx.lineTo(75.0, 80.4);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(75.0, 80.4);
            ctx.lineTo(94.0, 103.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(94.0, 103.0);
            ctx.lineTo(103.7, 95.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(114.9, 109.4);
            ctx.lineTo(82.3, 68.4);
            ctx.lineTo(82.3, 68.4);
            ctx.lineTo(94.2, 47.9);
            ctx.lineTo(131.7, 96.0);
            ctx.lineTo(114.9, 109.4);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(132.6, 131.5);
            ctx.lineTo(114.9, 109.2);
            ctx.lineTo(131.6, 95.9);
            ctx.lineTo(149.3, 118.2);
            ctx.lineTo(132.6, 131.5);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(171.9, 145.1);
            ctx.lineTo(168.0, 125.7);
            ctx.bezierCurveTo(168.0, 125.7, 154.5, 127.1, 149.3, 118.2);
            ctx.lineTo(132.6, 131.5);
            ctx.bezierCurveTo(132.6, 131.5, 147.5, 149.1, 171.9, 145.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(168.0, 125.7);
            ctx.bezierCurveTo(168.0, 125.7, 177.3, 124.9, 182.0, 119.8);
            ctx.bezierCurveTo(182.1, 119.7, 182.4, 119.7, 182.5, 119.8);
            ctx.lineTo(193.9, 134.6);
            ctx.lineTo(190.6, 137.5);
            ctx.lineTo(199.7, 148.1);
            ctx.bezierCurveTo(199.7, 148.1, 193.2, 155.3, 184.0, 157.3);
            ctx.lineTo(178.6, 142.6);
            ctx.bezierCurveTo(178.6, 142.6, 176.1, 144.6, 171.9, 145.1);
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(133.1, 149.2);
            ctx.bezierCurveTo(133.1, 149.2, 127.0, 148.6, 122.1, 139.9);
            ctx.lineTo(132.6, 131.5);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(133.1, 149.2);
            ctx.lineTo(141.0, 138.5);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(152.9, 144.0);
            ctx.lineTo(146.9, 158.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(161.5, 160.8);
            ctx.lineTo(161.7, 145.7);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(146.3, 141.5);
            ctx.lineTo(142.5, 148.2);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(136.5, 144.5);
            ctx.bezierCurveTo(136.5, 144.5, 141.3, 149.1, 149.9, 151.2);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(184.0, 157.3);
            ctx.bezierCurveTo(149.3, 167.0, 138.1, 152.8, 138.1, 152.8);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(114.9, 149.7);
            ctx.lineTo(121.7, 158.1);
            ctx.stroke();

            // layer1/Group/Group/Path
            ctx.beginPath();
            ctx.moveTo(121.7, 157.8);
            ctx.lineTo(113.7, 164.8);
            ctx.bezierCurveTo(113.7, 164.8, 137.5, 192.0, 178.8, 179.5);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(216.7, 201.6);
            ctx.lineTo(181.8, 205.3);
            ctx.lineTo(178.0, 169.5);
            ctx.lineTo(212.9, 165.8);
            ctx.lineTo(216.7, 201.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(250.4, 197.8);
            ctx.lineTo(216.7, 201.4);
            ctx.lineTo(212.9, 165.9);
            ctx.lineTo(246.6, 162.3);
            ctx.lineTo(250.4, 197.8);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(269.6, 195.7);
            ctx.lineTo(250.3, 197.7);
            ctx.lineTo(246.5, 162.4);
            ctx.lineTo(284.2, 158.4);
            ctx.lineTo(269.6, 195.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(208.1, 160.7);
            ctx.lineTo(278.3, 154.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(294.6, 134.7);
            ctx.lineTo(284.2, 158.4);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(206.6, 154.0);
            ctx.lineTo(212.9, 153.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(212.9, 153.3);
            ctx.lineTo(212.9, 148.6);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(212.9, 148.6);
            ctx.lineTo(283.1, 91.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(283.1, 91.0);
            ctx.lineTo(286.8, 91.8);
            ctx.bezierCurveTo(286.8, 91.8, 260.6, 109.1, 286.1, 136.5);
            ctx.lineTo(278.3, 154.0);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(302.0, 98.3);
            ctx.lineTo(292.8, 93.8);
            ctx.bezierCurveTo(292.8, 93.8, 271.9, 107.1, 286.8, 128.5);
            ctx.lineTo(302.0, 98.3);
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(302.0, 98.3);
            ctx.lineTo(330.1, 112.1);
            ctx.bezierCurveTo(330.1, 112.1, 331.0, 119.8, 325.5, 129.5);
            ctx.lineTo(294.1, 113.9);
            ctx.lineTo(302.0, 98.3);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(294.1, 113.9);
            ctx.lineTo(286.8, 128.5);
            ctx.bezierCurveTo(289.2, 132.5, 295.0, 134.3, 295.0, 134.3);
            ctx.lineTo(293.0, 138.4);
            ctx.bezierCurveTo(293.0, 138.4, 316.3, 144.5, 325.5, 129.5);
            ctx.lineTo(294.1, 113.9);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(207.2, 137.9);
            ctx.lineTo(197.5, 145.7);
            ctx.lineTo(190.7, 137.3);
            ctx.lineTo(200.3, 129.5);
            ctx.lineTo(207.2, 137.9);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(215.1, 135.7);
            ctx.lineTo(211.7, 138.5);
            ctx.lineTo(209.6, 135.9);
            ctx.lineTo(207.2, 137.9);
            ctx.lineTo(200.2, 129.4);
            ctx.lineTo(206.1, 124.7);
            ctx.lineTo(215.1, 135.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(330.1, 112.1);
            ctx.lineTo(332.6, 106.8);
            ctx.bezierCurveTo(332.6, 106.8, 329.5, 95.0, 317.8, 87.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(317.8, 87.8);
            ctx.lineTo(322.1, 79.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(317.8, 56.5);
            ctx.lineTo(328.5, 60.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(206.1, 124.7);
            ctx.lineTo(217.9, 115.2);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(241.2, 113.9);
            ctx.lineTo(220.7, 130.5);
            ctx.lineTo(216.4, 125.2);
            ctx.lineTo(222.3, 120.4);
            ctx.lineTo(217.9, 115.2);
            ctx.lineTo(232.6, 103.2);
            ctx.lineTo(241.2, 113.9);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(222.3, 120.4);
            ctx.lineTo(230.6, 113.6);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(245.6, 110.6);
            ctx.lineTo(236.7, 99.9);
            ctx.lineTo(245.3, 92.7);
            ctx.lineTo(254.2, 103.4);
            ctx.lineTo(245.6, 110.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(232.6, 103.2);
            ctx.lineTo(236.7, 99.9);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(245.3, 92.7);
            ctx.lineTo(232.6, 77.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(232.6, 77.8);
            ctx.lineTo(238.1, 73.5);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(238.1, 72.7);
            ctx.lineTo(250.8, 88.8);
            ctx.bezierCurveTo(250.8, 88.8, 267.9, 72.6, 279.3, 67.1);
            ctx.lineTo(269.8, 47.9);
            ctx.bezierCurveTo(269.8, 47.9, 259.6, 50.3, 238.1, 72.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(279.3, 67.1);
            ctx.lineTo(269.8, 47.9);
            ctx.bezierCurveTo(269.8, 47.9, 292.0, 33.7, 321.2, 41.7);
            ctx.lineTo(315.8, 62.5);
            ctx.bezierCurveTo(315.8, 62.5, 298.1, 57.4, 279.3, 67.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group/Path
            ctx.beginPath();
            ctx.moveTo(297.6, 61.6);
            ctx.lineTo(297.2, 45.9);
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(359.0, 76.6);
            ctx.lineTo(328.5, 61.3);
            ctx.lineTo(339.3, 39.7);
            ctx.lineTo(366.0, 53.0);
            ctx.lineTo(362.8, 59.4);
            ctx.lineTo(366.6, 61.3);
            ctx.lineTo(359.0, 76.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(368.4, 81.2);
            ctx.lineTo(359.0, 76.5);
            ctx.lineTo(366.6, 61.3);
            ctx.lineTo(376.0, 66.0);
            ctx.lineTo(368.4, 81.2);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(380.4, 93.0);
            ctx.lineTo(366.2, 85.8);
            ctx.lineTo(376.0, 66.1);
            ctx.lineTo(390.3, 73.2);
            ctx.lineTo(380.4, 93.0);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(267.8, 92.7);
            ctx.lineTo(282.6, 81.0);
            ctx.lineTo(276.4, 68.7);
            ctx.bezierCurveTo(276.4, 68.7, 265.6, 75.6, 258.5, 81.9);
            ctx.lineTo(267.8, 92.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(254.2, 103.4);
            ctx.lineTo(267.8, 92.7);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(333.8, 85.1);
            ctx.lineTo(321.2, 78.8);
            ctx.lineTo(327.2, 66.7);
            ctx.lineTo(339.9, 73.0);
            ctx.lineTo(333.8, 85.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(342.0, 89.3);
            ctx.lineTo(333.9, 85.2);
            ctx.lineTo(339.9, 73.1);
            ctx.lineTo(348.0, 77.1);
            ctx.lineTo(342.0, 89.3);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(346.6, 91.6);
            ctx.lineTo(342.0, 89.3);
            ctx.lineTo(348.1, 77.0);
            ctx.lineTo(352.7, 79.4);
            ctx.lineTo(346.6, 91.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(352.7, 94.6);
            ctx.lineTo(346.6, 91.6);
            ctx.lineTo(352.8, 79.3);
            ctx.lineTo(358.8, 82.4);
            ctx.lineTo(352.7, 94.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(374.2, 105.4);
            ctx.lineTo(352.7, 94.6);
            ctx.lineTo(358.9, 82.2);
            ctx.lineTo(380.4, 93.0);
            ctx.lineTo(374.2, 105.4);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/N317
            ctx.font = "5.0px 'Myriad Pro'";
            ctx.fillStyle = "rgb(255, 255, 255)";
            ctx.fillText("N317", 165.8, 153.4);

            // layer1/RSE Level  3  Ground floor
            ctx.restore();
            ctx.font = "12.0px 'Lato'";
            ctx.fillText("RSE Level - 3  (Ground floor)", -0.0, 10.3);
            ctx.restore();
            break;

        case "N318":
            ctx.save();

            // layer1/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(86.0, 128.7);
            ctx.bezierCurveTo(86.0, 147.4, 70.9, 162.5, 52.3, 162.5);
            ctx.bezierCurveTo(33.6, 162.5, 18.5, 147.4, 18.5, 128.7);
            ctx.bezierCurveTo(18.5, 110.1, 33.6, 95.0, 52.3, 95.0);
            ctx.bezierCurveTo(70.9, 95.0, 86.0, 110.1, 86.0, 128.7);
            ctx.closePath();
            ctx.lineWidth = 0.8;
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(82.6, 143.6);
            ctx.lineTo(105.1, 171.6);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(105.0, 171.6);
            ctx.lineTo(97.0, 178.2);
            ctx.bezierCurveTo(97.0, 178.2, 118.2, 211.3, 181.2, 203.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(29.2, 104.1);
            ctx.lineTo(6.0, 77.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(6.0, 77.3);
            ctx.lineTo(84.6, 64.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(84.8, 64.0);
            ctx.lineTo(75.0, 80.4);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(75.0, 80.4);
            ctx.lineTo(94.0, 103.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(94.0, 103.0);
            ctx.lineTo(103.7, 95.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(114.9, 109.4);
            ctx.lineTo(82.3, 68.4);
            ctx.lineTo(82.3, 68.4);
            ctx.lineTo(94.2, 47.9);
            ctx.lineTo(131.7, 96.0);
            ctx.lineTo(114.9, 109.4);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(132.6, 131.5);
            ctx.lineTo(114.9, 109.2);
            ctx.lineTo(131.6, 95.9);
            ctx.lineTo(149.3, 118.2);
            ctx.lineTo(132.6, 131.5);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(171.9, 145.1);
            ctx.lineTo(168.0, 125.7);
            ctx.bezierCurveTo(168.0, 125.7, 154.5, 127.1, 149.3, 118.2);
            ctx.lineTo(132.6, 131.5);
            ctx.bezierCurveTo(132.6, 131.5, 147.5, 149.1, 171.9, 145.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(168.0, 125.7);
            ctx.bezierCurveTo(168.0, 125.7, 177.3, 124.9, 182.0, 119.8);
            ctx.bezierCurveTo(182.1, 119.7, 182.4, 119.7, 182.5, 119.8);
            ctx.lineTo(193.9, 134.6);
            ctx.lineTo(190.6, 137.5);
            ctx.lineTo(199.7, 148.1);
            ctx.bezierCurveTo(199.7, 148.1, 193.2, 155.3, 184.0, 157.3);
            ctx.lineTo(178.6, 142.6);
            ctx.bezierCurveTo(178.6, 142.6, 176.1, 144.6, 171.9, 145.1);
            ctx.fillStyle = "rgb(135, 37, 107)";
            ctx.fill();
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(133.1, 149.2);
            ctx.bezierCurveTo(133.1, 149.2, 127.0, 148.6, 122.1, 139.9);
            ctx.lineTo(132.6, 131.5);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(133.1, 149.2);
            ctx.lineTo(141.0, 138.5);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(152.9, 144.0);
            ctx.lineTo(146.9, 158.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(161.7, 145.7);
            ctx.lineTo(161.5, 160.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(146.3, 141.5);
            ctx.lineTo(142.5, 148.2);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(136.5, 144.5);
            ctx.bezierCurveTo(136.5, 144.5, 141.3, 149.1, 149.9, 151.2);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(138.1, 152.8);
            ctx.bezierCurveTo(138.1, 152.8, 149.3, 167.0, 184.0, 157.3);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(114.9, 149.7);
            ctx.lineTo(121.7, 158.1);
            ctx.stroke();

            // layer1/Group/Group/Path
            ctx.beginPath();
            ctx.moveTo(121.7, 157.8);
            ctx.lineTo(113.7, 164.8);
            ctx.bezierCurveTo(113.7, 164.8, 137.5, 192.0, 178.8, 179.5);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(216.7, 201.6);
            ctx.lineTo(181.8, 205.3);
            ctx.lineTo(178.0, 169.5);
            ctx.lineTo(212.9, 165.8);
            ctx.lineTo(216.7, 201.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(250.4, 197.8);
            ctx.lineTo(216.7, 201.4);
            ctx.lineTo(212.9, 165.9);
            ctx.lineTo(246.6, 162.3);
            ctx.lineTo(250.4, 197.8);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(269.6, 195.7);
            ctx.lineTo(250.3, 197.7);
            ctx.lineTo(246.5, 162.4);
            ctx.lineTo(284.2, 158.4);
            ctx.lineTo(269.6, 195.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(208.1, 160.7);
            ctx.lineTo(278.3, 154.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(294.6, 134.7);
            ctx.lineTo(284.2, 158.4);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(206.6, 154.0);
            ctx.lineTo(212.9, 153.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(212.9, 153.3);
            ctx.lineTo(212.9, 148.6);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(212.9, 148.6);
            ctx.lineTo(283.1, 91.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(283.1, 91.0);
            ctx.lineTo(286.8, 91.8);
            ctx.bezierCurveTo(286.8, 91.8, 260.6, 109.1, 286.1, 136.5);
            ctx.lineTo(278.3, 154.0);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(302.0, 98.3);
            ctx.lineTo(292.8, 93.8);
            ctx.bezierCurveTo(292.8, 93.8, 271.9, 107.1, 286.8, 128.5);
            ctx.lineTo(302.0, 98.3);
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(302.0, 98.3);
            ctx.lineTo(330.1, 112.1);
            ctx.bezierCurveTo(330.1, 112.1, 331.0, 119.8, 325.5, 129.5);
            ctx.lineTo(294.1, 113.9);
            ctx.lineTo(302.0, 98.3);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(294.1, 113.9);
            ctx.lineTo(286.8, 128.5);
            ctx.bezierCurveTo(289.2, 132.5, 295.0, 134.3, 295.0, 134.3);
            ctx.lineTo(293.0, 138.4);
            ctx.bezierCurveTo(293.0, 138.4, 316.3, 144.5, 325.5, 129.5);
            ctx.lineTo(294.1, 113.9);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(207.2, 137.9);
            ctx.lineTo(197.5, 145.7);
            ctx.lineTo(190.7, 137.3);
            ctx.lineTo(200.3, 129.5);
            ctx.lineTo(207.2, 137.9);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(215.1, 135.7);
            ctx.lineTo(211.7, 138.5);
            ctx.lineTo(209.6, 135.9);
            ctx.lineTo(207.2, 137.9);
            ctx.lineTo(200.2, 129.4);
            ctx.lineTo(206.1, 124.7);
            ctx.lineTo(215.1, 135.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(330.1, 112.1);
            ctx.lineTo(332.6, 106.8);
            ctx.bezierCurveTo(332.6, 106.8, 329.5, 95.0, 317.8, 87.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(317.8, 87.8);
            ctx.lineTo(322.1, 79.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(317.8, 56.5);
            ctx.lineTo(328.5, 60.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(206.1, 124.7);
            ctx.lineTo(217.9, 115.2);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(241.2, 113.9);
            ctx.lineTo(220.7, 130.5);
            ctx.lineTo(216.4, 125.2);
            ctx.lineTo(222.3, 120.4);
            ctx.lineTo(217.9, 115.2);
            ctx.lineTo(232.6, 103.2);
            ctx.lineTo(241.2, 113.9);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(222.3, 120.4);
            ctx.lineTo(230.6, 113.6);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(245.6, 110.6);
            ctx.lineTo(236.7, 99.9);
            ctx.lineTo(245.3, 92.7);
            ctx.lineTo(254.2, 103.4);
            ctx.lineTo(245.6, 110.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(232.6, 103.2);
            ctx.lineTo(236.7, 99.9);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(245.3, 92.7);
            ctx.lineTo(232.6, 77.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(232.6, 77.8);
            ctx.lineTo(238.1, 73.5);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(238.1, 72.7);
            ctx.lineTo(250.8, 88.8);
            ctx.bezierCurveTo(250.8, 88.8, 267.9, 72.6, 279.3, 67.1);
            ctx.lineTo(269.8, 47.9);
            ctx.bezierCurveTo(269.8, 47.9, 259.6, 50.3, 238.1, 72.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(279.3, 67.1);
            ctx.lineTo(269.8, 47.9);
            ctx.bezierCurveTo(269.8, 47.9, 292.0, 33.7, 321.2, 41.7);
            ctx.lineTo(315.8, 62.5);
            ctx.bezierCurveTo(315.8, 62.5, 298.1, 57.4, 279.3, 67.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group/Path
            ctx.beginPath();
            ctx.moveTo(297.6, 61.6);
            ctx.lineTo(297.2, 45.9);
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(359.0, 76.6);
            ctx.lineTo(328.5, 61.3);
            ctx.lineTo(339.3, 39.7);
            ctx.lineTo(366.0, 53.0);
            ctx.lineTo(362.8, 59.4);
            ctx.lineTo(366.6, 61.3);
            ctx.lineTo(359.0, 76.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(368.4, 81.2);
            ctx.lineTo(359.0, 76.5);
            ctx.lineTo(366.6, 61.3);
            ctx.lineTo(376.0, 66.0);
            ctx.lineTo(368.4, 81.2);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(380.4, 93.0);
            ctx.lineTo(366.2, 85.8);
            ctx.lineTo(376.0, 66.1);
            ctx.lineTo(390.3, 73.2);
            ctx.lineTo(380.4, 93.0);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(267.8, 92.7);
            ctx.lineTo(282.6, 81.0);
            ctx.lineTo(276.4, 68.7);
            ctx.bezierCurveTo(276.4, 68.7, 265.6, 75.6, 258.5, 81.9);
            ctx.lineTo(267.8, 92.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(254.2, 103.4);
            ctx.lineTo(267.8, 92.7);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(333.8, 85.1);
            ctx.lineTo(321.2, 78.8);
            ctx.lineTo(327.2, 66.7);
            ctx.lineTo(339.9, 73.0);
            ctx.lineTo(333.8, 85.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(342.0, 89.3);
            ctx.lineTo(333.9, 85.2);
            ctx.lineTo(339.9, 73.1);
            ctx.lineTo(348.0, 77.1);
            ctx.lineTo(342.0, 89.3);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(346.6, 91.6);
            ctx.lineTo(342.0, 89.3);
            ctx.lineTo(348.1, 77.0);
            ctx.lineTo(352.7, 79.4);
            ctx.lineTo(346.6, 91.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(352.7, 94.6);
            ctx.lineTo(346.6, 91.6);
            ctx.lineTo(352.8, 79.3);
            ctx.lineTo(358.8, 82.4);
            ctx.lineTo(352.7, 94.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(374.2, 105.4);
            ctx.lineTo(352.7, 94.6);
            ctx.lineTo(358.9, 82.2);
            ctx.lineTo(380.4, 93.0);
            ctx.lineTo(374.2, 105.4);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/N318
            ctx.font = "8.0px 'Myriad Pro'";
            ctx.fillStyle = "rgb(255, 255, 255)";
            ctx.fillText("N318", 171.9, 135.7);

            // layer1/RSE Level  3  Ground floor
            ctx.restore();
            ctx.font = "12.0px 'Lato'";
            ctx.fillText("RSE Level - 3  (Ground floor)", -0.0, 10.3);
            ctx.restore();
            break;

        case "N318a":
            ctx.save();

            // layer1/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(86.0, 128.7);
            ctx.bezierCurveTo(86.0, 147.4, 70.9, 162.5, 52.3, 162.5);
            ctx.bezierCurveTo(33.6, 162.5, 18.5, 147.4, 18.5, 128.7);
            ctx.bezierCurveTo(18.5, 110.1, 33.6, 95.0, 52.3, 95.0);
            ctx.bezierCurveTo(70.9, 95.0, 86.0, 110.1, 86.0, 128.7);
            ctx.closePath();
            ctx.lineWidth = 0.8;
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(82.6, 143.6);
            ctx.lineTo(105.1, 171.6);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(105.0, 171.6);
            ctx.lineTo(97.0, 178.2);
            ctx.bezierCurveTo(97.0, 178.2, 118.2, 211.3, 181.2, 203.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(29.2, 104.1);
            ctx.lineTo(6.0, 77.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(6.0, 77.3);
            ctx.lineTo(84.6, 64.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(84.8, 64.0);
            ctx.lineTo(75.0, 80.4);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(75.0, 80.4);
            ctx.lineTo(94.0, 103.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(94.0, 103.0);
            ctx.lineTo(103.7, 95.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(114.9, 109.4);
            ctx.lineTo(82.3, 68.4);
            ctx.lineTo(82.3, 68.4);
            ctx.lineTo(94.2, 47.9);
            ctx.lineTo(131.7, 96.0);
            ctx.lineTo(114.9, 109.4);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(132.6, 131.5);
            ctx.lineTo(114.9, 109.2);
            ctx.lineTo(131.6, 95.9);
            ctx.lineTo(149.3, 118.2);
            ctx.lineTo(132.6, 131.5);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(171.9, 145.1);
            ctx.lineTo(168.0, 125.7);
            ctx.bezierCurveTo(168.0, 125.7, 154.5, 127.1, 149.3, 118.2);
            ctx.lineTo(132.6, 131.5);
            ctx.bezierCurveTo(132.6, 131.5, 147.5, 149.1, 171.9, 145.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(168.0, 125.7);
            ctx.bezierCurveTo(168.0, 125.7, 177.3, 124.9, 182.0, 119.8);
            ctx.bezierCurveTo(182.1, 119.7, 182.4, 119.7, 182.5, 119.8);
            ctx.lineTo(193.9, 134.6);
            ctx.lineTo(190.6, 137.5);
            ctx.lineTo(199.7, 148.1);
            ctx.bezierCurveTo(199.7, 148.1, 193.2, 155.3, 184.0, 157.3);
            ctx.lineTo(178.6, 142.6);
            ctx.bezierCurveTo(178.6, 142.6, 176.1, 144.6, 171.9, 145.1);
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(133.1, 149.2);
            ctx.bezierCurveTo(133.1, 149.2, 127.0, 148.6, 122.1, 139.9);
            ctx.lineTo(132.6, 131.5);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(133.1, 149.2);
            ctx.lineTo(141.0, 138.5);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(152.9, 144.0);
            ctx.lineTo(146.9, 158.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(161.7, 145.7);
            ctx.lineTo(161.5, 160.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(146.3, 141.5);
            ctx.lineTo(142.5, 148.2);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(136.5, 144.5);
            ctx.bezierCurveTo(136.5, 144.5, 141.3, 149.1, 149.9, 151.2);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(138.1, 152.8);
            ctx.bezierCurveTo(138.1, 152.8, 149.3, 167.0, 184.0, 157.3);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(114.9, 149.7);
            ctx.lineTo(121.7, 158.1);
            ctx.stroke();

            // layer1/Group/Group/Path
            ctx.beginPath();
            ctx.moveTo(121.7, 157.8);
            ctx.lineTo(113.7, 164.8);
            ctx.bezierCurveTo(113.7, 164.8, 137.5, 192.0, 178.8, 179.5);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(216.7, 201.6);
            ctx.lineTo(181.8, 205.3);
            ctx.lineTo(178.0, 169.5);
            ctx.lineTo(212.9, 165.8);
            ctx.lineTo(216.7, 201.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(250.4, 197.8);
            ctx.lineTo(216.7, 201.4);
            ctx.lineTo(212.9, 165.9);
            ctx.lineTo(246.6, 162.3);
            ctx.lineTo(250.4, 197.8);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(269.6, 195.7);
            ctx.lineTo(250.3, 197.7);
            ctx.lineTo(246.5, 162.4);
            ctx.lineTo(284.2, 158.4);
            ctx.lineTo(269.6, 195.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(208.1, 160.7);
            ctx.lineTo(278.3, 154.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(294.6, 134.7);
            ctx.lineTo(284.2, 158.4);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(206.6, 154.0);
            ctx.lineTo(212.9, 153.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(212.9, 153.3);
            ctx.lineTo(212.9, 148.6);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(212.9, 148.6);
            ctx.lineTo(283.1, 91.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(283.1, 91.0);
            ctx.lineTo(286.8, 91.8);
            ctx.bezierCurveTo(286.8, 91.8, 260.6, 109.1, 286.1, 136.5);
            ctx.lineTo(278.3, 154.0);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(302.0, 98.3);
            ctx.lineTo(292.8, 93.8);
            ctx.bezierCurveTo(292.8, 93.8, 271.9, 107.1, 286.8, 128.5);
            ctx.lineTo(302.0, 98.3);
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(302.0, 98.3);
            ctx.lineTo(330.1, 112.1);
            ctx.bezierCurveTo(330.1, 112.1, 331.0, 119.8, 325.5, 129.5);
            ctx.lineTo(294.1, 113.9);
            ctx.lineTo(302.0, 98.3);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(294.1, 113.9);
            ctx.lineTo(286.8, 128.5);
            ctx.bezierCurveTo(289.2, 132.5, 295.0, 134.3, 295.0, 134.3);
            ctx.lineTo(293.0, 138.4);
            ctx.bezierCurveTo(293.0, 138.4, 316.3, 144.5, 325.5, 129.5);
            ctx.lineTo(294.1, 113.9);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(207.2, 137.9);
            ctx.lineTo(197.5, 145.7);
            ctx.lineTo(190.7, 137.3);
            ctx.lineTo(200.3, 129.5);
            ctx.lineTo(207.2, 137.9);
            ctx.closePath();
            ctx.fillStyle = "rgb(135, 37, 107)";
            ctx.fill();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(215.1, 135.7);
            ctx.lineTo(211.7, 138.5);
            ctx.lineTo(209.6, 135.9);
            ctx.lineTo(207.2, 137.9);
            ctx.lineTo(200.2, 129.4);
            ctx.lineTo(206.1, 124.7);
            ctx.lineTo(215.1, 135.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(330.1, 112.1);
            ctx.lineTo(332.6, 106.8);
            ctx.bezierCurveTo(332.6, 106.8, 329.5, 95.0, 317.8, 87.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(317.8, 87.8);
            ctx.lineTo(322.1, 79.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(317.8, 56.5);
            ctx.lineTo(328.5, 60.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(206.1, 124.7);
            ctx.lineTo(217.9, 115.2);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(241.2, 113.9);
            ctx.lineTo(220.7, 130.5);
            ctx.lineTo(216.4, 125.2);
            ctx.lineTo(222.3, 120.4);
            ctx.lineTo(217.9, 115.2);
            ctx.lineTo(232.6, 103.2);
            ctx.lineTo(241.2, 113.9);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(222.3, 120.4);
            ctx.lineTo(230.6, 113.6);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(245.6, 110.6);
            ctx.lineTo(236.7, 99.9);
            ctx.lineTo(245.3, 92.7);
            ctx.lineTo(254.2, 103.4);
            ctx.lineTo(245.6, 110.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(232.6, 103.2);
            ctx.lineTo(236.7, 99.9);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(245.3, 92.7);
            ctx.lineTo(232.6, 77.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(232.6, 77.8);
            ctx.lineTo(238.1, 73.5);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(238.1, 72.7);
            ctx.lineTo(250.8, 88.8);
            ctx.bezierCurveTo(250.8, 88.8, 267.9, 72.6, 279.3, 67.1);
            ctx.lineTo(269.8, 47.9);
            ctx.bezierCurveTo(269.8, 47.9, 259.6, 50.3, 238.1, 72.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(279.3, 67.1);
            ctx.lineTo(269.8, 47.9);
            ctx.bezierCurveTo(269.8, 47.9, 292.0, 33.7, 321.2, 41.7);
            ctx.lineTo(315.8, 62.5);
            ctx.bezierCurveTo(315.8, 62.5, 298.1, 57.4, 279.3, 67.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group/Path
            ctx.beginPath();
            ctx.moveTo(297.6, 61.6);
            ctx.lineTo(297.2, 45.9);
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(359.0, 76.6);
            ctx.lineTo(328.5, 61.3);
            ctx.lineTo(339.3, 39.7);
            ctx.lineTo(366.0, 53.0);
            ctx.lineTo(362.8, 59.4);
            ctx.lineTo(366.6, 61.3);
            ctx.lineTo(359.0, 76.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(368.4, 81.2);
            ctx.lineTo(359.0, 76.5);
            ctx.lineTo(366.6, 61.3);
            ctx.lineTo(376.0, 66.0);
            ctx.lineTo(368.4, 81.2);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(380.4, 93.0);
            ctx.lineTo(366.2, 85.8);
            ctx.lineTo(376.0, 66.1);
            ctx.lineTo(390.3, 73.2);
            ctx.lineTo(380.4, 93.0);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(267.8, 92.7);
            ctx.lineTo(282.6, 81.0);
            ctx.lineTo(276.4, 68.7);
            ctx.bezierCurveTo(276.4, 68.7, 265.6, 75.6, 258.5, 81.9);
            ctx.lineTo(267.8, 92.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(254.2, 103.4);
            ctx.lineTo(267.8, 92.7);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(333.8, 85.1);
            ctx.lineTo(321.2, 78.8);
            ctx.lineTo(327.2, 66.7);
            ctx.lineTo(339.9, 73.0);
            ctx.lineTo(333.8, 85.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(342.0, 89.3);
            ctx.lineTo(333.9, 85.2);
            ctx.lineTo(339.9, 73.1);
            ctx.lineTo(348.0, 77.1);
            ctx.lineTo(342.0, 89.3);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(346.6, 91.6);
            ctx.lineTo(342.0, 89.3);
            ctx.lineTo(348.1, 77.0);
            ctx.lineTo(352.7, 79.4);
            ctx.lineTo(346.6, 91.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(352.7, 94.6);
            ctx.lineTo(346.6, 91.6);
            ctx.lineTo(352.8, 79.3);
            ctx.lineTo(358.8, 82.4);
            ctx.lineTo(352.7, 94.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(374.2, 105.4);
            ctx.lineTo(352.7, 94.6);
            ctx.lineTo(358.9, 82.2);
            ctx.lineTo(380.4, 93.0);
            ctx.lineTo(374.2, 105.4);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/N318a
            ctx.font = "4.0px 'Myriad Pro'";
            ctx.fillStyle = "rgb(255, 255, 255)";
            ctx.fillText("N318a", 193.4, 138.6);

            // layer1/RSE Level  3  Ground floor
            ctx.restore();
            ctx.font = "12.0px 'Lato'";
            ctx.fillText("RSE Level - 3  (Ground floor)", -0.0, 10.3);
            ctx.restore();
            break;

        case "N319":
            ctx.save();

            // layer1/Group/Group
            ctx.save();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(184.0, 157.1);
            ctx.bezierCurveTo(174.8, 160.5, 161.5, 160.8, 161.5, 160.8);
            ctx.lineTo(161.7, 145.7);
            ctx.bezierCurveTo(161.7, 145.7, 174.2, 146.3, 178.6, 142.6);
            ctx.lineTo(184.0, 157.1);
            ctx.closePath();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(86.0, 128.7);
            ctx.bezierCurveTo(86.0, 147.4, 70.9, 162.5, 52.3, 162.5);
            ctx.bezierCurveTo(33.6, 162.5, 18.5, 147.4, 18.5, 128.7);
            ctx.bezierCurveTo(18.5, 110.1, 33.6, 95.0, 52.3, 95.0);
            ctx.bezierCurveTo(70.9, 95.0, 86.0, 110.1, 86.0, 128.7);
            ctx.closePath();
            ctx.lineWidth = 0.8;
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(82.6, 143.6);
            ctx.lineTo(105.1, 171.6);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(105.0, 171.6);
            ctx.lineTo(97.0, 178.2);
            ctx.bezierCurveTo(97.0, 178.2, 118.2, 211.3, 181.2, 203.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(29.2, 104.1);
            ctx.lineTo(6.0, 77.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(6.0, 77.3);
            ctx.lineTo(84.6, 64.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(84.8, 64.0);
            ctx.lineTo(75.0, 80.4);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(75.0, 80.4);
            ctx.lineTo(94.0, 103.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(94.0, 103.0);
            ctx.lineTo(103.7, 95.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(114.9, 109.4);
            ctx.lineTo(82.3, 68.4);
            ctx.lineTo(82.3, 68.4);
            ctx.lineTo(94.2, 47.9);
            ctx.lineTo(131.7, 96.0);
            ctx.lineTo(114.9, 109.4);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(132.6, 131.5);
            ctx.lineTo(114.9, 109.2);
            ctx.lineTo(131.6, 95.9);
            ctx.lineTo(149.3, 118.2);
            ctx.lineTo(132.6, 131.5);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(171.9, 145.1);
            ctx.lineTo(168.0, 125.7);
            ctx.bezierCurveTo(168.0, 125.7, 154.5, 127.1, 149.3, 118.2);
            ctx.lineTo(132.6, 131.5);
            ctx.bezierCurveTo(132.6, 131.5, 147.5, 149.1, 171.9, 145.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(168.0, 125.7);
            ctx.bezierCurveTo(168.0, 125.7, 177.3, 124.9, 182.0, 119.8);
            ctx.bezierCurveTo(182.1, 119.7, 182.4, 119.7, 182.5, 119.8);
            ctx.lineTo(193.9, 134.6);
            ctx.lineTo(190.6, 137.5);
            ctx.lineTo(199.7, 148.1);
            ctx.bezierCurveTo(199.7, 148.1, 193.2, 155.3, 184.0, 157.3);
            ctx.lineTo(178.6, 142.6);
            ctx.bezierCurveTo(178.6, 142.6, 176.1, 144.6, 171.9, 145.1);
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(133.1, 149.2);
            ctx.bezierCurveTo(133.1, 149.2, 127.0, 148.6, 122.1, 139.9);
            ctx.lineTo(132.6, 131.5);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(133.1, 149.2);
            ctx.lineTo(141.0, 138.5);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(152.9, 144.0);
            ctx.lineTo(146.9, 158.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(161.5, 160.8);
            ctx.lineTo(161.7, 145.7);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(146.3, 141.5);
            ctx.lineTo(142.5, 148.2);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(136.5, 144.5);
            ctx.bezierCurveTo(136.5, 144.5, 141.3, 149.1, 149.9, 151.2);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(184.0, 157.3);
            ctx.bezierCurveTo(149.3, 167.0, 138.1, 152.8, 138.1, 152.8);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(114.9, 149.7);
            ctx.lineTo(121.7, 158.1);
            ctx.stroke();

            // layer1/Group/Group/Path
            ctx.beginPath();
            ctx.moveTo(121.7, 157.8);
            ctx.lineTo(113.7, 164.8);
            ctx.bezierCurveTo(113.7, 164.8, 137.5, 192.0, 178.8, 179.5);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(216.7, 201.6);
            ctx.lineTo(181.8, 205.3);
            ctx.lineTo(178.0, 169.5);
            ctx.lineTo(212.9, 165.8);
            ctx.lineTo(216.7, 201.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(250.4, 197.8);
            ctx.lineTo(216.7, 201.4);
            ctx.lineTo(212.9, 165.9);
            ctx.lineTo(246.6, 162.3);
            ctx.lineTo(250.4, 197.8);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(269.6, 195.7);
            ctx.lineTo(250.3, 197.7);
            ctx.lineTo(246.5, 162.4);
            ctx.lineTo(284.2, 158.4);
            ctx.lineTo(269.6, 195.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(208.1, 160.7);
            ctx.lineTo(278.3, 154.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(294.6, 134.7);
            ctx.lineTo(284.2, 158.4);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(206.6, 154.0);
            ctx.lineTo(212.9, 153.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(212.9, 153.3);
            ctx.lineTo(212.9, 148.6);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(212.9, 148.6);
            ctx.lineTo(283.1, 91.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(283.1, 91.0);
            ctx.lineTo(286.8, 91.8);
            ctx.bezierCurveTo(286.8, 91.8, 260.6, 109.1, 286.1, 136.5);
            ctx.lineTo(278.3, 154.0);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(302.0, 98.3);
            ctx.lineTo(292.8, 93.8);
            ctx.bezierCurveTo(292.8, 93.8, 271.9, 107.1, 286.8, 128.5);
            ctx.lineTo(302.0, 98.3);
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(302.0, 98.3);
            ctx.lineTo(330.1, 112.1);
            ctx.bezierCurveTo(330.1, 112.1, 331.0, 119.8, 325.5, 129.5);
            ctx.lineTo(294.1, 113.9);
            ctx.lineTo(302.0, 98.3);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(294.1, 113.9);
            ctx.lineTo(286.8, 128.5);
            ctx.bezierCurveTo(289.2, 132.5, 295.0, 134.3, 295.0, 134.3);
            ctx.lineTo(293.0, 138.4);
            ctx.bezierCurveTo(293.0, 138.4, 316.3, 144.5, 325.5, 129.5);
            ctx.lineTo(294.1, 113.9);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(207.2, 137.9);
            ctx.lineTo(197.5, 145.7);
            ctx.lineTo(190.7, 137.3);
            ctx.lineTo(200.3, 129.5);
            ctx.lineTo(207.2, 137.9);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(215.1, 135.7);
            ctx.lineTo(211.7, 138.5);
            ctx.lineTo(209.6, 135.9);
            ctx.lineTo(207.2, 137.9);
            ctx.lineTo(200.2, 129.4);
            ctx.lineTo(206.1, 124.7);
            ctx.lineTo(215.1, 135.7);
            ctx.closePath();
            ctx.fillStyle = "rgb(135, 37, 107)";
            ctx.fill();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(330.1, 112.1);
            ctx.lineTo(332.6, 106.8);
            ctx.bezierCurveTo(332.6, 106.8, 329.5, 95.0, 317.8, 87.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(317.8, 87.8);
            ctx.lineTo(322.1, 79.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(317.8, 56.5);
            ctx.lineTo(328.5, 60.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(206.1, 124.7);
            ctx.lineTo(217.9, 115.2);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(241.2, 113.9);
            ctx.lineTo(220.7, 130.5);
            ctx.lineTo(216.4, 125.2);
            ctx.lineTo(222.3, 120.4);
            ctx.lineTo(217.9, 115.2);
            ctx.lineTo(232.6, 103.2);
            ctx.lineTo(241.2, 113.9);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(222.3, 120.4);
            ctx.lineTo(230.6, 113.6);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(245.6, 110.6);
            ctx.lineTo(236.7, 99.9);
            ctx.lineTo(245.3, 92.7);
            ctx.lineTo(254.2, 103.4);
            ctx.lineTo(245.6, 110.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(232.6, 103.2);
            ctx.lineTo(236.7, 99.9);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(245.3, 92.7);
            ctx.lineTo(232.6, 77.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(232.6, 77.8);
            ctx.lineTo(238.1, 73.5);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(238.1, 72.7);
            ctx.lineTo(250.8, 88.8);
            ctx.bezierCurveTo(250.8, 88.8, 267.9, 72.6, 279.3, 67.1);
            ctx.lineTo(269.8, 47.9);
            ctx.bezierCurveTo(269.8, 47.9, 259.6, 50.3, 238.1, 72.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(279.3, 67.1);
            ctx.lineTo(269.8, 47.9);
            ctx.bezierCurveTo(269.8, 47.9, 292.0, 33.7, 321.2, 41.7);
            ctx.lineTo(315.8, 62.5);
            ctx.bezierCurveTo(315.8, 62.5, 298.1, 57.4, 279.3, 67.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group/Path
            ctx.beginPath();
            ctx.moveTo(297.6, 61.6);
            ctx.lineTo(297.2, 45.9);
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(359.0, 76.6);
            ctx.lineTo(328.5, 61.3);
            ctx.lineTo(339.3, 39.7);
            ctx.lineTo(366.0, 53.0);
            ctx.lineTo(362.8, 59.4);
            ctx.lineTo(366.6, 61.3);
            ctx.lineTo(359.0, 76.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(368.4, 81.2);
            ctx.lineTo(359.0, 76.5);
            ctx.lineTo(366.6, 61.3);
            ctx.lineTo(376.0, 66.0);
            ctx.lineTo(368.4, 81.2);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(380.4, 93.0);
            ctx.lineTo(366.2, 85.8);
            ctx.lineTo(376.0, 66.1);
            ctx.lineTo(390.3, 73.2);
            ctx.lineTo(380.4, 93.0);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(267.8, 92.7);
            ctx.lineTo(282.6, 81.0);
            ctx.lineTo(276.4, 68.7);
            ctx.bezierCurveTo(276.4, 68.7, 265.6, 75.6, 258.5, 81.9);
            ctx.lineTo(267.8, 92.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(254.2, 103.4);
            ctx.lineTo(267.8, 92.7);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(333.8, 85.1);
            ctx.lineTo(321.2, 78.8);
            ctx.lineTo(327.2, 66.7);
            ctx.lineTo(339.9, 73.0);
            ctx.lineTo(333.8, 85.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(342.0, 89.3);
            ctx.lineTo(333.9, 85.2);
            ctx.lineTo(339.9, 73.1);
            ctx.lineTo(348.0, 77.1);
            ctx.lineTo(342.0, 89.3);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(346.6, 91.6);
            ctx.lineTo(342.0, 89.3);
            ctx.lineTo(348.1, 77.0);
            ctx.lineTo(352.7, 79.4);
            ctx.lineTo(346.6, 91.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(352.7, 94.6);
            ctx.lineTo(346.6, 91.6);
            ctx.lineTo(352.8, 79.3);
            ctx.lineTo(358.8, 82.4);
            ctx.lineTo(352.7, 94.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(374.2, 105.4);
            ctx.lineTo(352.7, 94.6);
            ctx.lineTo(358.9, 82.2);
            ctx.lineTo(380.4, 93.0);
            ctx.lineTo(374.2, 105.4);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/N319
            ctx.font = "4.0px 'Myriad Pro'";
            ctx.save();
            ctx.transform(0.643, 0.766, -0.766, 0.643, 203.4, 128.5);
            ctx.fillStyle = "rgb(255, 255, 255)";
            ctx.fillText("N319", 0, 0);
            ctx.restore();

            // layer1/RSE Level  3  Ground floor
            ctx.restore();
            ctx.font = "12.0px 'Lato'";
            ctx.fillText("RSE Level - 3  (Ground floor)", -0.0, 10.3);
            ctx.restore();
            break;

        case "N320":
            // layer1/Group
            ctx.save();

            // layer1/Group/Group
            ctx.save();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(184.0, 157.1);
            ctx.bezierCurveTo(174.8, 160.5, 161.5, 160.8, 161.5, 160.8);
            ctx.lineTo(161.7, 145.7);
            ctx.bezierCurveTo(161.7, 145.7, 174.2, 146.3, 178.6, 142.6);
            ctx.lineTo(184.0, 157.1);
            ctx.closePath();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(86.0, 128.7);
            ctx.bezierCurveTo(86.0, 147.4, 70.9, 162.5, 52.3, 162.5);
            ctx.bezierCurveTo(33.6, 162.5, 18.5, 147.4, 18.5, 128.7);
            ctx.bezierCurveTo(18.5, 110.1, 33.6, 95.0, 52.3, 95.0);
            ctx.bezierCurveTo(70.9, 95.0, 86.0, 110.1, 86.0, 128.7);
            ctx.closePath();
            ctx.lineWidth = 0.8;
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(82.6, 143.6);
            ctx.lineTo(105.1, 171.6);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(105.0, 171.6);
            ctx.lineTo(97.0, 178.2);
            ctx.bezierCurveTo(97.0, 178.2, 118.2, 211.3, 181.2, 203.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(29.2, 104.1);
            ctx.lineTo(6.0, 77.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(6.0, 77.3);
            ctx.lineTo(84.6, 64.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(84.8, 64.0);
            ctx.lineTo(75.0, 80.4);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(75.0, 80.4);
            ctx.lineTo(94.0, 103.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(94.0, 103.0);
            ctx.lineTo(103.7, 95.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(114.9, 109.4);
            ctx.lineTo(82.3, 68.4);
            ctx.lineTo(82.3, 68.4);
            ctx.lineTo(94.2, 47.9);
            ctx.lineTo(131.7, 96.0);
            ctx.lineTo(114.9, 109.4);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(132.6, 131.5);
            ctx.lineTo(114.9, 109.2);
            ctx.lineTo(131.6, 95.9);
            ctx.lineTo(149.3, 118.2);
            ctx.lineTo(132.6, 131.5);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(171.9, 145.1);
            ctx.lineTo(168.0, 125.7);
            ctx.bezierCurveTo(168.0, 125.7, 154.5, 127.1, 149.3, 118.2);
            ctx.lineTo(132.6, 131.5);
            ctx.bezierCurveTo(132.6, 131.5, 147.5, 149.1, 171.9, 145.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(168.0, 125.7);
            ctx.bezierCurveTo(168.0, 125.7, 177.3, 124.9, 182.0, 119.8);
            ctx.bezierCurveTo(182.1, 119.7, 182.4, 119.7, 182.5, 119.8);
            ctx.lineTo(193.9, 134.6);
            ctx.lineTo(190.6, 137.5);
            ctx.lineTo(199.7, 148.1);
            ctx.bezierCurveTo(199.7, 148.1, 193.2, 155.3, 184.0, 157.3);
            ctx.lineTo(178.6, 142.6);
            ctx.bezierCurveTo(178.6, 142.6, 176.1, 144.6, 171.9, 145.1);
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(133.1, 149.2);
            ctx.bezierCurveTo(133.1, 149.2, 127.0, 148.6, 122.1, 139.9);
            ctx.lineTo(132.6, 131.5);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(133.1, 149.2);
            ctx.lineTo(141.0, 138.5);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(152.9, 144.0);
            ctx.lineTo(146.9, 158.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(161.5, 160.8);
            ctx.lineTo(161.7, 145.7);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(146.3, 141.5);
            ctx.lineTo(142.5, 148.2);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(136.5, 144.5);
            ctx.bezierCurveTo(136.5, 144.5, 141.3, 149.1, 149.9, 151.2);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(184.0, 157.3);
            ctx.bezierCurveTo(149.3, 167.0, 138.1, 152.8, 138.1, 152.8);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(114.9, 149.7);
            ctx.lineTo(121.7, 158.1);
            ctx.stroke();

            // layer1/Group/Group/Path
            ctx.beginPath();
            ctx.moveTo(121.7, 157.8);
            ctx.lineTo(113.7, 164.8);
            ctx.bezierCurveTo(113.7, 164.8, 137.5, 192.0, 178.8, 179.5);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(216.7, 201.6);
            ctx.lineTo(181.8, 205.3);
            ctx.lineTo(178.0, 169.5);
            ctx.lineTo(212.9, 165.8);
            ctx.lineTo(216.7, 201.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(250.4, 197.8);
            ctx.lineTo(216.7, 201.4);
            ctx.lineTo(212.9, 165.9);
            ctx.lineTo(246.6, 162.3);
            ctx.lineTo(250.4, 197.8);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(269.6, 195.7);
            ctx.lineTo(250.3, 197.7);
            ctx.lineTo(246.5, 162.4);
            ctx.lineTo(284.2, 158.4);
            ctx.lineTo(269.6, 195.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(208.1, 160.7);
            ctx.lineTo(278.3, 154.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(294.6, 134.7);
            ctx.lineTo(284.2, 158.4);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(206.6, 154.0);
            ctx.lineTo(212.9, 153.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(212.9, 153.3);
            ctx.lineTo(212.9, 148.6);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(212.9, 148.6);
            ctx.lineTo(283.1, 91.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(283.1, 91.0);
            ctx.lineTo(286.8, 91.8);
            ctx.bezierCurveTo(286.8, 91.8, 260.6, 109.1, 286.1, 136.5);
            ctx.lineTo(278.3, 154.0);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(302.0, 98.3);
            ctx.lineTo(292.8, 93.8);
            ctx.bezierCurveTo(292.8, 93.8, 271.9, 107.1, 286.8, 128.5);
            ctx.lineTo(302.0, 98.3);
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(302.0, 98.3);
            ctx.lineTo(330.1, 112.1);
            ctx.bezierCurveTo(330.1, 112.1, 331.0, 119.8, 325.5, 129.5);
            ctx.lineTo(294.1, 113.9);
            ctx.lineTo(302.0, 98.3);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(294.1, 113.9);
            ctx.lineTo(286.8, 128.5);
            ctx.bezierCurveTo(289.2, 132.5, 295.0, 134.3, 295.0, 134.3);
            ctx.lineTo(293.0, 138.4);
            ctx.bezierCurveTo(293.0, 138.4, 316.3, 144.5, 325.5, 129.5);
            ctx.lineTo(294.1, 113.9);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(207.2, 137.9);
            ctx.lineTo(197.5, 145.7);
            ctx.lineTo(190.7, 137.3);
            ctx.lineTo(200.3, 129.5);
            ctx.lineTo(207.2, 137.9);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(215.1, 135.7);
            ctx.lineTo(211.7, 138.5);
            ctx.lineTo(209.6, 135.9);
            ctx.lineTo(207.2, 137.9);
            ctx.lineTo(200.2, 129.4);
            ctx.lineTo(206.1, 124.7);
            ctx.lineTo(215.1, 135.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(330.1, 112.1);
            ctx.lineTo(332.6, 106.8);
            ctx.bezierCurveTo(332.6, 106.8, 329.5, 95.0, 317.8, 87.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(317.8, 87.8);
            ctx.lineTo(322.1, 79.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(317.8, 56.5);
            ctx.lineTo(328.5, 60.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(206.1, 124.7);
            ctx.lineTo(217.9, 115.2);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(241.2, 113.9);
            ctx.lineTo(220.7, 130.5);
            ctx.lineTo(216.4, 125.2);
            ctx.lineTo(222.3, 120.4);
            ctx.lineTo(217.9, 115.2);
            ctx.lineTo(232.6, 103.2);
            ctx.lineTo(241.2, 113.9);
            ctx.closePath();
            ctx.fillStyle = "rgb(135, 37, 107)";
            ctx.fill();
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(222.3, 120.4);
            ctx.lineTo(230.6, 113.6);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(245.6, 110.6);
            ctx.lineTo(236.7, 99.9);
            ctx.lineTo(245.3, 92.7);
            ctx.lineTo(254.2, 103.4);
            ctx.lineTo(245.6, 110.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(232.6, 103.2);
            ctx.lineTo(236.7, 99.9);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(245.3, 92.7);
            ctx.lineTo(232.6, 77.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(232.6, 77.8);
            ctx.lineTo(238.1, 73.5);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(238.1, 72.7);
            ctx.lineTo(250.8, 88.8);
            ctx.bezierCurveTo(250.8, 88.8, 267.9, 72.6, 279.3, 67.1);
            ctx.lineTo(269.8, 47.9);
            ctx.bezierCurveTo(269.8, 47.9, 259.6, 50.3, 238.1, 72.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(279.3, 67.1);
            ctx.lineTo(269.8, 47.9);
            ctx.bezierCurveTo(269.8, 47.9, 292.0, 33.7, 321.2, 41.7);
            ctx.lineTo(315.8, 62.5);
            ctx.bezierCurveTo(315.8, 62.5, 298.1, 57.4, 279.3, 67.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group/Path
            ctx.beginPath();
            ctx.moveTo(297.6, 61.6);
            ctx.lineTo(297.2, 45.9);
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(359.0, 76.6);
            ctx.lineTo(328.5, 61.3);
            ctx.lineTo(339.3, 39.7);
            ctx.lineTo(366.0, 53.0);
            ctx.lineTo(362.8, 59.4);
            ctx.lineTo(366.6, 61.3);
            ctx.lineTo(359.0, 76.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(368.4, 81.2);
            ctx.lineTo(359.0, 76.5);
            ctx.lineTo(366.6, 61.3);
            ctx.lineTo(376.0, 66.0);
            ctx.lineTo(368.4, 81.2);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(380.4, 93.0);
            ctx.lineTo(366.2, 85.8);
            ctx.lineTo(376.0, 66.1);
            ctx.lineTo(390.3, 73.2);
            ctx.lineTo(380.4, 93.0);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(267.8, 92.7);
            ctx.lineTo(282.6, 81.0);
            ctx.lineTo(276.4, 68.7);
            ctx.bezierCurveTo(276.4, 68.7, 265.6, 75.6, 258.5, 81.9);
            ctx.lineTo(267.8, 92.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(254.2, 103.4);
            ctx.lineTo(267.8, 92.7);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(333.8, 85.1);
            ctx.lineTo(321.2, 78.8);
            ctx.lineTo(327.2, 66.7);
            ctx.lineTo(339.9, 73.0);
            ctx.lineTo(333.8, 85.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(342.0, 89.3);
            ctx.lineTo(333.9, 85.2);
            ctx.lineTo(339.9, 73.1);
            ctx.lineTo(348.0, 77.1);
            ctx.lineTo(342.0, 89.3);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(346.6, 91.6);
            ctx.lineTo(342.0, 89.3);
            ctx.lineTo(348.1, 77.0);
            ctx.lineTo(352.7, 79.4);
            ctx.lineTo(346.6, 91.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(352.7, 94.6);
            ctx.lineTo(346.6, 91.6);
            ctx.lineTo(352.8, 79.3);
            ctx.lineTo(358.8, 82.4);
            ctx.lineTo(352.7, 94.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(374.2, 105.4);
            ctx.lineTo(352.7, 94.6);
            ctx.lineTo(358.9, 82.2);
            ctx.lineTo(380.4, 93.0);
            ctx.lineTo(374.2, 105.4);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/N320
            ctx.font = "4.0px 'Myriad Pro'";
            ctx.save();
            ctx.transform(0.643, 0.766, -0.766, 0.643, 229.7, 108.3);
            ctx.fillStyle = "rgb(255, 255, 255)";
            ctx.fillText("N320", 0, 0);
            ctx.restore();

            // layer1/RSE Level  3  Ground floor
            ctx.restore();
            ctx.font = "12.0px 'Lato'";
            ctx.fillText("RSE Level - 3  (Ground floor)", -0.0, 10.3);
            ctx.restore();
            break;

        case "N325":
            // layer1/Group
            ctx.save();

            // layer1/Group/Group
            ctx.save();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(184.0, 157.1);
            ctx.bezierCurveTo(174.8, 160.5, 161.5, 160.8, 161.5, 160.8);
            ctx.lineTo(161.7, 145.7);
            ctx.bezierCurveTo(161.7, 145.7, 174.2, 146.3, 178.6, 142.6);
            ctx.lineTo(184.0, 157.1);
            ctx.closePath();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(86.0, 128.7);
            ctx.bezierCurveTo(86.0, 147.4, 70.9, 162.5, 52.3, 162.5);
            ctx.bezierCurveTo(33.6, 162.5, 18.5, 147.4, 18.5, 128.7);
            ctx.bezierCurveTo(18.5, 110.1, 33.6, 95.0, 52.3, 95.0);
            ctx.bezierCurveTo(70.9, 95.0, 86.0, 110.1, 86.0, 128.7);
            ctx.closePath();
            ctx.lineWidth = 0.8;
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(82.6, 143.6);
            ctx.lineTo(105.1, 171.6);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(105.0, 171.6);
            ctx.lineTo(97.0, 178.2);
            ctx.bezierCurveTo(97.0, 178.2, 118.2, 211.3, 181.2, 203.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(29.2, 104.1);
            ctx.lineTo(6.0, 77.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(6.0, 77.3);
            ctx.lineTo(84.6, 64.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(84.8, 64.0);
            ctx.lineTo(75.0, 80.4);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(75.0, 80.4);
            ctx.lineTo(94.0, 103.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(94.0, 103.0);
            ctx.lineTo(103.7, 95.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(114.9, 109.4);
            ctx.lineTo(82.3, 68.4);
            ctx.lineTo(82.3, 68.4);
            ctx.lineTo(94.2, 47.9);
            ctx.lineTo(131.7, 96.0);
            ctx.lineTo(114.9, 109.4);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(132.6, 131.5);
            ctx.lineTo(114.9, 109.2);
            ctx.lineTo(131.6, 95.9);
            ctx.lineTo(149.3, 118.2);
            ctx.lineTo(132.6, 131.5);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(171.9, 145.1);
            ctx.lineTo(168.0, 125.7);
            ctx.bezierCurveTo(168.0, 125.7, 154.5, 127.1, 149.3, 118.2);
            ctx.lineTo(132.6, 131.5);
            ctx.bezierCurveTo(132.6, 131.5, 147.5, 149.1, 171.9, 145.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(168.0, 125.7);
            ctx.bezierCurveTo(168.0, 125.7, 177.3, 124.9, 182.0, 119.8);
            ctx.bezierCurveTo(182.1, 119.7, 182.4, 119.7, 182.5, 119.8);
            ctx.lineTo(193.9, 134.6);
            ctx.lineTo(190.6, 137.5);
            ctx.lineTo(199.7, 148.1);
            ctx.bezierCurveTo(199.7, 148.1, 193.2, 155.3, 184.0, 157.3);
            ctx.lineTo(178.6, 142.6);
            ctx.bezierCurveTo(178.6, 142.6, 176.1, 144.6, 171.9, 145.1);
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(133.1, 149.2);
            ctx.bezierCurveTo(133.1, 149.2, 127.0, 148.6, 122.1, 139.9);
            ctx.lineTo(132.6, 131.5);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(133.1, 149.2);
            ctx.lineTo(141.0, 138.5);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(152.9, 144.0);
            ctx.lineTo(146.9, 158.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(161.5, 160.8);
            ctx.lineTo(161.7, 145.7);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(146.3, 141.5);
            ctx.lineTo(142.5, 148.2);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(136.5, 144.5);
            ctx.bezierCurveTo(136.5, 144.5, 141.3, 149.1, 149.9, 151.2);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(184.0, 157.3);
            ctx.bezierCurveTo(149.3, 167.0, 138.1, 152.8, 138.1, 152.8);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(114.9, 149.7);
            ctx.lineTo(121.7, 158.1);
            ctx.stroke();

            // layer1/Group/Group/Path
            ctx.beginPath();
            ctx.moveTo(121.7, 157.8);
            ctx.lineTo(113.7, 164.8);
            ctx.bezierCurveTo(113.7, 164.8, 137.5, 192.0, 178.8, 179.5);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(216.7, 201.6);
            ctx.lineTo(181.8, 205.3);
            ctx.lineTo(178.0, 169.5);
            ctx.lineTo(212.9, 165.8);
            ctx.lineTo(216.7, 201.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(250.4, 197.8);
            ctx.lineTo(216.7, 201.4);
            ctx.lineTo(212.9, 165.9);
            ctx.lineTo(246.6, 162.3);
            ctx.lineTo(250.4, 197.8);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(269.6, 195.7);
            ctx.lineTo(250.3, 197.7);
            ctx.lineTo(246.5, 162.4);
            ctx.lineTo(284.2, 158.4);
            ctx.lineTo(269.6, 195.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(208.1, 160.7);
            ctx.lineTo(278.3, 154.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(294.6, 134.7);
            ctx.lineTo(284.2, 158.4);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(206.6, 154.0);
            ctx.lineTo(212.9, 153.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(212.9, 153.3);
            ctx.lineTo(212.9, 148.6);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(212.9, 148.6);
            ctx.lineTo(283.1, 91.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(283.1, 91.0);
            ctx.lineTo(286.8, 91.8);
            ctx.bezierCurveTo(286.8, 91.8, 260.6, 109.1, 286.1, 136.5);
            ctx.lineTo(278.3, 154.0);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(302.0, 98.3);
            ctx.lineTo(292.8, 93.8);
            ctx.bezierCurveTo(292.8, 93.8, 271.9, 107.1, 286.8, 128.5);
            ctx.lineTo(302.0, 98.3);
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(302.0, 98.3);
            ctx.lineTo(330.1, 112.1);
            ctx.bezierCurveTo(330.1, 112.1, 331.0, 119.8, 325.5, 129.5);
            ctx.lineTo(294.1, 113.9);
            ctx.lineTo(302.0, 98.3);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(294.1, 113.9);
            ctx.lineTo(286.8, 128.5);
            ctx.bezierCurveTo(289.2, 132.5, 295.0, 134.3, 295.0, 134.3);
            ctx.lineTo(293.0, 138.4);
            ctx.bezierCurveTo(293.0, 138.4, 316.3, 144.5, 325.5, 129.5);
            ctx.lineTo(294.1, 113.9);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(207.2, 137.9);
            ctx.lineTo(197.5, 145.7);
            ctx.lineTo(190.7, 137.3);
            ctx.lineTo(200.3, 129.5);
            ctx.lineTo(207.2, 137.9);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(215.1, 135.7);
            ctx.lineTo(211.7, 138.5);
            ctx.lineTo(209.6, 135.9);
            ctx.lineTo(207.2, 137.9);
            ctx.lineTo(200.2, 129.4);
            ctx.lineTo(206.1, 124.7);
            ctx.lineTo(215.1, 135.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(330.1, 112.1);
            ctx.lineTo(332.6, 106.8);
            ctx.bezierCurveTo(332.6, 106.8, 329.5, 95.0, 317.8, 87.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(317.8, 87.8);
            ctx.lineTo(322.1, 79.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(317.8, 56.5);
            ctx.lineTo(328.5, 60.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(206.1, 124.7);
            ctx.lineTo(217.9, 115.2);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(241.2, 113.9);
            ctx.lineTo(220.7, 130.5);
            ctx.lineTo(216.4, 125.2);
            ctx.lineTo(222.3, 120.4);
            ctx.lineTo(217.9, 115.2);
            ctx.lineTo(232.6, 103.2);
            ctx.lineTo(241.2, 113.9);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(222.3, 120.4);
            ctx.lineTo(230.6, 113.6);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(245.6, 110.6);
            ctx.lineTo(236.7, 99.9);
            ctx.lineTo(245.3, 92.7);
            ctx.lineTo(254.2, 103.4);
            ctx.lineTo(245.6, 110.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(232.6, 103.2);
            ctx.lineTo(236.7, 99.9);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(245.3, 92.7);
            ctx.lineTo(232.6, 77.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(232.6, 77.8);
            ctx.lineTo(238.1, 73.5);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(238.1, 72.7);
            ctx.lineTo(250.8, 88.8);
            ctx.bezierCurveTo(250.8, 88.8, 267.9, 72.6, 279.3, 67.1);
            ctx.lineTo(269.8, 47.9);
            ctx.bezierCurveTo(269.8, 47.9, 259.6, 50.3, 238.1, 72.7);
            ctx.closePath();
            ctx.fillStyle = "rgb(135, 37, 107)";
            ctx.fill();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(279.3, 67.1);
            ctx.lineTo(269.8, 47.9);
            ctx.bezierCurveTo(269.8, 47.9, 292.0, 33.7, 321.2, 41.7);
            ctx.lineTo(315.8, 62.5);
            ctx.bezierCurveTo(315.8, 62.5, 298.1, 57.4, 279.3, 67.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group/Path
            ctx.beginPath();
            ctx.moveTo(297.6, 61.6);
            ctx.lineTo(297.2, 45.9);
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(359.0, 76.6);
            ctx.lineTo(328.5, 61.3);
            ctx.lineTo(339.3, 39.7);
            ctx.lineTo(366.0, 53.0);
            ctx.lineTo(362.8, 59.4);
            ctx.lineTo(366.6, 61.3);
            ctx.lineTo(359.0, 76.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(368.4, 81.2);
            ctx.lineTo(359.0, 76.5);
            ctx.lineTo(366.6, 61.3);
            ctx.lineTo(376.0, 66.0);
            ctx.lineTo(368.4, 81.2);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(380.4, 93.0);
            ctx.lineTo(366.2, 85.8);
            ctx.lineTo(376.0, 66.1);
            ctx.lineTo(390.3, 73.2);
            ctx.lineTo(380.4, 93.0);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(267.8, 92.7);
            ctx.lineTo(282.6, 81.0);
            ctx.lineTo(276.4, 68.7);
            ctx.bezierCurveTo(276.4, 68.7, 265.6, 75.6, 258.5, 81.9);
            ctx.lineTo(267.8, 92.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(254.2, 103.4);
            ctx.lineTo(267.8, 92.7);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(333.8, 85.1);
            ctx.lineTo(321.2, 78.8);
            ctx.lineTo(327.2, 66.7);
            ctx.lineTo(339.9, 73.0);
            ctx.lineTo(333.8, 85.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(342.0, 89.3);
            ctx.lineTo(333.9, 85.2);
            ctx.lineTo(339.9, 73.1);
            ctx.lineTo(348.0, 77.1);
            ctx.lineTo(342.0, 89.3);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(346.6, 91.6);
            ctx.lineTo(342.0, 89.3);
            ctx.lineTo(348.1, 77.0);
            ctx.lineTo(352.7, 79.4);
            ctx.lineTo(346.6, 91.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(352.7, 94.6);
            ctx.lineTo(346.6, 91.6);
            ctx.lineTo(352.8, 79.3);
            ctx.lineTo(358.8, 82.4);
            ctx.lineTo(352.7, 94.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(374.2, 105.4);
            ctx.lineTo(352.7, 94.6);
            ctx.lineTo(358.9, 82.2);
            ctx.lineTo(380.4, 93.0);
            ctx.lineTo(374.2, 105.4);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/N325
            ctx.font = "12.0px 'Myriad Pro'";
            ctx.save();
            ctx.transform(0.822, -0.569, 0.569, 0.822, 250.4, 78.4);
            ctx.fillStyle = "rgb(255, 255, 255)";
            ctx.fillText("N325", 0, 0);
            ctx.restore();

            // layer1/RSE Level  3  Ground floor
            ctx.restore();
            ctx.font = "12.0px 'Lato'";
            ctx.fillText("RSE Level - 3  (Ground floor)", -0.0, 10.3);
            ctx.restore();
            break;

        case "N328":
            // layer1/Group
            ctx.save();

            // layer1/Group/Group
            ctx.save();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(184.0, 157.1);
            ctx.bezierCurveTo(174.8, 160.5, 161.5, 160.8, 161.5, 160.8);
            ctx.lineTo(161.7, 145.7);
            ctx.bezierCurveTo(161.7, 145.7, 174.2, 146.3, 178.6, 142.6);
            ctx.lineTo(184.0, 157.1);
            ctx.closePath();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(86.0, 128.7);
            ctx.bezierCurveTo(86.0, 147.4, 70.9, 162.5, 52.3, 162.5);
            ctx.bezierCurveTo(33.6, 162.5, 18.5, 147.4, 18.5, 128.7);
            ctx.bezierCurveTo(18.5, 110.1, 33.6, 95.0, 52.3, 95.0);
            ctx.bezierCurveTo(70.9, 95.0, 86.0, 110.1, 86.0, 128.7);
            ctx.closePath();
            ctx.lineWidth = 0.8;
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(82.6, 143.6);
            ctx.lineTo(105.1, 171.6);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(105.0, 171.6);
            ctx.lineTo(97.0, 178.2);
            ctx.bezierCurveTo(97.0, 178.2, 118.2, 211.3, 181.2, 203.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(29.2, 104.1);
            ctx.lineTo(6.0, 77.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(6.0, 77.3);
            ctx.lineTo(84.6, 64.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(84.8, 64.0);
            ctx.lineTo(75.0, 80.4);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(75.0, 80.4);
            ctx.lineTo(94.0, 103.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(94.0, 103.0);
            ctx.lineTo(103.7, 95.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(114.9, 109.4);
            ctx.lineTo(82.3, 68.4);
            ctx.lineTo(82.3, 68.4);
            ctx.lineTo(94.2, 47.9);
            ctx.lineTo(131.7, 96.0);
            ctx.lineTo(114.9, 109.4);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(132.6, 131.5);
            ctx.lineTo(114.9, 109.2);
            ctx.lineTo(131.6, 95.9);
            ctx.lineTo(149.3, 118.2);
            ctx.lineTo(132.6, 131.5);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(171.9, 145.1);
            ctx.lineTo(168.0, 125.7);
            ctx.bezierCurveTo(168.0, 125.7, 154.5, 127.1, 149.3, 118.2);
            ctx.lineTo(132.6, 131.5);
            ctx.bezierCurveTo(132.6, 131.5, 147.5, 149.1, 171.9, 145.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(168.0, 125.7);
            ctx.bezierCurveTo(168.0, 125.7, 177.3, 124.9, 182.0, 119.8);
            ctx.bezierCurveTo(182.1, 119.7, 182.4, 119.7, 182.5, 119.8);
            ctx.lineTo(193.9, 134.6);
            ctx.lineTo(190.6, 137.5);
            ctx.lineTo(199.7, 148.1);
            ctx.bezierCurveTo(199.7, 148.1, 193.2, 155.3, 184.0, 157.3);
            ctx.lineTo(178.6, 142.6);
            ctx.bezierCurveTo(178.6, 142.6, 176.1, 144.6, 171.9, 145.1);
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(133.1, 149.2);
            ctx.bezierCurveTo(133.1, 149.2, 127.0, 148.6, 122.1, 139.9);
            ctx.lineTo(132.6, 131.5);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(133.1, 149.2);
            ctx.lineTo(141.0, 138.5);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(152.9, 144.0);
            ctx.lineTo(146.9, 158.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(161.5, 160.8);
            ctx.lineTo(161.7, 145.7);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(146.3, 141.5);
            ctx.lineTo(142.5, 148.2);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(136.5, 144.5);
            ctx.bezierCurveTo(136.5, 144.5, 141.3, 149.1, 149.9, 151.2);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(184.0, 157.3);
            ctx.bezierCurveTo(149.3, 167.0, 138.1, 152.8, 138.1, 152.8);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(114.9, 149.7);
            ctx.lineTo(121.7, 158.1);
            ctx.stroke();

            // layer1/Group/Group/Path
            ctx.beginPath();
            ctx.moveTo(121.7, 157.8);
            ctx.lineTo(113.7, 164.8);
            ctx.bezierCurveTo(113.7, 164.8, 137.5, 192.0, 178.8, 179.5);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(216.7, 201.6);
            ctx.lineTo(181.8, 205.3);
            ctx.lineTo(178.0, 169.5);
            ctx.lineTo(212.9, 165.8);
            ctx.lineTo(216.7, 201.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(250.4, 197.8);
            ctx.lineTo(216.7, 201.4);
            ctx.lineTo(212.9, 165.9);
            ctx.lineTo(246.6, 162.3);
            ctx.lineTo(250.4, 197.8);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(269.6, 195.7);
            ctx.lineTo(250.3, 197.7);
            ctx.lineTo(246.5, 162.4);
            ctx.lineTo(284.2, 158.4);
            ctx.lineTo(269.6, 195.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(208.1, 160.7);
            ctx.lineTo(278.3, 154.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(294.6, 134.7);
            ctx.lineTo(284.2, 158.4);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(206.6, 154.0);
            ctx.lineTo(212.9, 153.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(212.9, 153.3);
            ctx.lineTo(212.9, 148.6);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(212.9, 148.6);
            ctx.lineTo(283.1, 91.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(283.1, 91.0);
            ctx.lineTo(286.8, 91.8);
            ctx.bezierCurveTo(286.8, 91.8, 260.6, 109.1, 286.1, 136.5);
            ctx.lineTo(278.3, 154.0);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(302.0, 98.3);
            ctx.lineTo(292.8, 93.8);
            ctx.bezierCurveTo(292.8, 93.8, 271.9, 107.1, 286.8, 128.5);
            ctx.lineTo(302.0, 98.3);
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(302.0, 98.3);
            ctx.lineTo(330.1, 112.1);
            ctx.bezierCurveTo(330.1, 112.1, 331.0, 119.8, 325.5, 129.5);
            ctx.lineTo(294.1, 113.9);
            ctx.lineTo(302.0, 98.3);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(294.1, 113.9);
            ctx.lineTo(286.8, 128.5);
            ctx.bezierCurveTo(289.2, 132.5, 295.0, 134.3, 295.0, 134.3);
            ctx.lineTo(293.0, 138.4);
            ctx.bezierCurveTo(293.0, 138.4, 316.3, 144.5, 325.5, 129.5);
            ctx.lineTo(294.1, 113.9);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(207.2, 137.9);
            ctx.lineTo(197.5, 145.7);
            ctx.lineTo(190.7, 137.3);
            ctx.lineTo(200.3, 129.5);
            ctx.lineTo(207.2, 137.9);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(215.1, 135.7);
            ctx.lineTo(211.7, 138.5);
            ctx.lineTo(209.6, 135.9);
            ctx.lineTo(207.2, 137.9);
            ctx.lineTo(200.2, 129.4);
            ctx.lineTo(206.1, 124.7);
            ctx.lineTo(215.1, 135.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(330.1, 112.1);
            ctx.lineTo(332.6, 106.8);
            ctx.bezierCurveTo(332.6, 106.8, 329.5, 95.0, 317.8, 87.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(317.8, 87.8);
            ctx.lineTo(322.1, 79.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(317.8, 56.5);
            ctx.lineTo(328.5, 60.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(206.1, 124.7);
            ctx.lineTo(217.9, 115.2);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(241.2, 113.9);
            ctx.lineTo(220.7, 130.5);
            ctx.lineTo(216.4, 125.2);
            ctx.lineTo(222.3, 120.4);
            ctx.lineTo(217.9, 115.2);
            ctx.lineTo(232.6, 103.2);
            ctx.lineTo(241.2, 113.9);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(222.3, 120.4);
            ctx.lineTo(230.6, 113.6);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(245.6, 110.6);
            ctx.lineTo(236.7, 99.9);
            ctx.lineTo(245.3, 92.7);
            ctx.lineTo(254.2, 103.4);
            ctx.lineTo(245.6, 110.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(232.6, 103.2);
            ctx.lineTo(236.7, 99.9);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(245.3, 92.7);
            ctx.lineTo(232.6, 77.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(232.6, 77.8);
            ctx.lineTo(238.1, 73.5);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(238.1, 72.7);
            ctx.lineTo(250.8, 88.8);
            ctx.bezierCurveTo(250.8, 88.8, 267.9, 72.6, 279.3, 67.1);
            ctx.lineTo(269.8, 47.9);
            ctx.bezierCurveTo(269.8, 47.9, 259.6, 50.3, 238.1, 72.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(279.3, 67.1);
            ctx.lineTo(269.8, 47.9);
            ctx.bezierCurveTo(269.8, 47.9, 292.0, 33.7, 321.2, 41.7);
            ctx.lineTo(315.8, 62.5);
            ctx.bezierCurveTo(315.8, 62.5, 298.1, 57.4, 279.3, 67.1);
            ctx.closePath();
            ctx.fillStyle = "rgb(135, 37, 107)";
            ctx.fill();
            ctx.stroke();

            // layer1/Group/Group/Path
            ctx.beginPath();
            ctx.moveTo(297.6, 61.6);
            ctx.lineTo(297.2, 45.9);
            ctx.fill();
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(359.0, 76.6);
            ctx.lineTo(328.5, 61.3);
            ctx.lineTo(339.3, 39.7);
            ctx.lineTo(366.0, 53.0);
            ctx.lineTo(362.8, 59.4);
            ctx.lineTo(366.6, 61.3);
            ctx.lineTo(359.0, 76.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(368.4, 81.2);
            ctx.lineTo(359.0, 76.5);
            ctx.lineTo(366.6, 61.3);
            ctx.lineTo(376.0, 66.0);
            ctx.lineTo(368.4, 81.2);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(380.4, 93.0);
            ctx.lineTo(366.2, 85.8);
            ctx.lineTo(376.0, 66.1);
            ctx.lineTo(390.3, 73.2);
            ctx.lineTo(380.4, 93.0);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(267.8, 92.7);
            ctx.lineTo(282.6, 81.0);
            ctx.lineTo(276.4, 68.7);
            ctx.bezierCurveTo(276.4, 68.7, 265.6, 75.6, 258.5, 81.9);
            ctx.lineTo(267.8, 92.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(254.2, 103.4);
            ctx.lineTo(267.8, 92.7);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(333.8, 85.1);
            ctx.lineTo(321.2, 78.8);
            ctx.lineTo(327.2, 66.7);
            ctx.lineTo(339.9, 73.0);
            ctx.lineTo(333.8, 85.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(342.0, 89.3);
            ctx.lineTo(333.9, 85.2);
            ctx.lineTo(339.9, 73.1);
            ctx.lineTo(348.0, 77.1);
            ctx.lineTo(342.0, 89.3);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(346.6, 91.6);
            ctx.lineTo(342.0, 89.3);
            ctx.lineTo(348.1, 77.0);
            ctx.lineTo(352.7, 79.4);
            ctx.lineTo(346.6, 91.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(352.7, 94.6);
            ctx.lineTo(346.6, 91.6);
            ctx.lineTo(352.8, 79.3);
            ctx.lineTo(358.8, 82.4);
            ctx.lineTo(352.7, 94.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(374.2, 105.4);
            ctx.lineTo(352.7, 94.6);
            ctx.lineTo(358.9, 82.2);
            ctx.lineTo(380.4, 93.0);
            ctx.lineTo(374.2, 105.4);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/N328
            ctx.font = "9.0px 'Myriad Pro'";
            ctx.save();
            ctx.transform(0.980, -0.199, 0.199, 0.980, 276.8, 56.5);
            ctx.fillStyle = "rgb(255, 255, 255)";
            ctx.fillText("N328", 0, 0);
            ctx.restore();

            // layer1/RSE Level  3  Ground floor
            ctx.restore();
            ctx.font = "12.0px 'Lato'";
            ctx.fillText("RSE Level - 3  (Ground floor)", -0.0, 10.3);
            ctx.restore();
            break;

        case "N331":
            // layer1/Group
            ctx.save();

            // layer1/Group/Group
            ctx.save();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(184.0, 157.1);
            ctx.bezierCurveTo(174.8, 160.5, 161.5, 160.8, 161.5, 160.8);
            ctx.lineTo(161.7, 145.7);
            ctx.bezierCurveTo(161.7, 145.7, 174.2, 146.3, 178.6, 142.6);
            ctx.lineTo(184.0, 157.1);
            ctx.closePath();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(86.0, 128.7);
            ctx.bezierCurveTo(86.0, 147.4, 70.9, 162.5, 52.3, 162.5);
            ctx.bezierCurveTo(33.6, 162.5, 18.5, 147.4, 18.5, 128.7);
            ctx.bezierCurveTo(18.5, 110.1, 33.6, 95.0, 52.3, 95.0);
            ctx.bezierCurveTo(70.9, 95.0, 86.0, 110.1, 86.0, 128.7);
            ctx.closePath();
            ctx.lineWidth = 0.8;
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(82.6, 143.6);
            ctx.lineTo(105.1, 171.6);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(105.0, 171.6);
            ctx.lineTo(97.0, 178.2);
            ctx.bezierCurveTo(97.0, 178.2, 118.2, 211.3, 181.2, 203.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(29.2, 104.1);
            ctx.lineTo(6.0, 77.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(6.0, 77.3);
            ctx.lineTo(84.6, 64.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(84.8, 64.0);
            ctx.lineTo(75.0, 80.4);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(75.0, 80.4);
            ctx.lineTo(94.0, 103.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(94.0, 103.0);
            ctx.lineTo(103.7, 95.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(114.9, 109.4);
            ctx.lineTo(82.3, 68.4);
            ctx.lineTo(82.3, 68.4);
            ctx.lineTo(94.2, 47.9);
            ctx.lineTo(131.7, 96.0);
            ctx.lineTo(114.9, 109.4);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(132.6, 131.5);
            ctx.lineTo(114.9, 109.2);
            ctx.lineTo(131.6, 95.9);
            ctx.lineTo(149.3, 118.2);
            ctx.lineTo(132.6, 131.5);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(171.9, 145.1);
            ctx.lineTo(168.0, 125.7);
            ctx.bezierCurveTo(168.0, 125.7, 154.5, 127.1, 149.3, 118.2);
            ctx.lineTo(132.6, 131.5);
            ctx.bezierCurveTo(132.6, 131.5, 147.5, 149.1, 171.9, 145.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(168.0, 125.7);
            ctx.bezierCurveTo(168.0, 125.7, 177.3, 124.9, 182.0, 119.8);
            ctx.bezierCurveTo(182.1, 119.7, 182.4, 119.7, 182.5, 119.8);
            ctx.lineTo(193.9, 134.6);
            ctx.lineTo(190.6, 137.5);
            ctx.lineTo(199.7, 148.1);
            ctx.bezierCurveTo(199.7, 148.1, 193.2, 155.3, 184.0, 157.3);
            ctx.lineTo(178.6, 142.6);
            ctx.bezierCurveTo(178.6, 142.6, 176.1, 144.6, 171.9, 145.1);
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(133.1, 149.2);
            ctx.bezierCurveTo(133.1, 149.2, 127.0, 148.6, 122.1, 139.9);
            ctx.lineTo(132.6, 131.5);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(133.1, 149.2);
            ctx.lineTo(141.0, 138.5);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(152.9, 144.0);
            ctx.lineTo(146.9, 158.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(161.5, 160.8);
            ctx.lineTo(161.7, 145.7);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(146.3, 141.5);
            ctx.lineTo(142.5, 148.2);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(136.5, 144.5);
            ctx.bezierCurveTo(136.5, 144.5, 141.3, 149.1, 149.9, 151.2);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(184.0, 157.3);
            ctx.bezierCurveTo(149.3, 167.0, 138.1, 152.8, 138.1, 152.8);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(114.9, 149.7);
            ctx.lineTo(121.7, 158.1);
            ctx.stroke();

            // layer1/Group/Group/Path
            ctx.beginPath();
            ctx.moveTo(121.7, 157.8);
            ctx.lineTo(113.7, 164.8);
            ctx.bezierCurveTo(113.7, 164.8, 137.5, 192.0, 178.8, 179.5);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(216.7, 201.6);
            ctx.lineTo(181.8, 205.3);
            ctx.lineTo(178.0, 169.5);
            ctx.lineTo(212.9, 165.8);
            ctx.lineTo(216.7, 201.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(250.4, 197.8);
            ctx.lineTo(216.7, 201.4);
            ctx.lineTo(212.9, 165.9);
            ctx.lineTo(246.6, 162.3);
            ctx.lineTo(250.4, 197.8);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(269.6, 195.7);
            ctx.lineTo(250.3, 197.7);
            ctx.lineTo(246.5, 162.4);
            ctx.lineTo(284.2, 158.4);
            ctx.lineTo(269.6, 195.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(208.1, 160.7);
            ctx.lineTo(278.3, 154.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(294.6, 134.7);
            ctx.lineTo(284.2, 158.4);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(206.6, 154.0);
            ctx.lineTo(212.9, 153.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(212.9, 153.3);
            ctx.lineTo(212.9, 148.6);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(212.9, 148.6);
            ctx.lineTo(283.1, 91.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(283.1, 91.0);
            ctx.lineTo(286.8, 91.8);
            ctx.bezierCurveTo(286.8, 91.8, 260.6, 109.1, 286.1, 136.5);
            ctx.lineTo(278.3, 154.0);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(302.0, 98.3);
            ctx.lineTo(292.8, 93.8);
            ctx.bezierCurveTo(292.8, 93.8, 271.9, 107.1, 286.8, 128.5);
            ctx.lineTo(302.0, 98.3);
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(302.0, 98.3);
            ctx.lineTo(330.1, 112.1);
            ctx.bezierCurveTo(330.1, 112.1, 331.0, 119.8, 325.5, 129.5);
            ctx.lineTo(294.1, 113.9);
            ctx.lineTo(302.0, 98.3);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(294.1, 113.9);
            ctx.lineTo(286.8, 128.5);
            ctx.bezierCurveTo(289.2, 132.5, 295.0, 134.3, 295.0, 134.3);
            ctx.lineTo(293.0, 138.4);
            ctx.bezierCurveTo(293.0, 138.4, 316.3, 144.5, 325.5, 129.5);
            ctx.lineTo(294.1, 113.9);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(207.2, 137.9);
            ctx.lineTo(197.5, 145.7);
            ctx.lineTo(190.7, 137.3);
            ctx.lineTo(200.3, 129.5);
            ctx.lineTo(207.2, 137.9);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(215.1, 135.7);
            ctx.lineTo(211.7, 138.5);
            ctx.lineTo(209.6, 135.9);
            ctx.lineTo(207.2, 137.9);
            ctx.lineTo(200.2, 129.4);
            ctx.lineTo(206.1, 124.7);
            ctx.lineTo(215.1, 135.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(330.1, 112.1);
            ctx.lineTo(332.6, 106.8);
            ctx.bezierCurveTo(332.6, 106.8, 329.5, 95.0, 317.8, 87.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(317.8, 87.8);
            ctx.lineTo(322.1, 79.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(317.8, 56.5);
            ctx.lineTo(328.5, 60.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(206.1, 124.7);
            ctx.lineTo(217.9, 115.2);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(241.2, 113.9);
            ctx.lineTo(220.7, 130.5);
            ctx.lineTo(216.4, 125.2);
            ctx.lineTo(222.3, 120.4);
            ctx.lineTo(217.9, 115.2);
            ctx.lineTo(232.6, 103.2);
            ctx.lineTo(241.2, 113.9);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(222.3, 120.4);
            ctx.lineTo(230.6, 113.6);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(245.6, 110.6);
            ctx.lineTo(236.7, 99.9);
            ctx.lineTo(245.3, 92.7);
            ctx.lineTo(254.2, 103.4);
            ctx.lineTo(245.6, 110.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(232.6, 103.2);
            ctx.lineTo(236.7, 99.9);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(245.3, 92.7);
            ctx.lineTo(232.6, 77.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(232.6, 77.8);
            ctx.lineTo(238.1, 73.5);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(238.1, 72.7);
            ctx.lineTo(250.8, 88.8);
            ctx.bezierCurveTo(250.8, 88.8, 267.9, 72.6, 279.3, 67.1);
            ctx.lineTo(269.8, 47.9);
            ctx.bezierCurveTo(269.8, 47.9, 259.6, 50.3, 238.1, 72.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(279.3, 67.1);
            ctx.lineTo(269.8, 47.9);
            ctx.bezierCurveTo(269.8, 47.9, 292.0, 33.7, 321.2, 41.7);
            ctx.lineTo(315.8, 62.5);
            ctx.bezierCurveTo(315.8, 62.5, 298.1, 57.4, 279.3, 67.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group/Path
            ctx.beginPath();
            ctx.moveTo(297.6, 61.6);
            ctx.lineTo(297.2, 45.9);
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(359.0, 76.6);
            ctx.lineTo(328.5, 61.3);
            ctx.lineTo(339.3, 39.7);
            ctx.lineTo(366.0, 53.0);
            ctx.lineTo(362.8, 59.4);
            ctx.lineTo(366.6, 61.3);
            ctx.lineTo(359.0, 76.6);
            ctx.closePath();
            ctx.fillStyle = "rgb(135, 37, 107)";
            ctx.fill();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(368.4, 81.2);
            ctx.lineTo(359.0, 76.5);
            ctx.lineTo(366.6, 61.3);
            ctx.lineTo(376.0, 66.0);
            ctx.lineTo(368.4, 81.2);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(380.4, 93.0);
            ctx.lineTo(366.2, 85.8);
            ctx.lineTo(376.0, 66.1);
            ctx.lineTo(390.3, 73.2);
            ctx.lineTo(380.4, 93.0);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(267.8, 92.7);
            ctx.lineTo(282.6, 81.0);
            ctx.lineTo(276.4, 68.7);
            ctx.bezierCurveTo(276.4, 68.7, 265.6, 75.6, 258.5, 81.9);
            ctx.lineTo(267.8, 92.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(254.2, 103.4);
            ctx.lineTo(267.8, 92.7);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(333.8, 85.1);
            ctx.lineTo(321.2, 78.8);
            ctx.lineTo(327.2, 66.7);
            ctx.lineTo(339.9, 73.0);
            ctx.lineTo(333.8, 85.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(342.0, 89.3);
            ctx.lineTo(333.9, 85.2);
            ctx.lineTo(339.9, 73.1);
            ctx.lineTo(348.0, 77.1);
            ctx.lineTo(342.0, 89.3);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(346.6, 91.6);
            ctx.lineTo(342.0, 89.3);
            ctx.lineTo(348.1, 77.0);
            ctx.lineTo(352.7, 79.4);
            ctx.lineTo(346.6, 91.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(352.7, 94.6);
            ctx.lineTo(346.6, 91.6);
            ctx.lineTo(352.8, 79.3);
            ctx.lineTo(358.8, 82.4);
            ctx.lineTo(352.7, 94.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(374.2, 105.4);
            ctx.lineTo(352.7, 94.6);
            ctx.lineTo(358.9, 82.2);
            ctx.lineTo(380.4, 93.0);
            ctx.lineTo(374.2, 105.4);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/N331
            ctx.font = "9.0px 'Myriad Pro'";
            ctx.save();
            ctx.transform(0.904, 0.427, -0.427, 0.904, 338.2, 55.9);
            ctx.fillStyle = "rgb(255, 255, 255)";
            ctx.fillText("N331", 0, 0);
            ctx.restore();

            // layer1/RSE Level  3  Ground floor
            ctx.restore();
            ctx.font = "12.0px 'Lato'";
            ctx.fillText("RSE Level - 3  (Ground floor)", -0.0, 10.3);
            ctx.restore();
            break;

        case "N334":
            // layer1/Group
            ctx.save();

            // layer1/Group/Group
            ctx.save();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(184.0, 157.1);
            ctx.bezierCurveTo(174.8, 160.5, 161.5, 160.8, 161.5, 160.8);
            ctx.lineTo(161.7, 145.7);
            ctx.bezierCurveTo(161.7, 145.7, 174.2, 146.3, 178.6, 142.6);
            ctx.lineTo(184.0, 157.1);
            ctx.closePath();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(86.0, 128.7);
            ctx.bezierCurveTo(86.0, 147.4, 70.9, 162.5, 52.3, 162.5);
            ctx.bezierCurveTo(33.6, 162.5, 18.5, 147.4, 18.5, 128.7);
            ctx.bezierCurveTo(18.5, 110.1, 33.6, 95.0, 52.3, 95.0);
            ctx.bezierCurveTo(70.9, 95.0, 86.0, 110.1, 86.0, 128.7);
            ctx.closePath();
            ctx.lineWidth = 0.8;
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(82.6, 143.6);
            ctx.lineTo(105.1, 171.6);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(105.0, 171.6);
            ctx.lineTo(97.0, 178.2);
            ctx.bezierCurveTo(97.0, 178.2, 118.2, 211.3, 181.2, 203.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(29.2, 104.1);
            ctx.lineTo(6.0, 77.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(6.0, 77.3);
            ctx.lineTo(84.6, 64.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(84.8, 64.0);
            ctx.lineTo(75.0, 80.4);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(75.0, 80.4);
            ctx.lineTo(94.0, 103.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(94.0, 103.0);
            ctx.lineTo(103.7, 95.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(114.9, 109.4);
            ctx.lineTo(82.3, 68.4);
            ctx.lineTo(82.3, 68.4);
            ctx.lineTo(94.2, 47.9);
            ctx.lineTo(131.7, 96.0);
            ctx.lineTo(114.9, 109.4);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(132.6, 131.5);
            ctx.lineTo(114.9, 109.2);
            ctx.lineTo(131.6, 95.9);
            ctx.lineTo(149.3, 118.2);
            ctx.lineTo(132.6, 131.5);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(171.9, 145.1);
            ctx.lineTo(168.0, 125.7);
            ctx.bezierCurveTo(168.0, 125.7, 154.5, 127.1, 149.3, 118.2);
            ctx.lineTo(132.6, 131.5);
            ctx.bezierCurveTo(132.6, 131.5, 147.5, 149.1, 171.9, 145.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(168.0, 125.7);
            ctx.bezierCurveTo(168.0, 125.7, 177.3, 124.9, 182.0, 119.8);
            ctx.bezierCurveTo(182.1, 119.7, 182.4, 119.7, 182.5, 119.8);
            ctx.lineTo(193.9, 134.6);
            ctx.lineTo(190.6, 137.5);
            ctx.lineTo(199.7, 148.1);
            ctx.bezierCurveTo(199.7, 148.1, 193.2, 155.3, 184.0, 157.3);
            ctx.lineTo(178.6, 142.6);
            ctx.bezierCurveTo(178.6, 142.6, 176.1, 144.6, 171.9, 145.1);
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(133.1, 149.2);
            ctx.bezierCurveTo(133.1, 149.2, 127.0, 148.6, 122.1, 139.9);
            ctx.lineTo(132.6, 131.5);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(133.1, 149.2);
            ctx.lineTo(141.0, 138.5);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(152.9, 144.0);
            ctx.lineTo(146.9, 158.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(161.5, 160.8);
            ctx.lineTo(161.7, 145.7);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(146.3, 141.5);
            ctx.lineTo(142.5, 148.2);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(136.5, 144.5);
            ctx.bezierCurveTo(136.5, 144.5, 141.3, 149.1, 149.9, 151.2);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(184.0, 157.3);
            ctx.bezierCurveTo(149.3, 167.0, 138.1, 152.8, 138.1, 152.8);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(114.9, 149.7);
            ctx.lineTo(121.7, 158.1);
            ctx.stroke();

            // layer1/Group/Group/Path
            ctx.beginPath();
            ctx.moveTo(121.7, 157.8);
            ctx.lineTo(113.7, 164.8);
            ctx.bezierCurveTo(113.7, 164.8, 137.5, 192.0, 178.8, 179.5);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(216.7, 201.6);
            ctx.lineTo(181.8, 205.3);
            ctx.lineTo(178.0, 169.5);
            ctx.lineTo(212.9, 165.8);
            ctx.lineTo(216.7, 201.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(250.4, 197.8);
            ctx.lineTo(216.7, 201.4);
            ctx.lineTo(212.9, 165.9);
            ctx.lineTo(246.6, 162.3);
            ctx.lineTo(250.4, 197.8);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(269.6, 195.7);
            ctx.lineTo(250.3, 197.7);
            ctx.lineTo(246.5, 162.4);
            ctx.lineTo(284.2, 158.4);
            ctx.lineTo(269.6, 195.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(208.1, 160.7);
            ctx.lineTo(278.3, 154.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(294.6, 134.7);
            ctx.lineTo(284.2, 158.4);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(206.6, 154.0);
            ctx.lineTo(212.9, 153.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(212.9, 153.3);
            ctx.lineTo(212.9, 148.6);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(212.9, 148.6);
            ctx.lineTo(283.1, 91.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(283.1, 91.0);
            ctx.lineTo(286.8, 91.8);
            ctx.bezierCurveTo(286.8, 91.8, 260.6, 109.1, 286.1, 136.5);
            ctx.lineTo(278.3, 154.0);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(302.0, 98.3);
            ctx.lineTo(292.8, 93.8);
            ctx.bezierCurveTo(292.8, 93.8, 271.9, 107.1, 286.8, 128.5);
            ctx.lineTo(302.0, 98.3);
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(302.0, 98.3);
            ctx.lineTo(330.1, 112.1);
            ctx.bezierCurveTo(330.1, 112.1, 331.0, 119.8, 325.5, 129.5);
            ctx.lineTo(294.1, 113.9);
            ctx.lineTo(302.0, 98.3);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(294.1, 113.9);
            ctx.lineTo(286.8, 128.5);
            ctx.bezierCurveTo(289.2, 132.5, 295.0, 134.3, 295.0, 134.3);
            ctx.lineTo(293.0, 138.4);
            ctx.bezierCurveTo(293.0, 138.4, 316.3, 144.5, 325.5, 129.5);
            ctx.lineTo(294.1, 113.9);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(207.2, 137.9);
            ctx.lineTo(197.5, 145.7);
            ctx.lineTo(190.7, 137.3);
            ctx.lineTo(200.3, 129.5);
            ctx.lineTo(207.2, 137.9);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(215.1, 135.7);
            ctx.lineTo(211.7, 138.5);
            ctx.lineTo(209.6, 135.9);
            ctx.lineTo(207.2, 137.9);
            ctx.lineTo(200.2, 129.4);
            ctx.lineTo(206.1, 124.7);
            ctx.lineTo(215.1, 135.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(330.1, 112.1);
            ctx.lineTo(332.6, 106.8);
            ctx.bezierCurveTo(332.6, 106.8, 329.5, 95.0, 317.8, 87.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(317.8, 87.8);
            ctx.lineTo(322.1, 79.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(317.8, 56.5);
            ctx.lineTo(328.5, 60.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(206.1, 124.7);
            ctx.lineTo(217.9, 115.2);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(241.2, 113.9);
            ctx.lineTo(220.7, 130.5);
            ctx.lineTo(216.4, 125.2);
            ctx.lineTo(222.3, 120.4);
            ctx.lineTo(217.9, 115.2);
            ctx.lineTo(232.6, 103.2);
            ctx.lineTo(241.2, 113.9);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(222.3, 120.4);
            ctx.lineTo(230.6, 113.6);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(245.6, 110.6);
            ctx.lineTo(236.7, 99.9);
            ctx.lineTo(245.3, 92.7);
            ctx.lineTo(254.2, 103.4);
            ctx.lineTo(245.6, 110.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(232.6, 103.2);
            ctx.lineTo(236.7, 99.9);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(245.3, 92.7);
            ctx.lineTo(232.6, 77.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(232.6, 77.8);
            ctx.lineTo(238.1, 73.5);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(238.1, 72.7);
            ctx.lineTo(250.8, 88.8);
            ctx.bezierCurveTo(250.8, 88.8, 267.9, 72.6, 279.3, 67.1);
            ctx.lineTo(269.8, 47.9);
            ctx.bezierCurveTo(269.8, 47.9, 259.6, 50.3, 238.1, 72.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(279.3, 67.1);
            ctx.lineTo(269.8, 47.9);
            ctx.bezierCurveTo(269.8, 47.9, 292.0, 33.7, 321.2, 41.7);
            ctx.lineTo(315.8, 62.5);
            ctx.bezierCurveTo(315.8, 62.5, 298.1, 57.4, 279.3, 67.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group/Path
            ctx.beginPath();
            ctx.moveTo(297.6, 61.6);
            ctx.lineTo(297.2, 45.9);
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(359.0, 76.6);
            ctx.lineTo(328.5, 61.3);
            ctx.lineTo(339.3, 39.7);
            ctx.lineTo(366.0, 53.0);
            ctx.lineTo(362.8, 59.4);
            ctx.lineTo(366.6, 61.3);
            ctx.lineTo(359.0, 76.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(368.4, 81.2);
            ctx.lineTo(359.0, 76.5);
            ctx.lineTo(366.6, 61.3);
            ctx.lineTo(376.0, 66.0);
            ctx.lineTo(368.4, 81.2);
            ctx.closePath();
            ctx.fillStyle = "rgb(135, 37, 107)";
            ctx.fill();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(380.4, 93.0);
            ctx.lineTo(366.2, 85.8);
            ctx.lineTo(376.0, 66.1);
            ctx.lineTo(390.3, 73.2);
            ctx.lineTo(380.4, 93.0);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(267.8, 92.7);
            ctx.lineTo(282.6, 81.0);
            ctx.lineTo(276.4, 68.7);
            ctx.bezierCurveTo(276.4, 68.7, 265.6, 75.6, 258.5, 81.9);
            ctx.lineTo(267.8, 92.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(254.2, 103.4);
            ctx.lineTo(267.8, 92.7);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(333.8, 85.1);
            ctx.lineTo(321.2, 78.8);
            ctx.lineTo(327.2, 66.7);
            ctx.lineTo(339.9, 73.0);
            ctx.lineTo(333.8, 85.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(342.0, 89.3);
            ctx.lineTo(333.9, 85.2);
            ctx.lineTo(339.9, 73.1);
            ctx.lineTo(348.0, 77.1);
            ctx.lineTo(342.0, 89.3);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(346.6, 91.6);
            ctx.lineTo(342.0, 89.3);
            ctx.lineTo(348.1, 77.0);
            ctx.lineTo(352.7, 79.4);
            ctx.lineTo(346.6, 91.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(352.7, 94.6);
            ctx.lineTo(346.6, 91.6);
            ctx.lineTo(352.8, 79.3);
            ctx.lineTo(358.8, 82.4);
            ctx.lineTo(352.7, 94.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(374.2, 105.4);
            ctx.lineTo(352.7, 94.6);
            ctx.lineTo(358.9, 82.2);
            ctx.lineTo(380.4, 93.0);
            ctx.lineTo(374.2, 105.4);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/N334
            ctx.font = "6.0px 'Myriad Pro'";
            ctx.save();
            ctx.transform(0.442, -0.897, 0.897, 0.442, 366.2, 77.6);
            ctx.fillStyle = "rgb(255, 255, 255)";
            ctx.fillText("N334", 0, 0);
            ctx.restore();

            // layer1/RSE Level  3  Ground floor
            ctx.restore();
            ctx.font = "12.0px 'Lato'";
            ctx.fillText("RSE Level - 3  (Ground floor)", -0.0, 10.3);
            ctx.restore();
            break;

        case "N339":
            // layer1/Group
            ctx.save();

            // layer1/Group/Group
            ctx.save();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(184.0, 157.1);
            ctx.bezierCurveTo(174.8, 160.5, 161.5, 160.8, 161.5, 160.8);
            ctx.lineTo(161.7, 145.7);
            ctx.bezierCurveTo(161.7, 145.7, 174.2, 146.3, 178.6, 142.6);
            ctx.lineTo(184.0, 157.1);
            ctx.closePath();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(86.0, 128.7);
            ctx.bezierCurveTo(86.0, 147.4, 70.9, 162.5, 52.3, 162.5);
            ctx.bezierCurveTo(33.6, 162.5, 18.5, 147.4, 18.5, 128.7);
            ctx.bezierCurveTo(18.5, 110.1, 33.6, 95.0, 52.3, 95.0);
            ctx.bezierCurveTo(70.9, 95.0, 86.0, 110.1, 86.0, 128.7);
            ctx.closePath();
            ctx.lineWidth = 0.8;
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(82.6, 143.6);
            ctx.lineTo(105.1, 171.6);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(105.0, 171.6);
            ctx.lineTo(97.0, 178.2);
            ctx.bezierCurveTo(97.0, 178.2, 118.2, 211.3, 181.2, 203.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(29.2, 104.1);
            ctx.lineTo(6.0, 77.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(6.0, 77.3);
            ctx.lineTo(84.6, 64.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(84.8, 64.0);
            ctx.lineTo(75.0, 80.4);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(75.0, 80.4);
            ctx.lineTo(94.0, 103.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(94.0, 103.0);
            ctx.lineTo(103.7, 95.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(114.9, 109.4);
            ctx.lineTo(82.3, 68.4);
            ctx.lineTo(82.3, 68.4);
            ctx.lineTo(94.2, 47.9);
            ctx.lineTo(131.7, 96.0);
            ctx.lineTo(114.9, 109.4);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(132.6, 131.5);
            ctx.lineTo(114.9, 109.2);
            ctx.lineTo(131.6, 95.9);
            ctx.lineTo(149.3, 118.2);
            ctx.lineTo(132.6, 131.5);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(171.9, 145.1);
            ctx.lineTo(168.0, 125.7);
            ctx.bezierCurveTo(168.0, 125.7, 154.5, 127.1, 149.3, 118.2);
            ctx.lineTo(132.6, 131.5);
            ctx.bezierCurveTo(132.6, 131.5, 147.5, 149.1, 171.9, 145.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(168.0, 125.7);
            ctx.bezierCurveTo(168.0, 125.7, 177.3, 124.9, 182.0, 119.8);
            ctx.bezierCurveTo(182.1, 119.7, 182.4, 119.7, 182.5, 119.8);
            ctx.lineTo(193.9, 134.6);
            ctx.lineTo(190.6, 137.5);
            ctx.lineTo(199.7, 148.1);
            ctx.bezierCurveTo(199.7, 148.1, 193.2, 155.3, 184.0, 157.3);
            ctx.lineTo(178.6, 142.6);
            ctx.bezierCurveTo(178.6, 142.6, 176.1, 144.6, 171.9, 145.1);
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(133.1, 149.2);
            ctx.bezierCurveTo(133.1, 149.2, 127.0, 148.6, 122.1, 139.9);
            ctx.lineTo(132.6, 131.5);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(133.1, 149.2);
            ctx.lineTo(141.0, 138.5);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(152.9, 144.0);
            ctx.lineTo(146.9, 158.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(161.5, 160.8);
            ctx.lineTo(161.7, 145.7);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(146.3, 141.5);
            ctx.lineTo(142.5, 148.2);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(136.5, 144.5);
            ctx.bezierCurveTo(136.5, 144.5, 141.3, 149.1, 149.9, 151.2);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(184.0, 157.3);
            ctx.bezierCurveTo(149.3, 167.0, 138.1, 152.8, 138.1, 152.8);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(114.9, 149.7);
            ctx.lineTo(121.7, 158.1);
            ctx.stroke();

            // layer1/Group/Group/Path
            ctx.beginPath();
            ctx.moveTo(121.7, 157.8);
            ctx.lineTo(113.7, 164.8);
            ctx.bezierCurveTo(113.7, 164.8, 137.5, 192.0, 178.8, 179.5);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(216.7, 201.6);
            ctx.lineTo(181.8, 205.3);
            ctx.lineTo(178.0, 169.5);
            ctx.lineTo(212.9, 165.8);
            ctx.lineTo(216.7, 201.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(250.4, 197.8);
            ctx.lineTo(216.7, 201.4);
            ctx.lineTo(212.9, 165.9);
            ctx.lineTo(246.6, 162.3);
            ctx.lineTo(250.4, 197.8);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(269.6, 195.7);
            ctx.lineTo(250.3, 197.7);
            ctx.lineTo(246.5, 162.4);
            ctx.lineTo(284.2, 158.4);
            ctx.lineTo(269.6, 195.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(208.1, 160.7);
            ctx.lineTo(278.3, 154.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(294.6, 134.7);
            ctx.lineTo(284.2, 158.4);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(206.6, 154.0);
            ctx.lineTo(212.9, 153.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(212.9, 153.3);
            ctx.lineTo(212.9, 148.6);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(212.9, 148.6);
            ctx.lineTo(283.1, 91.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(283.1, 91.0);
            ctx.lineTo(286.8, 91.8);
            ctx.bezierCurveTo(286.8, 91.8, 260.6, 109.1, 286.1, 136.5);
            ctx.lineTo(278.3, 154.0);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(302.0, 98.3);
            ctx.lineTo(292.8, 93.8);
            ctx.bezierCurveTo(292.8, 93.8, 271.9, 107.1, 286.8, 128.5);
            ctx.lineTo(302.0, 98.3);
            ctx.fillStyle = "rgb(135, 37, 107)";
            ctx.fill();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(302.0, 98.3);
            ctx.lineTo(330.1, 112.1);
            ctx.bezierCurveTo(330.1, 112.1, 331.0, 119.8, 325.5, 129.5);
            ctx.lineTo(294.1, 113.9);
            ctx.lineTo(302.0, 98.3);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(294.1, 113.9);
            ctx.lineTo(286.8, 128.5);
            ctx.bezierCurveTo(289.2, 132.5, 295.0, 134.3, 295.0, 134.3);
            ctx.lineTo(293.0, 138.4);
            ctx.bezierCurveTo(293.0, 138.4, 316.3, 144.5, 325.5, 129.5);
            ctx.lineTo(294.1, 113.9);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(207.2, 137.9);
            ctx.lineTo(197.5, 145.7);
            ctx.lineTo(190.7, 137.3);
            ctx.lineTo(200.3, 129.5);
            ctx.lineTo(207.2, 137.9);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(215.1, 135.7);
            ctx.lineTo(211.7, 138.5);
            ctx.lineTo(209.6, 135.9);
            ctx.lineTo(207.2, 137.9);
            ctx.lineTo(200.2, 129.4);
            ctx.lineTo(206.1, 124.7);
            ctx.lineTo(215.1, 135.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(330.1, 112.1);
            ctx.lineTo(332.6, 106.8);
            ctx.bezierCurveTo(332.6, 106.8, 329.5, 95.0, 317.8, 87.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(317.8, 87.8);
            ctx.lineTo(322.1, 79.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(317.8, 56.5);
            ctx.lineTo(328.5, 60.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(206.1, 124.7);
            ctx.lineTo(217.9, 115.2);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(241.2, 113.9);
            ctx.lineTo(220.7, 130.5);
            ctx.lineTo(216.4, 125.2);
            ctx.lineTo(222.3, 120.4);
            ctx.lineTo(217.9, 115.2);
            ctx.lineTo(232.6, 103.2);
            ctx.lineTo(241.2, 113.9);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(222.3, 120.4);
            ctx.lineTo(230.6, 113.6);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(245.6, 110.6);
            ctx.lineTo(236.7, 99.9);
            ctx.lineTo(245.3, 92.7);
            ctx.lineTo(254.2, 103.4);
            ctx.lineTo(245.6, 110.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(232.6, 103.2);
            ctx.lineTo(236.7, 99.9);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(245.3, 92.7);
            ctx.lineTo(232.6, 77.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(232.6, 77.8);
            ctx.lineTo(238.1, 73.5);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(238.1, 72.7);
            ctx.lineTo(250.8, 88.8);
            ctx.bezierCurveTo(250.8, 88.8, 267.9, 72.6, 279.3, 67.1);
            ctx.lineTo(269.8, 47.9);
            ctx.bezierCurveTo(269.8, 47.9, 259.6, 50.3, 238.1, 72.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(279.3, 67.1);
            ctx.lineTo(269.8, 47.9);
            ctx.bezierCurveTo(269.8, 47.9, 292.0, 33.7, 321.2, 41.7);
            ctx.lineTo(315.8, 62.5);
            ctx.bezierCurveTo(315.8, 62.5, 298.1, 57.4, 279.3, 67.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group/Path
            ctx.beginPath();
            ctx.moveTo(297.6, 61.6);
            ctx.lineTo(297.2, 45.9);
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(359.0, 76.6);
            ctx.lineTo(328.5, 61.3);
            ctx.lineTo(339.3, 39.7);
            ctx.lineTo(366.0, 53.0);
            ctx.lineTo(362.8, 59.4);
            ctx.lineTo(366.6, 61.3);
            ctx.lineTo(359.0, 76.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(368.4, 81.2);
            ctx.lineTo(359.0, 76.5);
            ctx.lineTo(366.6, 61.3);
            ctx.lineTo(376.0, 66.0);
            ctx.lineTo(368.4, 81.2);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(380.4, 93.0);
            ctx.lineTo(366.2, 85.8);
            ctx.lineTo(376.0, 66.1);
            ctx.lineTo(390.3, 73.2);
            ctx.lineTo(380.4, 93.0);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(267.8, 92.7);
            ctx.lineTo(282.6, 81.0);
            ctx.lineTo(276.4, 68.7);
            ctx.bezierCurveTo(276.4, 68.7, 265.6, 75.6, 258.5, 81.9);
            ctx.lineTo(267.8, 92.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(254.2, 103.4);
            ctx.lineTo(267.8, 92.7);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(333.8, 85.1);
            ctx.lineTo(321.2, 78.8);
            ctx.lineTo(327.2, 66.7);
            ctx.lineTo(339.9, 73.0);
            ctx.lineTo(333.8, 85.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(342.0, 89.3);
            ctx.lineTo(333.9, 85.2);
            ctx.lineTo(339.9, 73.1);
            ctx.lineTo(348.0, 77.1);
            ctx.lineTo(342.0, 89.3);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(346.6, 91.6);
            ctx.lineTo(342.0, 89.3);
            ctx.lineTo(348.1, 77.0);
            ctx.lineTo(352.7, 79.4);
            ctx.lineTo(346.6, 91.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(352.7, 94.6);
            ctx.lineTo(346.6, 91.6);
            ctx.lineTo(352.8, 79.3);
            ctx.lineTo(358.8, 82.4);
            ctx.lineTo(352.7, 94.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(374.2, 105.4);
            ctx.lineTo(352.7, 94.6);
            ctx.lineTo(358.9, 82.2);
            ctx.lineTo(380.4, 93.0);
            ctx.lineTo(374.2, 105.4);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/N339
            ctx.font = "6.0px 'Myriad Pro'";
            ctx.save();
            ctx.transform(0.442, -0.897, 0.897, 0.442, 288.5, 113.6);
            ctx.fillStyle = "rgb(255, 255, 255)";
            ctx.fillText("N339", 0, 0);
            ctx.restore();

            // layer1/RSE Level  3  Ground floor
            ctx.restore();
            ctx.font = "12.0px 'Lato'";
            ctx.fillText("RSE Level - 3  (Ground floor)", -0.0, 10.3);
            ctx.restore();
            break;

        case "N340":
            // layer1/Group
            ctx.save();

            // layer1/Group/Group
            ctx.save();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(184.0, 157.1);
            ctx.bezierCurveTo(174.8, 160.5, 161.5, 160.8, 161.5, 160.8);
            ctx.lineTo(161.7, 145.7);
            ctx.bezierCurveTo(161.7, 145.7, 174.2, 146.3, 178.6, 142.6);
            ctx.lineTo(184.0, 157.1);
            ctx.closePath();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(86.0, 128.7);
            ctx.bezierCurveTo(86.0, 147.4, 70.9, 162.5, 52.3, 162.5);
            ctx.bezierCurveTo(33.6, 162.5, 18.5, 147.4, 18.5, 128.7);
            ctx.bezierCurveTo(18.5, 110.1, 33.6, 95.0, 52.3, 95.0);
            ctx.bezierCurveTo(70.9, 95.0, 86.0, 110.1, 86.0, 128.7);
            ctx.closePath();
            ctx.lineWidth = 0.8;
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(82.6, 143.6);
            ctx.lineTo(105.1, 171.6);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(105.0, 171.6);
            ctx.lineTo(97.0, 178.2);
            ctx.bezierCurveTo(97.0, 178.2, 118.2, 211.3, 181.2, 203.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(29.2, 104.1);
            ctx.lineTo(6.0, 77.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(6.0, 77.3);
            ctx.lineTo(84.6, 64.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(84.8, 64.0);
            ctx.lineTo(75.0, 80.4);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(75.0, 80.4);
            ctx.lineTo(94.0, 103.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(94.0, 103.0);
            ctx.lineTo(103.7, 95.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(114.9, 109.4);
            ctx.lineTo(82.3, 68.4);
            ctx.lineTo(82.3, 68.4);
            ctx.lineTo(94.2, 47.9);
            ctx.lineTo(131.7, 96.0);
            ctx.lineTo(114.9, 109.4);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(132.6, 131.5);
            ctx.lineTo(114.9, 109.2);
            ctx.lineTo(131.6, 95.9);
            ctx.lineTo(149.3, 118.2);
            ctx.lineTo(132.6, 131.5);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(171.9, 145.1);
            ctx.lineTo(168.0, 125.7);
            ctx.bezierCurveTo(168.0, 125.7, 154.5, 127.1, 149.3, 118.2);
            ctx.lineTo(132.6, 131.5);
            ctx.bezierCurveTo(132.6, 131.5, 147.5, 149.1, 171.9, 145.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(168.0, 125.7);
            ctx.bezierCurveTo(168.0, 125.7, 177.3, 124.9, 182.0, 119.8);
            ctx.bezierCurveTo(182.1, 119.7, 182.4, 119.7, 182.5, 119.8);
            ctx.lineTo(193.9, 134.6);
            ctx.lineTo(190.6, 137.5);
            ctx.lineTo(199.7, 148.1);
            ctx.bezierCurveTo(199.7, 148.1, 193.2, 155.3, 184.0, 157.3);
            ctx.lineTo(178.6, 142.6);
            ctx.bezierCurveTo(178.6, 142.6, 176.1, 144.6, 171.9, 145.1);
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(133.1, 149.2);
            ctx.bezierCurveTo(133.1, 149.2, 127.0, 148.6, 122.1, 139.9);
            ctx.lineTo(132.6, 131.5);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(133.1, 149.2);
            ctx.lineTo(141.0, 138.5);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(152.9, 144.0);
            ctx.lineTo(146.9, 158.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(161.5, 160.8);
            ctx.lineTo(161.7, 145.7);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(146.3, 141.5);
            ctx.lineTo(142.5, 148.2);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(136.5, 144.5);
            ctx.bezierCurveTo(136.5, 144.5, 141.3, 149.1, 149.9, 151.2);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(184.0, 157.3);
            ctx.bezierCurveTo(149.3, 167.0, 138.1, 152.8, 138.1, 152.8);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(114.9, 149.7);
            ctx.lineTo(121.7, 158.1);
            ctx.stroke();

            // layer1/Group/Group/Path
            ctx.beginPath();
            ctx.moveTo(121.7, 157.8);
            ctx.lineTo(113.7, 164.8);
            ctx.bezierCurveTo(113.7, 164.8, 137.5, 192.0, 178.8, 179.5);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(216.7, 201.6);
            ctx.lineTo(181.8, 205.3);
            ctx.lineTo(178.0, 169.5);
            ctx.lineTo(212.9, 165.8);
            ctx.lineTo(216.7, 201.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(250.4, 197.8);
            ctx.lineTo(216.7, 201.4);
            ctx.lineTo(212.9, 165.9);
            ctx.lineTo(246.6, 162.3);
            ctx.lineTo(250.4, 197.8);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(269.6, 195.7);
            ctx.lineTo(250.3, 197.7);
            ctx.lineTo(246.5, 162.4);
            ctx.lineTo(284.2, 158.4);
            ctx.lineTo(269.6, 195.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(208.1, 160.7);
            ctx.lineTo(278.3, 154.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(294.6, 134.7);
            ctx.lineTo(284.2, 158.4);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(206.6, 154.0);
            ctx.lineTo(212.9, 153.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(212.9, 153.3);
            ctx.lineTo(212.9, 148.6);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(212.9, 148.6);
            ctx.lineTo(283.1, 91.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(283.1, 91.0);
            ctx.lineTo(286.8, 91.8);
            ctx.bezierCurveTo(286.8, 91.8, 260.6, 109.1, 286.1, 136.5);
            ctx.lineTo(278.3, 154.0);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(302.0, 98.3);
            ctx.lineTo(292.8, 93.8);
            ctx.bezierCurveTo(292.8, 93.8, 271.9, 107.1, 286.8, 128.5);
            ctx.lineTo(302.0, 98.3);
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(302.0, 98.3);
            ctx.lineTo(330.1, 112.1);
            ctx.bezierCurveTo(330.1, 112.1, 331.0, 119.8, 325.5, 129.5);
            ctx.lineTo(294.1, 113.9);
            ctx.lineTo(302.0, 98.3);
            ctx.closePath();
            ctx.fillStyle = "rgb(135, 37, 107)";
            ctx.fill();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(294.1, 113.9);
            ctx.lineTo(286.8, 128.5);
            ctx.bezierCurveTo(289.2, 132.5, 295.0, 134.3, 295.0, 134.3);
            ctx.lineTo(293.0, 138.4);
            ctx.bezierCurveTo(293.0, 138.4, 316.3, 144.5, 325.5, 129.5);
            ctx.lineTo(294.1, 113.9);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(207.2, 137.9);
            ctx.lineTo(197.5, 145.7);
            ctx.lineTo(190.7, 137.3);
            ctx.lineTo(200.3, 129.5);
            ctx.lineTo(207.2, 137.9);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(215.1, 135.7);
            ctx.lineTo(211.7, 138.5);
            ctx.lineTo(209.6, 135.9);
            ctx.lineTo(207.2, 137.9);
            ctx.lineTo(200.2, 129.4);
            ctx.lineTo(206.1, 124.7);
            ctx.lineTo(215.1, 135.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(330.1, 112.1);
            ctx.lineTo(332.6, 106.8);
            ctx.bezierCurveTo(332.6, 106.8, 329.5, 95.0, 317.8, 87.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(317.8, 87.8);
            ctx.lineTo(322.1, 79.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(317.8, 56.5);
            ctx.lineTo(328.5, 60.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(206.1, 124.7);
            ctx.lineTo(217.9, 115.2);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(241.2, 113.9);
            ctx.lineTo(220.7, 130.5);
            ctx.lineTo(216.4, 125.2);
            ctx.lineTo(222.3, 120.4);
            ctx.lineTo(217.9, 115.2);
            ctx.lineTo(232.6, 103.2);
            ctx.lineTo(241.2, 113.9);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(222.3, 120.4);
            ctx.lineTo(230.6, 113.6);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(245.6, 110.6);
            ctx.lineTo(236.7, 99.9);
            ctx.lineTo(245.3, 92.7);
            ctx.lineTo(254.2, 103.4);
            ctx.lineTo(245.6, 110.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(232.6, 103.2);
            ctx.lineTo(236.7, 99.9);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(245.3, 92.7);
            ctx.lineTo(232.6, 77.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(232.6, 77.8);
            ctx.lineTo(238.1, 73.5);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(238.1, 72.7);
            ctx.lineTo(250.8, 88.8);
            ctx.bezierCurveTo(250.8, 88.8, 267.9, 72.6, 279.3, 67.1);
            ctx.lineTo(269.8, 47.9);
            ctx.bezierCurveTo(269.8, 47.9, 259.6, 50.3, 238.1, 72.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(279.3, 67.1);
            ctx.lineTo(269.8, 47.9);
            ctx.bezierCurveTo(269.8, 47.9, 292.0, 33.7, 321.2, 41.7);
            ctx.lineTo(315.8, 62.5);
            ctx.bezierCurveTo(315.8, 62.5, 298.1, 57.4, 279.3, 67.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group/Path
            ctx.beginPath();
            ctx.moveTo(297.6, 61.6);
            ctx.lineTo(297.2, 45.9);
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(359.0, 76.6);
            ctx.lineTo(328.5, 61.3);
            ctx.lineTo(339.3, 39.7);
            ctx.lineTo(366.0, 53.0);
            ctx.lineTo(362.8, 59.4);
            ctx.lineTo(366.6, 61.3);
            ctx.lineTo(359.0, 76.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(368.4, 81.2);
            ctx.lineTo(359.0, 76.5);
            ctx.lineTo(366.6, 61.3);
            ctx.lineTo(376.0, 66.0);
            ctx.lineTo(368.4, 81.2);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(380.4, 93.0);
            ctx.lineTo(366.2, 85.8);
            ctx.lineTo(376.0, 66.1);
            ctx.lineTo(390.3, 73.2);
            ctx.lineTo(380.4, 93.0);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(267.8, 92.7);
            ctx.lineTo(282.6, 81.0);
            ctx.lineTo(276.4, 68.7);
            ctx.bezierCurveTo(276.4, 68.7, 265.6, 75.6, 258.5, 81.9);
            ctx.lineTo(267.8, 92.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(254.2, 103.4);
            ctx.lineTo(267.8, 92.7);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(333.8, 85.1);
            ctx.lineTo(321.2, 78.8);
            ctx.lineTo(327.2, 66.7);
            ctx.lineTo(339.9, 73.0);
            ctx.lineTo(333.8, 85.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(342.0, 89.3);
            ctx.lineTo(333.9, 85.2);
            ctx.lineTo(339.9, 73.1);
            ctx.lineTo(348.0, 77.1);
            ctx.lineTo(342.0, 89.3);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(346.6, 91.6);
            ctx.lineTo(342.0, 89.3);
            ctx.lineTo(348.1, 77.0);
            ctx.lineTo(352.7, 79.4);
            ctx.lineTo(346.6, 91.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(352.7, 94.6);
            ctx.lineTo(346.6, 91.6);
            ctx.lineTo(352.8, 79.3);
            ctx.lineTo(358.8, 82.4);
            ctx.lineTo(352.7, 94.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(374.2, 105.4);
            ctx.lineTo(352.7, 94.6);
            ctx.lineTo(358.9, 82.2);
            ctx.lineTo(380.4, 93.0);
            ctx.lineTo(374.2, 105.4);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/N340
            ctx.font = "10.0px 'Myriad Pro'";
            ctx.save();
            ctx.transform(0.903, 0.430, -0.430, 0.903, 302.9, 111.6);
            ctx.fillStyle = "rgb(255, 255, 255)";
            ctx.fillText("N340", 0, 0);
            ctx.restore();

            // layer1/RSE Level  3  Ground floor
            ctx.restore();
            ctx.font = "12.0px 'Lato'";
            ctx.fillText("RSE Level - 3  (Ground floor)", -0.0, 10.3);
            ctx.restore();
            break;

        case "N341":
            // layer1/Group
            ctx.save();

            // layer1/Group/Group
            ctx.save();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(184.0, 157.1);
            ctx.bezierCurveTo(174.8, 160.5, 161.5, 160.8, 161.5, 160.8);
            ctx.lineTo(161.7, 145.7);
            ctx.bezierCurveTo(161.7, 145.7, 174.2, 146.3, 178.6, 142.6);
            ctx.lineTo(184.0, 157.1);
            ctx.closePath();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(86.0, 128.7);
            ctx.bezierCurveTo(86.0, 147.4, 70.9, 162.5, 52.3, 162.5);
            ctx.bezierCurveTo(33.6, 162.5, 18.5, 147.4, 18.5, 128.7);
            ctx.bezierCurveTo(18.5, 110.1, 33.6, 95.0, 52.3, 95.0);
            ctx.bezierCurveTo(70.9, 95.0, 86.0, 110.1, 86.0, 128.7);
            ctx.closePath();
            ctx.lineWidth = 0.8;
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(82.6, 143.6);
            ctx.lineTo(105.1, 171.6);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(105.0, 171.6);
            ctx.lineTo(97.0, 178.2);
            ctx.bezierCurveTo(97.0, 178.2, 118.2, 211.3, 181.2, 203.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(29.2, 104.1);
            ctx.lineTo(6.0, 77.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(6.0, 77.3);
            ctx.lineTo(84.6, 64.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(84.8, 64.0);
            ctx.lineTo(75.0, 80.4);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(75.0, 80.4);
            ctx.lineTo(94.0, 103.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(94.0, 103.0);
            ctx.lineTo(103.7, 95.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(114.9, 109.4);
            ctx.lineTo(82.3, 68.4);
            ctx.lineTo(82.3, 68.4);
            ctx.lineTo(94.2, 47.9);
            ctx.lineTo(131.7, 96.0);
            ctx.lineTo(114.9, 109.4);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(132.6, 131.5);
            ctx.lineTo(114.9, 109.2);
            ctx.lineTo(131.6, 95.9);
            ctx.lineTo(149.3, 118.2);
            ctx.lineTo(132.6, 131.5);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(171.9, 145.1);
            ctx.lineTo(168.0, 125.7);
            ctx.bezierCurveTo(168.0, 125.7, 154.5, 127.1, 149.3, 118.2);
            ctx.lineTo(132.6, 131.5);
            ctx.bezierCurveTo(132.6, 131.5, 147.5, 149.1, 171.9, 145.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(168.0, 125.7);
            ctx.bezierCurveTo(168.0, 125.7, 177.3, 124.9, 182.0, 119.8);
            ctx.bezierCurveTo(182.1, 119.7, 182.4, 119.7, 182.5, 119.8);
            ctx.lineTo(193.9, 134.6);
            ctx.lineTo(190.6, 137.5);
            ctx.lineTo(199.7, 148.1);
            ctx.bezierCurveTo(199.7, 148.1, 193.2, 155.3, 184.0, 157.3);
            ctx.lineTo(178.6, 142.6);
            ctx.bezierCurveTo(178.6, 142.6, 176.1, 144.6, 171.9, 145.1);
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(133.1, 149.2);
            ctx.bezierCurveTo(133.1, 149.2, 127.0, 148.6, 122.1, 139.9);
            ctx.lineTo(132.6, 131.5);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(133.1, 149.2);
            ctx.lineTo(141.0, 138.5);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(152.9, 144.0);
            ctx.lineTo(146.9, 158.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(161.5, 160.8);
            ctx.lineTo(161.7, 145.7);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(146.3, 141.5);
            ctx.lineTo(142.5, 148.2);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(136.5, 144.5);
            ctx.bezierCurveTo(136.5, 144.5, 141.3, 149.1, 149.9, 151.2);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(184.0, 157.3);
            ctx.bezierCurveTo(149.3, 167.0, 138.1, 152.8, 138.1, 152.8);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(114.9, 149.7);
            ctx.lineTo(121.7, 158.1);
            ctx.stroke();

            // layer1/Group/Group/Path
            ctx.beginPath();
            ctx.moveTo(121.7, 157.8);
            ctx.lineTo(113.7, 164.8);
            ctx.bezierCurveTo(113.7, 164.8, 137.5, 192.0, 178.8, 179.5);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(216.7, 201.6);
            ctx.lineTo(181.8, 205.3);
            ctx.lineTo(178.0, 169.5);
            ctx.lineTo(212.9, 165.8);
            ctx.lineTo(216.7, 201.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(250.4, 197.8);
            ctx.lineTo(216.7, 201.4);
            ctx.lineTo(212.9, 165.9);
            ctx.lineTo(246.6, 162.3);
            ctx.lineTo(250.4, 197.8);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(269.6, 195.7);
            ctx.lineTo(250.3, 197.7);
            ctx.lineTo(246.5, 162.4);
            ctx.lineTo(284.2, 158.4);
            ctx.lineTo(269.6, 195.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(208.1, 160.7);
            ctx.lineTo(278.3, 154.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(294.6, 134.7);
            ctx.lineTo(284.2, 158.4);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(206.6, 154.0);
            ctx.lineTo(212.9, 153.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(212.9, 153.3);
            ctx.lineTo(212.9, 148.6);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(212.9, 148.6);
            ctx.lineTo(283.1, 91.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(283.1, 91.0);
            ctx.lineTo(286.8, 91.8);
            ctx.bezierCurveTo(286.8, 91.8, 260.6, 109.1, 286.1, 136.5);
            ctx.lineTo(278.3, 154.0);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(302.0, 98.3);
            ctx.lineTo(292.8, 93.8);
            ctx.bezierCurveTo(292.8, 93.8, 271.9, 107.1, 286.8, 128.5);
            ctx.lineTo(302.0, 98.3);
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(302.0, 98.3);
            ctx.lineTo(330.1, 112.1);
            ctx.bezierCurveTo(330.1, 112.1, 331.0, 119.8, 325.5, 129.5);
            ctx.lineTo(294.1, 113.9);
            ctx.lineTo(302.0, 98.3);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(294.1, 113.9);
            ctx.lineTo(286.8, 128.5);
            ctx.bezierCurveTo(289.2, 132.5, 295.0, 134.3, 295.0, 134.3);
            ctx.lineTo(293.0, 138.4);
            ctx.bezierCurveTo(293.0, 138.4, 316.3, 144.5, 325.5, 129.5);
            ctx.lineTo(294.1, 113.9);
            ctx.fillStyle = "rgb(135, 37, 107)";
            ctx.fill();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(207.2, 137.9);
            ctx.lineTo(197.5, 145.7);
            ctx.lineTo(190.7, 137.3);
            ctx.lineTo(200.3, 129.5);
            ctx.lineTo(207.2, 137.9);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(215.1, 135.7);
            ctx.lineTo(211.7, 138.5);
            ctx.lineTo(209.6, 135.9);
            ctx.lineTo(207.2, 137.9);
            ctx.lineTo(200.2, 129.4);
            ctx.lineTo(206.1, 124.7);
            ctx.lineTo(215.1, 135.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(330.1, 112.1);
            ctx.lineTo(332.6, 106.8);
            ctx.bezierCurveTo(332.6, 106.8, 329.5, 95.0, 317.8, 87.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(317.8, 87.8);
            ctx.lineTo(322.1, 79.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(317.8, 56.5);
            ctx.lineTo(328.5, 60.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(206.1, 124.7);
            ctx.lineTo(217.9, 115.2);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(241.2, 113.9);
            ctx.lineTo(220.7, 130.5);
            ctx.lineTo(216.4, 125.2);
            ctx.lineTo(222.3, 120.4);
            ctx.lineTo(217.9, 115.2);
            ctx.lineTo(232.6, 103.2);
            ctx.lineTo(241.2, 113.9);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(222.3, 120.4);
            ctx.lineTo(230.6, 113.6);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(245.6, 110.6);
            ctx.lineTo(236.7, 99.9);
            ctx.lineTo(245.3, 92.7);
            ctx.lineTo(254.2, 103.4);
            ctx.lineTo(245.6, 110.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(232.6, 103.2);
            ctx.lineTo(236.7, 99.9);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(245.3, 92.7);
            ctx.lineTo(232.6, 77.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(232.6, 77.8);
            ctx.lineTo(238.1, 73.5);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(238.1, 72.7);
            ctx.lineTo(250.8, 88.8);
            ctx.bezierCurveTo(250.8, 88.8, 267.9, 72.6, 279.3, 67.1);
            ctx.lineTo(269.8, 47.9);
            ctx.bezierCurveTo(269.8, 47.9, 259.6, 50.3, 238.1, 72.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(279.3, 67.1);
            ctx.lineTo(269.8, 47.9);
            ctx.bezierCurveTo(269.8, 47.9, 292.0, 33.7, 321.2, 41.7);
            ctx.lineTo(315.8, 62.5);
            ctx.bezierCurveTo(315.8, 62.5, 298.1, 57.4, 279.3, 67.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group/Path
            ctx.beginPath();
            ctx.moveTo(297.6, 61.6);
            ctx.lineTo(297.2, 45.9);
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(359.0, 76.6);
            ctx.lineTo(328.5, 61.3);
            ctx.lineTo(339.3, 39.7);
            ctx.lineTo(366.0, 53.0);
            ctx.lineTo(362.8, 59.4);
            ctx.lineTo(366.6, 61.3);
            ctx.lineTo(359.0, 76.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(368.4, 81.2);
            ctx.lineTo(359.0, 76.5);
            ctx.lineTo(366.6, 61.3);
            ctx.lineTo(376.0, 66.0);
            ctx.lineTo(368.4, 81.2);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(380.4, 93.0);
            ctx.lineTo(366.2, 85.8);
            ctx.lineTo(376.0, 66.1);
            ctx.lineTo(390.3, 73.2);
            ctx.lineTo(380.4, 93.0);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(267.8, 92.7);
            ctx.lineTo(282.6, 81.0);
            ctx.lineTo(276.4, 68.7);
            ctx.bezierCurveTo(276.4, 68.7, 265.6, 75.6, 258.5, 81.9);
            ctx.lineTo(267.8, 92.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(254.2, 103.4);
            ctx.lineTo(267.8, 92.7);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(333.8, 85.1);
            ctx.lineTo(321.2, 78.8);
            ctx.lineTo(327.2, 66.7);
            ctx.lineTo(339.9, 73.0);
            ctx.lineTo(333.8, 85.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(342.0, 89.3);
            ctx.lineTo(333.9, 85.2);
            ctx.lineTo(339.9, 73.1);
            ctx.lineTo(348.0, 77.1);
            ctx.lineTo(342.0, 89.3);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(346.6, 91.6);
            ctx.lineTo(342.0, 89.3);
            ctx.lineTo(348.1, 77.0);
            ctx.lineTo(352.7, 79.4);
            ctx.lineTo(346.6, 91.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(352.7, 94.6);
            ctx.lineTo(346.6, 91.6);
            ctx.lineTo(352.8, 79.3);
            ctx.lineTo(358.8, 82.4);
            ctx.lineTo(352.7, 94.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(374.2, 105.4);
            ctx.lineTo(352.7, 94.6);
            ctx.lineTo(358.9, 82.2);
            ctx.lineTo(380.4, 93.0);
            ctx.lineTo(374.2, 105.4);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/N341
            ctx.font = "10.0px 'Myriad Pro'";
            ctx.save();
            ctx.transform(0.903, 0.430, -0.430, 0.903, 293.3, 125.9);
            ctx.fillStyle = "rgb(255, 255, 255)";
            ctx.fillText("N341", 0, 0);
            ctx.restore();

            // layer1/RSE Level  3  Ground floor
            ctx.restore();
            ctx.font = "12.0px 'Lato'";
            ctx.fillText("RSE Level - 3  (Ground floor)", -0.0, 10.3);
            ctx.restore();
            break;

        case "N342":
            // layer1/Group
            ctx.save();

            // layer1/Group/Group
            ctx.save();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(184.0, 157.1);
            ctx.bezierCurveTo(174.8, 160.5, 161.5, 160.8, 161.5, 160.8);
            ctx.lineTo(161.7, 145.7);
            ctx.bezierCurveTo(161.7, 145.7, 174.2, 146.3, 178.6, 142.6);
            ctx.lineTo(184.0, 157.1);
            ctx.closePath();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(86.0, 128.7);
            ctx.bezierCurveTo(86.0, 147.4, 70.9, 162.5, 52.3, 162.5);
            ctx.bezierCurveTo(33.6, 162.5, 18.5, 147.4, 18.5, 128.7);
            ctx.bezierCurveTo(18.5, 110.1, 33.6, 95.0, 52.3, 95.0);
            ctx.bezierCurveTo(70.9, 95.0, 86.0, 110.1, 86.0, 128.7);
            ctx.closePath();
            ctx.lineWidth = 0.8;
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(82.6, 143.6);
            ctx.lineTo(105.1, 171.6);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(105.0, 171.6);
            ctx.lineTo(97.0, 178.2);
            ctx.bezierCurveTo(97.0, 178.2, 118.2, 211.3, 181.2, 203.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(29.2, 104.1);
            ctx.lineTo(6.0, 77.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(6.0, 77.3);
            ctx.lineTo(84.6, 64.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(84.8, 64.0);
            ctx.lineTo(75.0, 80.4);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(75.0, 80.4);
            ctx.lineTo(94.0, 103.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(94.0, 103.0);
            ctx.lineTo(103.7, 95.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(114.9, 109.4);
            ctx.lineTo(82.3, 68.4);
            ctx.lineTo(82.3, 68.4);
            ctx.lineTo(94.2, 47.9);
            ctx.lineTo(131.7, 96.0);
            ctx.lineTo(114.9, 109.4);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(132.6, 131.5);
            ctx.lineTo(114.9, 109.2);
            ctx.lineTo(131.6, 95.9);
            ctx.lineTo(149.3, 118.2);
            ctx.lineTo(132.6, 131.5);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(171.9, 145.1);
            ctx.lineTo(168.0, 125.7);
            ctx.bezierCurveTo(168.0, 125.7, 154.5, 127.1, 149.3, 118.2);
            ctx.lineTo(132.6, 131.5);
            ctx.bezierCurveTo(132.6, 131.5, 147.5, 149.1, 171.9, 145.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(168.0, 125.7);
            ctx.bezierCurveTo(168.0, 125.7, 177.3, 124.9, 182.0, 119.8);
            ctx.bezierCurveTo(182.1, 119.7, 182.4, 119.7, 182.5, 119.8);
            ctx.lineTo(193.9, 134.6);
            ctx.lineTo(190.6, 137.5);
            ctx.lineTo(199.7, 148.1);
            ctx.bezierCurveTo(199.7, 148.1, 193.2, 155.3, 184.0, 157.3);
            ctx.lineTo(178.6, 142.6);
            ctx.bezierCurveTo(178.6, 142.6, 176.1, 144.6, 171.9, 145.1);
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(133.1, 149.2);
            ctx.bezierCurveTo(133.1, 149.2, 127.0, 148.6, 122.1, 139.9);
            ctx.lineTo(132.6, 131.5);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(133.1, 149.2);
            ctx.lineTo(141.0, 138.5);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(152.9, 144.0);
            ctx.lineTo(146.9, 158.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(161.5, 160.8);
            ctx.lineTo(161.7, 145.7);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(146.3, 141.5);
            ctx.lineTo(142.5, 148.2);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(136.5, 144.5);
            ctx.bezierCurveTo(136.5, 144.5, 141.3, 149.1, 149.9, 151.2);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(184.0, 157.3);
            ctx.bezierCurveTo(149.3, 167.0, 138.1, 152.8, 138.1, 152.8);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(114.9, 149.7);
            ctx.lineTo(121.7, 158.1);
            ctx.stroke();

            // layer1/Group/Group/Path
            ctx.beginPath();
            ctx.moveTo(121.7, 157.8);
            ctx.lineTo(113.7, 164.8);
            ctx.bezierCurveTo(113.7, 164.8, 137.5, 192.0, 178.8, 179.5);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(216.7, 201.6);
            ctx.lineTo(181.8, 205.3);
            ctx.lineTo(178.0, 169.5);
            ctx.lineTo(212.9, 165.8);
            ctx.lineTo(216.7, 201.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(250.4, 197.8);
            ctx.lineTo(216.7, 201.4);
            ctx.lineTo(212.9, 165.9);
            ctx.lineTo(246.6, 162.3);
            ctx.lineTo(250.4, 197.8);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(269.6, 195.7);
            ctx.lineTo(250.3, 197.7);
            ctx.lineTo(246.5, 162.4);
            ctx.lineTo(284.2, 158.4);
            ctx.lineTo(269.6, 195.7);
            ctx.closePath();
            ctx.fillStyle = "rgb(135, 37, 107)";
            ctx.fill();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(208.1, 160.7);
            ctx.lineTo(278.3, 154.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(294.6, 134.7);
            ctx.lineTo(284.2, 158.4);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(206.6, 154.0);
            ctx.lineTo(212.9, 153.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(212.9, 153.3);
            ctx.lineTo(212.9, 148.6);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(212.9, 148.6);
            ctx.lineTo(283.1, 91.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(283.1, 91.0);
            ctx.lineTo(286.8, 91.8);
            ctx.bezierCurveTo(286.8, 91.8, 260.6, 109.1, 286.1, 136.5);
            ctx.lineTo(278.3, 154.0);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(302.0, 98.3);
            ctx.lineTo(292.8, 93.8);
            ctx.bezierCurveTo(292.8, 93.8, 271.9, 107.1, 286.8, 128.5);
            ctx.lineTo(302.0, 98.3);
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(302.0, 98.3);
            ctx.lineTo(330.1, 112.1);
            ctx.bezierCurveTo(330.1, 112.1, 331.0, 119.8, 325.5, 129.5);
            ctx.lineTo(294.1, 113.9);
            ctx.lineTo(302.0, 98.3);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(294.1, 113.9);
            ctx.lineTo(286.8, 128.5);
            ctx.bezierCurveTo(289.2, 132.5, 295.0, 134.3, 295.0, 134.3);
            ctx.lineTo(293.0, 138.4);
            ctx.bezierCurveTo(293.0, 138.4, 316.3, 144.5, 325.5, 129.5);
            ctx.lineTo(294.1, 113.9);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(207.2, 137.9);
            ctx.lineTo(197.5, 145.7);
            ctx.lineTo(190.7, 137.3);
            ctx.lineTo(200.3, 129.5);
            ctx.lineTo(207.2, 137.9);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(215.1, 135.7);
            ctx.lineTo(211.7, 138.5);
            ctx.lineTo(209.6, 135.9);
            ctx.lineTo(207.2, 137.9);
            ctx.lineTo(200.2, 129.4);
            ctx.lineTo(206.1, 124.7);
            ctx.lineTo(215.1, 135.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(330.1, 112.1);
            ctx.lineTo(332.6, 106.8);
            ctx.bezierCurveTo(332.6, 106.8, 329.5, 95.0, 317.8, 87.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(317.8, 87.8);
            ctx.lineTo(322.1, 79.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(317.8, 56.5);
            ctx.lineTo(328.5, 60.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(206.1, 124.7);
            ctx.lineTo(217.9, 115.2);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(241.2, 113.9);
            ctx.lineTo(220.7, 130.5);
            ctx.lineTo(216.4, 125.2);
            ctx.lineTo(222.3, 120.4);
            ctx.lineTo(217.9, 115.2);
            ctx.lineTo(232.6, 103.2);
            ctx.lineTo(241.2, 113.9);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(222.3, 120.4);
            ctx.lineTo(230.6, 113.6);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(245.6, 110.6);
            ctx.lineTo(236.7, 99.9);
            ctx.lineTo(245.3, 92.7);
            ctx.lineTo(254.2, 103.4);
            ctx.lineTo(245.6, 110.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(232.6, 103.2);
            ctx.lineTo(236.7, 99.9);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(245.3, 92.7);
            ctx.lineTo(232.6, 77.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(232.6, 77.8);
            ctx.lineTo(238.1, 73.5);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(238.1, 72.7);
            ctx.lineTo(250.8, 88.8);
            ctx.bezierCurveTo(250.8, 88.8, 267.9, 72.6, 279.3, 67.1);
            ctx.lineTo(269.8, 47.9);
            ctx.bezierCurveTo(269.8, 47.9, 259.6, 50.3, 238.1, 72.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(279.3, 67.1);
            ctx.lineTo(269.8, 47.9);
            ctx.bezierCurveTo(269.8, 47.9, 292.0, 33.7, 321.2, 41.7);
            ctx.lineTo(315.8, 62.5);
            ctx.bezierCurveTo(315.8, 62.5, 298.1, 57.4, 279.3, 67.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group/Path
            ctx.beginPath();
            ctx.moveTo(297.6, 61.6);
            ctx.lineTo(297.2, 45.9);
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(359.0, 76.6);
            ctx.lineTo(328.5, 61.3);
            ctx.lineTo(339.3, 39.7);
            ctx.lineTo(366.0, 53.0);
            ctx.lineTo(362.8, 59.4);
            ctx.lineTo(366.6, 61.3);
            ctx.lineTo(359.0, 76.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(368.4, 81.2);
            ctx.lineTo(359.0, 76.5);
            ctx.lineTo(366.6, 61.3);
            ctx.lineTo(376.0, 66.0);
            ctx.lineTo(368.4, 81.2);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(380.4, 93.0);
            ctx.lineTo(366.2, 85.8);
            ctx.lineTo(376.0, 66.1);
            ctx.lineTo(390.3, 73.2);
            ctx.lineTo(380.4, 93.0);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(267.8, 92.7);
            ctx.lineTo(282.6, 81.0);
            ctx.lineTo(276.4, 68.7);
            ctx.bezierCurveTo(276.4, 68.7, 265.6, 75.6, 258.5, 81.9);
            ctx.lineTo(267.8, 92.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(254.2, 103.4);
            ctx.lineTo(267.8, 92.7);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(333.8, 85.1);
            ctx.lineTo(321.2, 78.8);
            ctx.lineTo(327.2, 66.7);
            ctx.lineTo(339.9, 73.0);
            ctx.lineTo(333.8, 85.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(342.0, 89.3);
            ctx.lineTo(333.9, 85.2);
            ctx.lineTo(339.9, 73.1);
            ctx.lineTo(348.0, 77.1);
            ctx.lineTo(342.0, 89.3);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(346.6, 91.6);
            ctx.lineTo(342.0, 89.3);
            ctx.lineTo(348.1, 77.0);
            ctx.lineTo(352.7, 79.4);
            ctx.lineTo(346.6, 91.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(352.7, 94.6);
            ctx.lineTo(346.6, 91.6);
            ctx.lineTo(352.8, 79.3);
            ctx.lineTo(358.8, 82.4);
            ctx.lineTo(352.7, 94.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(374.2, 105.4);
            ctx.lineTo(352.7, 94.6);
            ctx.lineTo(358.9, 82.2);
            ctx.lineTo(380.4, 93.0);
            ctx.lineTo(374.2, 105.4);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/N342
            ctx.font = "11.0px 'Myriad Pro'";
            ctx.save();
            ctx.transform(0.996, -0.093, 0.093, 0.996, 249.9, 181.8);
            ctx.fillStyle = "rgb(255, 255, 255)";
            ctx.fillText("N342", 0, 0);
            ctx.restore();

            // layer1/RSE Level  3  Ground floor
            ctx.restore();
            ctx.font = "12.0px 'Lato'";
            ctx.fillText("RSE Level - 3  (Ground floor)", -0.0, 10.3);
            ctx.restore();
            break;

        case "N344":
            // layer1/Group
            ctx.save();

            // layer1/Group/Group
            ctx.save();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(184.0, 157.1);
            ctx.bezierCurveTo(174.8, 160.5, 161.5, 160.8, 161.5, 160.8);
            ctx.lineTo(161.7, 145.7);
            ctx.bezierCurveTo(161.7, 145.7, 174.2, 146.3, 178.6, 142.6);
            ctx.lineTo(184.0, 157.1);
            ctx.closePath();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(86.0, 128.7);
            ctx.bezierCurveTo(86.0, 147.4, 70.9, 162.5, 52.3, 162.5);
            ctx.bezierCurveTo(33.6, 162.5, 18.5, 147.4, 18.5, 128.7);
            ctx.bezierCurveTo(18.5, 110.1, 33.6, 95.0, 52.3, 95.0);
            ctx.bezierCurveTo(70.9, 95.0, 86.0, 110.1, 86.0, 128.7);
            ctx.closePath();
            ctx.lineWidth = 0.8;
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(82.6, 143.6);
            ctx.lineTo(105.1, 171.6);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(105.0, 171.6);
            ctx.lineTo(97.0, 178.2);
            ctx.bezierCurveTo(97.0, 178.2, 118.2, 211.3, 181.2, 203.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(29.2, 104.1);
            ctx.lineTo(6.0, 77.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(6.0, 77.3);
            ctx.lineTo(84.6, 64.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(84.8, 64.0);
            ctx.lineTo(75.0, 80.4);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(75.0, 80.4);
            ctx.lineTo(94.0, 103.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(94.0, 103.0);
            ctx.lineTo(103.7, 95.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(114.9, 109.4);
            ctx.lineTo(82.3, 68.4);
            ctx.lineTo(82.3, 68.4);
            ctx.lineTo(94.2, 47.9);
            ctx.lineTo(131.7, 96.0);
            ctx.lineTo(114.9, 109.4);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(132.6, 131.5);
            ctx.lineTo(114.9, 109.2);
            ctx.lineTo(131.6, 95.9);
            ctx.lineTo(149.3, 118.2);
            ctx.lineTo(132.6, 131.5);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(171.9, 145.1);
            ctx.lineTo(168.0, 125.7);
            ctx.bezierCurveTo(168.0, 125.7, 154.5, 127.1, 149.3, 118.2);
            ctx.lineTo(132.6, 131.5);
            ctx.bezierCurveTo(132.6, 131.5, 147.5, 149.1, 171.9, 145.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(168.0, 125.7);
            ctx.bezierCurveTo(168.0, 125.7, 177.3, 124.9, 182.0, 119.8);
            ctx.bezierCurveTo(182.1, 119.7, 182.4, 119.7, 182.5, 119.8);
            ctx.lineTo(193.9, 134.6);
            ctx.lineTo(190.6, 137.5);
            ctx.lineTo(199.7, 148.1);
            ctx.bezierCurveTo(199.7, 148.1, 193.2, 155.3, 184.0, 157.3);
            ctx.lineTo(178.6, 142.6);
            ctx.bezierCurveTo(178.6, 142.6, 176.1, 144.6, 171.9, 145.1);
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(133.1, 149.2);
            ctx.bezierCurveTo(133.1, 149.2, 127.0, 148.6, 122.1, 139.9);
            ctx.lineTo(132.6, 131.5);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(133.1, 149.2);
            ctx.lineTo(141.0, 138.5);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(152.9, 144.0);
            ctx.lineTo(146.9, 158.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(161.5, 160.8);
            ctx.lineTo(161.7, 145.7);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(146.3, 141.5);
            ctx.lineTo(142.5, 148.2);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(136.5, 144.5);
            ctx.bezierCurveTo(136.5, 144.5, 141.3, 149.1, 149.9, 151.2);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(184.0, 157.3);
            ctx.bezierCurveTo(149.3, 167.0, 138.1, 152.8, 138.1, 152.8);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(114.9, 149.7);
            ctx.lineTo(121.7, 158.1);
            ctx.stroke();

            // layer1/Group/Group/Path
            ctx.beginPath();
            ctx.moveTo(121.7, 157.8);
            ctx.lineTo(113.7, 164.8);
            ctx.bezierCurveTo(113.7, 164.8, 137.5, 192.0, 178.8, 179.5);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(216.7, 201.6);
            ctx.lineTo(181.8, 205.3);
            ctx.lineTo(178.0, 169.5);
            ctx.lineTo(212.9, 165.8);
            ctx.lineTo(216.7, 201.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(250.4, 197.8);
            ctx.lineTo(216.7, 201.4);
            ctx.lineTo(212.9, 165.9);
            ctx.lineTo(246.6, 162.3);
            ctx.lineTo(250.4, 197.8);
            ctx.closePath();
            ctx.fillStyle = "rgb(135, 37, 107)";
            ctx.fill();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(269.6, 195.7);
            ctx.lineTo(250.3, 197.7);
            ctx.lineTo(246.5, 162.4);
            ctx.lineTo(284.2, 158.4);
            ctx.lineTo(269.6, 195.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(208.1, 160.7);
            ctx.lineTo(278.3, 154.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(294.6, 134.7);
            ctx.lineTo(284.2, 158.4);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(206.6, 154.0);
            ctx.lineTo(212.9, 153.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(212.9, 153.3);
            ctx.lineTo(212.9, 148.6);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(212.9, 148.6);
            ctx.lineTo(283.1, 91.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(283.1, 91.0);
            ctx.lineTo(286.8, 91.8);
            ctx.bezierCurveTo(286.8, 91.8, 260.6, 109.1, 286.1, 136.5);
            ctx.lineTo(278.3, 154.0);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(302.0, 98.3);
            ctx.lineTo(292.8, 93.8);
            ctx.bezierCurveTo(292.8, 93.8, 271.9, 107.1, 286.8, 128.5);
            ctx.lineTo(302.0, 98.3);
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(302.0, 98.3);
            ctx.lineTo(330.1, 112.1);
            ctx.bezierCurveTo(330.1, 112.1, 331.0, 119.8, 325.5, 129.5);
            ctx.lineTo(294.1, 113.9);
            ctx.lineTo(302.0, 98.3);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(294.1, 113.9);
            ctx.lineTo(286.8, 128.5);
            ctx.bezierCurveTo(289.2, 132.5, 295.0, 134.3, 295.0, 134.3);
            ctx.lineTo(293.0, 138.4);
            ctx.bezierCurveTo(293.0, 138.4, 316.3, 144.5, 325.5, 129.5);
            ctx.lineTo(294.1, 113.9);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(207.2, 137.9);
            ctx.lineTo(197.5, 145.7);
            ctx.lineTo(190.7, 137.3);
            ctx.lineTo(200.3, 129.5);
            ctx.lineTo(207.2, 137.9);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(215.1, 135.7);
            ctx.lineTo(211.7, 138.5);
            ctx.lineTo(209.6, 135.9);
            ctx.lineTo(207.2, 137.9);
            ctx.lineTo(200.2, 129.4);
            ctx.lineTo(206.1, 124.7);
            ctx.lineTo(215.1, 135.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(330.1, 112.1);
            ctx.lineTo(332.6, 106.8);
            ctx.bezierCurveTo(332.6, 106.8, 329.5, 95.0, 317.8, 87.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(317.8, 87.8);
            ctx.lineTo(322.1, 79.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(317.8, 56.5);
            ctx.lineTo(328.5, 60.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(206.1, 124.7);
            ctx.lineTo(217.9, 115.2);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(241.2, 113.9);
            ctx.lineTo(220.7, 130.5);
            ctx.lineTo(216.4, 125.2);
            ctx.lineTo(222.3, 120.4);
            ctx.lineTo(217.9, 115.2);
            ctx.lineTo(232.6, 103.2);
            ctx.lineTo(241.2, 113.9);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(222.3, 120.4);
            ctx.lineTo(230.6, 113.6);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(245.6, 110.6);
            ctx.lineTo(236.7, 99.9);
            ctx.lineTo(245.3, 92.7);
            ctx.lineTo(254.2, 103.4);
            ctx.lineTo(245.6, 110.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(232.6, 103.2);
            ctx.lineTo(236.7, 99.9);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(245.3, 92.7);
            ctx.lineTo(232.6, 77.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(232.6, 77.8);
            ctx.lineTo(238.1, 73.5);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(238.1, 72.7);
            ctx.lineTo(250.8, 88.8);
            ctx.bezierCurveTo(250.8, 88.8, 267.9, 72.6, 279.3, 67.1);
            ctx.lineTo(269.8, 47.9);
            ctx.bezierCurveTo(269.8, 47.9, 259.6, 50.3, 238.1, 72.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(279.3, 67.1);
            ctx.lineTo(269.8, 47.9);
            ctx.bezierCurveTo(269.8, 47.9, 292.0, 33.7, 321.2, 41.7);
            ctx.lineTo(315.8, 62.5);
            ctx.bezierCurveTo(315.8, 62.5, 298.1, 57.4, 279.3, 67.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group/Path
            ctx.beginPath();
            ctx.moveTo(297.6, 61.6);
            ctx.lineTo(297.2, 45.9);
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(359.0, 76.6);
            ctx.lineTo(328.5, 61.3);
            ctx.lineTo(339.3, 39.7);
            ctx.lineTo(366.0, 53.0);
            ctx.lineTo(362.8, 59.4);
            ctx.lineTo(366.6, 61.3);
            ctx.lineTo(359.0, 76.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(368.4, 81.2);
            ctx.lineTo(359.0, 76.5);
            ctx.lineTo(366.6, 61.3);
            ctx.lineTo(376.0, 66.0);
            ctx.lineTo(368.4, 81.2);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(380.4, 93.0);
            ctx.lineTo(366.2, 85.8);
            ctx.lineTo(376.0, 66.1);
            ctx.lineTo(390.3, 73.2);
            ctx.lineTo(380.4, 93.0);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(267.8, 92.7);
            ctx.lineTo(282.6, 81.0);
            ctx.lineTo(276.4, 68.7);
            ctx.bezierCurveTo(276.4, 68.7, 265.6, 75.6, 258.5, 81.9);
            ctx.lineTo(267.8, 92.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(254.2, 103.4);
            ctx.lineTo(267.8, 92.7);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(333.8, 85.1);
            ctx.lineTo(321.2, 78.8);
            ctx.lineTo(327.2, 66.7);
            ctx.lineTo(339.9, 73.0);
            ctx.lineTo(333.8, 85.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(342.0, 89.3);
            ctx.lineTo(333.9, 85.2);
            ctx.lineTo(339.9, 73.1);
            ctx.lineTo(348.0, 77.1);
            ctx.lineTo(342.0, 89.3);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(346.6, 91.6);
            ctx.lineTo(342.0, 89.3);
            ctx.lineTo(348.1, 77.0);
            ctx.lineTo(352.7, 79.4);
            ctx.lineTo(346.6, 91.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(352.7, 94.6);
            ctx.lineTo(346.6, 91.6);
            ctx.lineTo(352.8, 79.3);
            ctx.lineTo(358.8, 82.4);
            ctx.lineTo(352.7, 94.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(374.2, 105.4);
            ctx.lineTo(352.7, 94.6);
            ctx.lineTo(358.9, 82.2);
            ctx.lineTo(380.4, 93.0);
            ctx.lineTo(374.2, 105.4);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/N344
            ctx.font = "12.0px 'Myriad Pro'";
            ctx.save();
            ctx.transform(0.996, -0.093, 0.093, 0.996, 219.0, 186.7);
            ctx.fillStyle = "rgb(255, 255, 255)";
            ctx.fillText("N344", 0, 0);
            ctx.restore();

            // layer1/RSE Level  3  Ground floor
            ctx.restore();
            ctx.font = "12.0px 'Lato'";
            ctx.fillText("RSE Level - 3  (Ground floor)", -0.0, 10.3);
            ctx.restore();
            break;

        case "N345":
            // layer1/Group
            ctx.save();

            // layer1/Group/Group
            ctx.save();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(184.0, 157.1);
            ctx.bezierCurveTo(174.8, 160.5, 161.5, 160.8, 161.5, 160.8);
            ctx.lineTo(161.7, 145.7);
            ctx.bezierCurveTo(161.7, 145.7, 174.2, 146.3, 178.6, 142.6);
            ctx.lineTo(184.0, 157.1);
            ctx.closePath();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(86.0, 128.7);
            ctx.bezierCurveTo(86.0, 147.4, 70.9, 162.5, 52.3, 162.5);
            ctx.bezierCurveTo(33.6, 162.5, 18.5, 147.4, 18.5, 128.7);
            ctx.bezierCurveTo(18.5, 110.1, 33.6, 95.0, 52.3, 95.0);
            ctx.bezierCurveTo(70.9, 95.0, 86.0, 110.1, 86.0, 128.7);
            ctx.closePath();
            ctx.lineWidth = 0.8;
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(82.6, 143.6);
            ctx.lineTo(105.1, 171.6);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(105.0, 171.6);
            ctx.lineTo(97.0, 178.2);
            ctx.bezierCurveTo(97.0, 178.2, 118.2, 211.3, 181.2, 203.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(29.2, 104.1);
            ctx.lineTo(6.0, 77.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(6.0, 77.3);
            ctx.lineTo(84.6, 64.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(84.8, 64.0);
            ctx.lineTo(75.0, 80.4);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(75.0, 80.4);
            ctx.lineTo(94.0, 103.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(94.0, 103.0);
            ctx.lineTo(103.7, 95.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(114.9, 109.4);
            ctx.lineTo(82.3, 68.4);
            ctx.lineTo(82.3, 68.4);
            ctx.lineTo(94.2, 47.9);
            ctx.lineTo(131.7, 96.0);
            ctx.lineTo(114.9, 109.4);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(132.6, 131.5);
            ctx.lineTo(114.9, 109.2);
            ctx.lineTo(131.6, 95.9);
            ctx.lineTo(149.3, 118.2);
            ctx.lineTo(132.6, 131.5);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(171.9, 145.1);
            ctx.lineTo(168.0, 125.7);
            ctx.bezierCurveTo(168.0, 125.7, 154.5, 127.1, 149.3, 118.2);
            ctx.lineTo(132.6, 131.5);
            ctx.bezierCurveTo(132.6, 131.5, 147.5, 149.1, 171.9, 145.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(168.0, 125.7);
            ctx.bezierCurveTo(168.0, 125.7, 177.3, 124.9, 182.0, 119.8);
            ctx.bezierCurveTo(182.1, 119.7, 182.4, 119.7, 182.5, 119.8);
            ctx.lineTo(193.9, 134.6);
            ctx.lineTo(190.6, 137.5);
            ctx.lineTo(199.7, 148.1);
            ctx.bezierCurveTo(199.7, 148.1, 193.2, 155.3, 184.0, 157.3);
            ctx.lineTo(178.6, 142.6);
            ctx.bezierCurveTo(178.6, 142.6, 176.1, 144.6, 171.9, 145.1);
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(133.1, 149.2);
            ctx.bezierCurveTo(133.1, 149.2, 127.0, 148.6, 122.1, 139.9);
            ctx.lineTo(132.6, 131.5);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(133.1, 149.2);
            ctx.lineTo(141.0, 138.5);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(152.9, 144.0);
            ctx.lineTo(146.9, 158.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(161.5, 160.8);
            ctx.lineTo(161.7, 145.7);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(146.3, 141.5);
            ctx.lineTo(142.5, 148.2);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(136.5, 144.5);
            ctx.bezierCurveTo(136.5, 144.5, 141.3, 149.1, 149.9, 151.2);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(184.0, 157.3);
            ctx.bezierCurveTo(149.3, 167.0, 138.1, 152.8, 138.1, 152.8);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(114.9, 149.7);
            ctx.lineTo(121.7, 158.1);
            ctx.stroke();

            // layer1/Group/Group/Path
            ctx.beginPath();
            ctx.moveTo(121.7, 157.8);
            ctx.lineTo(113.7, 164.8);
            ctx.bezierCurveTo(113.7, 164.8, 137.5, 192.0, 178.8, 179.5);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(216.7, 201.6);
            ctx.lineTo(181.8, 205.3);
            ctx.lineTo(178.0, 169.5);
            ctx.lineTo(212.9, 165.8);
            ctx.lineTo(216.7, 201.6);
            ctx.closePath();
            ctx.fillStyle = "rgb(135, 37, 107)";
            ctx.fill();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(250.4, 197.8);
            ctx.lineTo(216.7, 201.4);
            ctx.lineTo(212.9, 165.9);
            ctx.lineTo(246.6, 162.3);
            ctx.lineTo(250.4, 197.8);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(269.6, 195.7);
            ctx.lineTo(250.3, 197.7);
            ctx.lineTo(246.5, 162.4);
            ctx.lineTo(284.2, 158.4);
            ctx.lineTo(269.6, 195.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(208.1, 160.7);
            ctx.lineTo(278.3, 154.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(294.6, 134.7);
            ctx.lineTo(284.2, 158.4);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(206.6, 154.0);
            ctx.lineTo(212.9, 153.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(212.9, 153.3);
            ctx.lineTo(212.9, 148.6);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(212.9, 148.6);
            ctx.lineTo(283.1, 91.0);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(283.1, 91.0);
            ctx.lineTo(286.8, 91.8);
            ctx.bezierCurveTo(286.8, 91.8, 260.6, 109.1, 286.1, 136.5);
            ctx.lineTo(278.3, 154.0);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(302.0, 98.3);
            ctx.lineTo(292.8, 93.8);
            ctx.bezierCurveTo(292.8, 93.8, 271.9, 107.1, 286.8, 128.5);
            ctx.lineTo(302.0, 98.3);
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(302.0, 98.3);
            ctx.lineTo(330.1, 112.1);
            ctx.bezierCurveTo(330.1, 112.1, 331.0, 119.8, 325.5, 129.5);
            ctx.lineTo(294.1, 113.9);
            ctx.lineTo(302.0, 98.3);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(294.1, 113.9);
            ctx.lineTo(286.8, 128.5);
            ctx.bezierCurveTo(289.2, 132.5, 295.0, 134.3, 295.0, 134.3);
            ctx.lineTo(293.0, 138.4);
            ctx.bezierCurveTo(293.0, 138.4, 316.3, 144.5, 325.5, 129.5);
            ctx.lineTo(294.1, 113.9);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(207.2, 137.9);
            ctx.lineTo(197.5, 145.7);
            ctx.lineTo(190.7, 137.3);
            ctx.lineTo(200.3, 129.5);
            ctx.lineTo(207.2, 137.9);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(215.1, 135.7);
            ctx.lineTo(211.7, 138.5);
            ctx.lineTo(209.6, 135.9);
            ctx.lineTo(207.2, 137.9);
            ctx.lineTo(200.2, 129.4);
            ctx.lineTo(206.1, 124.7);
            ctx.lineTo(215.1, 135.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(330.1, 112.1);
            ctx.lineTo(332.6, 106.8);
            ctx.bezierCurveTo(332.6, 106.8, 329.5, 95.0, 317.8, 87.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(317.8, 87.8);
            ctx.lineTo(322.1, 79.3);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(317.8, 56.5);
            ctx.lineTo(328.5, 60.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(206.1, 124.7);
            ctx.lineTo(217.9, 115.2);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(241.2, 113.9);
            ctx.lineTo(220.7, 130.5);
            ctx.lineTo(216.4, 125.2);
            ctx.lineTo(222.3, 120.4);
            ctx.lineTo(217.9, 115.2);
            ctx.lineTo(232.6, 103.2);
            ctx.lineTo(241.2, 113.9);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(222.3, 120.4);
            ctx.lineTo(230.6, 113.6);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(245.6, 110.6);
            ctx.lineTo(236.7, 99.9);
            ctx.lineTo(245.3, 92.7);
            ctx.lineTo(254.2, 103.4);
            ctx.lineTo(245.6, 110.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(232.6, 103.2);
            ctx.lineTo(236.7, 99.9);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(245.3, 92.7);
            ctx.lineTo(232.6, 77.8);
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(232.6, 77.8);
            ctx.lineTo(238.1, 73.5);
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(238.1, 72.7);
            ctx.lineTo(250.8, 88.8);
            ctx.bezierCurveTo(250.8, 88.8, 267.9, 72.6, 279.3, 67.1);
            ctx.lineTo(269.8, 47.9);
            ctx.bezierCurveTo(269.8, 47.9, 259.6, 50.3, 238.1, 72.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group
            ctx.restore();

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(279.3, 67.1);
            ctx.lineTo(269.8, 47.9);
            ctx.bezierCurveTo(269.8, 47.9, 292.0, 33.7, 321.2, 41.7);
            ctx.lineTo(315.8, 62.5);
            ctx.bezierCurveTo(315.8, 62.5, 298.1, 57.4, 279.3, 67.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group/Path
            ctx.beginPath();
            ctx.moveTo(297.6, 61.6);
            ctx.lineTo(297.2, 45.9);
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(359.0, 76.6);
            ctx.lineTo(328.5, 61.3);
            ctx.lineTo(339.3, 39.7);
            ctx.lineTo(366.0, 53.0);
            ctx.lineTo(362.8, 59.4);
            ctx.lineTo(366.6, 61.3);
            ctx.lineTo(359.0, 76.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(368.4, 81.2);
            ctx.lineTo(359.0, 76.5);
            ctx.lineTo(366.6, 61.3);
            ctx.lineTo(376.0, 66.0);
            ctx.lineTo(368.4, 81.2);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(380.4, 93.0);
            ctx.lineTo(366.2, 85.8);
            ctx.lineTo(376.0, 66.1);
            ctx.lineTo(390.3, 73.2);
            ctx.lineTo(380.4, 93.0);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Group

            // layer1/Group/Group/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(267.8, 92.7);
            ctx.lineTo(282.6, 81.0);
            ctx.lineTo(276.4, 68.7);
            ctx.bezierCurveTo(276.4, 68.7, 265.6, 75.6, 258.5, 81.9);
            ctx.lineTo(267.8, 92.7);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Path
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(254.2, 103.4);
            ctx.lineTo(267.8, 92.7);
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(333.8, 85.1);
            ctx.lineTo(321.2, 78.8);
            ctx.lineTo(327.2, 66.7);
            ctx.lineTo(339.9, 73.0);
            ctx.lineTo(333.8, 85.1);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(342.0, 89.3);
            ctx.lineTo(333.9, 85.2);
            ctx.lineTo(339.9, 73.1);
            ctx.lineTo(348.0, 77.1);
            ctx.lineTo(342.0, 89.3);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(346.6, 91.6);
            ctx.lineTo(342.0, 89.3);
            ctx.lineTo(348.1, 77.0);
            ctx.lineTo(352.7, 79.4);
            ctx.lineTo(346.6, 91.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(352.7, 94.6);
            ctx.lineTo(346.6, 91.6);
            ctx.lineTo(352.8, 79.3);
            ctx.lineTo(358.8, 82.4);
            ctx.lineTo(352.7, 94.6);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/Rectangle
            ctx.beginPath();
            ctx.moveTo(374.2, 105.4);
            ctx.lineTo(352.7, 94.6);
            ctx.lineTo(358.9, 82.2);
            ctx.lineTo(380.4, 93.0);
            ctx.lineTo(374.2, 105.4);
            ctx.closePath();
            ctx.stroke();

            // layer1/Group/N345
            ctx.font = "12.0px 'Myriad Pro'";
            ctx.save();
            ctx.transform(0.996, -0.093, 0.093, 0.996, 184.8, 190.7);
            ctx.fillStyle = "rgb(255, 255, 255)";
            ctx.fillText("N345", 0, 0);
            ctx.restore();

            // layer1/RSE Level  3  Ground floor
            ctx.restore();
            ctx.font = "12.0px 'Lato'";
            ctx.fillText("RSE Level - 3  (Ground floor)", -0.0, 10.3);
            ctx.restore();
            break;



    }


};
