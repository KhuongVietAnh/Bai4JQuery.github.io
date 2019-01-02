$(document).ready(function () {
    var mouseXY = {};
    var layer2 = $('.layer2');
    var layer3 = $('.layer3');
    var layer4 = $('.layer4');
    var mouseXNow;
    var moveLayer2 = 0;
    var moveLayer3 = 0;
    var moveLayer4 = 0;
    //Funtion when move mouse
    $('.container').mousemove(function () {
        if (mouseXY.x !== "undefined") {
            mouseXNow = mouseXY.x;
            //get x,y control mouse
            mouseXY = {
                x: event.clientX,
                y: event.clientY
            };
            //move left
            if (mouseXNow < mouseXY.x)
            {
                if (moveLayer2 < 40) {
                    moveLayer2 = moveLayer2 + 0.5;
                    moveLayer3 = moveLayer3 + 0.8;
                    moveLayer4 = moveLayer4 + 1;
                    layer2.css({left: moveLayer2});
                    layer3.css({left: moveLayer3});
                    layer4.css({left: moveLayer4});
                }
            }
            //move right
            if (mouseXNow > mouseXY.x)
            {
                if (moveLayer2 > -40) {
                    moveLayer2 = moveLayer2 - 0.5;
                    moveLayer3 = moveLayer3 - 0.8;
                    moveLayer4 = moveLayer4 - 1;
                    layer2.css({left: moveLayer2});
                    layer3.css({left: moveLayer3});
                    layer4.css({left: moveLayer4});
                }
            }
        }
    });
});


